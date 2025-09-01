import { getDictionary } from '@/lib/dictionaries'

export default async function Hero({ lang }: { lang: string }) {
  const dict = await getDictionary(lang)
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-background-dark opacity-50"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
          {dict.hero.tagline}
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-8">
          {dict.hero.subTagline}
        </p>
        <a href="#contact" className="bg-primary-gold text-background-dark font-bold py-3 px-8 rounded-md hover:bg-secondary-gold transition-colors">
          {dict.hero.cta}
        </a>
      </div>
    </section>
  )
}
