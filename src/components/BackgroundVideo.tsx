'use client'

interface BackgroundVideoProps {
  src: string
  poster?: string
}

export default function BackgroundVideo({ src, poster }: BackgroundVideoProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  )
}