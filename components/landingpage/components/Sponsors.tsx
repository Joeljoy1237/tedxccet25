"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center space-y-20">
        {/* Header — YOUR design */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
            Partners
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            OUR <span className="text-red-600">PARTNERS</span>
          </h2>

          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
            Organizations that share our vision for a dauntless future.
          </p>
        </div>

        {/* Ticketing Sponsor */}
        <div className="space-y-3">
          <h3 className="text-sm md:text-base font-bold text-red-600 uppercase tracking-widest">
            Ticketing Sponsor
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => window.open("https://www.graburpass.com/", "_blank")}
            className="mx-auto max-w-md h-44 rounded-2xl border border-red-600/70 
                       flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
          >
            <Image
              src="/graburpass-mainlogo.svg"
              alt="GrabUrPass"
              width={180}
              height={70}
              className="object-contain transition"
            />
          </motion.div>
        </div>

        {/* Co-Powered By */}
        <div className="space-y-3">
          <h3 className="text-sm md:text-base font-bold text-red-600 uppercase tracking-widest">
            Co-Powered By
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-md h-44 rounded-2xl border border-red-600/70 
                       flex items-center justify-center"
          >
            <Image
              src="/sponsors/obcydians.png"
              alt="Obcydians"
              width={160}
              height={60}
              className="object-contain transition"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
