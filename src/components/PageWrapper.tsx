'use client'

import { ReactNode } from 'react'
import { usePageLoadAnimation } from '@/hooks/useScrollAnimation'

interface PageWrapperProps {
  children: ReactNode
  delay?: number
}

export default function PageWrapper({ children, delay = 100 }: PageWrapperProps) {
  const isLoaded = usePageLoadAnimation(delay)

  return (
    <div 
      className={`transition-all duration-1000 ease-out ${
        isLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  )
}