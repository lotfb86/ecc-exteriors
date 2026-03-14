'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  { name: 'Exterior Painting', href: '/services/painting' },
  { name: 'Roof Replacement', href: '/services/roof-replacement' },
  { name: 'Roof Coatings', href: '/services/roof-coatings' },
  { name: 'Siding', href: '/services/siding' },
  { name: 'Deck Coatings', href: '/services/deck-coatings' },
]

const ourWork = [
  { name: 'Projects', href: '/our-work' },
  { name: 'Videos', href: '/our-work/videos' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-navy text-white text-sm">
        <div className="container-wide flex justify-between items-center py-2">
          <a
            href="mailto:service@executivecoatings.com"
            className="hidden sm:block text-gray-300 hover:text-white transition-colors"
          >
            service@executivecoatings.com
          </a>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-end">
            <a href="tel:7205773948" className="hover:text-copper-light transition-colors">
              CO: (720) 577-3948
            </a>
            <a href="tel:9498777534" className="hover:text-copper-light transition-colors">
              CA: (949) 877-7534
            </a>
            <a href="tel:2148513533" className="hidden sm:block hover:text-copper-light transition-colors">
              TX: (214) 851-3533
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-wide" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="ECC Exteriors"
              width={140}
              height={97}
              priority
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-navy transition-colors"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-navy transition-colors inline-flex items-center gap-1"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Our Work dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-navy transition-colors inline-flex items-center gap-1"
                aria-expanded={workOpen}
                aria-haspopup="true"
              >
                Our Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {workOpen && (
                <div className="absolute top-full left-0 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {ourWork.map((w) => (
                    <Link
                      key={w.href}
                      href={w.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors"
                    >
                      {w.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-navy transition-colors"
            >
              About
            </Link>
            <Link
              href="/tools"
              className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-navy transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-navy transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:7205773948"
              className="text-sm font-semibold text-navy"
            >
              (720) 577-3948
            </a>
            <Link
              href="/contact"
              className="bg-copper hover:bg-copper-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Request Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <Link href="/" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50">
              Home
            </Link>
            <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-8 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                {s.name}
              </Link>
            ))}
            <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 mt-2">
              Our Work
            </div>
            {ourWork.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="block px-8 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                {w.name}
              </Link>
            ))}
            <Link href="/about" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50">
              About
            </Link>
            <Link href="/tools" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50">
              Tools
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50">
              Contact
            </Link>
            <div className="px-4 pt-4">
              <Link
                href="/contact"
                className="block w-full text-center bg-copper hover:bg-copper-dark text-white px-5 py-3 rounded-md text-sm font-semibold transition-colors"
              >
                Request Estimate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
