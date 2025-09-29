'use client'

import { useEffect, useState } from 'react'
import { Dictionary } from '@/lib/client-dictionaries'

interface FloatingCTAProps {
  dict: Dictionary
}

export default function FloatingCTA({ dict }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show after scrolling 300px from top
      const showAfterScroll = scrollY > 300
      
      // Hide when within 300px of bottom
      const hideNearBottom = scrollY + windowHeight > documentHeight - 300
      
      const shouldShow = showAfterScroll && !hideNearBottom
      setIsVisible(shouldShow)
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!dict?.hero?.cta) return null

  return (
    <div 
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-[9999] transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
      }`}
    >
        <a
          href="https://calendly.com/costadaino/15min?fbclid=PAVERFWAMmWURleHRuA2FlbQIxMAABpwoCkCntYXgV4wbQ3JluQcJFhFCMAAIAuqpe0aOdLUQHoVd2Ot0_c6VHufDQ_aem_rUYMIZIOloG7laACXAAxDg&month=2025-09"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center bg-primary-gold text-background-dark font-bold py-3 px-5 md:py-4 md:px-6 lg:py-4 lg:px-8 rounded-full hover:bg-secondary-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-gold/25 hover:scale-105 text-sm md:text-base lg:text-lg"
          aria-label="Contact us"
        >
          <span className="relative z-10 mr-2">{dict.hero.cta}</span>
          <svg 
            className="relative z-10 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          
          {/* Pulse effect for desktop */}
          <div className="absolute inset-0 rounded-full bg-primary-gold opacity-20 animate-ping hidden lg:block"></div>
        </a>
    </div>
  )
}