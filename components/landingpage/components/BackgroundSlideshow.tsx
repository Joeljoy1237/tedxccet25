"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/bg2.webp",
  "/images/bg3.webp",
  "/images/bg4.webp",
  "/images/bg6.webp",
];

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {images.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out blur-sm ${
            i === index ? "opacity-40 md:opacity-60 z-1" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={img}
            alt="Background"
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[10px] z-10" />
    </div>
  );
}
