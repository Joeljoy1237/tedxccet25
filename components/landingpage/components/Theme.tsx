"use strict";
"use client";

import TextType from "@/components/TextType";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Theme() {
  return (
    <section className="py-10 md:py-14 lg:py-20 px-[4vw] bg-black text-white relative flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 blur-[100px] rounded-full animate-pulse pointer-events-none" />

      {/* Pill Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-500 uppercase relative z-10"
      >
        The Theme
      </motion.div>

      {/* Main Title DAUNTØ - RESTORED */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl lg:text-7xl font-bold mb-12 font-robofan text-[#EB0028] tracking-wider relative z-10"
        aria-label="DAUNTLESS"
      >
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
                <Image
                  src="/fi.png"
                  alt="Dauntless symbol ∅"
                  width={50}
                  height={50}
                  className="inline-block h-[0.8em] w-auto align-baseline mb-[-0.05em]"
                />
              ),
            }}
          />
        </span>
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed font-sans font-light md:text-justify lg:text-justify relative z-10"
      >
        <p>
          <span className="text-red-500 font-bold">
            DAUNT <span className="text-white">∅</span>
          </span>{" "}
          {"(Dauntless)"} <span className="text-white/80">symbolizing the journey of redesigning fear and
          redefining the future.</span> "Daunt," which means fear that holds us back,
          and "∅" (null), which indicates erasing the limitations and starting
          from scratch.
        </p>

        <p>
          The theme <span className="text-red-600 font-bold">DAUNT</span> ∅
          encourages an explorative and diverse journey across dimensions,
          recognizing that growth is slow, iterative and constructed through
          challenges by undertaking consistency.
        </p>
      </motion.div>

      {/* Diamond Separator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-24 flex items-center gap-4 opacity-50"
      >
        <div className="h-[1px] w-24 bg-linear-to-r from-transparent to-red-600"></div>
        <div className="w-3 h-3 bg-red-600 rotate-45 transform"></div>
        <div className="h-[1px] w-24 bg-linear-to-l from-transparent to-red-600"></div>
      </motion.div>
    </section>
  );
}
