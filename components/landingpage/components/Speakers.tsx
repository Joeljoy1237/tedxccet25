"use strict";
"use client";

import { speakers } from "@/data/speakers";
import SpeakerCard from "@/components/SpeakerCard";
import { motion } from "framer-motion";

export default function Speakers() {

  return (
    <section id="speakers" className="py-10 md:py-14 lg:py-20 px-[4vw] bg-black text-white relative">
      <div className="text-center relative z-10 bg-transparent mb-16">
        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-500 uppercase"
        >
          Speakers
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-6xl font-black uppercase mb-4 font-robofan tracking-wider"
          aria-label="Voices of Courage - Speakers"
        >
          VOICES OF <span className="text-[#EB0028]">COURAGE</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-xl text-neutral-400 max-w-2xl mx-auto font-sans"
        >
          Pioneers, visionaries, and change-makers who turned their fear into
          fuel.
        </motion.p>
      </div>

      <div className="px-[4vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <SpeakerCard speaker={speaker} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
