import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'Project Timeline Planner | ECC Exteriors',
  description:
    'Plan your commercial exterior renovation timeline. See expected project phases and durations for painting, roofing, siding, and deck coating projects of any scope.',
  path: '/tools/timeline-planner',
})

export default function TimelinePlannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
