import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Blog — Exterior Renovation Insights',
  description:
    'Expert insights on commercial exterior renovations, painting, roofing, siding, and property maintenance from the ECC Exteriors team.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-wide">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert insights on commercial exterior renovations, maintenance tips,
            and industry trends.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              New articles coming soon. Check back for expert insights on exterior renovations.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
