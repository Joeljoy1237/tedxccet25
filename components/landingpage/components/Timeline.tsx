"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { timelineEvents } from "@/data/eventTimeline";

interface TimelineRowProps {
  event: (typeof timelineEvents)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}

const TimelineRow = ({ event, index, scrollYProgress }: TimelineRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [threshold, setThreshold] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current && dotRef.current) {
        const container = ref.current.offsetParent as HTMLElement;
        if (container) {
          const rowTop = ref.current.offsetTop;
          const dotTop = dotRef.current.offsetTop;
          const dotHeight = dotRef.current.offsetHeight;
          // Calculate the center of the dot relative to the container
          const targetY = rowTop + dotTop + dotHeight / 2;
          const containerHeight = container.offsetHeight;

          // Calculate the progress value (0-1) where the red line hits this target
          setThreshold(targetY / containerHeight);
        }
      }
    };

    // Measure initially and on resize
    measure();
    window.addEventListener("resize", measure);

    // Also measure after a short timeout to ensure layout is settled
    const timer = setTimeout(measure, 100);

    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(timer);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Activate when the red line (scrollYProgress) reaches the dot
    setActive(latest >= threshold);
  });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center w-full transition-all duration-500`}
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 mb-4 md:mb-0 flex md:justify-end">
        {isEven ? (
          // Even Index: Time on Left
          <div
            className={`hidden md:inline-block ${
              active
                ? "bg-red-600 text-white shadow-lg shadow-red-600/20 scale-105"
                : "text-neutral-500 bg-transparent"
            } font-mono font-bold text-xs md:text-sm px-3 py-1 rounded-sm uppercase tracking-wider transition-all duration-300`}
          >
            {event.time}
          </div>
        ) : (
          // Odd Index: Card on Left
          <div
            className={`group relative bg-[#0a0a0a] border ${
              active
                ? "border-red-600/40 shadow-xl shadow-red-900/10 scale-105"
                : "border-white/5 hover:border-red-600/20"
            } p-6 rounded-xl transition-all duration-500 w-full md:max-w-md text-left ml-auto`}
          >
            <div className="flex items-start gap-4 mb-2">
              <div
                className={`p-2 rounded-lg shrink-0 transition-colors duration-300 ${
                  active
                    ? "bg-red-600 text-white"
                    : "bg-white/5 text-neutral-500"
                }`}
              >
                {event.icon}
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-300 ${
                    active
                      ? "text-red-500"
                      : "text-white group-hover:text-red-500"
                  }`}
                >
                  {event.title}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 z-10 flex items-center justify-center"
      >
        <div
          className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
            active
              ? "bg-red-600 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)] scale-125"
              : "bg-black border-neutral-700"
          }`}
        />
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 pl-20 md:pl-16 flex md:justify-start">
        {isEven ? (
          // Even Index: Card on Right
          <div
            className={`group relative bg-[#0a0a0a] border ${
              active
                ? "border-red-600/40 shadow-xl shadow-red-900/10 scale-105"
                : "border-white/5 hover:border-red-600/20"
            } p-6 rounded-xl transition-all duration-500 w-full md:max-w-md text-left mr-auto`}
          >
            <div className="flex items-start gap-4 mb-2">
              <div
                className={`p-2 rounded-lg shrink-0 transition-colors duration-300 ${
                  active
                    ? "bg-red-600 text-white"
                    : "bg-white/5 text-neutral-500"
                }`}
              >
                {event.icon}
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-300 ${
                    active
                      ? "text-red-500"
                      : "text-white group-hover:text-red-500"
                  }`}
                >
                  {event.title}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Odd Index: Time on Right
          <div
            className={`hidden md:inline-block ${
              active
                ? "bg-red-600 text-white shadow-lg shadow-red-600/20 scale-105"
                : "text-neutral-500 bg-transparent"
            } font-mono font-bold text-xs md:text-sm px-3 py-1 rounded-sm uppercase tracking-wider transition-all duration-300`}
          >
            {event.time}
          </div>
        )}
      </div>

      {/* Mobile Time (Absolute) - Visible only on mobile */}
      <div className="md:hidden absolute top-0 left-20 -translate-y-[140%]">
        <span
          className={`text-xs font-mono font-bold transition-colors duration-300 ${
            active ? "text-red-500 scale-105" : "text-neutral-500"
          }`}
        >
          {event.time}
        </span>
      </div>
    </div>
  );
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      id="timeline"
      className="py-14 px-6 bg-black text-white relative font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto mb-24 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
          Schedule
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-4">
          Event <span className="text-red-600">Timeline</span>
        </h2>
        <p className="text-neutral-400 text-lg lg:text-xl">
          A full day of inspiration, connection, and transformation.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800 transform md:-translate-x-1/2">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute top-0 left-0 w-full bg-red-600"
          />
        </div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineRow
              key={index}
              event={event}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
