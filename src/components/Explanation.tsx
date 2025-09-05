import { getDictionary } from '@/lib/dictionaries'

export default async function Explanation({ lang }: { lang: string }) {
  const dict = await getDictionary(lang)
  return (
    <section id="explanation" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-secondary-gold/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-gold/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-gold/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-primary-gold via-white to-secondary-gold bg-clip-text text-transparent">
            {dict.explanation.title}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {dict.explanation.subtitle}
          </p>
          
          {/* What is Copy Trading Description */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 mb-16 max-w-4xl mx-auto border border-primary-gold/20 shadow-2xl shadow-primary-gold/10">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/30 to-secondary-gold/30 rounded-3xl blur-xl opacity-60"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-primary-gold/40">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-primary-gold to-white bg-clip-text text-transparent">
              What is Copy Trading?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {dict.explanation.what_is_copy_trading}
            </p>
          </div>
        </div>

        {/* How It Works - 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 - Choose a Trader */}
          <div className="group perspective-1000">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-primary-gold/30 hover:border-primary-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-gold/20 group-hover:rotate-y-6 transform-gpu">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-secondary-gold/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-28 h-28 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-primary-gold/30">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13 5V9C13 10.1 13.9 11 15 11V16L13 15V22H15V17L18 18V22H20V16C20 15.2 19.5 14.5 18.8 14.1L15 12V11C16.1 11 17 10.1 17 9V7L21 9ZM11 11V9C11 7.9 10.1 7 9 7H5C3.9 7 3 7.9 3 9V11H5V22H7V17H9V22H11V11H9V9H5V7L9 7C10.1 7 11 7.9 11 9V11Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-primary-gold to-white bg-clip-text text-transparent">
                  {dict.explanation.step1_title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {dict.explanation.step1_description}
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Start Copy Trading */}
          <div className="group perspective-1000">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-primary-gold/30 hover:border-primary-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-gold/20 group-hover:rotate-y-6 transform-gpu">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-secondary-gold/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-28 h-28 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-primary-gold/30">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12H16A4,4 0 0,0 12,8V6M12,18A6,6 0 0,1 6,12H8A4,4 0 0,0 12,16V18Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-primary-gold to-white bg-clip-text text-transparent">
                  {dict.explanation.step2_title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {dict.explanation.step2_description}
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Stop Anytime */}
          <div className="group perspective-1000">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-primary-gold/30 hover:border-primary-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-gold/20 group-hover:rotate-y-6 transform-gpu">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-secondary-gold/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-28 h-28 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-primary-gold/30">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M8,12A1,1 0 0,1 9,11H11V9A1,1 0 0,1 12,8A1,1 0 0,1 13,9V11H15A1,1 0 0,1 16,12A1,1 0 0,1 15,13H13V15A1,1 0 0,1 12,16A1,1 0 0,1 11,15V13H9A1,1 0 0,1 8,12Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-primary-gold to-white bg-clip-text text-transparent">
                  {dict.explanation.step3_title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {dict.explanation.step3_description}
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Monitor & Adjust */}
          <div className="group perspective-1000">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-primary-gold/30 hover:border-primary-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-gold/20 group-hover:rotate-y-6 transform-gpu">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-secondary-gold/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-28 h-28 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-primary-gold/30">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-primary-gold to-white bg-clip-text text-transparent">
                  {dict.explanation.step4_title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {dict.explanation.step4_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
