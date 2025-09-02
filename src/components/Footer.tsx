'use client'

import { Instagram, Youtube, MessageCircle, Mail, ExternalLink } from 'lucide-react'
import { Dictionary } from '@/lib/client-dictionaries'

interface FooterProps {
  dictionary: Dictionary | null
  lang: string
}

export default function Footer({ dictionary, lang }: FooterProps) {
  // Fallback content in case dictionary is not properly loaded
  const fallbackFooter = {
    copyright: "© 2025 Mirror Trades. All rights reserved.",
    tagline: "Mirror Trades is not a broker/dealer. All trading involves risk.",
    sections: {
      navigation: {
        title: "Navigation",
        home: "Home",
        services: "Services",
        portfolios: "Portfolios",
        faqs: "FAQs",
        contact: "Contact"
      },
      contact: {
        title: "Contact & Social",
        description: "Contact us on Telegram or via email:",
        email: "info@mirrortrades.gr",
        followUs: "Follow us:"
      }
    }
  }

  const footerContent = dictionary?.footer || fallbackFooter

  if (!dictionary || !dictionary.footer) {
    console.warn('Footer dictionary not loaded, using fallback')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-background-dark via-surface-dark to-background-dark border-t border-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl lg:text-2xl font-bold text-primary-gold mb-4">
                Mirror Trades
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Professional copy trading platform helping traders achieve consistent returns through proven strategies and transparent performance.
              </p>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span>Live Performance Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                  <span>Professional Risk Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary-gold rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-primary-gold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-text-secondary hover:text-primary-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-primary-gold/50 group-hover:text-primary-gold transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {footerContent.sections.navigation.home}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolios')}
                    className="text-text-secondary hover:text-primary-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-primary-gold/50 group-hover:text-primary-gold transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {footerContent.sections.navigation.portfolios}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('explanation')}
                    className="text-text-secondary hover:text-primary-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-primary-gold/50 group-hover:text-primary-gold transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Our Process
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-text-secondary hover:text-primary-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-primary-gold/50 group-hover:text-primary-gold transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {footerContent.sections.navigation.faqs}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('onboarding')}
                    className="text-text-secondary hover:text-primary-gold transition-colors text-left flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-primary-gold/50 group-hover:text-primary-gold transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Get Started
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-primary-gold mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                <a 
                  href={`mailto:${footerContent.sections.contact.email}`}
                  className="text-text-secondary hover:text-primary-gold transition-colors font-medium flex items-center gap-3 group"
                >
                  <div className="p-2 bg-primary-gold/10 rounded-lg group-hover:bg-primary-gold/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary/60 uppercase tracking-wider">Email</div>
                    <div className="text-sm">{footerContent.sections.contact.email}</div>
                  </div>
                </a>
                
                <a 
                  href="https://t.me/mirrortradesgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-colors font-medium flex items-center gap-3 group"
                >
                  <div className="p-2 bg-primary-gold/10 rounded-lg group-hover:bg-primary-gold/20 transition-colors">
                    <MessageCircle className="h-4 w-4 text-primary-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary/60 uppercase tracking-wider">Telegram</div>
                    <div className="text-sm">Join our group</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social & Performance Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-primary-gold mb-6">
                Follow & Track
              </h3>
              
              <div className="space-y-4 mb-6">
                <a 
                  href="https://www.myfxbook.com/members/mirrortrades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-success-green hover:text-success-green/80 transition-colors font-medium text-sm"
                >
                  <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                  Live Performance
                </a>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://instagram.com/mirrortrades" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://t.me/mirrortradesgroup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="Telegram"
                >
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://linkedin.com/company/mirrortrades" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://youtube.com/mirrortrades" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-surface-dark pt-8 pb-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-text-secondary font-medium">
                Mirror Trades {footerContent.copyright.replace('© 2025 Mirror Trades. ', '')}
              </p>
              <p className="text-sm text-text-secondary/80 mt-1">
                {footerContent.tagline}
              </p>
            </div>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-text-secondary text-sm">Language:</span>
              <div className="flex gap-1">
                <button 
                  onClick={() => window.location.href = `/en${window.location.hash}`}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    lang === 'en' 
                      ? 'bg-primary-gold text-background-dark font-medium' 
                      : 'text-text-secondary hover:text-primary-gold'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => window.location.href = `/el${window.location.hash}`}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    lang === 'el' 
                      ? 'bg-primary-gold text-background-dark font-medium' 
                      : 'text-text-secondary hover:text-primary-gold'
                  }`}
                >
                  EL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}