'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top on mount (page load/reload)
    window.scrollTo(0, 0)
    
    // Also set scroll restoration to manual to prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}