'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

const serviceTypes = [
  { id: 'painting', name: 'Exterior Painting', lowRate: 1.5, highRate: 3.5, unit: 'sq ft' },
  { id: 'roof-replacement', name: 'Roof Replacement', lowRate: 5, highRate: 12, unit: 'sq ft' },
  { id: 'roof-coatings', name: 'Roof Coatings', lowRate: 2, highRate: 5, unit: 'sq ft' },
  { id: 'siding', name: 'Siding', lowRate: 6, highRate: 14, unit: 'sq ft' },
  { id: 'deck-coatings', name: 'Deck Coatings', lowRate: 3, highRate: 7, unit: 'sq ft' },
] as const

const regions = [
  { id: 'arizona', name: 'Arizona', modifier: 0.95 },
  { id: 'california', name: 'California', modifier: 1.2 },
  { id: 'colorado', name: 'Colorado', modifier: 1.0 },
  { id: 'florida', name: 'Florida', modifier: 1.0 },
  { id: 'idaho', name: 'Idaho', modifier: 0.9 },
  { id: 'nevada', name: 'Nevada', modifier: 1.0 },
  { id: 'oregon', name: 'Oregon', modifier: 1.05 },
  { id: 'texas', name: 'Texas', modifier: 0.95 },
  { id: 'utah', name: 'Utah', modifier: 0.95 },
  { id: 'washington', name: 'Washington', modifier: 1.1 },
]

const durations: Record<string, string> = {
  painting: '2 - 16 weeks',
  'roof-replacement': '3 - 24 weeks',
  'roof-coatings': '1 - 12 weeks',
  siding: '4 - 30 weeks',
  'deck-coatings': '1 - 10 weeks',
}

function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`
  }
  return `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
}

