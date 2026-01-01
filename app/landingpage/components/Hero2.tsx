"use client";

import React, { useEffect } from "react";
import { Inter, Manrope } from "next/font/google";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Ticket,
  ChevronRight,
  ArrowDown,
} from "lucide-react";

import HeroText from "@/app/landingpage/components/HeroText";
import HeroX from "./X";
import BackgroundSlideshow from "./BackgroundSlideshow";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function Hero2() {
  return (
    <div
      className={`${inter.variable} ${manrope.variable} relative bg-black text-white antialiased overflow-x-hidden selection:bg-red-600 selection:text-white font-[family-name:var(--font-inter)]`}
    >
      {/* CSS for custom effects */}
      <style jsx global>{`
        .font-display {
          font-family: var(--font-manrope), sans-serif;
        }
        .text-glow {
          text-shadow: 0 0 40px rgba(220, 38, 38, 0.4);
        }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Ambient Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Abstract Gallery / Texture Background */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale mix-blend-overlay"
            alt="Texture"
          />
        </div>

        {/* Deep Red Atmospheric Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/30 via-black/80 to-black pointer-events-none"></div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 grain pointer-events-none z-10"></div>
      </div>


      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 pb-12 px-6">
        {/* Main Content Wrapper */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left">
            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 animate-[fadeIn_1s_ease-out]">
              <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
              <span className="text-sm font-medium tracking-widest uppercase text-red-500/90">
                Independently Organized Event
              </span>
            </div>

            {/* Massive Title */}
            <div className="relative mb-6">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-semibold tracking-tighter text-white leading-[0.9] text-glow mix-blend-screen">
                DAUNT<span className="text-red-600">∅</span>
              </h1>
              <div className="hidden md:block absolute -top-10 -left-10 w-32 h-32 border-l border-t border-red-600/30 opacity-50"></div>
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl font-light text-white/90 tracking-tight mb-8">
              Redesigning Fear. <br className="hidden md:block" />
              <span className="text-neutral-500">Redefining the Future.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-light">
              A curated visual gallery of fearless voices. Join us as we
              dismantle the architecture of doubt and construct a new reality
              built on courage.
            </p>

            {/* Info Bar (Date/Location) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12 text-base text-neutral-300">
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>September 7, 2024</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Carmel College of Engineering</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black text-base font-semibold rounded-lg hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                Get Tickets
                <Ticket className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white text-base font-medium rounded-lg hover:bg-white/5 hover:border-neutral-500 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                Learn More
                <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>



        {/* Floating Abstract Elements for Depth */}
        <div className="absolute bottom-12 right-12 hidden lg:block opacity-30">
          <div className="grid grid-cols-3 gap-2">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Footer Strip (Visual Anchor) */}
      <footer className="fixed bottom-0 w-full z-20 border-t border-white/5 bg-black/80 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-neutral-500 font-mono">
          <div>
            <span className="text-red-600 mr-2">●</span> LIVE BROADCAST PENDING
          </div>
          <div className="flex gap-4">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </div>
        </div>
      </footer>
    </div>
  );
}
