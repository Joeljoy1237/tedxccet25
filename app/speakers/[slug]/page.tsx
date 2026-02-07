import { Metadata, ResolvingMetadata } from 'next'
import { speakers } from '@/data/speakers'
import { notFound } from 'next/navigation'
import { Triangle } from '@/components/GeometricShapes'
import SpeakerProfileClient from '@/components/SpeakerProfileClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return speakers.map((speaker) => ({
    slug: speaker.slug,
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const speaker = speakers.find((s) => s.slug === slug)

  if (!speaker) {
    return {
      title: 'Speaker Not Found | TEDxCCET',
    }
  }

  const previousImages = (await parent).openGraph?.images || []

  // Specific title for better ranking: Advocate Jince T. Thomas | TEDxCCET Talk
  const title = `${speaker.name} | ${speaker.role} | TEDxCCET Talk`
  const description = `Watch ${speaker.name}'s TEDx talk at TEDxCCET. ${speaker.name} is a ${speaker.role} who shares insights on ${speaker.quote.replace(/[".]/g, '')}. Discover more about ${speaker.name}'s journey and achievements.`
  const keywords = [
    speaker.name,
    `${speaker.name} TEDx`,
    `${speaker.name} TEDx talk`,
    speaker.role,
    speaker.org,
    'TEDxCCET',
    'TEDx Kerala',
    'Ideas worth spreading',
    speaker.title
  ].filter(Boolean)

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://tedxccet.in/speakers/${speaker.slug}`,
      siteName: 'TEDxCCET',
      images: [speaker.imageUrl, ...previousImages],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [speaker.imageUrl],
    },
    alternates: {
      canonical: `https://tedxccet.in/speakers/${speaker.slug}`,
    },
  }
}

import Script from 'next/script'

export default async function SpeakerPage({ params }: Props) {
  const { slug } = await params
  const speaker = speakers.find((s) => s.slug === slug)

  if (!speaker) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: speaker.name,
    jobTitle: speaker.role,
    worksFor: {
      '@type': 'Organization',
      name: speaker.org,
    },
    url: `https://tedxccet.in/speakers/${speaker.slug}`,
    image: `https://tedxccet.in${speaker.imageUrl}`, // Ensure absolute URL
    description: speaker.achievement || speaker.quote,
    sameAs: [
      speaker.googleLink,
      // Add other social links if available in the speaker object
    ].filter(Boolean),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tedxccet.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Speakers',
        item: 'https://tedxccet.in/speakers',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: speaker.name,
        item: `https://tedxccet.in/speakers/${speaker.slug}`,
      },
    ],
  }

  return (
    <main className="bg-black min-h-screen pt-24 pb-20 px-[4vw] overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Background Accents */}
      <div className="absolute top-40 -left-20 opacity-20 pointer-events-none">
        <Triangle direction="right" size="xl" className="rotate-12" />
      </div>
      <div className="absolute bottom-20 -right-20 opacity-20 pointer-events-none">
        <Triangle direction="left" size="xl" className="-rotate-12" />
      </div>

      <SpeakerProfileClient speaker={speaker} />
    </main>
  )
}
