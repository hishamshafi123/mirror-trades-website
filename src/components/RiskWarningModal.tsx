'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, ExternalLink, X } from 'lucide-react'
import { Dictionary } from '@/lib/client-dictionaries'

interface RiskWarningModalProps {
  dictionary: Dictionary | null
  lang?: string
}

export default function RiskWarningModal({ dictionary, lang = 'el' }: RiskWarningModalProps) {
  const [showModal, setShowModal] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)

  // Fallback content in case dictionary is not properly loaded
  const fallbackWarning = {
    title: "Risk Warning",
    message: "Trading CFDs and using CopyTrading services involve a high risk of capital loss. Mirror Trades does not provide investment advice. Each investor is fully responsible for their own decisions.",
    instruction: "Click \"I Understand\" to continue to the website.",
    acceptButton: "I Understand",
    riskDisclosureLink: "See full Risk Disclosure",
    termsLink: "Terms & Conditions",
    complianceText: "By clicking \"I Understand\", you acknowledge that you have read and understood this risk warning and accept full responsibility for your investment decisions. This warning will appear periodically as required by regulation."
  }

  const riskWarning = dictionary?.riskWarning || fallbackWarning

  useEffect(() => {
    // Check localStorage only on client-side
    const checkRiskWarning = () => {
      try {
        // For development/testing - clear storage to always show modal
        // Remove these lines in production if needed
        // localStorage.removeItem('riskWarningAcknowledged')
        // localStorage.removeItem('riskWarningDate')
        
        const hasAcknowledged = localStorage.getItem('riskWarningAcknowledged')
        const acknowledgedDate = localStorage.getItem('riskWarningDate')
        
        console.log('Risk warning check:', { hasAcknowledged, acknowledgedDate })
        
        if (!hasAcknowledged || !acknowledgedDate) {
          // First time visitor - show modal
          console.log('Showing modal for first time visitor')
          setShowModal(true)
          return
        }
        
        // Check if acknowledgment is expired (30 days)
        const daysSinceAcknowledgment = (Date.now() - parseInt(acknowledgedDate)) / (1000 * 60 * 60 * 24)
        if (daysSinceAcknowledgment > 30) {
          console.log('Showing modal - acknowledgment expired')
          setShowModal(true)
          localStorage.removeItem('riskWarningAcknowledged')
          localStorage.removeItem('riskWarningDate')
        } else {
          console.log('Modal not needed - recently acknowledged')
        }
      } catch (error) {
        console.error('LocalStorage error, showing modal:', error)
        setShowModal(true)
      }
    }

    // Run after hydration
    const timer = setTimeout(checkRiskWarning, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleAccept = () => {
    setIsAccepted(true)
    
    try {
      localStorage.setItem('riskWarningAcknowledged', 'true')
      localStorage.setItem('riskWarningDate', Date.now().toString())
    } catch (error) {
      console.error('Error storing localStorage:', error)
    }
    
    // Hide modal with animation
    setTimeout(() => {
      setShowModal(false)
    }, 300)
  }

  const handleLinkClick = (url: string) => {
    try {
      // Handle terms and conditions link
      if (url === '#terms-conditions') {
        window.open(`/${lang}/terms`, '_blank', 'noopener,noreferrer')
        return
      }
      // Handle risk disclosure link
      if (url === '#risk-disclosure') {
        window.open(`/${lang}/risk-disclosure`, '_blank', 'noopener,noreferrer')
        return
      }
      // For other placeholder links - show alert instead of opening broken links
      if (url.startsWith('#')) {
        alert('This document will be available soon. Please contact us for more information.')
        return
      }
      // Open real compliance pages in new tab
      window.open(url, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error opening link:', error)
    }
  }

  // Only render when modal should be shown
  if (!showModal) return null

  return (
    <>
      {/* Backdrop Overlay - Semi-transparent to show page behind */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${
          isAccepted ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Modal Container - Positioned near top for hero section visibility */}
      <div className={`fixed inset-0 z-[10000] flex items-start justify-center pt-20 md:pt-32 lg:pt-40 p-4 transition-all duration-300 ${
        isAccepted ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}> 
        <div className="bg-black/95 backdrop-blur-md border border-primary-gold rounded-xl max-w-md w-full mx-auto shadow-2xl ring-1 ring-primary-gold/30">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary-gold/20 rounded-full border border-primary-gold/50">
                <AlertTriangle className="h-8 w-8 text-primary-gold" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold text-primary-gold">
                {riskWarning.title}
              </h2>
            </div>
            {/* Close button disabled for compliance - user must acknowledge */}
            <div className="p-2 bg-primary-gold/10 rounded-full border border-primary-gold/30">
              <X className="h-5 w-5 text-primary-gold/50 cursor-not-allowed" />
            </div>
          </div>

          {/* Warning Content */}
          <div className="px-6 pb-4">
            <div className="bg-primary-gold/10 border border-primary-gold/30 rounded-xl p-5 mb-5 shadow-inner">
              <p className="text-white font-semibold leading-relaxed text-base">
                {riskWarning.message}
              </p>
            </div>
            
            <p className="text-text-secondary text-sm font-medium mb-5 text-center bg-primary-gold/5 p-3 rounded-lg border border-primary-gold/20">
              {riskWarning.instruction}
            </p>

            {/* Compliance Links */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              <button
                onClick={() => handleLinkClick('#risk-disclosure')}
                className="flex items-center justify-center gap-2 text-text-secondary hover:text-primary-gold transition-colors text-sm py-2 px-4 border border-primary-gold/30 rounded-lg hover:border-primary-gold hover:bg-primary-gold/10"
              >
                <ExternalLink className="h-4 w-4" />
                {riskWarning.riskDisclosureLink}
              </button>
              <button
                onClick={() => handleLinkClick('#terms-conditions')}
                className="flex items-center justify-center gap-2 text-text-secondary hover:text-primary-gold transition-colors text-sm py-2 px-4 border border-primary-gold/30 rounded-lg hover:border-primary-gold hover:bg-primary-gold/10"
              >
                <ExternalLink className="h-4 w-4" />
                {riskWarning.termsLink}
              </button>
            </div>
          </div>

          {/* Accept Button */}
          <div className="p-6 pt-0">
            <button
              onClick={handleAccept}
              className="w-full bg-transparent border-2 border-primary-gold hover:bg-primary-gold hover:border-secondary-gold text-primary-gold hover:text-background-dark font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary-gold/50"
            >
              <span className="text-lg">{riskWarning.acceptButton}</span>
            </button>
            
            {/* Additional Compliance Text */}
            <div className="bg-primary-gold/5 border border-primary-gold/20 rounded-lg p-3 mt-4">
              <p className="text-text-secondary text-xs text-center leading-relaxed">
                {riskWarning.complianceText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}