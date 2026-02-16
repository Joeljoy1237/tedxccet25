"use strict";
"use client";

import { galleryImages } from "@/data/galleryImages";
import Link from "next/link";
import { motion } from "framer-motion";

// Duplicate images to create a seamless loop
const duplicatedImages = [...galleryImages, ...galleryImages];

export default function Gallery2() {
  return (
    <div className="bg-black pb-24 px-0 text-white relative overflow-hidden">
      <div className="text-center py-24 px-6 relative z-10 bg-transparent">
        {/* Pill Label */}
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
          Gallery
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          CAPTURED <span className="text-red-600">MOMENTS</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Glimpses of energy, innovation, and inspiration.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        {/* Top Row - Moving Left */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedImages.map((image, index) => (
              <Link
                href="/team"
                key={`row1-${index}`}
                className="relative flex-none w-[300px] md:w-[400px] aspect-[4/3] group overflow-hidden border border-[1px] border-red-900/30"
              >
                <img
                  src={image.src}
                  alt={image.alt || `Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-colors duration-500" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedImages.map((image, index) => (
              <Link
                href="/team"
                key={`row2-${index}`}
                className="relative flex-none w-[300px] md:w-[400px] aspect-[4/3] group overflow-hidden border border-[1px] border-red-900/30"
              >
                <img
                  src={image.src}
                  alt={image.alt || `Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-colors duration-500" />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
