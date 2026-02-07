"use client";

import { useLayoutEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BrokenFrame, RedLine, Triangle } from '@/components/GeometricShapes'
import Image from 'next/image'
import Link from 'next/link'
import { Speaker } from '@/data/speakers'

import { Search } from 'lucide-react'

interface SpeakerProfileClientProps {
  speaker: Speaker;
}

export default function SpeakerProfileClient({ speaker }: SpeakerProfileClientProps) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const bioThreshold = 2;
  const hasLongBio = speaker.detailedBio.length > bioThreshold;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: speaker.name,
    jobTitle: speaker.role,
    worksFor: {
      '@type': 'Organization',
      name: speaker.org,
    },
    description: speaker.quote,
    image: `https://tedxccet.com${speaker.imageUrl}`,
    url: `https://tedxccet.com/speakers/${speaker.slug}`,
  }

  return (
    <div className="relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/speakers" 
          className="text-red-500 hover:text-red-400 mb-12 inline-flex items-center gap-2 transition-colors font-black tracking-[0.2em] uppercase text-xs group relative w-fit"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">&larr;</span>
          <span className="relative">
            Back to all speakers
            <span className="absolute -bottom-1 left-0 w-full h-px bg-red-500/30 group-hover:bg-red-500 transition-colors" />
          </span>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Speaker Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4"
        >
          <BrokenFrame className="w-full aspect-4/5 max-w-md mx-auto lg:mx-0">
            <div className="relative w-full h-full overflow-hidden bg-neutral-900">
              <Image
                src={speaker.imageUrl}
                alt={speaker.name}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </BrokenFrame>
          
          {/* Quick Stats/Links under image */}
          <div className="mt-8 flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
            {speaker.googleLink !== "" && (
              <Link 
                href={speaker.googleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" />
                  <span className="text-white font-bold tracking-tight">Search on Google</span>
                </div>
                <span className="text-red-500 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Speaker Info Column */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-red-500 text-sm font-black tracking-[0.3em] uppercase mb-4">
              {speaker.title}
            </h2>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {speaker.name}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <RedLine orientation="horizontal" length="60px" thickness={3} />
              <p className="text-xl font-medium text-neutral-300 italic">{speaker.role}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 text-neutral-400 leading-relaxed text-lg lg:text-xl"
          >
            {speaker.detailedBio.length > 0 ? (
              (isExpanded ? speaker.detailedBio : speaker.detailedBio.slice(0, bioThreshold)).map((para, i) => (
                <p key={i}>{para}</p>
              ))
            ) : (
              <p>{speaker.achievement || speaker.quote}</p>
            )}

            {hasLongBio && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-red-500 hover:text-red-400 font-black tracking-[0.2em] uppercase text-xs flex items-center gap-2 group transition-colors relative"
              >
                <span className="relative">
                  {isExpanded ? 'Read Less' : 'Read More'}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-red-500/30 group-hover:bg-red-500 transition-colors" />
                </span>
                <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  &darr;
                </span>
              </button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 p-8 border-l-4 border-red-500 bg-red-500/5 relative group"
          >
            <p className="text-2xl font-bold text-white leading-snug italic">
              "{speaker.quote}"
            </p>
            <div className="absolute top-2 right-4 text-6xl text-red-500/10 font-serif select-none">
              "
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
