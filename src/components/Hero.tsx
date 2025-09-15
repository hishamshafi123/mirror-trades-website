'use client'

import { Dictionary } from '@/lib/client-dictionaries'
import { usePageLoadAnimation } from '@/hooks/useScrollAnimation'

interface HeroProps {
  dict: Dictionary
  lang: string
}

export default function Hero({ dict, lang }: HeroProps) {
  const titleLoaded = usePageLoadAnimation(600)
  const subtitleLoaded = usePageLoadAnimation(900)
  const ctaLoaded = usePageLoadAnimation(1200)

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-dark/75 to-surface-dark/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('/finance-bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
          {/* Fallback pattern for when image is not available */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-primary-gold/5"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`${
            lang === 'el' 
              ? 'text-4xl md:text-6xl lg:text-7xl' 
              : 'text-5xl md:text-7xl lg:text-8xl'
          } font-bold text-text-primary leading-tight mb-6 tracking-tight transition-all duration-1000 ease-out ${
            titleLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            {dict.hero.tagline}
          </h1>
          <p className={`text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            subtitleLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {dict.hero.subTagline}
          </p>
          
          {/* Primary CTA Button */}
          <a 
            href="https://calendly.com/costadaino/15min?fbclid=PAVERFWAMmWURleHRuA2FlbQIxMAABpwoCkCntYXgV4wbQ3JluQcJFhFCMAAIAuqpe0aOdLUQHoVd2Ot0_c6VHufDQ_aem_rUYMIZIOloG7laACXAAxDg&month=2025-09" 
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center bg-primary-gold text-background-dark font-bold text-lg py-4 px-10 rounded-xl hover:bg-secondary-gold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-gold/25 group ${
              ctaLoaded 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <span className="mr-2">{dict.hero.cta}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center text-text-secondary">
            <span className="text-sm mb-2 opacity-75">Scroll to learn more</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
  )
}
