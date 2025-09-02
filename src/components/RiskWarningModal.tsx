'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, ExternalLink, X } from 'lucide-react'
import { Dictionary } from '@/lib/client-dictionaries'

interface RiskWarningModalProps {
  dictionary: Dictionary | null
}

export default function RiskWarningModal({ dictionary }: RiskWarningModalProps) {
  const [showModal, setShowModal] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)

  // Fallback content in case dictionary is not properly loaded
  const fallbackWarning = {
    title: "Risk Warning",
    message: "Trading CFDs and using CopyTrading services involve a high risk of capital loss. Mirror Trades does not provide investment advice. Each investor is fully responsible for their own decisions.",
    instruction: "Click \"I Understand\" to continue to the website.",
    acceptButton: "I Understand",
    riskDisclosureLink: "See full Risk Disclosure",
    termsLink: "Terms & Conditions"
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
      // For now, these are placeholder links - show alert instead of opening broken links
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
      {/* Backdrop Overlay - Cannot be dismissed */}
      <div 
        className={`fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] transition-opacity duration-300 ${
          isAccepted ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backdropFilter: 'blur(12px)' }}
      />
      
      {/* Modal Container */}
      <div className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-all duration-300 ${
        isAccepted ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}> 
        <div className="bg-gradient-to-br from-red-900/98 to-red-800/98 backdrop-blur-md border-2 border-red-400 rounded-xl max-w-lg w-full mx-auto shadow-2xl ring-1 ring-red-500/50">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-500/20 rounded-full border border-red-500/30">
                <AlertTriangle className="h-8 w-8 text-red-400" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold text-white">
                {riskWarning.title}
              </h2>
            </div>
            {/* Close button disabled for compliance - user must acknowledge */}
            <div className="p-2 bg-red-800/50 rounded-full border border-red-600/50">
              <X className="h-5 w-5 text-red-500/70 cursor-not-allowed" />
            </div>
          </div>

          {/* Warning Content */}
          <div className="px-6 pb-4">
            <div className="bg-red-500/15 border-2 border-red-500/40 rounded-xl p-5 mb-5 shadow-inner">
              <p className="text-white font-semibold leading-relaxed text-base">
                {riskWarning.message}
              </p>
            </div>
            
            <p className="text-red-200 text-sm font-medium mb-5 text-center bg-red-900/30 p-3 rounded-lg border border-red-600/30">
              {riskWarning.instruction}
            </p>

            {/* Compliance Links */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              <button
                onClick={() => handleLinkClick('#risk-disclosure')}
                className="flex items-center justify-center gap-2 text-red-300 hover:text-white transition-colors text-sm py-2 px-4 border border-red-600/50 rounded-lg hover:border-red-400 hover:bg-red-800/30"
              >
                <ExternalLink className="h-4 w-4" />
                {riskWarning.riskDisclosureLink}
              </button>
              <button
                onClick={() => handleLinkClick('#terms-conditions')}
                className="flex items-center justify-center gap-2 text-red-300 hover:text-white transition-colors text-sm py-2 px-4 border border-red-600/50 rounded-lg hover:border-red-400 hover:bg-red-800/30"
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
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:from-red-800 active:to-red-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500/50 border-2 border-red-500/50 hover:border-red-400"
            >
              <span className="text-lg">{riskWarning.acceptButton}</span>
            </button>
            
            {/* Additional Compliance Text */}
            <div className="bg-red-900/40 border border-red-600/40 rounded-lg p-3 mt-4">
              <p className="text-red-300 text-xs text-center leading-relaxed">
                By clicking &quot;<strong>{riskWarning.acceptButton}</strong>&quot;, you acknowledge that you have read and understood this risk warning and accept full responsibility for your investment decisions. This warning will be shown periodically as required by regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}