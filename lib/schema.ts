export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'ECC Exteriors',
    alternateName: 'Executive Coatings and Contracting',
    url: 'https://eccexteriors.com',
    logo: 'https://eccexteriors.com/images/logo.png',
    description:
      'Nationwide commercial exterior renovation contractor specializing in painting, roofing, siding, and deck coatings.',
    foundingDate: '1994',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9849 E Easter Ave',
      addressLocality: 'Centennial',
      addressRegion: 'CO',
      postalCode: '80112',
      addressCountry: 'US',
    },
    telephone: '+1-720-577-3948',
    email: 'service@executivecoatings.com',
    openingHours: 'Mo-Fr 08:00-17:00',
    areaServed: [
      'Arizona', 'California', 'Colorado', 'Florida', 'Idaho',
      'Nevada', 'Oregon', 'Utah', 'Texas', 'Washington',
    ],
    sameAs: [],
  }
}

export function serviceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'ECC Exteriors',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  }
}

export function videoSchema(video: {
  name: string
  description: string
  thumbnailUrl: string
  embedUrl: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    embedUrl: video.embedUrl,
    uploadDate: '2024-01-01',
    publisher: {
      '@type': 'Organization',
      name: 'ECC Exteriors',
    },
  }
}

export function reviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'ECC Exteriors',
    url: 'https://eccexteriors.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '3',
      reviewCount: '3',
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function videoObjectSchema(
  videos: { name: string; description: string; youtubeId: string }[]
) {
  return videos.map((video) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    uploadDate: '2024-01-01',
    publisher: {
      '@type': 'Organization',
      name: 'ECC Exteriors',
      url: 'https://eccexteriors.com',
    },
  }))
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
