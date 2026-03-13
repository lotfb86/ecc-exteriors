import Link from 'next/link'
import Image from 'next/image'

const services = [
  { name: 'Exterior Painting', href: '/services/painting' },
  { name: 'Roof Replacement', href: '/services/roof-replacement' },
  { name: 'Roof Coatings', href: '/services/roof-coatings' },
  { name: 'Siding', href: '/services/siding' },
  { name: 'Deck Coatings', href: '/services/deck-coatings' },
]

const company = [
  { name: 'About', href: '/about' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'Videos', href: '/our-work/videos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const offices = [
  'Denver (HQ)', 'Irvine', 'San Jose', 'Dallas', 'Phoenix',
  'Salt Lake City', 'Seattle', 'Las Vegas', 'Austin', 'Orlando', 'Portland',
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="ECC Exteriors"
              width={140}
              height={97}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Industry leaders in multi-family, HOA, commercial, and hospitality
              exterior renovations. Serving nationwide since 1994.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-copper-light transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 hover:text-copper-light transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm space-y-3 text-gray-400">
              <p>
                9849 E Easter Ave<br />
                Centennial, CO 80112
              </p>
              <p>
                <a href="tel:7205773948" className="hover:text-copper-light transition-colors">
                  (720) 577-3948
                </a>
              </p>
              <p>
                <a href="mailto:service@executivecoatings.com" className="hover:text-copper-light transition-colors">
                  service@executivecoatings.com
                </a>
              </p>
              <p>Mon &ndash; Fri: 8AM &ndash; 5PM</p>
            </address>
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-heading">
                Offices
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {offices.join(' \u00B7 ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-wide py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ECC Exteriors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
