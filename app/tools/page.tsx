import { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Interactive Tools for Property Managers | ECC Exteriors',
  description:
    'Free interactive tools for property managers: estimate commercial exterior renovation costs and plan project timelines for painting, roofing, siding, and deck coatings.',
  path: '/tools',
})

const tools = [
  {
    title: 'Renovation Cost Estimator',
    description:
      'Get a ballpark estimate for your next exterior renovation project. Select your service type, property size, and region to see estimated cost ranges for commercial painting, roof replacement, roof coatings, siding, and deck coatings.',
    href: '/tools/cost-estimator',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6h.006v.008h-.006v-.008zm0 2.25h.006v.008h-.006v-.008zm0 2.25h.006v.008h-.006v-.008zm0 2.25h.006v.008h-.006v-.008zm2.505-6h.005v.008h-.005v-.008zm0 2.25h.005v.008h-.005v-.008zM12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 000-1.5h-2.25V7.5a.75.75 0 00-.75-.75z" />
      </svg>
    ),
    iconFallback: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Project Timeline Planner',
    description:
      'Plan your renovation timeline with our interactive tool. See expected project phases and durations for different service types and project scopes, from small 1-3 building projects to large 11+ building renovations.',
    href: '/tools/timeline-planner',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
]

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://eccexteriors.com' },
              { name: 'Tools', url: 'https://eccexteriors.com/tools' },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-wide">
          <p className="text-copper-light font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Free Resources
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-4xl">
            Interactive Tools for Property Managers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Plan your next exterior renovation project with our free estimating and scheduling tools.
            Get instant cost ranges and project timelines.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block bg-white border border-gray-200 rounded-xl p-8 hover:border-copper hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-lg flex items-center justify-center text-navy mb-6 group-hover:bg-copper/10 group-hover:text-copper transition-colors">
                  {tool.icon}
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-navy transition-colors">
                  {tool.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{tool.description}</p>
                <span className="inline-flex items-center gap-2 text-copper-dark font-semibold text-sm">
                  Try It Free
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Get an Exact Quote?"
        subtext="Our tools provide estimates. Contact us for a detailed, no-obligation proposal tailored to your property."
      />
    </>
  )
}
