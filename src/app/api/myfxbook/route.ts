import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

// TypeScript interfaces for Myfxbook API responses
interface MyfxbookLoginResponse {
  error: boolean
  message?: string
  session?: string
}

interface MyfxbookAccount {
  id: number
  name: string
  gain?: number
  drawdown?: number
  balance?: number
  equity?: number
  profit?: number
}

interface MyfxbookAccountsResponse {
  error: boolean
  message?: string
  accounts?: MyfxbookAccount[]
}

interface PortfolioData {
  name: string
  gain: string
  drawdown: string
}

// In-memory session cache
let cachedSession: {
  session: string
  timestamp: number
} | null = null

// File-based session cache path
const SESSION_CACHE_FILE = path.join(process.cwd(), '.myfxbook-session.json')

// Session cache duration: 24 hours (override via env) - cache until error occurs
// const SESSION_CACHE_DURATION = Number(process.env.MYFXBOOK_SESSION_CACHE_DURATION || 24 * 60 * 60 * 1000)
// Request timeout (ms)
const REQUEST_TIMEOUT = Number(process.env.MYFXBOOK_TIMEOUT || 10000)

// Optional: comma-separated names/keywords to include
// Example: "Low Risk Alpha,Gold Queen"
const ACCOUNT_FILTERS = (process.env.MYFXBOOK_ACCOUNT_FILTER || '')
  .split(',')
  .map(s => s.trim().toLowerCase())
  .filter(Boolean)

/**
 * Load session from file cache
 */
async function loadSessionFromFile(): Promise<{session: string, timestamp: number} | null> {
  try {
    const data = await fs.readFile(SESSION_CACHE_FILE, 'utf-8')
    const parsed = JSON.parse(data)
    if (parsed.session && parsed.timestamp && typeof parsed.timestamp === 'number') {
      return parsed
    }
  } catch {
    // File doesn't exist or is corrupted, ignore
  }
  return null
}

/**
 * Save session to file cache
 */
async function saveSessionToFile(session: string, timestamp: number): Promise<void> {
  try {
    await fs.writeFile(SESSION_CACHE_FILE, JSON.stringify({ session, timestamp }))
  } catch (error) {
    console.error('Failed to save session to file:', error)
    // Don't throw, just log - file cache is optional
  }
}

/**
 * Clear session cache (both memory and file)
 */
async function clearSessionCache(): Promise<void> {
  cachedSession = null
  try {
    await fs.unlink(SESSION_CACHE_FILE)
  } catch {
    // File might not exist, ignore
  }
}

/**
 * Get existing session from cache (memory or file) without time check
 */
async function getExistingSession(): Promise<string | null> {
  // Check memory cache first
  if (cachedSession?.session) {
    return cachedSession.session
  }

  // Try to load from file
  const fileSession = await loadSessionFromFile()
  if (fileSession?.session) {
    cachedSession = fileSession
    return fileSession.session
  }

  return null
}

/**
 * Login to Myfxbook API and get session token
 */
async function loginToMyfxbook(): Promise<string> {
  const email = process.env.MYFXBOOK_EMAIL
  const password = process.env.MYFXBOOK_PASSWORD

  if (!email || !password) {
    throw new Error('Myfxbook credentials not configured')
  }

  try {
    const loginUrl = `https://www.myfxbook.com/api/login.json?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)
    const response = await fetch(loginUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'MirrorTrades-Website/1.0',
      },
      signal: controller.signal,
    })
    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: MyfxbookLoginResponse = await response.json()

    if (data.error || !data.session) {
      throw new Error(data.message || 'Failed to login to Myfxbook')
    }

    // Cache the session (memory and file)
    const timestamp = Date.now()
    cachedSession = {
      session: data.session,
      timestamp
    }

    // Save to file asynchronously (don't await to avoid slowing down the response)
    saveSessionToFile(data.session, timestamp).catch(console.error)

    return data.session
  } catch (error) {
    console.error('Myfxbook login error:', error)
    throw new Error('Failed to authenticate with Myfxbook API')
  }
}

/**
 * Fetch watched accounts from Myfxbook API
 */
async function getWatchedAccounts(session: string): Promise<MyfxbookAccount[]> {
  try {
    const accountsUrl = `https://www.myfxbook.com/api/get-watched-accounts.json?session=${encodeURIComponent(session)}`

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)
    const response = await fetch(accountsUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'MirrorTrades-Website/1.0',
      },
      signal: controller.signal,
    })
    clearTimeout(timeout)

    if (!response.ok) {
      // If 500 error or authentication error, clear cache and signal retry
      if (response.status === 500 || response.status === 401 || response.status === 403) {
        await clearSessionCache()
        const err = new Error('SESSION_INVALID') as Error & { code: string }
        err.code = 'SESSION_INVALID'
        throw err
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: MyfxbookAccountsResponse = await response.json()

    if (data.error) {
      // If session expired, clear cache and signal to caller to retry
      if (data.message?.toLowerCase().includes('session') || data.message?.toLowerCase().includes('login')) {
        await clearSessionCache()
        const err = new Error('SESSION_INVALID') as Error & { code: string }
        err.code = 'SESSION_INVALID'
        throw err
      }
      throw new Error(data.message || 'Failed to fetch watched accounts')
    }

    return data.accounts || []
  } catch (error) {
    console.error('Myfxbook accounts fetch error:', error)
    // Bubble up specific error so caller can decide to retry
    if (error instanceof Error) throw error
    throw new Error('Failed to fetch account data from Myfxbook')
  }
}

