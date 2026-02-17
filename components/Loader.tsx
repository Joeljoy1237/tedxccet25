"use client";

import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils"; // Assuming utils exists, or I will use standard class concatenation if not sure. simpler to just use template literals for now if I don't check lib.

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["800"], // Extra Bold
});

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const totalDuration = 1000; // 2 seconds
    const intervalTime = 20; // Update every 20ms
    const steps = totalDuration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      clearInterval(timer); // Ensure timer is cleared when hiding
    }, totalDuration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl transition-opacity duration-500">
      <div
        className={`${orbitron.className} flex flex-col items-center w-full`}
      >
        {/* Row with Lines and X */}
        <div className="flex flex-row items-center justify-center w-full gap-4">
          {/* Left Line */}
          <div
            className="h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all duration-75 ease-out rounded-full"
            style={{ width: `calc(${progress}vw / 2 - 30px)` }}
          />

          {/* X */}
          <div className="text-red-600 text-3xl font-black tracking-widest leading-none drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] z-10">
            X
          </div>

          {/* Right Line */}
          <div
            className="h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all duration-75 ease-out rounded-full"
            style={{ width: `calc(${progress}vw / 2 - 30px)` }}
          />
        </div>

        {/* Percentage */}
        <div className="text-red-600 text-xl font-bold mt-2 tracking-widest drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}
