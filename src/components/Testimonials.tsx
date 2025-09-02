'use client'

import { useState, useEffect } from 'react'
import { Dictionary } from '@/lib/client-dictionaries'

// Sample testimonials - you'll replace these with your real Greek testimonials
const testimonialsData = {
  greek: [
    {
      id: 1,
      quote: "Χρησιμοποιώ τη Mirror Trades εδώ και 6 μήνες και το χαρτοφυλάκιό μου έχει αναπτυχθεί πέρα από τις προσδοκίες μου. Το συνιστώ ανεπιφύλακτα!",
      author: "Γιάννης Δ.",
      location: "Αθήνα",
      avatar: "/avatars/avatar1.jpg" // You can add avatar images
    },
    {
      id: 2,
      quote: "Η πλατφόρμα είναι εξαιρετικά εύκολη στη χρήση και η ομάδα υποστήριξης είναι πάντα εξυπηρετική. Επιτέλους αισθάνομαι ότι έχω τον έλεγχο των επενδύσεών μου.",
      author: "Μαρία Π.",
      location: "Θεσσαλονίκη",
      avatar: "/avatars/avatar2.jpg"
    },
    {
      id: 3,
      quote: "Ως κάποιος νέος στο trading, το copy trading ήταν ο τέλειος τρόπος για να ξεκινήσω. Μαθαίνω τόσα πολλά παρατηρώντας τους ειδικούς.",
      author: "Νίκος Α.",
      location: "Πάτρα",
      avatar: "/avatars/avatar3.jpg"
    }
  ],
  english: [
    {
      id: 1,
      quote: "I've been using Mirror Trades for 6 months and my portfolio has grown beyond my expectations. Highly recommended!",
      author: "John D.",
      location: "Athens",
      avatar: "/avatars/avatar1.jpg"
    },
    {
      id: 2,
      quote: "The platform is super easy to use and the support team is always helpful. I finally feel in control of my investments.",
      author: "Maria P.",
      location: "Thessaloniki",
      avatar: "/avatars/avatar2.jpg"
    },
    {
      id: 3,
      quote: "As someone new to trading, copy trading was the perfect way to start. I'm learning so much by observing the experts.",
      author: "Nick A.",
      location: "Patras",
      avatar: "/avatars/avatar3.jpg"
    }
  ]
}

interface TestimonialsProps {
  lang: string
  dict: Dictionary
}

export default function Testimonials({ lang, dict }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Get testimonials based on language
  const testimonials = lang === 'el' ? testimonialsData.greek : testimonialsData.english

  // Auto-rotation functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrent(prev => prev === testimonials.length - 1 ? 0 : prev + 1)
    }, 5000) // Auto-rotate every 5 seconds

    return () => clearInterval(interval)
  }, [current, isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false) // Stop auto-play when user interacts
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false) // Stop auto-play when user interacts
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrent(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Testimonials */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {dict.testimonials.title}
              </h2>
            </div>

            {/* Testimonial Slider */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform ease-in-out duration-500" 
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0">
                      <div className="bg-background-dark/80 rounded-xl p-8 border border-primary-gold/10">
                        {/* Quote */}
                        <div className="mb-6">
                          <svg className="w-8 h-8 text-primary-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.17,18.5C16.5,18.5 18.5,16.5 18.5,14.17C18.5,11.84 16.5,9.84 14.17,9.84L14.17,7.5C19.92,7.5 24.5,12.08 24.5,17.83C24.5,21.5 21.5,24.5 17.83,24.5L14.17,24.5C12.08,24.5 10.5,22.92 10.5,20.83L10.5,17.17C10.5,15.08 12.08,13.5 14.17,13.5L14.17,18.5ZM1.17,18.5C3.5,18.5 5.5,16.5 5.5,14.17C5.5,11.84 3.5,9.84 1.17,9.84L1.17,7.5C6.92,7.5 11.5,12.08 11.5,17.83C11.5,21.5 8.5,24.5 4.83,24.5L1.17,24.5C-0.92,24.5 -2.5,22.92 -2.5,20.83L-2.5,17.17C-2.5,15.08 -0.92,13.5 1.17,13.5L1.17,18.5Z" />
                          </svg>
                          <p className="text-lg text-text-secondary leading-relaxed italic">
                            &quot;{testimonial.quote}&quot;
                          </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center">
                            <span className="text-primary-gold font-bold text-lg">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-text-primary">{testimonial.author}</p>
                            <p className="text-sm text-text-secondary">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevTestimonial} 
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-primary-gold hover:bg-secondary-gold text-background-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial} 
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-primary-gold hover:bg-secondary-gold text-background-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'bg-primary-gold scale-110' 
                      : 'bg-primary-gold/30 hover:bg-primary-gold/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Performance Chart */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {dict.testimonials.performance_title}
              </h2>
            </div>

            {/* Performance Chart Placeholder */}
            <div className="bg-background-dark/80 rounded-xl p-8 border border-primary-gold/10">
              <div className="mb-6">
                <p className="text-text-secondary mb-4">
                  View our live trading performance and verified results:
                </p>
                <a 
                  href="https://www.myfxbook.com/members/mirrortrades" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary-gold text-background-dark px-6 py-3 rounded-lg font-semibold hover:bg-secondary-gold transition-colors"
                >
                  <span>View Live Charts</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Sample Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-success-green">+127%</p>
                  <p className="text-sm text-text-secondary">Total Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-gold">12 Months</p>
                  <p className="text-sm text-text-secondary">Track Record</p>
                </div>
              </div>

              {/* Placeholder for actual chart */}
              <div className="bg-surface-dark/50 rounded-lg p-6 text-center">
                <div className="text-text-secondary mb-2">📈</div>
                <p className="text-sm text-text-secondary">
                  Live performance charts and detailed analytics available on MyFXBook
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-primary-gold/5 rounded-lg border border-primary-gold/20">
              <p className="text-xs text-text-secondary text-center">
                ⚠️ {dict.testimonials.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
