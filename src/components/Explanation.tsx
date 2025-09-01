import { getDictionary } from '@/lib/dictionaries'

export default async function Explanation({ lang }: { lang: string }) {
  const dict = await getDictionary(lang) as any
  return (
    <section id="about" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {dict.explanation.title}
          </h2>
          <p className="text-lg text-text-secondary mt-4">
            {dict.explanation.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-primary-gold mb-4">1</div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{dict.explanation.step1_title}</h3>
            <p className="text-text-secondary">
              {dict.explanation.step1_description}
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-primary-gold mb-4">2</div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{dict.explanation.step2_title}</h3>
            <p className="text-text-secondary">
              {dict.explanation.step2_description}
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-primary-gold mb-4">3</div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{dict.explanation.step3_title}</h3>
            <p className="text-text-secondary">
              {dict.explanation.step3_description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
