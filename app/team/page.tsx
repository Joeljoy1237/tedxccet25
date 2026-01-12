"use client";

import { galleryImages } from "@/data/galleryImages";
import { BlurFade } from "@/components/ui/blur-fade";

export default function TeamPage() {
  return (
    <div className="bg-black min-h-screen text-white">
    

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A collection of moments from our events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {galleryImages.map((image, index) => (
            <BlurFade key={index} delay={0.02 + index * 0.05} inView>
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
        </div>
      </div>
    </div>
  );
}
