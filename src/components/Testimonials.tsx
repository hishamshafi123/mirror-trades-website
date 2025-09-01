'use client'

import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "I've been using Mirror Trades for 6 months and my portfolio has grown beyond my expectations. Highly recommended!",
    author: "John D.",
    location: "Athens, GR"
  },
  {
    id: 2,
    quote: "The platform is super easy to use and the support team is always helpful. I finally feel in control of my investments.",
    author: "Maria P.",
    location: "Thessaloniki, GR"
  },
  {
    id: 3,
    quote: "As someone new to trading, copy trading was the perfect way to start. I'm learning so much by observing the experts.",
    author: "Nikos A.",
    location: "Patra, GR"
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  return (
    <section id="testimonials" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            What Our Clients Say
          </h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-background-dark rounded-lg p-8 text-center">
                    <p className="text-lg text-text-secondary mb-4">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-bold text-primary-gold">{testimonial.author}</p>
                    <p className="text-sm text-text-secondary">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary-gold/50 hover:bg-primary-gold text-background-dark p-2 rounded-full">
            &lt;
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-gold/50 hover:bg-primary-gold text-background-dark p-2 rounded-full">
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}
