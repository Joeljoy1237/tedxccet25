"use client";

import { motion } from "framer-motion";

const sponsors = [
  {
    name: "CCET",
    logo: (
      <img
        src="/ccet.png"
        alt="CCET Logo"
        className="w-24 h-24 md:w-32 md:h-32"
      />
    ),
  },
];

export default function Sponsors() {
  return (
    <section className="py-24 px-6 bg-black text-white relative">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        {/* Header */}
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

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-neutral-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
              title={sponsor.name}
            >
              {sponsor.logo}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-8 space-y-6 border-t border-white/5 max-w-2xl mx-auto">
          <p className="text-neutral-400 text-lg">
            Want to partner with TEDxCCET?
          </p>
          <button className="px-8 py-3 rounded-full border border-red-600 text-red-600 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 text-sm">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
