import { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Commercial Roof & Gutter Replacement',
  description:
    'Expert roof and gutter replacement for commercial properties. Storm damage assessment, insurance claim navigation, and capital improvement solutions for multi-family and hospitality buildings.',
  path: '/services/roof-replacement',
})

export default function RoofReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Commercial Roof & Gutter Replacement',
              description:
                'Expert roof and gutter replacement for commercial properties including storm damage assessment and insurance claim navigation.',
              url: 'https://eccexteriors.com/services/roof-replacement',
            })
          ),
        }}
      />
      <ServicePage
        title="Roof & Gutter Replacement"
        subtitle="Protecting your investment from the top down."
        heroImage="/images/projects/m14.jpg"
      >
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            As part of our comprehensive list of exterior renovation services, ECC Exteriors proudly
            offers roof replacement to address your Capital Improvement needs. Your roof is the
            first line of defense for your property — we ensure it performs at its best.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Capital Improvement Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you&apos;re managing a multi-family community, an HOA property, or a commercial
            building, our team provides expert assessment and execution of roof replacement projects
            that protect your investment and enhance property value.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Storm Damage &mdash; Hail and Wind
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dealing with the aftermath of storm-damaged roofs and navigating the complexities of
            insurance claims can be an overwhelming experience. ECC Exteriors specializes in
            simplifying storm damage assessments and insurance claim processes, guiding you through
            every step so you can focus on what matters most.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Gutter Replacement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Properly functioning gutters are essential for directing water away from your building
            and protecting the foundation. We identify and fix gutter issues as part of our
            comprehensive roof replacement services.
          </p>
        </div>
      </ServicePage>
    </>
  )
}
