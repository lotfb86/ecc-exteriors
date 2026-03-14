import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { organizationSchema } from '@/lib/schema'

export const metadata: Metadata = createMetadata({
  title: 'Contact ECC Exteriors — Request a Free Estimate',
  description:
    'Get in touch with ECC Exteriors for a free exterior renovation estimate. Serving Arizona, California, Colorado, Florida, Idaho, Nevada, Oregon, Utah, Texas, and Washington.',
  path: '/contact',
})

const areas = [
  'Arizona', 'California', 'Colorado', 'Florida', 'Idaho',
  'Nevada', 'Oregon', 'Utah', 'Texas', 'Washington',
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="container-wide">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch with our team for a free estimate on your next exterior renovation project.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Request an Estimate
              </h2>
              <form className="space-y-6" action="/api/contact" method="POST">
                {/* Honeypot - invisible to users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      aria-describedby="name-error"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper transition-colors text-gray-900"
                      placeholder="Your name"
                    />
                    <span id="name-error" className="sr-only" role="alert" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      aria-describedby="email-error"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper transition-colors text-gray-900"
                      placeholder="you@company.com"
                    />
                    <span id="email-error" className="sr-only" role="alert" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper transition-colors text-gray-900"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      id="property-type"
                      name="propertyType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper transition-colors text-gray-900"
                    >
                      <option value="">Select property type</option>
                      <option value="multi-family">Multi-Family</option>
                      <option value="hoa">HOA</option>
                      <option value="commercial">Commercial</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper transition-colors text-gray-900"
                  >
                    <option value="">Select a service</option>
                    <option value="painting">Exterior Painting</option>
                    <option value="roof-replacement">Roof Replacement</option>
                    <option value="roof-coatings">Flat Roof Coatings</option>
                    <option value="siding">Siding</option>
                    <option value="deck-coatings">Deck Coatings</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-copper transition-colors text-gray-900 resize-y"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">
                  Corporate Headquarters
                </h3>
                <address className="not-italic text-gray-600 space-y-3">
                  <p>
                    9849 E Easter Ave<br />
                    Centennial, CO 80112
                  </p>
                  <p>
                    <a href="tel:7205773948" className="text-navy hover:text-copper transition-colors font-medium">
                      (720) 577-3948
                    </a>
                  </p>
                  <p>
                    <a href="tel:8883006786" className="text-navy hover:text-copper transition-colors font-medium">
                      (888) 300-6786 (Toll Free)
                    </a>
                  </p>
                  <p>
                    <a href="mailto:service@executivecoatings.com" className="text-navy hover:text-copper transition-colors font-medium">
                      service@executivecoatings.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">
                    Monday &ndash; Friday: 8AM &ndash; 5PM
                  </p>
                </address>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">
                  Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="text-sm font-medium px-3 py-1.5 rounded-full bg-navy/5 text-navy"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Field offices in Denver, Irvine, San Jose, Dallas, Phoenix,
                  Salt Lake City, Seattle, Las Vegas, Austin, Orlando, and Portland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
