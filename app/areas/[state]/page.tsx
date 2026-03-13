import { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { CTASection } from '@/components/CTASection'

const stateData: Record<string, { name: string; office?: string; phone?: string }> = {
  arizona: { name: 'Arizona', office: 'Phoenix', phone: '(720) 577-3948' },
  california: { name: 'California', office: 'Irvine & San Jose', phone: '(949) 877-7534' },
  colorado: { name: 'Colorado', office: 'Denver (Corporate HQ)', phone: '(720) 577-3948' },
  florida: { name: 'Florida', office: 'Orlando', phone: '(720) 577-3948' },
  idaho: { name: 'Idaho', phone: '(720) 577-3948' },
  nevada: { name: 'Nevada', office: 'Las Vegas', phone: '(720) 577-3948' },
  oregon: { name: 'Oregon', office: 'Portland', phone: '(720) 577-3948' },
  utah: { name: 'Utah', office: 'Salt Lake City', phone: '(720) 577-3948' },
  texas: { name: 'Texas', office: 'Dallas & Austin', phone: '(214) 851-3533' },
  washington: { name: 'Washington', office: 'Seattle', phone: '(720) 577-3948' },
}

export function generateStaticParams() {
  return Object.keys(stateData).map((state) => ({ state }))
}

type PageProps = {
  params: Promise<{ state: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params
  const data = stateData[state]
  if (!data) return {}
  return createMetadata({
    title: `${data.name} Commercial Exterior Renovation Services`,
    description: `ECC Exteriors provides commercial exterior painting, roofing, siding, and deck coating services in ${data.name}. ${data.office ? `Local office in ${data.office}.` : ''} Request a free estimate today.`,
    path: `/areas/${state}`,
  })
}

const services = [
  { name: 'Exterior Painting', href: '/services/painting', description: 'Professional painting with 5-year warranty' },
  { name: 'Roof Replacement', href: '/services/roof-replacement', description: 'Complete roof and gutter replacement' },
  { name: 'Roof Coatings', href: '/services/roof-coatings', description: 'Cost-effective flat roof coating systems' },
  { name: 'Siding', href: '/services/siding', description: 'Fiber cement siding installation' },
  { name: 'Deck Coatings', href: '/services/deck-coatings', description: 'Waterproofing and deck coating systems' },
]

export default async function StateAreaPage({ params }: PageProps) {
  const { state } = await params
  const data = stateData[state]
  if (!data) return null

  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-wide">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-gray-500">/</span></li>
              <li className="text-copper-light">{data.name}</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            {data.name} Exterior Renovations
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Commercial exterior renovation services for multi-family, HOA, commercial,
            and hospitality properties in {data.name}.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Our Services in {data.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                ECC Exteriors provides comprehensive exterior renovation services throughout{' '}
                {data.name}. Our experienced teams deliver professional-grade painting, roofing,
                siding, and deck coating solutions for properties of every scale.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="p-6 rounded-xl border border-gray-200 hover:border-copper hover:shadow-md transition-all group"
                  >
                    <h3 className="font-heading font-bold text-gray-900 group-hover:text-navy transition-colors mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              {data.office && (
                <div className="bg-gray-50 rounded-xl p-8 mb-6">
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                    {data.name} Office
                  </h3>
                  <p className="text-gray-600 mb-2">{data.office}</p>
                  {data.phone && (
                    <a
                      href={`tel:${data.phone.replace(/\D/g, '')}`}
                      className="text-navy font-semibold hover:text-copper transition-colors"
                    >
                      {data.phone}
                    </a>
                  )}
                </div>
              )}
              <div className="bg-copper/5 rounded-xl p-8">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  Get a Free Estimate
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Contact our {data.name} team for a free estimate on your next project.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-copper hover:bg-copper-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Request Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading={`Ready to Start Your ${data.name} Project?`} />
    </>
  )
}
