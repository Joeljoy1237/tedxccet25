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

  return {
    title: `${speaker.name} | Speaker at TEDxCCET`,
    description: `${speaker.name} is a ${speaker.role}. ${speaker.quote} ${speaker.detailedBio.length > 0 ? speaker.detailedBio[0] : ''}`,
    keywords: [`TEDxCCET`, `Speaker`, speaker.name, speaker.role, `TEDx CCET 2026`, speaker.org],
    openGraph: {
      title: `${speaker.name} | TEDxCCET`,
      description: speaker.quote,
      url: `https://tedxccet.com/speakers/${speaker.slug}`,
      siteName: 'TEDxCCET',
      images: [speaker.imageUrl, ...previousImages],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${speaker.name} | TEDxCCET`,
      description: speaker.quote,
      images: [speaker.imageUrl],
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
    url: `https://tedxccet.com/speakers/${speaker.slug}`,
    image: `https://tedxccet.com${speaker.imageUrl}`, // Ensure absolute URL
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
        item: 'https://tedxccet.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Speakers',
        item: 'https://tedxccet.com/speakers',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: speaker.name,
        item: `https://tedxccet.com/speakers/${speaker.slug}`,
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
