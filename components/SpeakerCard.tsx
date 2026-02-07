"use client";

import { motion } from "framer-motion";
import { Triangle, RedLine, BrokenFrame } from "@/components/GeometricShapes";
import { Speaker } from "@/data/speakers";
import Image from "next/image";
import Link from "next/link";

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
}

const SpeakerCard = ({ speaker, index }: SpeakerCardProps) => {
  const speakerNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group"
    >
      {/* Speaker Number - Absolute Positioned */}
      <div className="absolute -left-2 -top-6 z-10">
        <span className="text-6xl font-black text-white/5 select-none">
          {speakerNumber}
        </span>
      </div>

      <BrokenFrame className="h-full">
        <Link 
          href={`/speakers/${speaker.slug}`}
          className="relative bg-neutral-900/50 border border-white/5 hover:border-red-600/30 transition-colors duration-500 h-full flex flex-col group/card overflow-hidden block"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden w-full">
            <Image
              src={speaker.imageUrl}
              alt={speaker.name}
              quality={50}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover/card:scale-110 grayscale group-hover/card:grayscale-0"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

            <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
              <RedLine orientation="vertical" length="40px" thickness={2} />
            </div>
          </div>

          {/* Content Container */}
          <div className="p-6 flex flex-col flex-grow relative">
            {/* Name & Title */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover/card:text-red-500 transition-colors">
                {speaker.name}
              </h3>
              <p className="text-red-600 text-xs font-bold tracking-widest uppercase">
                {speaker.title}
              </p>
            </div>

            {/* Quote */}
            <div className="relative pl-4 mb-4 flex-grow">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600/30 group-hover/card:bg-red-600 transition-colors" />
              <p className="text-neutral-400 text-sm italic leading-relaxed line-clamp-4">
                "{speaker.quote}"
              </p>
            </div>

            {/* Role & Org */}
            <div className="mt-auto pt-4 border-t border-white/5">
              <p className="text-white text-sm font-semibold">{speaker.role}</p>
              <p className="text-neutral-500 text-xs">{speaker.org}</p>
            </div>

            {/* View Profile Indicator */}
            <div className="mt-4 text-xs font-bold text-red-600 flex items-center gap-1 opacity-0 translate-x-[-10px] group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300 uppercase tracking-[0.2em]">
              View Profile <span>&rarr;</span>
            </div>
          </div>
        </Link>
      </BrokenFrame>
    </motion.div>
  );
};

export default SpeakerCard;
