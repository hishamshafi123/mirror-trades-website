import { NextResponse } from 'next/server'

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

// Session cache duration: 30 minutes
const SESSION_CACHE_DURATION = 30 * 60 * 1000

/**
 * Login to Myfxbook API and get session token
 */
async function loginToMyfxbook(): Promise<string> {
  const email = process.env.MYFXBOOK_EMAIL
  const password = process.env.MYFXBOOK_PASSWORD

  if (!email || !password) {
    throw new Error('Myfxbook credentials not configured')
  }

  // Check if we have a valid cached session
  if (cachedSession && Date.now() - cachedSession.timestamp < SESSION_CACHE_DURATION) {
    return cachedSession.session
  }

  try {
    const loginUrl = `https://www.myfxbook.com/api/login.json?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`

    const response = await fetch(loginUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'MirrorTrades-Website/1.0',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: MyfxbookLoginResponse = await response.json()

    if (data.error || !data.session) {
      throw new Error(data.message || 'Failed to login to Myfxbook')
    }

    // Cache the session
    cachedSession = {
      session: data.session,
      timestamp: Date.now()
    }

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

    const response = await fetch(accountsUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'MirrorTrades-Website/1.0',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: MyfxbookAccountsResponse = await response.json()

    if (data.error) {
      // If session expired, clear cache and throw error
      if (data.message?.includes('session') || data.message?.includes('login')) {
        cachedSession = null
      }
      throw new Error(data.message || 'Failed to fetch watched accounts')
    }

    return data.accounts || []
  } catch (error) {
    console.error('Myfxbook accounts fetch error:', error)
    throw new Error('Failed to fetch account data from Myfxbook')
  }
}

/**
 * Get additional account statistics if not available in main response
 */
async function getAccountGain(session: string, accountId: number): Promise<number> {
  try {
    const gainUrl = `https://www.myfxbook.com/api/get-gain.json?session=${encodeURIComponent(session)}&id=${accountId}`

    const response = await fetch(gainUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'MirrorTrades-Website/1.0',
      },
    })

    if (!response.ok) {
      return 0
    }

    const data = await response.json()
    return data.error ? 0 : (data.gain || 0)
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
export async function GET() {
  try {
    // Step 1: Login and get session
    const session = await loginToMyfxbook()

    // Step 2: Fetch watched accounts
    const accounts = await getWatchedAccounts(session)

    // Step 3: Process and format the data
    const portfolios: PortfolioData[] = await Promise.all(
      accounts.map(async (account) => {
        let gain = account.gain
        const drawdown = account.drawdown

        // If gain is not available, try to fetch it separately
        if (gain === undefined) {
          gain = await getAccountGain(session, account.id)
        }

        return {
          name: account.name,
          gain: formatPercentage(gain),
          drawdown: formatPercentage(Math.abs(drawdown || 0)) // Ensure drawdown is positive for display
        }
      })
    )

    // Filter to only include the specific accounts we want
    const filteredPortfolios = portfolios.filter(portfolio =>
      portfolio.name.toLowerCase().includes('low risk alpha') ||
      portfolio.name.toLowerCase().includes('gold queen')
    )

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