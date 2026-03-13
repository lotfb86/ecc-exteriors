'use client'

import { useState } from 'react'

interface VideoEmbedProps {
  youtubeId: string
  title: string
}

export function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`

  if (!loaded) {
    return (
      <button
        className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden group cursor-pointer"
        onClick={() => setLoaded(true)}
        aria-label={`Play video: ${title}`}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-copper/90 group-hover:bg-copper rounded-full flex items-center justify-center transition-colors shadow-xl">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-sm font-medium truncate">{title}</p>
        </div>
      </button>
    )
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
