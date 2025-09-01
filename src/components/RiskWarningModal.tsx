'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function RiskWarningModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Temporarily always show modal for testing
    setIsOpen(true)
    // Uncomment below for normal behavior:
    // const hasAcknowledged = localStorage.getItem('risk-warning-acknowledged')
    // if (!hasAcknowledged) {
    //   setIsOpen(true)
    // }
  }, [])

  const handleAcknowledge = () => {
    localStorage.setItem('risk-warning-acknowledged', 'true')
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/60 backdrop-blur-sm">
      <div className="bg-surface-dark/95 rounded-lg p-8 max-w-md w-full text-center border-2 border-primary-gold shadow-2xl backdrop-blur-md">
        <AlertTriangle size={48} className="text-warning-red mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-warning-red mb-4">Risk Warning</h2>
        <p className="text-text-secondary mb-6 leading-relaxed">
          Trading CFDs and other leveraged products is highly speculative, carries a high level of risk and is not suitable for all investors. You may sustain a loss of some or all of your invested capital, therefore, you should not speculate with capital that you cannot afford to lose.
        </p>
        <button 
          onClick={handleAcknowledge} 
          className="bg-primary-gold text-background-dark font-bold py-3 px-8 rounded-md hover:bg-secondary-gold transition-all transform hover:scale-105"
        >
          I Acknowledge and Accept the Risks
        </button>
      </div>
    </div>
  )
}
