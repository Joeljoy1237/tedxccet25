import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TicketHeroProps {
  ticketURL?: string;
}

const TicketHero: React.FC<TicketHeroProps> = ({
  ticketURL = "https://www.tedxccet.in",
}) => {
  // Static arrays moved outside or memoized if dynamic, here just static is fine to keep inside if small, but better outside.
  // Since they are constant size, we can just define them as constants outside.
  
  return (
    <section
      id="ticket-hero"
      className="w-full px-4 py-12 flex flex-col justify-center items-center font-sans bg-black relative z-10"
    >
      {/* Section Title Pill */}
      <div className="mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
        Buy Now
      </div>

      <h2 className="text-center text-4xl md:text-6xl lg:text-6xl font-black uppercase mb-16 text-white">
        GET <span className="text-[#EB0028]">TICKETS</span>
      </h2>

      <div className="relative w-full max-w-7xl mx-auto bg-transparent rounded-[32px] shadow-2xl flex flex-col lg:flex-row transition-transform duration-500 hover:scale-[1.01] will-change-transform group">
        
        {/* Optimized Shadow Element - Uses Opacity interacton instead of box-shadow animation */}
        <div className="absolute inset-0 rounded-[32px] shadow-[0_20px_50px_rgba(235,0,40,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Left Section - Visual / Destination Feel (25%) */}
        {/* Added rounded-l-[32px] for desktop since parent background is transparent now */}
        {/* Left Section - Visual / Destination Feel (25%) */}
        {/* Added rounded-l-[32px] for desktop since parent background is transparent now */}
        <div className="w-full lg:w-[25%] h-56 md:h-64 lg:h-auto relative overflow-hidden rounded-t-[32px] lg:rounded-tr-none lg:rounded-l-[32px]">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60 z-10" />
          <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent z-10" />
          <Image
            src="/keralabg.jpg"
            alt="Kerala Backwaters"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out will-change-transform"
          />
        </div>

        {/* Center Section - Event Details (50%) */}
        <div className="w-full lg:w-[50%] relative py-12 px-6 flex flex-col justify-between border-b lg:border-b-0 border-white/5 text-center z-10 overflow-hidden min-h-[400px] lg:min-h-auto">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/cardbg.png"
              alt="Background Texture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />
          </div>

          {/* Background Gradient Overlay for better text readability if needed, or just let the image shine. Adding a subtle fade. */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Header Row */}
          <div className="relative z-10 flex justify-between items-center mb-8 h-10">
            {/* TEDx Logo - Reduced Scale & Balanced */}
            <div className="flex items-baseline leading-none text-left h-full">
              <span className="text-red-600 font-extrabold text-2xl tracking-tighter">
                TED<span className="text-lg relative -top-1 ml-px">x</span>
              </span>
              <span className="text-white text-2xl font-bold tracking-tight ml-1">
                CCET
              </span>
            </div>

            {/* Sponsor Logo - Matched Height/Visual Weight */}
            <div className="relative w-32 h-10 opacity-90 flex items-center">
              <Image 
                src="/graburpass-mainlogo.svg"
                alt="GraburPass"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Main Title Area */}
          <div className="relative z-10 grow flex flex-col justify-center py-6 items-center">
            <h2 className="text-[#EB0028] text-5xl md:text-6xl font-robofan font-extrabold tracking-wider leading-[0.9] mb-4 uppercase flex items-center justify-center gap-1">
              DAUNT
              <span className="text-white relative w-[0.85em] h-[0.85em] flex items-center justify-center">
                <Image
                  src="/fi.png"
                  alt="Phi Symbol"
                  width={50}
                  height={50}
                  className="object-contain w-full h-full"
                />
              </span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base tracking-wide font-light">
              Redesigning Fear. Redefining The Future
            </p>
          </div>

          {/* Metadata Footer - Unified Width/Height Fonts */}
          <div className="relative z-10 grid grid-cols-3 gap-6 pt-6 mt-4 text-left border-t border-white/10">
            <div className="text-center">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">
                Date
              </p>
              <p className="text-white font-bold tabular-nums lining-nums text-sm lg:text-base uppercase tracking-tight">
                21 March 2026
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">
                Time
              </p>
              <p className="text-white font-bold tabular-nums lining-nums text-sm lg:text-base uppercase tracking-tight">
                10:00 AM
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">
                Venue
              </p>
              <p className="text-white font-bold text-sm lg:text-base uppercase tracking-tight">
                Seminar Hall
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - CTA (25%) - No bg image */}
        <div className="w-full lg:w-[25%] bg-[#EB0028] text-white p-6 flex flex-col items-center justify-center text-center relative overflow-hidden rounded-b-[32px] lg:rounded-r-[32px] lg:rounded-l-none">
          <div className="absolute left-0 top-6 bottom-6 w-[2px] hidden lg:flex flex-col justify-between items-center -translate-x-1/2 z-30">
            {/* Optimized Dots - Static Rendering */}
             <div className="flex flex-col justify-between h-full w-[6px] gap-1">
                 {/* Repeating background or simple dots instead of map if many */}
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[6px] h-2 bg-white rounded-full opacity-60"
                    ></div>
                  ))}
             </div>
          </div>

          {/* Mobile Tear Effect */}
          <div className="absolute top-0 left-0 right-0 h-1 flex justify-between lg:hidden z-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] -mt-1 mx-1"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center h-full justify-center w-full">
            <h3 className="text-2xl font-black uppercase leading-tight mb-4">
              Grab Your <br /> Tickets Now!
            </h3>

            <Link
              href="https://www.graburpass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-xl shadow-lg mb-4 transform transition-transform hover:scale-105 duration-300 block cursor-pointer will-change-transform"
            >
              <div className="relative w-28 h-28">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://www.graburpass.com/"
                  alt="Scan for Tickets"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>

            <Link
              href={ticketURL}
              className="inline-block text-white/90 font-medium text-base hover:text-white hover:underline decoration-2 underline-offset-4 mb-4 transition-colors"
            >
              www.tedxccet.in
            </Link>

            <Link
              href="https://www.graburpass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-100 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mb-2 w-auto max-w-full cursor-pointer will-change-transform"
            >
              <div className="relative w-6 h-6">
                <Image
                  src="/graburpasslogo.png"
                  alt="GraburPass"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Buy Now</span>
            </Link>

            <p className="text-[10px] opacity-80 whitespace-nowrap leading-relaxed">
              Be Present At The Seminar Hall Before 9:00 IST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketHero;
