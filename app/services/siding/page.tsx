import { Metadata } from 'next'
import Image from 'next/image'
import { ServicePage } from '@/components/ServicePage'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Commercial Siding Installation & Replacement',
  description:
    'Expert fiber cement siding installation for multi-family and commercial properties. Weather barrier systems, precision flashing, and a meticulous installation process.',
  path: '/services/siding',
})

export default function SidingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Commercial Siding Installation',
              description:
                'Expert fiber cement siding installation for multi-family and commercial properties.',
              url: 'https://eccexteriors.com/services/siding',
            })
          ),
        }}
      />
      <ServicePage
        title="Siding"
        subtitle="Elevating properties with our siding expertise."
        heroImage="/images/projects/m18.jpg"
      >
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Fiber cement siding is a resilient and dependable choice, offering robust protection
            against the elements. Available in a range of looks, styles, colors, and textures,
            each engineered to suit different climates.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Our Installation Process
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ECC Exteriors follows a meticulous process for every siding project. We commence by
            wrapping your entire buildings in a weather barrier, utilizing materials such as Tyvek
            or Jumbo Tex based on your preference.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            In addition, we install ice and water shield around all windows, doors, and both
            inside and outside corners, guaranteeing weather-tight integrity.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            To facilitate proper drainage, we meticulously place flashing at all doors and
            windows, ensuring long-term performance and protection.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Long-Term Value
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Investing in new siding not only enhances the visual appeal but also mitigates future
            maintenance concerns, providing you with a look you&apos;ll adore and peace of mind
            for years to come.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['m18', 's19', 's20'].map((img) => (
            <Image
              key={img}
              src={`/images/projects/${img}.jpg`}
              alt="Commercial fiber cement siding installation by ECC Exteriors"
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
