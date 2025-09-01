'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    question: "What is copy trading?",
    answer: "Copy trading allows you to automatically copy the trades of experienced traders in real-time. It's a great way to get started in the financial markets, even with little to no experience."
  },
  {
    question: "Is my money safe?",
    answer: "Your funds are held in your own account with our regulated partner brokers. We do not have direct access to your money. Our platform only has permission to execute trades on your behalf."
  },
  {
    question: "How much does it cost?",
    answer: "We charge a small performance fee on the profits we generate for you. There are no subscription fees or hidden charges. If you don't make money, we don't make money."
  },
  {
    question: "Can I stop at any time?",
    answer: "Yes, you have full control over your account. You can stop copying a trader, withdraw your funds, or close your account at any time."
  }
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-surface-dark">
              <button onClick={() => toggle(index)} className="w-full flex justify-between items-center py-4 text-left hover:text-primary-gold transition-colors">
                <span className="text-lg font-medium text-text-primary group-hover:text-primary-gold">{faq.question}</span>
                <ChevronDown className={`transform transition-all ${open === index ? 'rotate-180 text-primary-gold' : 'text-text-secondary'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="p-4 text-text-secondary">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
