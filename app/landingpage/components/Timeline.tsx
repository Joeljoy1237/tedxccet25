"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const timelineEvents = [
  {
    time: "08:00 AM",
    title: "Registration & Check-in",
    description: "Arrive early to collect your badge and welcome kit",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    time: "09:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and introduction to DAUNTØ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    time: "09:30 AM",
    title: "Session 1: Origins of Fear",
    description: "Dr. Maya Krishnan & Arjun Menon",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    time: "11:00 AM",
    title: "Networking Break",
    description: "Coffee, refreshments, and conversations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    time: "11:30 AM",
    title: "Session 2: Breaking Barriers",
    description: "Priya Sharma & Rahul Nair",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Curated lunch experience with interactive sessions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
  },
  {
    time: "02:30 PM",
    title: "Session 3: Future Forward",
    description: "Dr. Aisha Patel & Vikram Reddy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    time: "04:00 PM",
    title: "Panel Discussion",
    description: "All speakers discuss the future of fearlessness",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    time: "05:00 PM",
    title: "Closing Ceremony",
    description: "Awards, acknowledgments, and the DAUNTØ pledge",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.25 2.25 0 11-4.5 0v3.375m7.5 11.25h.008v.008h-.008v-.008zm-7.5 0h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    time: "06:00 PM",
    title: "After Party",
    description: "Celebrate with fellow attendees",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

interface TimelineRowProps {
  event: (typeof timelineEvents)[0];
  index: number;
}

const TimelineRow = ({ event, index }: TimelineRowProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
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
              isInView
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
              isInView
                ? "border-red-600/40 shadow-xl shadow-red-900/10 scale-105"
                : "border-white/5 hover:border-red-600/20"
            } p-6 rounded-xl transition-all duration-500 w-full md:max-w-md text-left ml-auto`}
          >
            <div className="flex items-start gap-4 mb-2">
              <div
                className={`p-2 rounded-lg shrink-0 transition-colors duration-300 ${
                  isInView
                    ? "bg-red-600 text-white"
                    : "bg-white/5 text-neutral-500"
                }`}
              >
                {event.icon}
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-300 ${
                    isInView
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
      <div className="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 z-10 flex items-center justify-center">
        <div
          className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
            isInView
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
              isInView
                ? "border-red-600/40 shadow-xl shadow-red-900/10 scale-105"
                : "border-white/5 hover:border-red-600/20"
            } p-6 rounded-xl transition-all duration-500 w-full md:max-w-md text-left mr-auto`}
          >
            <div className="flex items-start gap-4 mb-2">
              <div
                className={`p-2 rounded-lg shrink-0 transition-colors duration-300 ${
                  isInView
                    ? "bg-red-600 text-white"
                    : "bg-white/5 text-neutral-500"
                }`}
              >
                {event.icon}
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-300 ${
                    isInView
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
              isInView
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
            isInView ? "text-red-500 scale-105" : "text-neutral-500"
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
      className="py-24 px-6 bg-black text-white relative font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto mb-24 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
          Schedule
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          Event <span className="text-red-600">Timeline</span>
        </h2>
        <p className="text-neutral-400 text-lg">
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
            <TimelineRow key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
