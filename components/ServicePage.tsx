import Link from 'next/link'
import { CTASection } from './CTASection'
import { TestimonialCarousel } from './TestimonialCarousel'

interface ServicePageProps {
  title: string
  subtitle: string
  heroImage: string
  children: React.ReactNode
}

export function ServicePage({ title, subtitle, heroImage, children }: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/50 to-transparent" />
        <div className="container-wide relative z-10 pb-12">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-gray-500">/</span></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><span className="text-gray-500">/</span></li>
              <li className="text-copper-light">{title}</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3">
            {title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow">
          {children}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA */}
      <CTASection
        heading={`Get a Free ${title} Estimate`}
        subtext="Contact our team to discuss your next exterior renovation project."
      />
    </>
  )
}