export default function CostEstimatorPage() {
  const [serviceType, setServiceType] = useState<string>(serviceTypes[0].id)
  const [sqft, setSqft] = useState('')
  const [buildings, setBuildings] = useState('')
  const [stories, setStories] = useState('2')
  const [region, setRegion] = useState('colorado')
  const [showResult, setShowResult] = useState(false)

  const service = serviceTypes.find((s) => s.id === serviceType) ?? serviceTypes[0]
  const regionData = regions.find((r) => r.id === region) ?? regions[2]

  const estimate = useMemo(() => {
    const sqftNum = parseInt(sqft) || 0
    const buildingsNum = parseInt(buildings) || 1
    const storiesNum = parseInt(stories) || 2

    if (sqftNum === 0) return null

    const totalSqft = sqftNum * buildingsNum
    // Stories add ~10% per floor above 1 for access costs
    const storiesMultiplier = 1 + (storiesNum - 1) * 0.1
    const regionModifier = regionData.modifier

    const low = Math.round(totalSqft * service.lowRate * storiesMultiplier * regionModifier)
    const high = Math.round(totalSqft * service.highRate * storiesMultiplier * regionModifier)

    return { low, high, totalSqft, duration: durations[serviceType] }
  }, [sqft, buildings, stories, serviceType, region, service, regionData])

  const handleEstimate = () => {
    if (parseInt(sqft) > 0) {
      setShowResult(true)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'ECC Exteriors Renovation Cost Estimator',
            description: 'Free interactive tool to estimate commercial exterior renovation costs.',
            url: 'https://eccexteriors.com/tools/cost-estimator',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            provider: {
              '@type': 'HomeAndConstructionBusiness',
              name: 'ECC Exteriors',
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="container-wide">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/tools" className="hover:text-white transition-colors">Tools</Link></li>
              <li>/</li>
              <li className="text-copper-light">Cost Estimator</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-4xl">
            Free Renovation Cost Estimator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get a ballpark estimate for your commercial exterior renovation project in seconds.
            Adjust service type, property size, and region for tailored pricing ranges.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">
                  Enter Your Project Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Type */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                      {serviceTypes.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setServiceType(s.id)
                            setShowResult(false)
                          }}
                          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all border ${
                            serviceType === s.id
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-navy/30'
                          }`}
                        >
                          {s.name}
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Rate: ${service.lowRate.toFixed(2)} - ${service.highRate.toFixed(2)} per {service.unit}
                    </p>
                  </div>

                  {/* Square Footage */}
                  <div>
                    <label htmlFor="sqft" className="block text-sm font-semibold text-gray-700 mb-2">
                      Approx. Square Footage (per building)
                    </label>
                    <input
                      id="sqft"
                      type="number"
                      min="0"
                      placeholder="e.g. 25000"
                      value={sqft}
                      onChange={(e) => {
                        setSqft(e.target.value)
                        setShowResult(false)
                      }}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>

                  {/* Number of Buildings */}
                  <div>
                    <label htmlFor="buildings" className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Buildings
                    </label>
                    <input
                      id="buildings"
                      type="number"
                      min="1"
                      placeholder="e.g. 5"
                      value={buildings}
                      onChange={(e) => {
                        setBuildings(e.target.value)
                        setShowResult(false)
                      }}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>

                  {/* Stories */}
                  <div>
                    <label htmlFor="stories" className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Stories
                    </label>
                    <select
                      id="stories"
                      value={stories}
                      onChange={(e) => {
                        setStories(e.target.value)
                        setShowResult(false)
                      }}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors bg-white"
                    >
                      <option value="1">1 Story</option>
                      <option value="2">2 Stories</option>
                      <option value="3">3 Stories</option>
                      <option value="4">4 Stories</option>
                    </select>
                  </div>

                  {/* Region */}
                  <div>
                    <label htmlFor="region" className="block text-sm font-semibold text-gray-700 mb-2">
                      State / Region
                    </label>
                    <select
                      id="region"
                      value={region}
                      onChange={(e) => {
                        setRegion(e.target.value)
                        setShowResult(false)
                      }}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors bg-white"
                    >
                      {regions.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="mt-8">
                  <button
                    onClick={handleEstimate}
                    disabled={!sqft || parseInt(sqft) <= 0}
                    className="w-full sm:w-auto bg-copper hover:bg-copper-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>

              {/* Results */}
              {showResult && estimate && (
                <div className="border-t border-gray-200 bg-gray-50 p-6 sm:p-8 lg:p-10">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                    Your Estimated Cost Range
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                      <p className="text-sm text-gray-500 mb-1">Low Estimate</p>
                      <p className="font-heading text-3xl font-extrabold text-navy">
                        {formatCurrency(estimate.low)}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 border-2 border-copper text-center">
                      <p className="text-sm text-gray-500 mb-1">High Estimate</p>
                      <p className="font-heading text-3xl font-extrabold text-copper">
                        {formatCurrency(estimate.high)}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                      <p className="text-sm text-gray-500 mb-1">Typical Duration</p>
                      <p className="font-heading text-2xl font-bold text-charcoal">
                        {estimate.duration}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-navy/5 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Based on:</strong> {service.name} for {estimate.totalSqft.toLocaleString()} total sq ft
                      across {parseInt(buildings) || 1} building{(parseInt(buildings) || 1) > 1 ? 's' : ''},{' '}
                      {stories} {parseInt(stories) === 1 ? 'story' : 'stories'}, in {regionData.name}.
                    </p>
                  </div>

                  <div className="mt-6 p-4 border border-amber-200 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> This is a rough estimate for planning purposes only. Actual costs
                      depend on property condition, material selections, access requirements, and other factors.
                      Contact us for a detailed, no-obligation proposal.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
                    >
                      Get an Exact Quote
                    </Link>
                    <a
                      href="tel:7205773948"
                      className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
                    >
                      Call (720) 577-3948
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Get an Exact Quote?"
        subtext="Our estimator gives you a ballpark range. Contact us for a detailed, no-obligation proposal tailored to your property."
      />
    </>
  )
}
