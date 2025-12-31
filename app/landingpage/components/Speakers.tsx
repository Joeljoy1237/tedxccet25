"use client";

import { speakers } from "@/data/speakers";
import SpeakerCard from "@/components/SpeakerCard";

export default function Speakers() {
  return (
    <div className="bg-black text-white relative">
      <div className="text-center py-24 px-6 relative z-10 bg-black">
        {/* Pill Label */}
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
          Speakers
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          VOICES OF <span className="text-red-600">COURAGE</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Pioneers, visionaries, and change-makers who turned their fear into
          fuel.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} index={index} />
        ))}
      </div>
    </div>
  );
}
