import { getDictionary } from '@/lib/dictionaries'
import Hero from '@/components/Hero'
import Explanation from '@/components/Explanation'
import Portfolios from '@/components/Portfolios'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Trust from '@/components/Trust'
import Onboarding from '@/components/Onboarding'
import Faq from '@/components/Faq'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import PageWrapper from '@/components/PageWrapper'
import AnimatedSection from '@/components/AnimatedSection'
import RiskWarningModal from '@/components/RiskWarningModal'
import FloatingCTA from '@/components/FloatingCTA'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang)
  return (
    <>
      <PageWrapper>
        <main>
          <RiskWarningModal dictionary={dict} lang={lang} />
          
          <AnimatedSection animation="fadeIn" delay={200}>
            <Hero dict={dict} lang={lang} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <Explanation lang={lang} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={150}>
            <Portfolios lang={lang} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <Testimonials lang={lang} dict={dict} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={150}>
            <Trust lang={lang} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <Onboarding lang={lang} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={150}>
            <Faq dictionary={dict} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <Team lang={lang} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <Newsletter dictionary={dict} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={100}>
            <Footer dictionary={dict} lang={lang} />
          </AnimatedSection>
        </main>
      </PageWrapper>
      
      <FloatingCTA dict={dict} />
    </>
  )
}
