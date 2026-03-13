import { Metadata } from 'next'
import { ServicePage } from '@/components/ServicePage'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Commercial Deck Coatings & Waterproofing',
  description:
    'Durable deck coating and waterproofing systems for common areas, breezeways, landings, decks, and pool decks. Enhance safety and style with epoxy floor coatings.',
  path: '/services/deck-coatings',
})

export default function DeckCoatingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Commercial Deck Coatings & Waterproofing',
              description:
                'Durable deck coating and waterproofing systems for commercial properties.',
              url: 'https://eccexteriors.com/services/deck-coatings',
            })
          ),
        }}
      />
      <ServicePage
        title="Deck Coatings"
        subtitle="Enhance safety and style with durable waterproofing systems."
        heroImage="/images/projects/s11.jpg"
      >
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            There are multiple options available for deck coating, each offering a range of
            benefits. Beyond refreshing the aesthetic appeal, our coatings bring significant
            safety and structural advantages.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Comprehensive Coverage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our floor coatings application services result in a resilient, long-lasting surface
            for your common areas, breezeways, landings, decks, and pool decks. We ensure every
            surface is properly prepared and coated for maximum durability.
          </p>

          <h2 className="font-heading text-2xl font-bold text-gray-900 mt-12 mb-4">
            Expert Consultation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At ECC Exteriors, we conduct a thorough assessment of your property and guide you
            through the best product, color, and texture options to meet your waterproofing needs.
            Contact us today, and let us explore the advantages of epoxy floor coatings while
            providing color and pattern solutions tailored to your preferences.
          </p>
        </div>
      </ServicePage>
    </>
  )
}
