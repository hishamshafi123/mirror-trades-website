// TypeScript type definitions for Myfxbook API integration

export interface MyfxbookLoginResponse {
  error: boolean
  message?: string
  session?: string
}

export interface MyfxbookAccount {
  id: number
  name: string
  gain?: number
  drawdown?: number
  balance?: number
  equity?: number
  profit?: number
  currency?: string
  server?: string
  creationDate?: string
}

export interface MyfxbookAccountsResponse {
  error: boolean
  message?: string
  accounts?: MyfxbookAccount[]
}

export interface MyfxbookGainResponse {
  error: boolean
  message?: string
  gain?: number
}

export interface PortfolioData {
  name: string
  gain: string
  drawdown: string
}

export interface MyfxbookApiResponse {
  success: boolean
  data: PortfolioData[]
  error?: string
}

// Session cache interface
export interface SessionCache {
  session: string
  timestamp: number
}

// API configuration interface
export interface MyfxbookConfig {
  email: string
  password: string
  timeout?: number
  cacheDuration?: number
}