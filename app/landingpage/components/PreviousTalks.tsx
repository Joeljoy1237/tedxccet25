"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const previousTalks = [
  {
    title: "Life and Love are Infin8",
    speaker: "Dr. V. P. Gangadharan",
    videoId: "5IyDnOAQMkA", // Placeholder ID, replace with actual ID if known, using a safe default for now
  },
  {
    title:
      "A revolution in how stories are shared, and experienced in the digital age",
    speaker: "Alakananda R",
    videoId: "O0Je5uzxC70",
  },
  {
    title: "Transforming villages into hubs of enhanced human development",
    speaker: "Mr. Joy Sebastian",
    videoId: "eQYB5hZw07c",
  },
  {
    title: "Finding my voice through independent music",
    speaker: "Mr. Job Kurian",
    videoId: "XbzOWOiwZjs",
  },
  {
    title: "From dreams to drafts: journey of becoming a film scriptwriter",
    speaker: "Mr. Akhil P Dharmajan",
    videoId: "HDM4eeckQAQ",
  },
  {
    title: "Big dreams, tiny hands, and endless possibilities",
    speaker: "Raul John Aju",
    videoId: "MMrba5XKR-k",
  },
  {
    title: "Rising Together: Diverse Struggles for Society's Progress",
    speaker: "Elamuhil S",
    videoId: "L4ZYpXmNnIU",
  },
];

export default function PreviousTalks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-black text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            PREVIOUS <span className="text-red-600">TALKS</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previousTalks.map((talk, index) => (
            <div key={index} className="space-y-4 group">
              {/* Video Container */}
              <div
                className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-red-600/50 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index ? (
                  <iframe
                    className="w-full h-full object-cover"
                    src={`https://www.youtube.com/embed/${talk.videoId}?autoplay=1&mute=1&loop=1&playlist=${talk.videoId}&controls=0&showinfo=0&rel=0`}
                    title={talk.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <>
                    <Image
                      src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`}
                        alt={talk.title}
                        quality={25}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      
                    </div>
                  </>
                )}

                {/* Overlay to prevent interaction with iframe if desired, or allow clicking */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-red-600 font-bold text-lg leading-tight mb-1">
                  {talk.title}
                </h3>
                <p className="text-neutral-400 text-sm font-medium uppercase tracking-wide">
                  {talk.speaker}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
