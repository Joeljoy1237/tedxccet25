"use client";

import Masonry from "@/components/Masonry";
import { galleryImages } from "@/data/galleryImages";
import { useMemo } from "react";

export default function GalleryMasonry() {
  const items = useMemo(() => {
    return galleryImages.map((img, index) => ({
      id: index.toString(),
      img: img.src,
      url: img.src, // Using image source as URL for now
      height: [400, 250, 600, 300, 450][index % 5], // Cycling through varied heights
    }));
  }, []);

  return (
    <div className="w-full bg-black py-24 px-6 relative">
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
          Gallery
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
          CAPTURED <span className="text-red-600">MOMENTS</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Glimpses of energy, innovation, and inspiration.
        </p>
      </div>

      <div className="w-full">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  );
}
