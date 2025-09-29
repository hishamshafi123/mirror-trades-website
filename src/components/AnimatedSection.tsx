'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fadeUp' | 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'
  threshold?: number
  duration?: string
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fadeUp',
  threshold = 0.1,
  duration = 'duration-700'
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    delay,
    threshold,
    triggerOnce: true
  })

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ${duration} ease-out`
    
    switch (animation) {
      case 'fadeUp':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`
      case 'fadeIn':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        }`
      case 'slideUp':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`
      case 'slideLeft':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`
      case 'slideRight':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`
      case 'scale':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`
      default:
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`
    }
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  )
}