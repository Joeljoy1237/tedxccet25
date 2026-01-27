"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

type TabContent = {
  id: string;
  label: string;
  title: string;
  description: string;
  video?: string;
  image?: string;
};

const content: TabContent[] = [
  {
    id: "ted",
    label: "TED",
    title: "TED",
    description:
      "TED, which expands to Technology, Entertainment and Design, is a nonprofit that shares educational and inspiring ideas with billions of people across the world to inspire change across individuals, communities and organizations.Focusing on `Ideas Worth Spreading` through short, powerful talks. It's a global non-profit media organization known for its popular TED Talks, which feature experts sharing insights from science, business, global issues, and more.",
  },
  {
    id: "tedx",
    label: "TEDx",
    title: "TEDx",
    description:
      "TED is a nonprofit organization committed to uncovering and sharing ideas that spark conversation, deepen understanding and inspire meaningful change. TEDx events are independently organized local gatherings licensed by TED. While TED organizes its flagship conferences, TEDx events are organized independently by local communities or organizations under a free license granted by TED.",
  },
  {
    id: "tedxccet",
    label: "TEDxCCET",
    title: "TEDxCCET",
    description:
      "TEDxCCET is an exclusive TEDx event authorized by TED, a prestigious non-profit renowned organization for their influential talks and groundbreaking ideas. As licensed organizers, we have the privilege to host an event in which up to 100 attendees can take part in. Speakers from all over the world deliver TEDx talks that not only informs but also inspires, leaving a lasting impact on the attendees long after the event concludes.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(content[0].id);

  const activeContent = content.find((c) => c.id === activeTab) || content[0];

  return (
    <section id="about" className={`pt-12 pb-2 relative z-10  bg-black `}>
      <div className="w-full px-4 lg:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-center text-4xl md:text-6xl font-black uppercase mb-16">{/* text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 text-glow */}
            ABOUT <span className="text-red-600">US</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4">
          {/* Left Column: Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {content.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group relative px-6 py-4 text-left transition-all duration-300 rounded-xl border backdrop-blur-sm overflow-hidden ${
                  activeTab === item.id
                    ? "bg-red-600/10 border-red-600/50 text-white shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                    : "bg-white/5 border-white/5 text-neutral-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-lg font-bold tracking-wide">
                    {item.label}
                  </span>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out ${
                    activeTab === item.id ? "opacity-100" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Column: Content & Visual */}
           {/* Column 2: Text Content (4 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white/90 mb-4 flex items-center gap-3">
                  <span className="w-1 h-8 bg-red-600 rounded-full inline-block" />
                  {activeContent.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed md:text-base text-sm font-light text-justify">
                  {activeContent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: Visual/Video (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 top-1 relative aspect-video w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl shadow-red-900/20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none z-10" />
            <iframe
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://www.youtube.com/embed/d0NHOpeczUU?autoplay=1&mute=1&loop=1&playlist=d0NHOpeczUU&controls=0"
              title="TEDxCCET"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* CSS for custom effects (Scoped to this component mostly, but reusing global if available) */}
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 40px rgba(220, 38, 38, 0.4);
        }
      `}</style>
    </section>
  );
}
