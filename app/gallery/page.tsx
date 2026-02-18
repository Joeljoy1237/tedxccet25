import { galleryImages } from "@/data/galleryImages";
import Masonry from "@/components/Masonry";
import { useMemo } from "react";

export default function GalleryPage() {
  const items = useMemo(() => {
    return galleryImages.map((img, index) => ({
      id: index.toString(),
      img: img.src,
      url: img.src, // Using image source as URL for now
      // height removed
    }));
  }, []);

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
    </div>
  );
}
