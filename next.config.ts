import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/painting', destination: '/services/painting', permanent: true },
      { source: '/roof-replacement', destination: '/services/roof-replacement', permanent: true },
      { source: '/roof-coatings', destination: '/services/roof-coatings', permanent: true },
      { source: '/flat-roof-coatings', destination: '/services/roof-coatings', permanent: true },
      { source: '/siding', destination: '/services/siding', permanent: true },
      { source: '/deck-coatings', destination: '/services/deck-coatings', permanent: true },
      { source: '/video-gallery', destination: '/our-work/videos', permanent: true },
    ]
  },
}

export default nextConfig
