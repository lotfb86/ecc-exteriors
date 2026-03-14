import { Metadata } from 'next'
import { VideoEmbed } from '@/components/VideoEmbed'
import { createMetadata } from '@/lib/metadata'
import { CTASection } from '@/components/CTASection'
import { videoObjectSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Project Videos — See Our Work in Action',
  description:
    'Watch ECC Exteriors project videos showcasing our exterior painting, roofing, siding, and renovation work on multi-family and commercial properties nationwide.',
  path: '/our-work/videos',
})

const videos = [
  { id: 'WTSaZ4vHrKU', title: 'The 411 on S44', description: 'Learn about the Uniflex S44 silicone roof coating system used by ECC Exteriors on commercial flat roofs.' },
  { id: 'P0bMH_-sA3k', title: 'ECC Exteriors', description: 'An overview of ECC Exteriors — nationwide commercial exterior renovation experts since 1994.' },
  { id: 'YWNMxkMYMDg', title: '717 Olympic Helipad — Downtown Los Angeles', description: 'ECC Exteriors renovation of the 717 Olympic building helipad in downtown Los Angeles.' },
  { id: 'zadyyUXDHPw', title: 'Storm Damage Services', description: 'How ECC Exteriors handles storm damage roof repair and insurance claim navigation for commercial properties.' },
  { id: 'MmcLdzl2G8s', title: 'ECC Commercial Services', description: 'A look at the full range of commercial exterior renovation services offered by ECC Exteriors.' },
  { id: 'hVbK-QFSFoE', title: 'One Santa Fe', description: 'ECC Exteriors project spotlight on the One Santa Fe property exterior renovation.' },
  { id: '7c1oBK-qfU0', title: 'Capital Improvement Planning for 2024', description: 'Tips and strategies for capital improvement planning from ECC Exteriors.' },
]

export default function VideosPage() {
  const videoSchemaData = videoObjectSchema(
    videos.map((v) => ({
      name: v.title,
      description: v.description,
      youtubeId: v.id,
    }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemaData) }}
      />
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
