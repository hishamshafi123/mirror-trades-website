'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: string) => {
    if (!pathname) return
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  const currentLocale = pathname?.split('/')[1] || 'en'
  
  return (
    <div className="flex items-center space-x-1 bg-surface-dark rounded-md p-1">
      <button 
        onClick={() => handleLocaleChange('en')} 
        className={`px-3 py-1 rounded text-sm font-bold transition-all ${
          currentLocale === 'en' 
            ? 'bg-primary-gold text-background-dark' 
            : 'text-text-secondary hover:text-primary-gold'
        }`}
      >
        EN
      </button>
      <button 
        onClick={() => handleLocaleChange('el')} 
        className={`px-3 py-1 rounded text-sm font-bold transition-all ${
          currentLocale === 'el' 
            ? 'bg-primary-gold text-background-dark' 
            : 'text-text-secondary hover:text-primary-gold'
        }`}
      >
        GR
      </button>
    </div>
  )
}
