"use strict";
"use client";

import { motion, Variants } from "framer-motion";
// Local Manrope import removed

const letterContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2, // Wait for loader
    },
  },
};

const letterAnimation: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterAnimation}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Welcome() {
  return (
    <section
      className={`py-10 md:pb-14 md:pt-10 lg:pt-20 lg:pb-10 px-[4vw] relative z-10 bg-black text-white font-sans overflow-hidden`}
    >
      <div className="text-center">
        <motion.div
          className="w-full items-center justify-center flex flex-col gap-5 overflow-visible mb-10 md:mb-14 select-none relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={letterContainer}
        >
          {/* Main Title */}
          <h2 className="flex flex-row gap-4 flex-wrap w-full items-center justify-center font-robofan tracking-wider relative z-10 text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter mix-blend-screen">
            <AnimatedText text="WELCOME" />
            <AnimatedText text="TO" />
            <div className="inline-flex items-baseline">
              <span className="text-[#EB0028]">
                <AnimatedText text="TED" />
                <motion.sup
                  variants={letterAnimation}
                  className="text-xl md:text-4xl inline-block"
                >
                  x
                </motion.sup>
              </span>
            </div>
            <AnimatedText text="CCET" />
            <AnimatedText text="2026" />
          </h2>
        </motion.div>

        {/* Descriptive Text with Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-neutral-400 text-lg lg:text-xl leading-relaxed font-raleway mx-auto md:text-center text-justify"
        >
          <p>
            We are thrilled to bring the global spirit of{" "}
            <span className="text-white font-bold decoration-red-600 underline underline-offset-4 decoration-2">
              TEDx
            </span>
            —a program of local, self-organized events dedicated to "ideas worth
            spreading"—to the heart of Carmel College of Engineering and Technology.
          </p>
          <p className="mt-4">
            On March 21st, join our community of innovators as we bridge technical
            excellence with our 2026 theme:{" "}
            <span className="text-[#EB0028] font-black inline-block transform hover:scale-105 transition-transform duration-300">
              DAUNT∅ (Dauntless)
            </span>
            . By redesigning fear and redefining the future, we invite you to explore
            ideas that surpass boundaries and recalibrate what lies ahead.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
