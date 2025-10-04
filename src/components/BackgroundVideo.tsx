'use client'

import { useState, useEffect } from 'react'

interface BackgroundVideoProps {
  src: string
  fallbackImage?: string
}

export default function BackgroundVideo({ src, fallbackImage = '/finance-bg.jpg' }: BackgroundVideoProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)
      setIsMobile(isMobileDevice)
      console.log('Device check:', { userAgent, isMobileDevice })
    }

    checkDevice()

    // Pre-check if video source exists
    if (src) {
      fetch(src, { method: 'HEAD' })
        .catch(() => {
          console.warn(`Video file ${src} not found, using fallback image`)
          setVideoError(true)
        })
    }
  }, [src])

  console.log('BackgroundVideo rendering with src:', src, 'isMobile:', isMobile)

  if (isMobile) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {videoError ? (
        // Fallback image when video fails
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url('${fallbackImage}')` }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => {
            console.log('Video loaded successfully')
          }}
          onCanPlay={() => {
            console.log('Video can play')
          }}
          onError={(e) => {
            const videoElement = e.currentTarget as HTMLVideoElement
            const error = videoElement.error

            // Create a safe error log object
            const errorInfo = {
              errorCode: error?.code || 'unknown',
              errorMessage: error?.message || 'Video failed to load',
              videoSrc: videoElement.src || src,
              networkState: videoElement.networkState || 'unknown',
              readyState: videoElement.readyState || 'unknown',
              currentTime: videoElement.currentTime || 0
            }

            console.warn('Video failed to load, using fallback image:', errorInfo)

            // Set fallback behavior
            setVideoError(true)
          }}
          onLoadStart={() => console.log('Video loading started')}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-40"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  )
}