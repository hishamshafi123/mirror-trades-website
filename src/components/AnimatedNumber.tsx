'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedNumberProps {
  value: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedNumber({
  value,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
  className = ''
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const { elementRef, isVisible } = useScrollAnimation({ delay })

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp
      }

      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easeOut * value)
      
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value) // Ensure final value is exact
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, value, duration])

  return (
    <span ref={elementRef} className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}