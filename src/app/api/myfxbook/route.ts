import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

// TypeScript interfaces for Myfxbook API responses
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

// Session cache duration: 24 hours (override via env)
const SESSION_CACHE_DURATION = Number(process.env.MYFXBOOK_SESSION_CACHE_DURATION || 24 * 60 * 60 * 1000)
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
 * Get existing session from cache (memory or file) with 24-hour expiry check
 */
async function getExistingSession(): Promise<string | null> {
  const now = Date.now()

  // Check memory cache first
  if (cachedSession?.session && cachedSession.timestamp) {
    if (now - cachedSession.timestamp < SESSION_CACHE_DURATION) {
      return cachedSession.session
    } else {
      // Session expired, clear memory cache
      cachedSession = null
    }
  }

  // Try to load from file
  const fileSession = await loadSessionFromFile()
  if (fileSession?.session && fileSession.timestamp) {
    if (now - fileSession.timestamp < SESSION_CACHE_DURATION) {
      cachedSession = fileSession
      return fileSession.session
    } else {
      // File session expired, clear it
      await clearSessionCache()
    }
  }

  return null
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

    // Get hardcoded session from environment
    const hardcodedSession = process.env.MYFXBOOK_HARDCODED_SESSION

    if (!hardcodedSession && !sessionParam) {
      return NextResponse.json({
        success: false,
        error: 'MYFXBOOK_HARDCODED_SESSION not configured in environment variables.',
        data: []
      }, { status: 500 })
    }

    // Step 1: Determine session source - use hardcoded session with 24-hour caching
    let session: string

    if (sessionParam) {
      // Use provided session directly
      session = sessionParam
      cachedSession = { session, timestamp: Date.now() }
    } else if (refresh) {
      // Force refresh - clear cache and use hardcoded session
      await clearSessionCache()
      session = hardcodedSession!
      cachedSession = { session: hardcodedSession!, timestamp: Date.now() }
      await saveSessionToFile(hardcodedSession!, Date.now())
    } else {
      // Check if we have a valid cached session for the hardcoded session
      const existingSession = await getExistingSession()
      if (existingSession === hardcodedSession) {
        session = existingSession
      } else {
        // Use hardcoded session and cache it
        session = hardcodedSession!
        cachedSession = { session: hardcodedSession!, timestamp: Date.now() }
        await saveSessionToFile(hardcodedSession!, Date.now())
      }
    }

    // Step 2: Fetch watched accounts
    let accounts: MyfxbookAccount[] = []
    try {
      accounts = await getWatchedAccounts(session)
    } catch (err) {
      // If session is invalid, just throw the error - no login retry
      throw err
    }

    // Step 3: Process and format the data
    const activeSession = session
    const portfolios: PortfolioData[] = await Promise.all(
      accounts.map(async (account) => {
        let gain = account.gain
        const drawdown = account.drawdown

        // If gain is not available, try to fetch it separately
        if (gain === undefined) {
          try {
            gain = await getAccountGain(activeSession, account.id)
          } catch {
            // If gain fetch fails, just set to 0 - no retry logic
            gain = 0
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

    // Fallback to mock data when API fails
    const mockData: PortfolioData[] = [
      { name: 'Low Risk Alpha', gain: '+3.08%', drawdown: '12.60%' },
      { name: 'Gold Queen', gain: '+19.01%', drawdown: '3.87%' }
    ]

    return NextResponse.json({
      success: true, // Return success: true so frontend doesn't show error state
      data: mockData,
      error: `Live data unavailable: ${error instanceof Error ? error.message : 'Internal server error'}`,
      usingMockData: true
    }, {
      status: 200, // Return 200 status so it's treated as successful
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
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
