"use strict";
"use client";

import { Sparkles } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Image from "next/image";

const GlowingBorderCard = ({
  children,
  className = "",
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative group rounded-[32px] border border-white/5 bg-zinc-950/40 backdrop-blur-xl transition-all duration-500 overflow-hidden ${className} 
      ${highlight ? "ring-1 ring-red-500/50 shadow-[0_0_50px_rgba(235,0,40,0.2)] scale-[1.02] md:scale-[1.05] z-20" : "hover:border-white/20"}`}
      onMouseMove={handleMouseMove}
    >
      {/* Phi background texture (very subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rotate-12">
          <Image
            src="/fi.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(235, 0, 40, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Moving Border Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(235, 0, 40, ${highlight ? '0.4' : '0.2'}),
              transparent 80%
            )
          `,
          maskImage: `radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )`,
          WebkitMaskImage: `radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )`,
        }}
      />

      <div className="relative h-full z-10">{children}</div>
    </div>
  );
};

export default function Tariff() {

  const tiers = [
    {
      name: "Regular",
      price: "1200",
      highlight: false,
      isSale: false,
      buttonText: "Secure Seat",
      url: "https://www.graburpass.com/e/QuY6el",
    },
    {
      name: "Flash Sale",
      price: "1200",
      salePrice: "900",
      savings: "300",
      discount: "25% OFF",
      highlight: true,
      isSale: true,
      buttonText: "Claim Flash Sale",
      url: "https://www.graburpass.com/e/QuY6el",
    },
  ];

  return (
    <section className="py-20 md:py-32 pt-[4vw] bg-black relative overflow-hidden">
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 30px rgba(235, 0, 40, 0.4);
        }
      `}</style>
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-[10px] uppercase font-bold tracking-[0.2em] text-red-500 mb-6 font-sans">
            <Sparkles className="w-3 h-3" /> Admission
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-6 font-robofan tracking-tight">
            Ticket <span className="text-red-600 drop-shadow-[0_0_15px_rgba(235,0,40,0.5)]">Tariff</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Redefine your perspective. Secure your entry to the most anticipated event of the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex"
            >
              <GlowingBorderCard
                highlight={tier.highlight}
                className={`p-10 md:p-14 flex flex-col w-full h-full border-white/5 mx-auto min-h-[520px] justify-between relative ${tier.highlight ? "border-red-500/20" : ""}`}
              >
                {/* Sale Ribbon - Only for Flash Sale */}
                {tier.isSale && (
                  <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
                    <div className="absolute top-6 -right-8 w-40 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest text-center rotate-45 shadow-lg border-y border-white/20">
                      Flash Sale
                    </div>
                  </div>
                )}

                <div className="flex flex-col items-center mb-8 relative">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest mb-6 px-4 ${tier.isSale ? "bg-red-600/10 border-red-600/20 text-[#EB0028]" : "bg-white/5 border-white/10 text-zinc-400"}`}>
                    {tier.isSale ? "Limited Period Offer" : "Standard Admission"}
                  </div>

                  <h3 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 font-robofan ${tier.isSale ? "text-white" : "text-zinc-300"}`}>
                    {tier.name}
                  </h3>

                  <div className="flex flex-col items-center justify-center gap-0 w-full">
                    {/* Old Price - Only for Flash Sale */}
                    {tier.isSale && (
                      <div className="flex items-center gap-2 mb-2 group-hover:scale-105 transition-transform">
                        <span className="text-2xl text-zinc-500 line-through decoration-red-600/60 decoration-2 opacity-50 font-bold">₹{tier.price}</span>
                        <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] font-black text-white/60">{tier.discount}</span>
                      </div>
                    )}

                    {/* New Price (or regular price) */}
                    <div className="flex items-baseline gap-2 relative">
                      <span className={`text-2xl font-bold ${tier.isSale ? "text-[#EB0028]" : "text-zinc-500"}`}>₹</span>
                      <span className={`text-7xl md:text-8xl font-black tracking-tighter transition-all duration-500 ${tier.isSale ? "text-white text-glow" : "text-zinc-400"}`}>
                        {tier.isSale ? tier.salePrice : tier.price}
                      </span>
                      <span className="text-zinc-500 font-medium uppercase text-[10px] tracking-[0.2em] self-end pb-4 font-sans ml-2">/ Ticket</span>
                    </div>

                    {/* Savings Text - Only for Flash Sale */}
                    {tier.isSale && (
                      <div className="mt-4 px-4 py-1.5 rounded-lg bg-red-600/20 border border-red-600/30 text-white text-xs font-bold animate-pulse">
                        You Save ₹{tier.savings} Today
                      </div>
                    )}
                  </div>
                </div>

                <div className="grow" />

                <div className="space-y-4 w-full">
                  <a
                    href={tier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative w-full h-16 md:h-20 flex items-center justify-center rounded-2xl font-black text-sm md:text-base uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden font-sans border-2 ${tier.isSale ? "text-white border-red-600 shadow-[0_0_30px_rgba(235,0,40,0.3)] hover:shadow-[0_0_50px_rgba(235,0,40,0.5)]" : "text-zinc-400 border-white/10 hover:border-white/20"}`}
                  >
                    {/* Background Layer */}
                    <div className={`absolute inset-0 transition-colors duration-500 ${tier.isSale ? "bg-[#EB0028] group-hover/btn:bg-red-700" : "bg-white/5 group-hover/btn:bg-white/10"}`} />

                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-3">
                      {tier.buttonText}
                      <Sparkles className={`w-5 h-5 ${tier.isSale ? "animate-pulse" : ""}`} />
                    </span>

                    {/* Shine */}
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                      <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-25 group-hover/btn:animate-shine transition-all duration-1000" />
                    </div>
                  </a>

                  <p className="text-center text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    {tier.isSale ? "* Limited seats available at this price" : "* Standard event pricing applies"}
                  </p>
                </div>
              </GlowingBorderCard>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-20 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-black font-sans">
            Secured by
          </p>
          <div className="h-8 w-auto relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="/graburpass-mainlogo.svg"
              alt="GrabUrPass Logo"
              width={160}
              height={32}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
