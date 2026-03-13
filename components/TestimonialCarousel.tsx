'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Since 2008 Executive Coatings has worked on my projects varying in size, complexity and in multiple states spanning the West coast. Executive Coatings has gained the trust and respect of our company by consistently executing our projects with expertise, professionalism and above all quality of workmanship. When an issue arises, they are quick to rectify without complications or hassle.',
    company: 'Berkshire Communities',
  },
  {
    quote:
      'From day one, I have been impressed at Executive Coatings\' professionalism, knowledge and quality of workmanship. From start date to completion, Executive Coatings has been tremendous in meeting our completion dates, never losing sight of quality and leaving residents happy. Executive Coatings has done such a great job for us that we have been able to give them the opportunity to expand into our Phoenix, Portland and Seattle regions.',
    company: 'Holland Partner Group',
  },
  {
    quote:
      'We recently hired Executive Coatings And Contracting to do a large scale renovation that included siding and carpentry and a full exterior repaint. We experienced nothing but first class treatment from the bidding process to the final walk through. Not only did we add value to our newly acquired property, it looks brand new as well.',
    company: 'Portland, OR Client',
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="relative">
          <blockquote className="text-center">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 italic mb-8">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <footer className="flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-copper" />
              <cite className="not-italic font-heading font-semibold text-navy">
                {testimonials[current].company}
              </cite>
              <div className="h-px w-8 bg-copper" />
            </footer>
          </blockquote>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === current ? 'bg-copper' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
