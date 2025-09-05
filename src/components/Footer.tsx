'use client'

import { Instagram, Youtube, MessageCircle, Mail, Linkedin, Hash, Pencil, ExternalLink } from 'lucide-react'
import { Dictionary } from '@/lib/client-dictionaries'

// Custom SVG Icons for platforms not available in lucide-react
const TwitterXIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const MediumIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

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
        email: "mirrortradesgreece@gmail.com",
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
                  href="https://t.me/mirrortradesgreece/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-colors font-medium flex items-center gap-3 group"
                >
                  <div className="p-2 bg-primary-gold/10 rounded-lg group-hover:bg-primary-gold/20 transition-colors">
                    <TelegramIcon className="h-4 w-4 text-primary-gold" />
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
                  href="https://www.instagram.com/mirrortrades.gr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://t.me/mirrortradesgreece/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="Telegram"
                >
                  <TelegramIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/mirrortrades/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:mirrortradesgreece@gmail.com" 
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://x.com/mirrortrades_gr?s=21&t=ycNXGYjByMokOepNrpjj8g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-gold transition-all duration-300 p-3 bg-surface-light/10 rounded-xl hover:bg-primary-gold/10 hover:scale-110 group"
                  aria-label="X (Twitter)"
                >
                  <TwitterXIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.youtube.com/@MirrorTradesOfficial" 
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