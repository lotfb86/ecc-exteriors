'use client'

const partners = [
  'lyon', 'lincoln', 'legacy-partners', 'picerne', 'mig',
  'open-path', 'sentinel', 'uv-residential', 'security-properties',
  'thrive', 'sares-regis-group', 'woodmont', 'windsor', 'sobbato',
  'irvine-compnayh',
]

export function PartnerLogoScroll() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-wide mb-8">
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 font-heading font-semibold">
          Trusted by Industry Leaders
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll gap-16 items-center">
          {[...partners, ...partners].map((name, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${name}-${i}`}
              src={`/images/partners/${name}.png`}
              alt={`${name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} — ECC Exteriors partner`}
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll { animation: none; }
          }
        `}</style>
      </div>
    </section>
  )
}
