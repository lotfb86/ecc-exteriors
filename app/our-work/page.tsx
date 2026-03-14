import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = createMetadata({
  title: 'Our Work — 3,000+ Completed Projects',
  description:
    'Browse 3,000+ completed exterior renovation projects across the nation. Multi-family, HOA, commercial, and hospitality property transformations by ECC Exteriors.',
  path: '/our-work',
})

const projects = [
  {
    name: 'Skye Belltown',
    location: 'Seattle, WA',
    services: ['Exterior Painting'],
    description: 'Iconic Seattle property visible citywide. Painted twice for value-add and rebranding initiatives.',
    image: '/images/projects/s3.jpg',
  },
  {
    name: 'The Marks Cherry Hills',
    location: 'Denver, CO',
    services: ['Roof Replacement', 'Siding', 'Deck Coatings', 'Painting'],
    description: 'Comprehensive rebranding: complete re-roofing, siding replacement, new decking areas, and exterior repaint.',
    image: '/images/projects/s7.jpg',
  },
  {
    name: 'The Felix',
    location: 'Project Recap',
    services: ['Roof Coatings'],
    description: '2022 completion using Uniflex S44 silicone coating system as a cost-effective roofing solution for value-add investment.',
    image: '/images/projects/s9.jpg',
  },
]

const galleryImages = [
  'm1', 'm2', 'm4', 'm5', 'm6', 'm8', 'm10', 'm14', 'm16', 'm18',
  's3', 's7', 's9', 's11', 's12', 's13', 's15', 's17', 's19', 's20',
]

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-wide">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Our Work
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Over 3,000 completed projects across the nation — multi-family, HOA,
            commercial, and hospitality property transformations.
          </p>
          <Link
            href="/our-work/videos"
            className="mt-6 inline-flex items-center gap-2 text-copper-light hover:text-copper font-semibold transition-colors"
          >
            Watch Project Videos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10">
            Featured Projects
          </h2>
          <div className="space-y-16">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <Image
                    src={project.image}
                    alt={`${project.name} in ${project.location} — exterior renovation by ECC Exteriors`}
                    width={800}
                    height={600}
                    className="rounded-xl w-full aspect-[4/3] object-cover shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-sm uppercase tracking-widest text-copper font-semibold mb-2">
                    {project.location}
                  </p>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-navy/5 text-navy"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10">
            Project Gallery
          </h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img) => (
              <Image
                key={img}
                src={`/images/projects/${img}.jpg`}
                alt={`Commercial exterior renovation project by ECC Exteriors — photo ${img}`}
                width={600}
                height={600}
                className="rounded-lg w-full break-inside-avoid"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
