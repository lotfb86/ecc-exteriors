import { Metadata } from 'next'
import { VideoEmbed } from '@/components/VideoEmbed'
import { createMetadata } from '@/lib/metadata'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = createMetadata({
  title: 'Project Videos — See Our Work in Action',
  description:
    'Watch ECC Exteriors project videos showcasing our exterior painting, roofing, siding, and renovation work on multi-family and commercial properties nationwide.',
  path: '/our-work/videos',
})

const videos = [
  { id: 'WTSaZ4vHrKU', title: 'The 411 on S44' },
  { id: 'P0bMH_-sA3k', title: 'ECC Exteriors' },
  { id: 'YWNMxkMYMDg', title: '717 Olympic Helipad — Downtown Los Angeles' },
  { id: 'zadyyUXDHPw', title: 'Storm Damage Services' },
  { id: 'MmcLdzl2G8s', title: 'ECC Commercial Services' },
  { id: 'hVbK-QFSFoE', title: 'One Santa Fe' },
  { id: '7c1oBK-qfU0', title: 'Capital Improvement Planning for 2024' },
]

export default function VideosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-wide">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Video Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            See our commitment to enhancing and transforming the exteriors of multi-family,
            HOA, commercial, and hospitality properties.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <VideoEmbed
                key={video.id}
                youtubeId={video.id}
                title={video.title}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
