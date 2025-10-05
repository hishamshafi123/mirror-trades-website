'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import type { Dictionary } from '@/lib/client-dictionaries'

export default function Team({ lang }: { lang: string }) {
  const [dict, setDict] = useState<Dictionary | null>(null)

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

  if (!dict) {
    return <div>Loading...</div>
  }

  return (
    <section id="team" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              {dict.team.title}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {dict.team.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {dict.team.members.map((member, index) => (
            <AnimatedSection key={index} delay={index * 200} animation="slideUp">
              <div className="bg-background-dark rounded-2xl p-8 shadow-xl border border-primary-gold/10 hover:border-primary-gold/20 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center">
                  {/* Team Member Image */}
                  <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-primary-gold/20 group-hover:border-primary-gold/40 transition-colors">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-2xl font-bold text-primary-gold mb-2 group-hover:text-secondary-gold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-secondary-gold font-medium mb-6 text-lg">
                    {member.title}
                  </p>

                  {/* Bio */}
                  <p className="text-text-secondary leading-relaxed text-left">
                    {member.bio}
                  </p>

 
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust indicators */}
        <AnimatedSection delay={400} animation="slideUp">
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-bold text-text-primary mb-2">
                  {lang === 'el' ? 'Επαληθευμένη Εμπειρία' : 'Verified Experience'}
                </h4>
                <p className="text-text-secondary text-sm">
                  {lang === 'el' ? 'Πολυετής εμπειρία στις αγορές' : 'Years of market experience'}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-text-primary mb-2">
                  {lang === 'el' ? 'Ακαδημαϊκή Κατάρτιση' : 'Academic Background'}
                </h4>
                <p className="text-text-secondary text-sm">
                  {lang === 'el' ? 'Εκπαίδευση από κορυφαία ιδρύματα' : 'Education from top institutions'}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-text-primary mb-2">
                  {lang === 'el' ? 'Αφοσιωμένη Ομάδα' : 'Dedicated Team'}
                </h4>
                <p className="text-text-secondary text-sm">
                  {lang === 'el' ? 'Εστιασμένοι στην επιτυχία σας' : 'Focused on your success'}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}