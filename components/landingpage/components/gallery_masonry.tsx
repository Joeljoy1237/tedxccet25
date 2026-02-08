"use client";

import Masonry from "@/components/Masonry";
import { galleryImages } from "@/data/galleryImages";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

export default function GalleryMasonry() {
  const items = useMemo(() => {
    const images = galleryImages.slice(0, 5).map((img, index) => ({
      id: index.toString(),
      img: img.src,
      url: img.src,
      // height removed, handled by Masonry aspect ratio calc
    }));

    const viewAllItem = {
      id: "view-all",
      img: "", // No default bg image needed as content provides it
      url: "/team", // Fallback, though Link handles it
      height: 300, // Fixed height for view all card
      forceLowPosition: true, // Ensure it sits at the bottom
      content: (
        <Link
          href="/team"
          className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden rounded-[10px] border border-red-900 group"
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
              See full gallery
            </span>
          </div>
        </Link>
      ),
    };

    return [...images, viewAllItem];
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
