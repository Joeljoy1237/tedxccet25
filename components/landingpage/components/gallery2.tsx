"use strict";
"use client";

import { galleryImages } from "@/data/galleryImages";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const galleryImagesLoop = [...galleryImages, ...galleryImages]; // Reduced duplication, usually enough for seamless loop

export default function Gallery2() {
  // Carousel 1: Moves Left (play)
  const [emblaRef1] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false }),
  ]);

  // Carousel 2: Moves Right (reverse)
  const [emblaRef2] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      playOnInit: true,
      speed: 1,
      direction: "backward",
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div className="bg-black py-10 md:py-14 lg:py-20 px-0 text-white relative overflow-hidden">
      <div className="text-center pb-16 px-[4vw] relative z-10 bg-transparent">
        {/* Pill Label */}
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
          Gallery
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4 font-robofan">
          CAPTURED <span className="text-red-600">MOMENTS</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-sans">
          Glimpses of energy, innovation, and inspiration.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        {/* Top Row - Moving Left */}
        <div className="overflow-hidden" ref={emblaRef1}>
          <div className="flex touch-pan-y gap-4 pl-4">
            {galleryImagesLoop.map((image, index) => (
              <div
                key={`row1-${index}`}
                className="flex-[0_0_auto] min-w-0" // Embla slide requirement
              >
                <Link
                  href="/team"
                  className="relative block w-[300px] md:w-[400px] aspect-4/3 group overflow-hidden border border-red-900/30"
                >
                  <Image
                    src={image.src}
                    alt={image.alt || `Gallery Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-colors duration-500" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="overflow-hidden" ref={emblaRef2}>
          <div className="flex touch-pan-y gap-4 pl-4">
            {galleryImagesLoop.map((image, index) => (
              <div
                key={`row2-${index}`}
                className="flex-[0_0_auto] min-w-0"
              >
                <Link
                  href="/team"
                  className="relative block w-[300px] md:w-[400px] aspect-4/3 group overflow-hidden border border-red-900/30"
                >
                  <Image
                    src={image.src}
                    alt={image.alt || `Gallery Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-colors duration-500" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
