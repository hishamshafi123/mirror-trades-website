'use client'

import { useState } from 'react'
import { Mail, Check, AlertCircle, ExternalLink } from 'lucide-react'
import { Dictionary } from '@/lib/client-dictionaries'

interface NewsletterProps {
  dictionary: Dictionary | null
}

export default function Newsletter({ dictionary }: NewsletterProps) {
  // Fallback content in case dictionary is not properly loaded
  const fallbackNewsletter = {
    title: "Stay Updated!",
    description: "Subscribe to our newsletter to receive updates, tips, and reports from Mirror Trades.",
    emailPlaceholder: "Enter your email address",
    consentText: "I agree to receive promotional emails from Mirror Trades and confirm I have read the Privacy Policy.",
    gdprNote: "You can unsubscribe at any time. Your address will be used only to send our updates, in compliance with GDPR.",
    submitButton: "Subscribe",
    privacyPolicyLink: "Privacy Policy"
  }

  const newsletterContent = dictionary?.newsletter || fallbackNewsletter

  if (!dictionary || !dictionary.newsletter) {
    console.warn('Newsletter dictionary not loaded, using fallback')
  }
  const [email, setEmail] = useState('')
  const [hasConsent, setHasConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!hasConsent) {
      setMessage('Please confirm that you agree to receive emails by checking the consent box.')
      setMessageType('error')
      return
    }

    setIsSubmitting(true)
    setMessage('')
    setMessageType(null)

    try {
      // Store consent timestamp for GDPR compliance
      const consentData = {
        email,
        timestamp: new Date().toISOString(),
        consent: true,
        source: 'newsletter_signup',
        ipAddress: 'recorded', // In production, you'd capture actual IP
        doubleOptIn: false // Will be true after email verification
      }

      // In production, you would send this to your backend API
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(consentData)
      // })

      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Store locally for demo purposes (in production this would be in database)
      localStorage.setItem(`newsletter_signup_${email}`, JSON.stringify(consentData))

      setMessage('Thank you! Please check your email to confirm your subscription (double opt-in required for GDPR compliance).')
      setMessageType('success')
      setEmail('')
      setHasConsent(false)
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (err) {
      setMessage('An error occurred. Please try again.')
      setMessageType('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePrivacyPolicyClick = () => {
    // Open privacy policy - in production this would link to actual policy page
    window.open('#privacy-policy', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-background-dark via-surface-dark to-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-surface-light/30 to-surface-dark/30 backdrop-blur-sm rounded-2xl border border-surface-dark/50 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-gold/20 rounded-full border border-primary-gold/30">
                  <Mail className="h-8 w-8 text-primary-gold" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {newsletterContent.title}
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {newsletterContent.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              {/* Email Input */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterContent.emailPlaceholder}
                    className="w-full px-6 py-4 rounded-xl bg-surface-dark/80 text-text-primary border-2 border-surface-dark focus:border-primary-gold focus:outline-none transition-all duration-200 placeholder:text-text-secondary/70"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* GDPR Consent Checkbox */}
              <div className="mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      type="checkbox"
                      id="newsletter-consent"
                      checked={hasConsent}
                      onChange={(e) => setHasConsent(e.target.checked)}
                      className="w-4 h-4 text-primary-gold bg-surface-dark border-surface-light rounded focus:ring-primary-gold focus:ring-2 disabled:opacity-50"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <label htmlFor="newsletter-consent" className="text-sm text-text-secondary leading-relaxed">
                    {newsletterContent.consentText.split(newsletterContent.privacyPolicyLink)[0]}
                    <button
                      type="button"
                      onClick={handlePrivacyPolicyClick}
                      className="text-primary-gold hover:text-secondary-gold underline hover:no-underline inline-flex items-center gap-1 transition-colors"
                    >
                      {newsletterContent.privacyPolicyLink}
                      <ExternalLink className="h-3 w-3" />
                    </button>
                    {newsletterContent.consentText.split(newsletterContent.privacyPolicyLink)[1]}
                  </label>
                </div>
              </div>

              {/* GDPR Note */}
              <div className="mb-6">
                <div className="bg-surface-dark/50 border border-surface-dark rounded-lg p-4">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {newsletterContent.gdprNote}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!hasConsent || !email || isSubmitting}
                  className="bg-gradient-to-r from-primary-gold to-secondary-gold hover:from-secondary-gold hover:to-primary-gold text-background-dark font-bold py-4 px-12 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    newsletterContent.submitButton
                  )}
                </button>
              </div>

              {/* Message Display */}
              {message && (
                <div className={`mt-6 p-4 rounded-lg border ${
                  messageType === 'success' 
                    ? 'bg-green-900/20 border-green-500/30 text-green-400' 
                    : 'bg-red-900/20 border-red-500/30 text-red-400'
                }`}>
                  <div className="flex items-start gap-2">
                    {messageType === 'success' ? (
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm leading-relaxed">{message}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
