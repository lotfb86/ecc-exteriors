import { Metadata } from 'next'
import { StatCounter } from '@/components/StatCounter'
import { PartnerLogoScroll } from '@/components/PartnerLogoScroll'
import { CTASection } from '@/components/CTASection'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'About ECC Exteriors — Commercial Renovation Experts Since 1994',
  description:
    'ECC Exteriors has been a leader in commercial exterior renovations since 1994. From Denver to nationwide operations, we are one of the largest exterior capital improvement contractors in the Western U.S.',
  path: '/about',
})

const milestones = [
  { year: '1994', event: 'Founded in Denver, CO specializing in exterior painting for apartment communities' },
  { year: '2000s', event: 'Expanded services to wood replacement, re-siding, floor coatings, and roof replacement' },
  { year: '2008', event: 'Began long-term partnerships with major clients like Berkshire Communities' },
  { year: '2010s', event: 'Expanded to multiple states across the Western U.S.' },
  { year: 'Today', event: 'One of the largest Exterior Capital Improvement contractors in the Western U.S. with 10+ offices nationwide' },
]

const manufacturers = Array.from({ length: 11 }, (_, i) => `manulogo${i + 1}`)

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-wide">
          <p className="text-copper-light font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Since 1994
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-4xl">
            Reliable Excellence, Redefining Contracting
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            From a single painting crew in Denver to one of the largest exterior capital
            improvement contractors in the Western United States.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              ECC Exteriors began operations in the Denver Metro area in 1994, specializing in the
              exterior painting of apartment communities. Owners, investors, and management companies
              quickly learned that, unlike many painting contractors, we are reliable, easy to do
              business with, and proudly stand by our work.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6">
              To fulfill the needs of our customers, ECC Exteriors began offering services such as
              wood replacement, re-siding, floor coatings, and roof replacement. Once we gained the
              praise and trust of major companies, we began expanding our services to other states.
            </p>
            <p className="text-gray-700 leading-relaxed mt-6">
              ECC Exteriors is now one of the largest Exterior Capital Improvement contractors in the
              Western U.S. With our Corporate office based in Denver, CO, and field offices in
              Irvine, San Jose, Dallas, Phoenix, Salt Lake City, Seattle, Las Vegas, Austin, Orlando,
              and Portland.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 sm:-translate-x-px" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <span className="font-heading font-bold text-copper text-lg">{m.year}</span>
                    <p className="text-gray-600 mt-1">{m.event}</p>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-copper rounded-full -translate-x-1.5 mt-1.5" />
                  <div className="sm:hidden pl-10">
                    <span className="font-heading font-bold text-copper text-lg">{m.year}</span>
                    <p className="text-gray-600 mt-1">{m.event}</p>
                  </div>
                  <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            <StatCounter value="750000" label="Gallons of Paint Applied" />
            <StatCounter value="250000000" label="Feet of Siding & Trim Installed" />
            <StatCounter value="65000000" label="Sq Ft of Asphalt Shingles" />
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnerLogoScroll />

      {/* Manufacturers */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">
            Suppliers &amp; Manufacturers We Work With
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {manufacturers.map((m) => (
              <img
                key={m}
                src={`/images/manufacturers/${m}.png`}
                alt="Manufacturer partner"
                className="h-10 sm:h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
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
