"use strict";
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
// Local Manrope import removed

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

const MagneticButton = ({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);
    x.set(xPos * 0.15); // Attraction strength
    y.set(yPos * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={`group relative px-6 py-4 text-left transition-all duration-300 rounded-xl border backdrop-blur-sm overflow-hidden ${
        active
          ? "bg-red-600/10 border-red-600/50 text-white shadow-[0_0_30px_rgba(220,38,38,0.2)]"
          : "bg-white/5 border-white/5 text-neutral-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
      }`}
    >
      <div className="relative z-10 flex items-center justify-between pointer-events-none">
        <span className="text-lg font-bold tracking-wide">{children}</span>
      </div>
      <div
        className={`absolute inset-0 bg-linear-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out ${
          active ? "opacity-100" : ""
        }`}
      />
    </motion.button>
  );
};

export default function About() {
  const [activeTab, setActiveTab] = useState(content[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const activeContent = content.find((c) => c.id === activeTab) || content[0];

  return (
    <section id="about" ref={containerRef} className={`py-10 md:py-14 lg:py-20 relative z-10 bg-black`}>
      <div className="w-full px-[4vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-center text-4xl md:text-6xl lg:text-6xl font-black uppercase font-robofan tracking-wider">
            ABOUT <span className="text-[#EB0028]">US</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Navigation (Magnetic Tabs) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {content.map((item) => (
              <MagneticButton
                key={item.id}
                active={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </MagneticButton>
            ))}
          </div>

          {/* Right Column: Content & Visual */}
          <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Text Content */}
            <div className="flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeContent.id}
                  initial={{ opacity: 0, x: -20, rotateY: 10 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 20, rotateY: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-4 perspective-1000"
                >
                  <h3 className="text-2xl font-bold text-white/90 mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-red-600 rounded-full inline-block" />
                    {activeContent.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed md:text-base lg:text-lg lg:leading-loose text-sm font-sans font-light text-justify">
                    {activeContent.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual/Video with Parallax */}
            <motion.div
              style={{ y: parallaxY }} // Parallax effect
              className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl shadow-red-900/20 group"
            >
              <div className="absolute inset-0 bg-linear-to-t from-red-900/20 to-transparent pointer-events-none z-10" />
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
    </section>
  );
}
