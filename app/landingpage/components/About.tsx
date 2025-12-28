"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    image: "/images/bg4.jpg", // Placeholder image
  },
  {
    id: "tedx",
    label: "TEDx",
    title: "TEDx",
    description:
      "TEDx events are independently organized and licensed TED-like events organized by enthusiastic communities and organizers in line with TED’s mission ‘ideas worth spreading’. Its goal is to create a unique gathering in the community that will unleash new ideas, inspire and inform. It provides a platform where ideas are shared openly and connections are made through conversation. The event screens TED Talks videos and invites live speakers to drive ideation and start conversations. TEDx has reached a milestone of 100,000 talks and are now viewed more than 3 billion times annually.",
    image: "/images/bg2.jpg", // Placeholder image
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
    <section className="py-20 px-6 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-16 tracking-widest uppercase">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Navigation & Text */}
          <div className="space-y-8">
            {/* Tabs */}
            <div className="flex flex-col items-start gap-2">
              {content.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-6 py-2 text-lg font-bold uppercase transition-all duration-300 rounded-md text-left ${
                    activeTab === item.id
                      ? "bg-red-600 text-white pl-8 pr-16 min-w-full"
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Content Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-neutral-300 leading-relaxed text-justify">
                  {activeContent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Visual (Video) */}
          <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl shadow-red-900/20">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/d0NHOpeczUU?autoplay=1&mute=1&loop=1&playlist=d0NHOpeczUU&controls=0"
              title="TEDxCCET"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
