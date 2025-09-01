'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission, e.g., send the email to a server
    setMessage(`Thank you for subscribing, ${email}!`)
    setEmail('')
  }

  return (
    <section id="newsletter" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Stay Updated
          </h2>
          <p className="text-lg text-text-secondary mt-4">
            Subscribe to our newsletter to get the latest news and updates.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-md bg-surface-dark text-text-primary border border-transparent focus:outline-none focus:ring-2 focus:ring-primary-gold"
              required
            />
            <button type="submit" className="bg-primary-gold text-background-dark font-bold py-3 px-8 rounded-md hover:bg-secondary-gold transition-colors">
              Subscribe
            </button>
          </form>
          {message && <p className="mt-4 text-success-green">{message}</p>}
        </div>
      </div>
    </section>
  )
}
