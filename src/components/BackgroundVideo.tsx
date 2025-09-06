'use client'

import { useState, useEffect } from 'react'

interface BackgroundVideoProps {
  src: string
  poster?: string
  fallbackImage?: string
}

export default function BackgroundVideo({ src, poster, fallbackImage = '/finance-bg.jpg' }: BackgroundVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)
      setIsMobile(isMobileDevice)
      console.log('Device check:', { userAgent, isMobileDevice })
    }
    
    checkDevice()
  }, [])

  console.log('BackgroundVideo rendering with src:', src, 'isMobile:', isMobile)

  if (isMobile) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => {
          console.log('Video loaded successfully')
          setVideoLoaded(true)
        }}
        onCanPlay={() => {
          console.log('Video can play')
        }}
        onError={(e) => {
          console.error('Video error:', e)
          console.error('Error details:', e.currentTarget.error)
        }}
        onLoadStart={() => console.log('Video loading started')}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  )
}