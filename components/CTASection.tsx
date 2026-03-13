import Link from 'next/link'

interface CTASectionProps {
  heading?: string
  subtext?: string
}

export function CTASection({
  heading = 'Ready to Transform Your Property?',
  subtext = 'Get a free estimate for your next exterior renovation project.',
}: CTASectionProps) {
  return (
    <section className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/20 via-transparent to-transparent" />
      <div className="container-wide section-padding relative z-10 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            Request Free Estimate
          </Link>
          <a
            href="tel:7205773948"
            className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            Call (720) 577-3948
          </a>
        </div>
      </div>
    </section>
  )
}
