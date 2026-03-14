import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Free Renovation Cost Estimator | ECC Exteriors',
  description:
    'Estimate commercial exterior renovation costs for painting, roof replacement, roof coatings, siding, and deck coatings. Free interactive calculator for property managers.',
  path: '/tools/cost-estimator',
})

export default function CostEstimatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
