import { Metadata } from 'next'
import Image from 'next/image'
import { ServicePage } from '@/components/ServicePage'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Flat Roof Coatings for Commercial Properties',
  description:
    'Cost-effective silicone and acrylic flat roof coatings for apartments, hotels, shopping centers, and commercial buildings. Extend roof lifespan and reduce energy costs.',
  path: '/services/roof-coatings',
})

export default function RoofCoatingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Flat Roof Coatings',
              description:
                'Cost-effective silicone and acrylic flat roof coatings for commercial properties.',
              url: 'https://eccexteriors.com/services/roof-coatings',
            })
          ),
        }}
      />
      <ServicePage
        title="Flat Roof Coatings"
        subtitle="A cost-effective alternative that extends your roof's lifespan."
        heroImage="/images/projects/m16.jpg"
      >
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Silicone or acrylic roof coatings offer a myriad of benefits for flat roofs on
            apartments, shopping centers, hotels, and various commercial buildings.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Key Benefits
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-copper font-bold">&#8226;</span>
              Exceptional durability and weather resistance
            </li>
            <li className="flex gap-3">
              <span className="text-copper font-bold">&#8226;</span>
              Seamless, flexible membrane that withstands temperature variations and UV exposure
            </li>
            <li className="flex gap-3">
              <span className="text-copper font-bold">&#8226;</span>
              Guards against water infiltration and moisture-related damage
            </li>
            <li className="flex gap-3">
              <span className="text-copper font-bold">&#8226;</span>
              Low maintenance with self-adhesion capabilities
            </li>
            <li className="flex gap-3">
              <span className="text-copper font-bold">&#8226;</span>
              Reflective surface that reduces energy costs and cooling demands
            </li>
            <li className="flex gap-3">
              <span className="text-copper font-bold">&#8226;</span>
              Light color minimizes heat absorption for cooler indoor environments
            </li>
            <li className="flex gap-3">
              <span className="text-copper font-bold">&#8226;</span>
              Extends overall roof lifespan significantly
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-8">
            Silicone or acrylic roof coatings are a highly effective and economical solution for
            flat roofs in apartments, shopping centers, hotels, and other commercial buildings.
            Contact us to learn how roof coatings can save you money while protecting your property.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['m4', 's15', 's17'].map((img) => (
            <Image
              key={img}
              src={`/images/projects/${img}.jpg`}
              alt="Flat roof coating application on a commercial property by ECC Exteriors"
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
