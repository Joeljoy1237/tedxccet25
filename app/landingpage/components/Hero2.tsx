"use client";

import React from "react";
import Link from "next/link";
import { Inter, Manrope, K2D } from "next/font/google";
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
import TextType from "@/components/TextType";

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

const k2d = K2D({
  subsets: ["latin"],
  variable: "--font-k2d",
  display: "swap",
  weight: "400",
});

export default function Hero2() {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${inter.variable} ${manrope.variable} ${k2d.variable} relative bg-transparent text-white antialiased selection:bg-red-600 selection:text-white font-[family-name:var(--font-inter)]`}
    >
      {/* CSS for custom effects */}
      <style jsx global>{`
        .font-display {
          font-family: var(--font-manrope), sans-serif;
        }
        .font-k2d {
          font-family: var(--font-k2d);
        }
        .text-glow {
          text-shadow: 0 0 40px rgba(220, 38, 38, 0.4);
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
        <div className="relative min-h-screen bg-transparent pl-[2vw]  overflow-hidden">
          {/* <img
            src="/background2.avif"
            className="w-full h-full object-cover grayscale mix-blend-overlay"
            alt="Background"
          /> */}
          <BackgroundSlideshow />
        </div>

        {/* Deep Red Atmospheric Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/30 via-black/80 to-black pointer-events-none"></div>

        {/* Grain Overlay */}
      </div>

      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 pb-12 -bottom-18 ">
        {/* Main Content Wrapper */}
        <div className="mx-6 w-[93%] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-8 flex flex-col justify-left text-left lg:text-left relative z-20">
            {/* Massive Title */}
            <div className="relative mb-6 ">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-robofan font-extrabold text-red-500  leading-[0.9] tracking-wider">
                {/* text-glow mix-blend-screen text-[#EB0028] manrope font-bold */}
                DAUNT
                <span className="text-white">
                  <TextType
                    text={["Ø", "LESS"]}
                    typingSpeed={100}
                    pauseDuration={3500}
                    showCursor={true}
                    cursorCharacter="_"
                    replacements={{
                      Ø: (
                        <img
                          src="/fi.png"
                          alt="fi"
                          className="inline-block h-[0.8em] w-auto align-baseline mb-[-0.05em]"
                        />
                      ),
                    }}
                  />
                </span>
              </h1>
              {/*               <div className="hidden md:block absolute -top-10 -left-10 w-32 h-32 border-l border-t border-red-600/30 opacity-50"></div>
               */}{" "}
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-[1.7rem] font-light font-intro text-white/90 mb-8">
              {" "}
              {/* font-none tracking-tight */}
              Redesigning Fear <br />
              <span className="text-neutral-500">Redefining the Future</span>
            </h2>

            {/* Description */}

            {/* Info Bar (Date/Location) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start font-intro gap-6 mb-12 text-base text-neutral-300">
              {" "}
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>September 7, 2024</span>
              </div>
              <Link href="/gettingthere">
                <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>Carmel College of Engineering and Technology</span>
                </div>
              </Link>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center font-intro gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black text-base font-semibold rounded-lg hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                Get Tickets
                <Ticket className="w-4 h-4" />
              </button>

              <Link href="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white text-base font-medium rounded-lg hover:bg-white/5 hover:border-neutral-500 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                  Learn More
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </button>
              </Link>
            </div>
          </div>

          {/* Visual Element / The "X" Gallery */}
          {/* Full screen interactive Lanyard overlay */}
          {isDesktop && (
            <div className="absolute inset-0 z-1 h-full w-full mx-16 pointer-events-none">
              <HeroX className="w-full h-full" />
            </div>
          )}
        </div>

        {/* Floating Abstract Elements for Depth */}
      </main>
    </div>
  );
}
