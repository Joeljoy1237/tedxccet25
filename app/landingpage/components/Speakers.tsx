"use client";

import { useRef } from "react";
import Image from "next/image";
import { ParticleCard, GlobalSpotlight } from "@/components/ui/magic-card";

{/*{
    name: "Akhil P",
    role: "Serial Entrepreneur",
    org: "Founder, NexGen AI",
    image: "/speakers/akhilp.png",
  }, */}

const speakers = [
  {
    name: "Default",
    role: "Default",
    org: "Default",
    image: "/speakers/default.png",
  },
  {
    name: "Default",
    role: "Default",
    org: "Default",
    image: "/speakers/default.png",
  },
  {
    name: "Default",
    role: "Default",
    org: "Default",
    image: "/speakers/default.png",
  },
  {
    name: "Default",
    role: "Default",
    org: "Default",
    image: "/speakers/default.png",
  },
  {
    name: "Default",
    role: "Default",
    org: "Default",
    image: "/speakers/default.png",
  },
  {
    name: "Default",
    role: "Default",
    org: "Default",
    image: "/speakers/default.png",
  },
  
];

export default function Speakers() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 px-6 bg-neutral-950 text-white relative overflow-visible">
      <style jsx global>{`
        .card-effect {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          --glow-radius: 200px;
          --glow-color: 220, 38, 38;
          --border-color: rgba(255, 255, 255, 0.1);
        }

        .card-effect::after {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          background: radial-gradient(
            var(--glow-radius) circle at var(--glow-x) var(--glow-y),
            rgba(var(--glow-color), calc(var(--glow-intensity) * 0.8)) 0%,
            rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4)) 30%,
            transparent 60%
          );
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.3s ease;
          z-index: 10;
        }

        .particle::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: rgba(var(--glow-color), 0.2);
          border-radius: 50%;
          z-index: -1;
        }
      `}</style>

      <GlobalSpotlight
        gridRef={gridRef}
        spotlightRadius={300}
        glowColor="220, 38, 38"
      />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          {/* Pill Label */}
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
            Speakers
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            VOICES OF <span className="text-red-600">COURAGE</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Pioneers, visionaries, and change-makers who turned their fear into
            fuel.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
        >
          {speakers.map((speaker, index) => (
            <ParticleCard
              key={index}
              className="card-effect group relative rounded-xl overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-300 min-h-[300px]"
              glowColor="220, 38, 38"
              particleCount={12}
              enableTilt={true}
              enableMagnetism={true}
            >
              <div className="flex flex-col h-full items-center text-center p-8 relative z-20">
                {/* Image Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-red-600/50 transition-all">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-red-600 font-medium text-sm mb-1 uppercase tracking-wide">
                    {speaker.role}
                  </p>
                  <p className="text-neutral-500 text-xs font-medium mb-4">
                    {speaker.org}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-4 justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                    <a
                      href="#"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ParticleCard>
          ))}
        </div>
      </div>
    </section>
  );
}
