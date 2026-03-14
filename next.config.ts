import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old service URLs
      { source: '/painting', destination: '/services/painting', permanent: true },
      { source: '/exterior-painting', destination: '/services/painting', permanent: true },
      { source: '/roof-replacement', destination: '/services/roof-replacement', permanent: true },
      { source: '/roof-coatings', destination: '/services/roof-coatings', permanent: true },
      { source: '/flat-roof-coatings', destination: '/services/roof-coatings', permanent: true },
      { source: '/siding', destination: '/services/siding', permanent: true },
      { source: '/siding-installation', destination: '/services/siding', permanent: true },
      { source: '/deck-coatings', destination: '/services/deck-coatings', permanent: true },
      { source: '/floor-coatings', destination: '/services/deck-coatings', permanent: true },
      // Old page URLs
      { source: '/video-gallery', destination: '/our-work/videos', permanent: true },
      { source: '/videos', destination: '/our-work/videos', permanent: true },
      { source: '/gallery', destination: '/our-work', permanent: true },
      { source: '/portfolio', destination: '/our-work', permanent: true },
      { source: '/projects', destination: '/our-work', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/estimate', destination: '/contact', permanent: true },
      { source: '/free-estimate', destination: '/contact', permanent: true },
      { source: '/services', destination: '/#services', permanent: true },
      // Old WordPress patterns
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
