"use client";

import { motion } from "framer-motion";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function Welcome() {
  const flickerContent = (
    <div className="flex flex-row font-[1000] gap-2 text-4xl md:text-6xl lg:text-6xl uppercase tracking-tighter flex-wrap w-full items-center justify-center relative z-10">
      <span className="">
        <span className="w flicker-text">W</span>
        <span className="e flicker-text">E</span>
        <span className="l flicker-text">L</span>
        <span className="c flicker-text">C</span>
        <span className="o flicker-text">O</span>
        <span className="m flicker-text">M</span>
        <span className="e flicker-text">E</span>
      </span>
      <span className="">
        <span className="w flicker-text">T</span>
        <span className="e flicker-text">O</span>
      </span>
      <span className="text-[#EB0028] font-black ">
        <span className="t flicker-text redText">T</span>
        <span className="e flicker-text redText">E</span>
        <span className="d flicker-text redText">D</span>
        <sup>
          <span className="x flicker-text redText md:text-4xl text-base ">
            x
          </span>
        </sup>
      </span>{" "}
      <span className="">
        <span className="font-bold ccet1 flicker-text">C</span>
        <span className="font-bold ccet2 flicker-text">C</span>
        <span className="font-bold ccet3 flicker-text">E</span>
        <span className="font-bold ccet4 flicker-text">T</span>
      </span>{" "}
      <span className="">
        <span className="flicker-text">2</span>
        <span className="flicker-text">0</span>
        <span className="flicker-text">2</span>
        <span className="flicker-text">6</span>
      </span>
    </div>
  );

  return (
    <section
      className={`py-14 px-6 relative z-10 bg-black text-white ${manrope.variable} font-[family-name:var(--font-manrope)]`}
    >
      <div className="mx-[3vw] text-center">
        <div className="w-full items-center justify-center flex gap-5 overflow-visible mb-32 md:mb-20 lg:mb-12 select-none relative">
          {/* Main Title with CSS Reflection */}
          <h2 className="flex flex-row gap-2 flex-wrap w-full items-center justify-center relative z-10 welcome-heading">
            {flickerContent}
          </h2>
        </div>

        {/* Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-neutral-400 text-lg lg:text-xl leading-relaxed font-raleway max-w-screen mx-auto md:text-center text-justify"
        >
          We are thrilled to bring the global spirit of{" "}
          <span className="text-red-600 font-bold">TEDx</span>—a program of
          local, self-organized events dedicated to "ideas worth spreading"—to
          the heart of Carmel College of Engineering and Technology. On March
          21st, join our community of innovators as we bridge technical
          excellence with our 2026 theme:
          <span className="text-red-600 font-bold">DAUNT∅ (Dauntless)</span>. By
          redesigning fear and redefining the future, we invite you to explore
          ideas that surpass boundaries and recalibrate what lies ahead.
          Together, we will address the challenges that shape us, proving that
          through consistency and courage, we can transform our collective
          vision of tomorrow.
        </motion.p>
      </div>
    </section>
  );
}
