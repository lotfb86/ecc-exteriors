import type { Metadata } from 'next'

export function createMetadata({
  title,
  description,
  path = '',
  image = '/images/og-default.jpg',
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const url = `https://eccexteriors.com${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  }
}
