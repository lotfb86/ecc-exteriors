'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'

const serviceTypes = [
  { id: 'painting', name: 'Exterior Painting' },
  { id: 'roof-replacement', name: 'Roof Replacement' },
  { id: 'roof-coatings', name: 'Roof Coatings' },
  { id: 'siding', name: 'Siding' },
  { id: 'deck-coatings', name: 'Deck Coatings' },
] as const

const scopes = [
  { id: 'small', name: 'Small', description: '1 - 3 buildings' },
  { id: 'medium', name: 'Medium', description: '4 - 10 buildings' },
  { id: 'large', name: 'Large', description: '11+ buildings' },
] as const

type ServiceId = (typeof serviceTypes)[number]['id']
type ScopeId = (typeof scopes)[number]['id']

// Durations in weeks: [min, max]
const durations: Record<ServiceId, Record<ScopeId, [number, number]>> = {
  painting: { small: [2, 4], medium: [4, 8], large: [8, 16] },
  'roof-replacement': { small: [3, 6], medium: [6, 12], large: [12, 24] },
  'roof-coatings': { small: [1, 3], medium: [3, 6], large: [6, 12] },
  siding: { small: [4, 8], medium: [8, 16], large: [16, 30] },
  'deck-coatings': { small: [1, 2], medium: [2, 5], large: [5, 10] },
}

// Phase breakdown as percentages of total duration
const phases = [
  { name: 'Planning & Permits', pct: 0.15, color: 'bg-navy' },
  { name: 'Mobilization', pct: 0.1, color: 'bg-navy-light' },
  { name: 'Active Work', pct: 0.5, color: 'bg-copper' },
  { name: 'Quality Inspection', pct: 0.15, color: 'bg-copper-light' },
  { name: 'Completion', pct: 0.1, color: 'bg-charcoal' },
]

function weeksToDisplay(weeks: number): string {
  if (weeks < 1) return '< 1 week'
  if (weeks === 1) return '1 week'
  return `${Math.round(weeks)} weeks`
}

export default function TimelinePlannerPage() {
  const [serviceType, setServiceType] = useState<ServiceId>('painting')
  const [scope, setScope] = useState<ScopeId>('medium')

  const timeline = useMemo(() => {
    const [minWeeks, maxWeeks] = durations[serviceType][scope]
    const avgWeeks = (minWeeks + maxWeeks) / 2

    return {
      minWeeks,
      maxWeeks,
      phases: phases.map((phase) => ({
        ...phase,
        minDuration: minWeeks * phase.pct,
        maxDuration: maxWeeks * phase.pct,
        avgDuration: avgWeeks * phase.pct,
      })),
    }
  }, [serviceType, scope])

  const service = serviceTypes.find((s) => s.id === serviceType)!
  const scopeData = scopes.find((s) => s.id === scope)!

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'ECC Exteriors Project Timeline Planner',
            description: 'Free interactive tool to plan commercial exterior renovation project timelines.',
            url: 'https://eccexteriors.com/tools/timeline-planner',
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
              <li className="text-copper-light">Timeline Planner</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-4xl">
            Project Timeline Planner
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            See expected timelines and phases for your exterior renovation project.
            Select your service type and project scope to visualize the schedule.
          </p>
        </div>
      </section>

      {/* Planner */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            {/* Controls */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">
                Select Your Project Parameters
              </h2>

              {/* Service Type */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Service Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {serviceTypes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setServiceType(s.id)}
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
              </div>

              {/* Scope */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Project Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {scopes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setScope(s.id)}
                      className={`px-6 py-4 rounded-lg text-left transition-all border ${
                        scope === s.id
                          ? 'bg-navy text-white border-navy'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-navy/30'
                      }`}
                    >
                      <span className="block font-semibold text-base">{s.name}</span>
                      <span className={`block text-sm mt-1 ${scope === s.id ? 'text-gray-300' : 'text-gray-500'}`}>
                        {s.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Visualization */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900">
                    Estimated Timeline
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {service.name} &mdash; {scopeData.name} scope ({scopeData.description})
                  </p>
                </div>
                <div className="bg-navy/5 rounded-lg px-5 py-3 text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Duration</p>
                  <p className="font-heading text-2xl font-extrabold text-navy">
                    {timeline.minWeeks} &ndash; {timeline.maxWeeks} weeks
                  </p>
                </div>
              </div>

              {/* Gantt-style bar */}
              <div className="mb-10">
                <div className="flex rounded-lg overflow-hidden h-10 sm:h-12">
                  {timeline.phases.map((phase) => (
                    <div
                      key={phase.name}
                      className={`${phase.color} flex items-center justify-center text-white text-[10px] sm:text-xs font-medium relative group`}
                      style={{ width: `${phase.pct * 100}%` }}
                      title={`${phase.name}: ${weeksToDisplay(phase.minDuration)} - ${weeksToDisplay(phase.maxDuration)}`}
                    >
                      <span className="hidden sm:inline truncate px-1">{phase.name}</span>
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md py-1.5 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {phase.name}: {weeksToDisplay(phase.minDuration)} - {weeksToDisplay(phase.maxDuration)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase Details */}
              <div className="space-y-4">
                {timeline.phases.map((phase, idx) => (
                  <div key={phase.name} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: phase.color === 'bg-navy' ? '#032162' : phase.color === 'bg-navy-light' ? '#0a3a9e' : phase.color === 'bg-copper' ? '#B87333' : phase.color === 'bg-copper-light' ? '#D4955A' : '#2D2D2D' }}
                    >
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="font-heading font-semibold text-gray-900">{phase.name}</h4>
                        <span className="text-sm font-medium text-gray-600">
                          {weeksToDisplay(phase.minDuration)} &ndash; {weeksToDisplay(phase.maxDuration)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {phase.name === 'Planning & Permits' && 'Site assessment, scope finalization, permit acquisition, and material ordering.'}
                        {phase.name === 'Mobilization' && 'Crew deployment, equipment staging, and safety setup on-site.'}
                        {phase.name === 'Active Work' && 'Primary construction and renovation activities across the property.'}
                        {phase.name === 'Quality Inspection' && 'Thorough quality assurance walkthrough and punch list completion.'}
                        {phase.name === 'Completion' && 'Final cleanup, demobilization, and project handoff with warranty documentation.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 border border-amber-200 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Timelines shown are typical ranges based on project scope. Actual
                  schedules depend on property access, weather conditions, permitting timelines, and material
                  availability. Contact us for a detailed project schedule.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-copper hover:bg-copper-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Discuss Your Timeline
                </Link>
                <a
                  href="tel:7205773948"
                  className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Call (720) 577-3948
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Get an Exact Quote?"
        subtext="Our timeline planner shows typical ranges. Contact us for a detailed project schedule tailored to your property."
      />
    </>
  )
}
