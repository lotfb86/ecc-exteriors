import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <p className="text-copper font-heading font-bold text-lg mb-2">404</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-copper hover:bg-copper-dark text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-gray-300 hover:border-navy text-gray-800 px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
