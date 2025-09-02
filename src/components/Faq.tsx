'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { Dictionary } from '@/lib/client-dictionaries'

interface FaqProps {
  dictionary: Dictionary
}

export default function Faq({ dictionary }: FaqProps) {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background-dark to-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {dictionary.faq.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <MessageCircle className="h-5 w-5 text-primary-gold" />
            <p className="text-lg">{dictionary.faq.contact_prompt}</p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {dictionary.faq.questions.map((faq, index) => (
              <div 
                key={index} 
                className="bg-surface-light/50 backdrop-blur-sm border border-surface-dark rounded-lg overflow-hidden hover:bg-surface-light/70 transition-all duration-300"
              >
                <button 
                  onClick={() => toggle(index)} 
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-light/30 transition-colors group"
                >
                  <span className="text-lg font-semibold text-text-primary group-hover:text-primary-gold transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`flex-shrink-0 transform transition-all duration-300 ${
                      open === index 
                        ? 'rotate-180 text-primary-gold' 
                        : 'text-text-secondary group-hover:text-primary-gold'
                    }`} 
                    size={24}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  open === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-surface-dark/50 pt-4">
                      <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
