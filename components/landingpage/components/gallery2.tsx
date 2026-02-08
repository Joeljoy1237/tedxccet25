"use client";

import { galleryImages } from "@/data/galleryImages";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Gallery2() {
  const displayedImages = galleryImages.slice(0, 5);

  return (
    <div className="bg-black pb-24 px-[2vw] text-white relative">
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

      <div className="mx-auto px-[2vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {displayedImages.map((image, index) => (
          <BlurFade key={index} delay={0.25 + index * 0.05} inView>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-none bg-neutral-900 border border-[1px] border-red-900">
              <img
                src={image.src}
                alt={image.alt || `Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          </BlurFade>
        ))}

        {/* More Card */}
        <BlurFade delay={0.25 + displayedImages.length * 0.05} inView>
          <Link
            href="/team"
            className="group relative aspect-[4/3] overflow-hidden rounded-none border border-[1px] border-red-900 flex flex-col items-center justify-center cursor-pointer"
          >
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
              <img
                src={galleryImages[5]?.src || galleryImages[0].src}
                alt="View All Background"
                className="w-full h-full object-cover blur-sm opacity-50 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mb-4 backdrop-blur-md group-hover:bg-red-600/30 transition-colors duration-300">
                <ArrowRight className="w-8 h-8 text-red-500" />
              </div>
              <span className="text-xl font-bold uppercase tracking-widest text-white drop-shadow-md">
                View All
              </span>
              <span className="text-sm text-neutral-300 mt-2 drop-shadow-sm">
                See the full gallery
              </span>
            </div>
          </Link>
        </BlurFade>
      </div>
    </div>
  );
}
