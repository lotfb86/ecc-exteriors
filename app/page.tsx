import Link from 'next/link'
import Image from 'next/image'
import { StatCounter } from '@/components/StatCounter'
import { VideoEmbed } from '@/components/VideoEmbed'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { PartnerLogoScroll } from '@/components/PartnerLogoScroll'
import { CTASection } from '@/components/CTASection'
import { organizationSchema, reviewSchema } from '@/lib/schema'

const services = [
  {
    name: 'Exterior Painting',
    href: '/services/painting',
    description: 'Thirty years of expertise. Rigorous preparation, meticulous execution, and a 5-year warranty on every multi-family and commercial project.',
    image: '/images/projects/m1.jpg',
  },
  {
    name: 'Roof Replacement',
    href: '/services/roof-replacement',
    description: 'Full roof and gutter replacement for capital improvements, plus storm damage repair with complete insurance claim navigation.',
    image: '/images/projects/m2.jpg',
  },
  {
    name: 'Flat Roof Coatings',
    href: '/services/roof-coatings',
    description: 'Silicone and acrylic coating systems that extend roof life, reduce energy costs, and eliminate leaks — at a fraction of replacement cost.',
    image: '/images/projects/m4.jpg',
  },
  {
    name: 'Siding',
    href: '/services/siding',
    description: 'Fiber cement siding installation with full weather barrier systems, precision flashing, and ice-and-water shielding at every opening.',
    image: '/images/projects/m5.jpg',
  },
  {
    name: 'Deck Coatings',
    href: '/services/deck-coatings',
    description: 'High-performance waterproofing for breezeways, landings, pool decks, and common areas — enhancing safety and curb appeal.',
    image: '/images/projects/m6.jpg',
  },
]

const areas = [
  'Arizona', 'California', 'Colorado', 'Florida', 'Idaho',
  'Nevada', 'Oregon', 'Utah', 'Texas', 'Washington',
]

const caseStudies = [
  {
    name: 'Skye Belltown',
    location: 'Seattle, WA',
    description: 'A landmark Seattle high-rise visible across the entire skyline — painted twice by ECC for successive value-add repositioning and full rebranding campaigns.',
    image: '/images/projects/s3.jpg',
  },
  {
    name: 'The Marks Cherry Hills',
    location: 'Denver, CO',
    description: 'A head-to-toe transformation — complete re-roofing, full siding replacement, new deck coatings, and a striking exterior repaint that redefined the community.',
    image: '/images/projects/s7.jpg',
  },
  {
    name: 'The Felix',
    location: 'Project Recap',
    description: 'Completed in 2022, this property received a full Uniflex S44 silicone coating system — extending roof life by 15+ years at a fraction of tear-off cost.',
    image: '/images/projects/s9.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema()) }}
      />

      {/* Hero — Video Background */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/heroes/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/OceanEdit.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-navy-dark/50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-copper-light font-heading font-semibold text-sm sm:text-base uppercase tracking-widest mb-4">
              Nationwide Exterior Renovations
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Commercial Exterior
              <br />
              <span className="text-copper-light">Renovation Experts</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              Multi-family, HOA, commercial, and hospitality exterior renovations.
              3,000+ completed projects nationwide since 1994.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Request Free Estimate
              </Link>
              <Link
                href="/our-work"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal py-12 sm:py-16">
        <div className="container-wide">
          <p className="text-center text-sm uppercase tracking-widest text-gray-400 font-heading mb-8">
            Over the Last 2 Years We Have Applied
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            <StatCounter value="750000" label="Gallons of Paint" />
            <StatCounter value="250000000" label="Feet of Siding & Trim" />
            <StatCounter value="65000000" label="Sq Ft of Asphalt Shingles" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding" aria-labelledby="services-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive exterior renovation services for commercial properties of every scale.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={`${service.name} — commercial exterior renovation by ECC Exteriors`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 group-hover:text-navy transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-copper-dark group-hover:text-navy transition-colors">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-gray-50" aria-labelledby="projects-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 id="projects-heading" className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              3,000+ completed projects across the nation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <div
                key={project.name}
                className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.location} exterior renovation by ECC Exteriors`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-copper font-semibold mb-1">
                    {project.location}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Feature */}
      <section className="section-padding" aria-labelledby="videos-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 id="videos-heading" className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See Our Work in Action
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <VideoEmbed youtubeId="P0bMH_-sA3k" title="ECC Exteriors" />
            <VideoEmbed youtubeId="MmcLdzl2G8s" title="ECC Commercial Services" />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/our-work/videos"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
            >
              Watch All Videos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Partner Logos */}
      <PartnerLogoScroll />

      {/* Areas Served */}
      <section className="section-padding" aria-labelledby="areas-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 id="areas-heading" className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-gray-600">
              Nationwide coverage with offices in strategic locations across the country.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {areas.map((area) => (
              <Link
                key={area}
                href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="group text-center p-6 rounded-xl border border-gray-200 hover:border-copper hover:shadow-md transition-all"
              >
                <span className="font-heading font-bold text-gray-900 group-hover:text-navy transition-colors">
                  {area}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
