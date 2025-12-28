import BackgroundSlideshow from "./BackgroundSlideshow";
import Image from "next/image";
import { Ticket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background with overlay */}
      <BackgroundSlideshow />

      {/* Content */}
      <div className="relative z-10 w-full h-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-start pt-24 lg:pt-0">
        {/* Visual Element (X) - Mobile: Top, Desktop: Absolute Right */}
        <div className="relative w-full flex justify-center lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 lg:items-center pointer-events-none mb-12 lg:mb-0 order-1 lg:order-none">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/assets2Fxlogo.webp"
              alt="Theme"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(220,38,38,0.5)]"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 z-10 w-full max-w-4xl lg:pl-20 items-start text-left order-2 lg:order-none">
          <div className="flex flex-col leading-[0.9] font-black uppercase tracking-tighter">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white flex flex-wrap justify-start gap-x-2 md:gap-x-4">
              <span>AN</span>
              <span className="text-red-600">INDEPENDENTLY</span>
            </div>
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white">
              ORGANIZED
            </div>
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl flex flex-wrap justify-start gap-x-2 md:gap-x-4">
              <span className="text-red-600">TED</span>
              <span className="text-white">EVENT</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-start items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2rem] px-6 py-3 w-fit mt-2 md:mt-4 max-w-full">
            <div className="flex items-center gap-2 text-white/80 border-r border-white/20 pr-4">
              {/* Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-5 md:h-5"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-xs md:text-sm lg:text-base font-medium whitespace-nowrap">
                7th September 2024
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80 pl-0 md:pl-2">
              {/* Map Pin Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-5 md:h-5 shrink-0"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-xs md:text-sm lg:text-base font-medium truncate max-w-[150px] sm:max-w-none">
                Carmel College of Engineering
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
            <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all flex items-center gap-2 group text-sm md:text-base">
              Get Tickets
              <Ticket className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
            </button>
            <button className="text-white font-semibold hover:text-red-500 transition-all flex items-center gap-2 group text-sm md:text-base">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
