import { Metadata } from 'next'
import Image from 'next/image'
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

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 not-prose">
            {[
              { step: 1, title: 'Roof Inspection & Assessment', desc: 'A thorough inspection identifies storm damage, wear patterns, and structural concerns to determine the optimal replacement strategy.' },
              { step: 2, title: 'Scope & Insurance Coordination', desc: 'We develop a detailed scope of work and, when applicable, coordinate directly with your insurance adjuster on storm damage claims.' },
              { step: 3, title: 'Professional Installation', desc: 'Our certified crews remove the existing roof system and install new underlayment, shingles or TPO/EPDM, flashing, and gutters to manufacturer specifications.' },
              { step: 4, title: 'Final Inspection & Warranty', desc: 'Every roof is inspected for quality before handoff. We provide manufacturer warranties and stand behind our workmanship.' },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-lg p-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-copper text-white font-bold text-sm mb-3">
                  {item.step}
                </span>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['m14', 'm16', 's12', 's13'].map((img) => (
            <Image
              key={img}
              src={`/images/projects/${img}.jpg`}
              alt="Commercial roof and gutter replacement project by ECC Exteriors"
              width={400}
              height={400}
              className="rounded-lg aspect-square object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </ServicePage>
    </>
  )
}
