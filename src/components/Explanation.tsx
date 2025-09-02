import { getDictionary } from '@/lib/dictionaries'

export default async function Explanation({ lang }: { lang: string }) {
  const dict = await getDictionary(lang)
  return (
    <section id="about" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            {dict.explanation.title}
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
            {dict.explanation.subtitle}
          </p>
          
          {/* What is Copy Trading Description */}
          <div className="bg-background-dark/50 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">What is Copy Trading?</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              {dict.explanation.what_is_copy_trading}
            </p>
          </div>
        </div>

        {/* How It Works - 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 - Choose a Trader */}
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-primary-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-gold/20 transition-colors">
              <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">{dict.explanation.step1_title}</h3>
            <p className="text-text-secondary leading-relaxed">
              {dict.explanation.step1_description}
            </p>
          </div>

          {/* Step 2 - Start Copy Trading */}
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-primary-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-gold/20 transition-colors">
              <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-7 4h12l-1 1H8l-1-1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">{dict.explanation.step2_title}</h3>
            <p className="text-text-secondary leading-relaxed">
              {dict.explanation.step2_description}
            </p>
          </div>

          {/* Step 3 - Stop Anytime */}
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-primary-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-gold/20 transition-colors">
              <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">{dict.explanation.step3_title}</h3>
            <p className="text-text-secondary leading-relaxed">
              {dict.explanation.step3_description}
            </p>
          </div>

          {/* Step 4 - Monitor & Adjust */}
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-primary-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-gold/20 transition-colors">
              <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">{dict.explanation.step4_title}</h3>
            <p className="text-text-secondary leading-relaxed">
              {dict.explanation.step4_description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
