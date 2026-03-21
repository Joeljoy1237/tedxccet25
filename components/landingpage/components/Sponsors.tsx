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
              className="mx-auto w-full max-w-md h-48 rounded-3xl border border-white/10 bg-white/5 
                         flex items-center justify-center cursor-pointer hover:border-red-600/50 transition-all duration-300 overflow-hidden"
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
              className="mx-auto w-full max-w-md h-48 rounded-3xl border border-white/10 bg-white/5 
                         flex items-center justify-center hover:border-red-600/50 transition-all duration-300 overflow-hidden"
            >
              <Image
                src="/sponsors/obcydians.png"
                alt="Obcydians"
                width={180}
                height={80}
                className="object-contain rounded-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Speaker Sponsor */}
        <div className="space-y-6">
          <h3 className="text-sm md:text-base font-bold text-red-600 uppercase tracking-widest">
            Speaker Sponsor
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-48 rounded-3xl border border-white/10 bg-white/5 
                         flex items-center justify-center hover:border-red-600/50 transition-all duration-300 overflow-hidden p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sponsors/bharat_petrol.png"
                  alt="Bharat Petroleum"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-48 rounded-3xl border border-white/10 bg-white/5 
                         flex items-center justify-center hover:border-red-600/50 transition-all duration-300 overflow-hidden p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sponsors/palmy.jpeg"
                  alt="Palmy"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-48 rounded-3xl border border-white/10 bg-white/5 
                         flex items-center justify-center hover:border-red-600/50 transition-all duration-300 overflow-hidden p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sponsors/fstack.png"
                  alt="Fstack"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-48 rounded-3xl border border-white/10 bg-white/5 
                         flex items-center justify-center hover:border-red-600/50 transition-all duration-300 overflow-hidden p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sponsors/Galleria-01.jpg"
                  alt="Galleria"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-48 rounded-3xl border border-white/10 bg-white/5 
                         flex items-center justify-center hover:border-red-600/50 transition-all duration-300 overflow-hidden p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sponsors/Inntrad.jpg"
                  alt="Inntrad"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-48 rounded-3xl border border-white/10 bg-white/5 
                         flex items-center justify-center hover:border-red-600/50 transition-all duration-300 overflow-hidden p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/sponsors/zahrat.jpeg"
                  alt="Zahrat"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