/**
 * Get additional account statistics if not available in main response
 */
async function getAccountGain(session: string, accountId: number): Promise<number> {
  try {
    const gainUrl = `https://www.myfxbook.com/api/get-gain.json?session=${encodeURIComponent(session)}&id=${accountId}`

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)
    const response = await fetch(gainUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'MirrorTrades-Website/1.0',
      },
      signal: controller.signal,
    })
    clearTimeout(timeout)

    if (!response.ok) {
      // If 500 error or authentication error, clear cache and signal retry
      if (response.status === 500 || response.status === 401 || response.status === 403) {
        await clearSessionCache()
        const e = new Error('SESSION_INVALID') as Error & { code: string }
        e.code = 'SESSION_INVALID'
        throw e
      }
      // Try parse error body for other errors
      try {
        const errJson = await response.json()
        const msg = String(errJson?.message || '')
        if (msg.toLowerCase().includes('session') || msg.toLowerCase().includes('login')) {
          await clearSessionCache()
          const e = new Error('SESSION_INVALID') as Error & { code: string }
          e.code = 'SESSION_INVALID'
          throw e
        }
      } catch {
        // Ignore JSON parsing errors
      }
      return 0
    }

    const data = await response.json()
    if (data?.error) {
      const msg = String(data?.message || '')
      if (msg.toLowerCase().includes('session') || msg.toLowerCase().includes('login')) {
        const e = new Error('SESSION_INVALID') as Error & { code: string }
        e.code = 'SESSION_INVALID'
        throw e
      }
      return 0
    }

    return data.gain || 0
  } catch (error) {
    console.error(`Failed to fetch gain for account ${accountId}:`, error)
    return 0
  }
}

/**
 * Format percentage value for display
 */
function formatPercentage(value: number | undefined): string {
  if (value === undefined || value === null || isNaN(value)) {
    return '0.00%'
  }
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
}

/**
 * Main API handler
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const refresh = url.searchParams.get('refresh') === '1'
    const sessionParam = url.searchParams.get('session') || undefined
    // Helpful preflight validation
    if (!process.env.MYFXBOOK_EMAIL || !process.env.MYFXBOOK_PASSWORD) {
      return NextResponse.json({
        success: false,
        error: 'Myfxbook credentials not configured. Set MYFXBOOK_EMAIL and MYFXBOOK_PASSWORD.',
        data: []
      }, { status: 500 })
    }
    // Step 1: Determine session source - always try existing session first
    let session: string
    if (sessionParam) {
      // Use provided session directly; optionally cache it
      session = sessionParam
      cachedSession = { session, timestamp: Date.now() }
    } else if (refresh) {
      // Force refresh - clear cache and login
      await clearSessionCache()
      session = await loginToMyfxbook()
    } else {
      // Try existing session first, fallback to login if no session exists
      const existingSession = await getExistingSession()
      if (existingSession) {
        session = existingSession
      } else {
        session = await loginToMyfxbook()
      }
    }

    // Step 2: Fetch watched accounts (with one automatic session-recovery retry)
    let accounts: MyfxbookAccount[] = []
    try {
      accounts = await getWatchedAccounts(session)
    } catch (err) {
      const msg = err instanceof Error ? (err.message || '') : ''
      const code = err && typeof err === 'object' ? (err as Error & { code?: string }).code : undefined
      if (code === 'SESSION_INVALID' || msg.toLowerCase().includes('session')) {
        // Re-login and retry once
        const newSession = await loginToMyfxbook()
        accounts = await getWatchedAccounts(newSession)
        session = newSession
      } else {
        throw err
      }
    }

    // Step 3: Process and format the data
    let activeSession = session
    const portfolios: PortfolioData[] = await Promise.all(
      accounts.map(async (account) => {
        let gain = account.gain
        const drawdown = account.drawdown

        // If gain is not available, try to fetch it separately
        if (gain === undefined) {
          try {
            gain = await getAccountGain(activeSession, account.id)
          } catch (e) {
            const code = e && typeof e === 'object' ? (e as Error & { code?: string }).code : undefined
            if (code === 'SESSION_INVALID') {
              // Re-login and retry once for gain
              activeSession = await loginToMyfxbook()
              gain = await getAccountGain(activeSession, account.id)
            } else {
              throw e
            }
          }
        }

        return {
          name: account.name,
          gain: formatPercentage(gain),
          drawdown: formatPercentage(Math.abs(drawdown || 0)) // Ensure drawdown is positive for display
        }
      })
    )

    // Filter to only include specific accounts if filters are configured
    let filteredPortfolios = portfolios
    if (ACCOUNT_FILTERS.length > 0) {
      filteredPortfolios = portfolios.filter(p =>
        ACCOUNT_FILTERS.some(f => p.name.toLowerCase().includes(f))
      )
    }

    // If filtering resulted in no items, fall back to the original list (first 5)
    if (filteredPortfolios.length === 0) {
      filteredPortfolios = portfolios.slice(0, 5)
    }

    return NextResponse.json({
      success: true,
      data: filteredPortfolios
    }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })

  } catch (error) {
    console.error('API Error:', error)

    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
      data: []
    }, {
      status: 500
    })
  }
}

// Handle CORS for development
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
