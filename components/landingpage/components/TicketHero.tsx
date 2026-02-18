"use strict";
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Clipboard, Ticket } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface TicketHeroProps {
  ticketURL?: string;
}

const TicketHero: React.FC<TicketHeroProps> = ({
  ticketURL = "https://www.tedxccet.in",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="ticket-hero"
      className="w-full px-[4vw] py-10 md:py-14 lg:py-20 flex flex-col justify-center items-center font-sans bg-black relative z-10 perspective-1000"
    >
      {/* Section Title Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase"
      >
        Buy Now
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-6xl lg:text-6xl font-robofan font-extrabold uppercase tracking-wider mb-16 text-white"
      >
        GET <span className="text-[#EB0028]">TICKETS</span>
      </motion.h2>

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 50, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-7xl mx-auto bg-transparent flex flex-col lg:flex-row will-change-transform group cursor-pointer"
      >
        {/* Glare Effect */}
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none rounded-[32px] mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8), transparent 50%)`,
          }}
        />

        {/* Optimized Shadow Element */}
        <div className="absolute inset-0 rounded-[32px] shadow-[0_20px_50px_rgba(235,0,40,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform translate-z-[-20px]" />

        {/* Left Section - Visual / Destination Feel */}
        <div className="w-full lg:w-[25%] h-56 md:h-64 lg:h-auto relative overflow-hidden rounded-t-[32px] lg:rounded-tr-none lg:rounded-l-[32px] transform translate-z-[10px]">
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

        {/* Center Section - Event Details */}
        <div className="w-full lg:w-[50%] relative py-12 px-6 flex flex-col justify-between border-b lg:border-b-0 border-white/5 text-center z-10 overflow-hidden min-h-[400px] lg:min-h-auto bg-black/80 backdrop-blur-md transform translate-z-[20px]">
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

          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Header Row */}
          <div className="relative z-10 flex justify-between items-center mb-8 h-10 transform translate-z-[30px]">
            <div className="flex items-baseline leading-none text-left h-full">
              <span className="text-red-600 font-extrabold text-2xl tracking-tighter">
                TED<span className="text-lg relative -top-1 ml-px">x</span>
              </span>
              <span className="text-white text-2xl font-bold tracking-tight ml-1">
                CCET
              </span>
            </div>

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
          <div className="relative z-10 grow flex flex-col justify-center py-6 items-center transform translate-z-[40px]">
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

          {/* Metadata Footer */}
          <div className="relative z-10 grid grid-cols-3 gap-6 pt-6 mt-4 text-left transform translate-z-[30px]">
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

        {/* Right Section - CTA */}
        <div className="w-full lg:w-[25%] bg-[#EB0028] text-white p-6 flex flex-col items-center justify-center text-center relative rounded-b-[32px] lg:rounded-r-[32px] lg:rounded-l-none transform translate-z-[20px]">
          <div className="absolute left-0 top-6 bottom-6 w-[2px] hidden lg:flex flex-col justify-between items-center -translate-x-1/2 z-30">
            <div className="flex flex-col justify-between h-full w-[6px] gap-1">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-[6px] h-2 bg-white rounded-full opacity-60"
                ></div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 h-1 flex justify-between lg:hidden z-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] -mt-1 mx-1"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center h-full justify-center w-full transform translate-z-[10px]">
            <h3 className="text-2xl font-black uppercase leading-tight mb-4">
              Grab Your <br /> Tickets Now!
            </h3>

            <Link
              href="https://www.graburpass.com/e/QuY6el"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-xl shadow-lg mb-4 transform transition-transform hover:scale-105 duration-300 block cursor-pointer will-change-transform"
            >
              <div className="relative w-28 h-28">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://www.graburpass.com/e/QuY6el"
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
              href="https://www.graburpass.com/e/QuY6el"
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

          {/* Early Bird – Tooltip Look */}
          <div className="absolute -bottom-16 right-6 z-50 md:-bottom-16 md:right-10">
            <motion.div
              className={`relative bg-black text-white px-4 py-3 rounded-md shadow-2xl border transition-all duration-300 w-44 cursor-pointer overflow-hidden
                ${copied ? "border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]" : "border-red-600"}
              `}
              onClick={() => handleCopy("TEDXCCET26")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`absolute -top-1.5 right-8 w-3 h-3 bg-black rotate-45 border-l border-t transition-colors duration-300
                ${copied ? "border-green-500" : "border-red-600"}`}
              />

              <div className="flex flex-col items-center">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.p
                      key="copied-label"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[10px] uppercase tracking-widest font-bold text-green-500 mb-1 text-center"
                    >
                      Copied!
                    </motion.p>
                  ) : (
                    <motion.p
                      key="early-bird-label"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[10px] uppercase tracking-widest font-bold text-red-500 mb-1 text-center"
                    >
                      Early Bird
                    </motion.p>
                  )}
                </AnimatePresence>

                <p className="text-xs text-zinc-300 text-center">
                  Use Coupon Code
                </p>

                <div
                  className={`mt-1 w-full border border-dashed p-1 rounded transition-colors duration-300 flex items-center justify-center gap-2
                  ${copied ? "border-green-500/50 bg-green-500/5" : "border-white/20 bg-white/5"}`}
                >
                  <p
                    className={`text-sm font-black tracking-wider transition-colors duration-300
                    ${copied ? "text-green-500" : "text-white"}`}
                  >
                    TEDXCCET26
                  </p>
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-green-500"
                      >
                        <Check className="w-3 h-3" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-zinc-500"
                      >
                        <Clipboard className="w-3 h-3" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <p className="text-[10px] text-zinc-500 text-center mt-1">
                  (Click to copy)
                </p>
              </div>

              {/* Shine effect when copied */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-25 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-7xl mx-auto px-6 relative z-10 mt-16 lg:mt-12"
      >
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <div className="max-w-4xl text-center mt-10">
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed font-light">
              Don't miss out on the opportunity to be part of{" "}
              <span className="text-white font-bold">TEDxCCET 2026</span>.
              Secure your spot today and join the conversation.
            </p>
          </div>

          <div className="flex flex-col items-center shrink-0">
            <Link
              href="https://www.graburpass.com/e/QuY6el"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#EB0028] text-white px-10 py-5 rounded-md font-black text-sm md:text-base tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-red-700 shadow-[0_0_40px_rgba(235,0,40,0.4)] hover:shadow-[0_0_60px_rgba(235,0,40,0.6)] transform hover:-translate-y-1 whitespace-nowrap"
            >
              <span className="relative z-10">Get Your Tickets</span>
              <Ticket className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />

              {/* Button Shine Effect */}
              <div className="absolute top-0 -left-full w-[50%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-25 group-hover:animate-shine" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TicketHero;
