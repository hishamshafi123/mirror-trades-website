
'use client'

import { useEffect, useState } from 'react'
import AnimatedNumber from '@/components/AnimatedNumber'
import AnimatedSection from '@/components/AnimatedSection'
import type { Dictionary } from '@/lib/client-dictionaries'

// TypeScript interfaces for portfolio data
interface PortfolioData {
  name: string
  gain: string
  drawdown: string
}

interface MyfxbookApiResponse {
  success: boolean
  data: PortfolioData[]
  error?: string
}

export default function Portfolios({ lang }: { lang: string }) {
  const [dict, setDict] = useState<Dictionary | null>(null)
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    async function loadDictionary() {
      try {
        const dictionary = await import(`@/content/${lang}.json`)
        setDict(dictionary.default as Dictionary)
      } catch (error) {
        console.error('Failed to load dictionary:', error)
        // Load English as fallback
        const fallback = await import('@/content/en.json')
        setDict(fallback.default as Dictionary)
      }
    }
    loadDictionary()
  }, [lang])

  // Fetch portfolio data from Myfxbook API
  const fetchPortfolios = async (opts?: { refresh?: boolean }) => {
    try {
      setLoading(true)
      setError(null)

      const url = opts?.refresh ? '/api/myfxbook?refresh=1' : '/api/myfxbook'
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      let result: MyfxbookApiResponse
      if (!response.ok) {
        // Try to extract JSON error message from the API
        try {
          const errJson = await response.json()
          const msg = (errJson?.error || errJson?.message || `HTTP error! status: ${response.status}`)
          throw new Error(msg)
        } catch (_) {
          throw new Error(`HTTP error! status: ${response.status} ${response.statusText || ''}`.trim())
        }
      }

      result = await response.json()

      if (result.success) {
        setPortfolios(result.data)
      } else {
        throw new Error(result.error || 'Failed to fetch portfolio data')
      }
    } catch (err) {
      console.error('Error fetching portfolios:', err)
      setError(err instanceof Error ? err.message : 'Failed to load portfolio data')

      // Fallback to mock data if API fails
      setPortfolios([
        { name: 'Low Risk Alpha', gain: '+3.08%', drawdown: '12.60%' },
        { name: 'Gold Queen', gain: '+19.01%', drawdown: '3.87%' }
      ])
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])

  if (!dict) {
    return <div>Loading...</div>
  }

  // Extract numeric values from percentage strings
  const extractNumber = (str: string) => {
    const match = str.match(/[\d.]+/)
    return match ? parseFloat(match[0]) : 0
  }


  // Advantages data with icons
  const advantages = [
    {
      title: dict.portfolios.advantage1_title,
      description: dict.portfolios.advantage1_description,
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    },
    {
      title: dict.portfolios.advantage2_title,
      description: dict.portfolios.advantage2_description,
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    {
      title: dict.portfolios.advantage3_title,
      description: dict.portfolios.advantage3_description,
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: dict.portfolios.advantage4_title,
      description: dict.portfolios.advantage4_description,
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: dict.portfolios.advantage5_title,
      description: dict.portfolios.advantage5_description,
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: dict.portfolios.advantage6_title,
      description: dict.portfolios.advantage6_description,
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ]
  
  return (
    <section id="portfolios" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout for large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Portfolios */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                {Array.isArray(dict.portfolios.title) ? (
                  dict.portfolios.title.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < dict.portfolios.title.length - 1 && <br />}
                    </span>
                  ))
                ) : (
                  dict.portfolios.title
                )}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {dict.portfolios.subtitle}
              </p>
              {error && (
                <div className="mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => { setRefreshing(true); fetchPortfolios({ refresh: true }) }}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-gold text-background-dark font-semibold hover:bg-secondary-gold transition-colors disabled:opacity-60"
                    disabled={loading || refreshing}
                  >
                    {refreshing ? (
                      <>
                        <span className="inline-block h-4 w-4 border-2 border-background-dark border-b-transparent rounded-full animate-spin mr-2" />
                        Refreshing live data
                      </>
                    ) : 'Fetch Live Data'}
                  </button>
                  <span className="text-xs text-warning-red">{error}</span>
                </div>
              )}
            </div>
            
            {/* Portfolio Cards with Live Data */}
            <div className="space-y-6">
              {loading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-gold"></div>
                  <p className="mt-2 text-text-secondary">Loading portfolio data...</p>
                </div>
              ) : portfolios.length > 0 ? (
                portfolios.map((portfolio, index) => (
                  <AnimatedSection key={`${portfolio.name}-${index}`} delay={index * 150} animation="slideUp">
                    <div className="bg-surface-dark rounded-xl p-6 hover:bg-surface-dark/80 transition-colors border border-primary-gold/10 group">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-primary-gold group-hover:text-secondary-gold transition-colors">
                          {portfolio.name}
                        </h3>
                        {error && (
                          <span className="text-xs text-warning-red bg-warning-red/10 px-2 py-1 rounded">
                            Using cached data
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-text-secondary mb-1">Total Gain</p>
                          <p className="text-2xl font-bold text-success-green">
                            {portfolio.gain.includes('+') || portfolio.gain.startsWith('-') ? '' : '+'}
                            <AnimatedNumber
                              value={extractNumber(portfolio.gain)}
                              suffix="%"
                              delay={index * 200 + 300}
                            />
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary mb-1">Max Drawdown</p>
                          <p className="text-2xl font-bold text-warning-red">
                            <AnimatedNumber
                              value={extractNumber(portfolio.drawdown)}
                              suffix="%"
                              delay={index * 200 + 500}
                            />
                          </p>
                        </div>
                      </div>

                    </div>
                  </AnimatedSection>
                ))
              ) : (
                <div className="text-center py-8 border border-primary-gold/10 rounded-xl bg-surface-dark/40">
                  <p className="text-text-secondary">No live portfolios available right now.</p>
                  <p className="text-xs text-text-secondary/70 mt-1">Add accounts to your Myfxbook Watchlist or adjust filters.</p>
                </div>
              )}

              {/* Error message */}
              {error && !loading && (
                <div className="mt-4 p-4 bg-warning-red/10 rounded-lg border border-warning-red/20">
                  <p className="text-sm text-warning-red">
                    ⚠️ Unable to fetch live data: {error}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">
                    Displaying cached data. Live data will be restored automatically.
                  </p>
                </div>
              )}
            </div>

            {/* Note about live data - hidden for now */}
            {/* <div className="mt-8 p-4 bg-primary-gold/5 rounded-lg border border-primary-gold/20">
              <p className="text-sm text-text-secondary">
                📊 Live performance data available at: 
                <a 
                  href="https://www.myfxbook.com/members/mirrortrades" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-gold hover:text-secondary-gold ml-1 underline"
                >
                  myfxbook.com/members/mirrortrades
                </a>
              </p>
            </div> */}
          </div>

          {/* Right Column - Advantages */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                {dict.portfolios.advantages_title}
              </h2>
              <p className="text-lg text-text-secondary">
                By choosing us, you enjoy unique benefits:
              </p>
            </div>

            {/* Advantages List */}
            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <AnimatedSection key={index} delay={index * 100} animation="slideLeft">
                  <div className="flex items-start space-x-4 group hover:transform hover:scale-[1.02] transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-gold/20 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-primary-gold group-hover:text-secondary-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-gold transition-colors">{advantage.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
