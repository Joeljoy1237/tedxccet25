"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="py-10 md:py-14 lg:py-20 px-[4vw] bg-black text-white relative z-10">
      <div className="max-w-7xl mx-auto text-center space-y-20">
        {/* Header — YOUR design */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
            Partners
          </div>

          <h2 className="text-4xl md:text-6xl font-robofan font-extrabold uppercase tracking-wider">
            OUR <span className="text-red-600">PARTNERS</span>
          </h2>

          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light">
            Organizations that share our vision for a dauntless future.
          </p>
        </div>

        {/* Ticketing Sponsor */}
        <div className="space-y-6">
          <h3 className="text-sm md:text-base font-bold text-red-600 uppercase tracking-widest">
            Ticketing Partner
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              onClick={() =>
                window.open("https://www.graburpass.com/", "_blank")
              }
              className="mx-auto w-full max-w-md h-48 rounded-2xl border border-white/10 bg-white/5 
                         flex items-center justify-center cursor-pointer hover:border-red-600/50 transition-all duration-300"
            >
              <Image
                src="/graburpass-mainlogo.svg"
                alt="GrabUrPass"
                width={200}
                height={80}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Co-Powered By */}
        <div className="space-y-6">
          <h3 className="text-sm md:text-base font-bold text-red-600 uppercase tracking-widest">
            Co-Powered By
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-full max-w-md h-48 rounded-2xl border border-white/10 bg-white/5 
                         flex items-center justify-center hover:border-red-600/50 transition-all duration-300"
            >
              <Image
                src="/sponsors/obcydians.png"
                alt="Obcydians"
                width={180}
                height={80}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
