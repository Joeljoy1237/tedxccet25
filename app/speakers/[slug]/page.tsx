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
    "@context": "https://schema.org",
    "@type": "Person",
    "name": speaker.name,
    "jobTitle": speaker.role,
    "affiliation": {
      "@type": "Organization",
      "name": speaker.org
    },
    "description": speaker.detailedBio.join(" "),
    "image": `https://tedxccet.com${speaker.imageUrl}`,
    "url": `https://tedxccet.com/speakers/${speaker.slug}`,
    "sameAs": [
      speaker.googleLink
    ]
  };

  return (
    <main className="bg-black min-h-screen pt-24 pb-20 px-[4vw] overflow-hidden relative">
      <Script
        id={`speaker-${speaker.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
