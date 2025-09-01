import { getDictionary } from '@/lib/dictionaries'
import Hero from '@/components/Hero'
import Explanation from '@/components/Explanation'
import Portfolios from '@/components/Portfolios'
import Testimonials from '@/components/Testimonials'
import Trust from '@/components/Trust'
import Onboarding from '@/components/Onboarding'
import Faq from '@/components/Faq'
import Newsletter from '@/components/Newsletter'

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  // Dictionary loaded for potential future use
  await getDictionary(lang)
  return (
    <main>
      <Hero lang={lang} />
      <Explanation lang={lang} />
      <Portfolios />
      <Testimonials />
      <Trust />
      <Onboarding />
      <Faq />
      <Newsletter />
    </main>
  )
}
