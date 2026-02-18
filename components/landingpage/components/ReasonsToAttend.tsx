"use strict";
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Inspiration",
    description:
      "Inspiring speakers share transformative ideas that broaden perspectives and motivate meaningful personal growth.",
  },
  {
    title: "Creative and Diverse",
    description:
      "Network with curious minds, innovators and leaders, to build connections that spark collaboration and future opportunities.",
  },
  {
    title: "Networking",
    description:
      "Experience diverse topics such as technology, creativity, science and society, delivered through engaging storytelling formats by experts.",
  },
  {
    title: "Learning",
    description:
      "Gain fresh insights and practical takeaways you can apply immediately to your studies, career and life.",
  },
  {
    title: "Transformation",
    description:
      "Be part of a campus event celebrating ideas, curiosity and the power of shared learning.",
  },
  {
    title: "Unforgettable Experience",
    description:
      "Get inspired to think boldly, challenge assumptions and create a positive impact within your community.",
  },
];

const SpotlightCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-white/10 bg-black overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(235,0,40,0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
};

export default function ReasonsToAttend() {
  return (
    <section className="py-10 md:py-14 lg:py-20 px-[4vw] bg-black text-white relative">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-black uppercase font-robofan tracking-wider">
            Six Reasons to <span className="text-[#EB0028]">Attend</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <SpotlightCard
              key={index}
              className="p-8 h-full flex flex-col justify-center group"
            >
              <div className="mb-4 w-12 h-1 bg-red-600 rounded-full group-hover:w-24 transition-all duration-300" />
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                {reason.title}
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed font-sans group-hover:text-white transition-colors duration-300">
                {reason.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
