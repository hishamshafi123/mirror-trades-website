import { getDictionary } from '@/lib/dictionaries'

interface TrustProps {
  lang: string
}

export default async function Trust({ lang }: TrustProps) {
  const dict = await getDictionary(lang)
  
  return (
    <section id="trust" className="py-20 bg-gradient-to-br from-surface-dark via-background-dark to-surface-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/5 via-transparent to-primary-gold/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-gold/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            {dict.trust.title}
          </h2>
          
          {/* Introduction Paragraph */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-gold/5 rounded-2xl p-8 border border-primary-gold/20 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                {dict.trust.intro_paragraph}
              </p>
            </div>
          </div>
        </div>

        {/* Three Key Points */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Transparency */}
          <div className="group">
            <div className="bg-background-dark/60 rounded-2xl p-8 border border-primary-gold/10 hover:border-primary-gold/30 transition-all duration-300 hover:transform hover:scale-105 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-gold/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-gold/20 transition-colors">
                  <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{dict.trust.transparency_title}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {dict.trust.transparency_description}
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div className="group">
            <div className="bg-background-dark/60 rounded-2xl p-8 border border-primary-gold/10 hover:border-primary-gold/30 transition-all duration-300 hover:transform hover:scale-105 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-gold/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-gold/20 transition-colors">
                  <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{dict.trust.expertise_title}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {dict.trust.expertise_description}
              </p>
            </div>
          </div>

          {/* Guidance */}
          <div className="group">
            <div className="bg-background-dark/60 rounded-2xl p-8 border border-primary-gold/10 hover:border-primary-gold/30 transition-all duration-300 hover:transform hover:scale-105 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-gold/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-gold/20 transition-colors">
                  <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{dict.trust.guidance_title}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {dict.trust.guidance_description}
              </p>
            </div>
          </div>
        </div>

        {/* Final Disclaimer */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-gold/5 rounded-2xl p-8 border border-primary-gold/20 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="text-xl font-bold text-text-primary">Important Notice</h3>
            </div>
            <p className="text-text-secondary leading-relaxed text-lg">
              {dict.trust.disclaimer_paragraph}
            </p>
          </div>
        </div>

        {/* Team Visual Element (Optional) */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-background-dark/60 rounded-2xl p-6 border border-primary-gold/10">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center text-primary-gold font-bold border-2 border-background-dark">
                M
              </div>
              <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center text-primary-gold font-bold border-2 border-background-dark">
                T
              </div>
              <div className="w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center text-primary-gold font-bold border-2 border-background-dark">
                ★
              </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-text-primary">Mirror Trades Team</p>
              <p className="text-xs text-text-secondary">Professional Trading Specialists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
