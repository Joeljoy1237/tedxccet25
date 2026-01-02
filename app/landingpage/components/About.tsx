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
      "“By spreading ideas worthy enough to be shared, the power of inspiration and change is created”. A global community striving towards spreading ideas from every discipline and culture, that is TED in a nutshell. It is a non-profit organisation that helps people get the deeper meaning of ideas, attitudes and the world itself. From its origin in 1984, TED talks have touched people’s hearts. It is continued to be watched all around the world. The impact a TED event creates is unmatched. TED conferences and events inspire and motivate people towards becoming a better version of themselves",
  },
  {
    id: "tedx",
    label: "TEDx",
    title: "TEDx",
    description:
      "TEDx events are independently organized and licensed TED-like events organized by enthusiastic communities and organizers in line with TED’s mission ‘ideas worth spreading’. Its goal is to create a unique gathering in the community that will unleash new ideas, inspire and inform. It provides a platform where ideas are shared openly and connections are made through conversation. The event screens TED Talks videos and invites live speakers to drive ideation and start conversations. TEDx has reached a milestone of 100,000 talks and are now viewed more than 3 billion times annually.",
  },
  {
    id: "tedxccet",
    label: "TEDxCCET",
    title: "TEDxCCET",
    description:
      "The first-ever TEDxCCET at Carmel College of Engineering & Technology (CCET) is something we are quite excited about! Our dedication to encouraging creativity, inspiration and insightful conversation is demonstrated by this event. CCET is pleased to welcome the TEDx platform to our campus as a forward-thinking organization committed to academic excellence. TEDxCCET will bring together intellectuals and thought leaders. Join us on this journey of exploration, discovery and inspiration at TEDxCCET. Together, let’s embrace the power of ideas to ignite change and transform lives.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(content[0].id);

  const activeContent = content.find((c) => c.id === activeTab) || content[0];

  return (
    <section id="about" className={`py-12 relative z-10  bg-black `}>
      <div className="w-full px-4 lg:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 text-glow">
            ABOUT <span className="text-red-600">US</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start px-4">
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
          <div className="lg:col-span-9 flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Text Content */}
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
                  <p className="text-neutral-300 leading-relaxed text-lg font-light text-justify">
                    {activeContent.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Visual (Video) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative  aspect-video w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl shadow-red-900/20 group"
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
