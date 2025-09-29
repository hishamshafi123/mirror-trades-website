import { getDictionary } from '@/lib/dictionaries'

interface OnboardingProps {
  lang: string
}

export default async function Onboarding({ lang }: OnboardingProps) {
  const dict = await getDictionary(lang)
  
  return (
    <section id="onboarding" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
            {dict.onboarding.title}
          </h2>
          
          {/* Prominent CTA Button */}
          <div className="mb-12">
            <a 
              href="https://calendly.com/costadaino/15min?fbclid=PAVERFWAMmWURleHRuA2FlbQIxMAABpwoCkCntYXgV4wbQ3JluQcJFhFCMAAIAuqpe0aOdLUQHoVd2Ot0_c6VHufDQ_aem_rUYMIZIOloG7laACXAAxDg&month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-gold to-secondary-gold text-background-dark font-bold text-xl py-5 px-12 rounded-2xl hover:from-secondary-gold hover:to-primary-gold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-gold/30 group"
            >
              <span className="mr-3">{dict.onboarding.cta_button}</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* 5-Step Process */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
            
            {/* Step 1 - Book a Free Zoom Call */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center group">
              <div className="flex items-center mb-4 lg:mb-0 lg:mr-8 flex-shrink-0">
                <div className="w-20 h-20 bg-primary-gold rounded-2xl flex items-center justify-center mr-4 group-hover:bg-secondary-gold transition-colors duration-300">
                  <svg className="w-10 h-10 text-background-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-primary-gold font-bold text-2xl">01</div>
              </div>
              <div className="bg-surface-dark rounded-2xl p-6 flex-grow border border-primary-gold/10 group-hover:border-primary-gold/30 transition-colors">
                <h3 className="text-2xl font-bold text-text-primary mb-3">{dict.onboarding.step1_title}</h3>
                <p className="text-text-secondary leading-relaxed">{dict.onboarding.step1_description}</p>
              </div>
            </div>

            {/* Step 2 - Open a Broker Account */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center group">
              <div className="flex items-center mb-4 lg:mb-0 lg:mr-8 flex-shrink-0">
                <div className="w-20 h-20 bg-primary-gold rounded-2xl flex items-center justify-center mr-4 group-hover:bg-secondary-gold transition-colors duration-300">
                  <svg className="w-10 h-10 text-background-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-primary-gold font-bold text-2xl">02</div>
              </div>
              <div className="bg-surface-dark rounded-2xl p-6 flex-grow border border-primary-gold/10 group-hover:border-primary-gold/30 transition-colors">
                <h3 className="text-2xl font-bold text-text-primary mb-3">{dict.onboarding.step2_title}</h3>
                <p className="text-text-secondary leading-relaxed">{dict.onboarding.step2_description}</p>
              </div>
            </div>

            {/* Step 3 - Onboarding & Copy Trading Setup */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center group">
              <div className="flex items-center mb-4 lg:mb-0 lg:mr-8 flex-shrink-0">
                <div className="w-20 h-20 bg-primary-gold rounded-2xl flex items-center justify-center mr-4 group-hover:bg-secondary-gold transition-colors duration-300">
                  <svg className="w-10 h-10 text-background-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-primary-gold font-bold text-2xl">03</div>
              </div>
              <div className="bg-surface-dark rounded-2xl p-6 flex-grow border border-primary-gold/10 group-hover:border-primary-gold/30 transition-colors">
                <h3 className="text-2xl font-bold text-text-primary mb-3">{dict.onboarding.step3_title}</h3>
                <p className="text-text-secondary leading-relaxed">{dict.onboarding.step3_description}</p>
              </div>
            </div>

            {/* Step 4 - Telegram Support & Community */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center group">
              <div className="flex items-center mb-4 lg:mb-0 lg:mr-8 flex-shrink-0">
                <div className="w-20 h-20 bg-primary-gold rounded-2xl flex items-center justify-center mr-4 group-hover:bg-secondary-gold transition-colors duration-300">
                  <svg className="w-10 h-10 text-background-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="text-primary-gold font-bold text-2xl">04</div>
              </div>
              <div className="bg-surface-dark rounded-2xl p-6 flex-grow border border-primary-gold/10 group-hover:border-primary-gold/30 transition-colors">
                <h3 className="text-2xl font-bold text-text-primary mb-3">{dict.onboarding.step4_title}</h3>
                <p className="text-text-secondary leading-relaxed">{dict.onboarding.step4_description}</p>
              </div>
            </div>

            {/* Step 5 - Continuous Monitoring & Review */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center group">
              <div className="flex items-center mb-4 lg:mb-0 lg:mr-8 flex-shrink-0">
                <div className="w-20 h-20 bg-primary-gold rounded-2xl flex items-center justify-center mr-4 group-hover:bg-secondary-gold transition-colors duration-300">
                  <svg className="w-10 h-10 text-background-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-primary-gold font-bold text-2xl">05</div>
              </div>
              <div className="bg-surface-dark rounded-2xl p-6 flex-grow border border-primary-gold/10 group-hover:border-primary-gold/30 transition-colors">
                <h3 className="text-2xl font-bold text-text-primary mb-3">{dict.onboarding.step5_title}</h3>
                <p className="text-text-secondary leading-relaxed">{dict.onboarding.step5_description}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6 text-lg">
            {dict.onboarding.readyPrompt || 'Ready to start your copy trading journey?'}
          </p>
          <a 
            href="https://calendly.com/costadaino/15min?fbclid=PAVERFWAMmWURleHRuA2FlbQIxMAABpwoCkCntYXgV4wbQ3JluQcJFhFCMAAIAuqpe0aOdLUQHoVd2Ot0_c6VHufDQ_aem_rUYMIZIOloG7laACXAAxDg&month=2025-09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary-gold text-background-dark font-bold text-lg py-4 px-10 rounded-xl hover:bg-secondary-gold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary-gold/25 group"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="mr-2">{dict.onboarding.cta_button}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
