import Link from 'next/link'
import Image from 'next/image'
import { getDictionary } from '@/lib/dictionaries'
import LanguageSwitcher from './LanguageSwitcher'

export default async function Header({ lang }: { lang: string }) {
  const dict = await getDictionary(lang)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href={`/${lang}`} className="flex items-center">
              <Image
                src="/your-logo.png"
                alt="Mirror Trades"
                width={300}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link href={`/${lang}#about`} className="text-text-secondary hover:text-primary-gold transition-colors">{dict.navigation.about}</Link>
            <Link href={`/${lang}#portfolios`} className="text-text-secondary hover:text-primary-gold transition-colors">{dict.navigation.portfolios}</Link>
            <Link href={`/${lang}#team`} className="text-text-secondary hover:text-primary-gold transition-colors">{dict.navigation.team}</Link>
            <Link href={`/${lang}#testimonials`} className="text-text-secondary hover:text-primary-gold transition-colors">{dict.navigation.testimonials}</Link>
            <a href="mailto:info@mirrortrades.gr" className="text-text-secondary hover:text-primary-gold transition-colors">{dict.navigation.contact}</a>
          </nav>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
