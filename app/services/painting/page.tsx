import { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Exterior Painting for Multi-Family & Commercial Properties',
  description:
    'Professional exterior painting with 30+ years of experience. 5-year warranty, thorough preparation, and meticulous quality assurance for apartments, HOA, and commercial buildings.',
  path: '/services/painting',
})

export default function PaintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Commercial Exterior Painting',
              description:
                'Professional exterior painting services for multi-family, HOA, commercial, and hospitality properties with a 5-year warranty.',
              url: 'https://eccexteriors.com/services/painting',
            })
          ),
        }}
      />
      <ServicePage
        title="Exterior Painting"
        subtitle="Exterior painting is what got us to where we are today."
        heroImage="/images/projects/m1.jpg"
      >
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Since our very first exterior painting project three decades ago, our customers have
            witnessed the epitome of professionalism in exterior renovations. Each project is
            entrusted to a seasoned, knowledgeable superintendent who oversees the project from
            inception to completion.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Thorough Preparation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Thorough preparation is the cornerstone of an outstanding exterior paint job; anything
            less jeopardizes the paint quality and longevity. We conduct a comprehensive assessment,
            addressing any problematic areas. Proper caulking, scraping, and priming is completed
            before painting starts.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Quality Assurance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We proactively identify and touch up any imperfections before the final inspection,
            saving you time and ensuring top-notch quality. Our dedicated team ensures every surface
            meets our exacting standards.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            5-Year Warranty
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We stand by the quality and value of our repainting work, offering a 5-year warranty
            backed by our extensive history of satisfying thousands of customers.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['m1', 'm2', 'm8', 'm10'].map((img) => (
            <img
              key={img}
              src={`/images/projects/${img}.jpg`}
              alt="Exterior painting project"
              className="rounded-lg aspect-square object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </ServicePage>
    </>
  )
}
