"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Triangle, RedLine, BrokenFrame } from "@/components/GeometricShapes";
import { Speaker } from "@/data/speakers";

interface SpeakerSectionProps {
  speaker: Speaker;
  index: number;
}

const SpeakerSection = ({ speaker, index }: SpeakerSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityFade = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const scaleGrow = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  const isLeft = speaker.layout === "left";
  const isRight = speaker.layout === "right";
  const isCenter = speaker.layout === "center";

  const getLayoutClasses = () => {
    if (isLeft) return "flex-row";
    if (isRight) return "flex-row-reverse";
    return "flex-col items-center";
  };

  const speakerNumber = String(index + 1).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0"
    >
      {/* Background geometric elements */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Large background triangle */}
        {isLeft && (
          <div className="absolute -right-32 top-1/4 opacity-10">
            <Triangle direction="left" size="xl" delay={0.1} />
          </div>
        )}
        {isRight && (
          <div className="absolute -left-32 top-1/4 opacity-10">
            <Triangle direction="right" size="xl" delay={0.1} />
          </div>
        )}
        {isCenter && (
          <div className="absolute left-1/2 -translate-x-1/2 top-10 opacity-10">
            <Triangle direction="down" size="xl" delay={0.1} />
          </div>
        )}
      </motion.div>

      {/* Speaker number watermark */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        whileInView={{ opacity: 0.03, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className={`absolute ${
          isLeft ? "left-4" : "right-4"
        } top-1/2 -translate-y-1/2 text-[18rem] font-black text-white pointer-events-none hidden lg:block select-none`}
      >
        {speakerNumber}
      </motion.div>

      <div
        className={`container mx-auto px-6 lg:px-12 flex flex-col lg:${getLayoutClasses()} gap-8 lg:gap-16 items-center relative z-10`}
      >
        {/* Portrait Section */}
        <motion.div
          style={{ scale: scaleGrow, opacity: opacityFade }}
          className={`relative ${
            isCenter
              ? "w-full max-w-lg"
              : "w-full lg:w-1/2 max-w-lg lg:max-w-none"
          }`}
        >
          <BrokenFrame className="p-2 lg:p-4">
            {/* Image container with geometric overlay */}
            <div className="relative aspect-[3/4] overflow-hidden group">
              {/* Actual speaker image */}
              <Image
                src={speaker.imageUrl}
                alt={speaker.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 object-cover img-grayscale-hover"
                priority={index < 2}
              />

              {/* Geometric overlays on portrait */}
              <div className="absolute inset-0">
                {/* Red diagonal slice */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className={`absolute ${
                    isLeft ? "bottom-0 right-0" : "top-0 left-0"
                  } w-1/4 h-full bg-red-600/70 clip-angular group-hover:bg-red-600/80 transition-colors duration-500`}
                />

                {/* Triangle accent */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className={`absolute ${
                    isLeft ? "top-6 right-6" : "bottom-6 left-6"
                  }`}
                >
                  <Triangle direction={isLeft ? "left" : "right"} size="sm" />
                </motion.div>

                {/* Bottom gradient for depth */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Red geometric cuts - side accent */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "50%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className={`absolute ${
                  isLeft ? "right-0 bottom-0" : "left-0 top-0"
                } w-2 bg-red-600 group-hover:glow-red-subtle transition-shadow duration-500`}
              />
            </div>
          </BrokenFrame>

          {/* Floating red line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120%" }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className={`absolute ${
              isLeft ? "-right-8" : "-left-8"
            } bottom-20 h-[3px] bg-red-600 hidden lg:block`}
            style={{ transformOrigin: isLeft ? "right" : "left" }}
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          initial={{
            opacity: 0,
            x: isCenter ? 0 : isLeft ? 50 : -50,
            y: isCenter ? 30 : 0,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`relative ${
            isCenter
              ? "text-center w-full max-w-3xl mx-auto mt-8 lg:mt-12"
              : "w-full lg:w-1/2"
          } ${isRight ? "lg:text-right" : ""}`}
        >
          {/* Speaker number (mobile) */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-red-600 text-sm font-bold tracking-[0.3em] mb-4 block lg:hidden"
          >
            SPEAKER {speakerNumber}
          </motion.span>

          {/* Name with red accent line */}
          <div
            className={`relative ${
              isRight ? "lg:pl-0 lg:pr-8" : "lg:pr-0 lg:pl-8"
            } ${isCenter ? "px-0" : ""}`}
          >
            <RedLine
              orientation="vertical"
              length="100%"
              thickness={4}
              delay={0.4}
              className={`absolute top-0 ${isRight ? "right-0" : "left-0"} ${
                isCenter ? "hidden" : "hidden lg:block"
              }`}
            />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black mb-4 text-white"
            >
              {speaker.name}
            </motion.h2>
          </div>

          {/* Title & Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-xl text-red-600 font-bold mb-2 tracking-wide uppercase">
              {speaker.title}
            </p>
            <p className="text-lg text-neutral-300 font-light">
              {speaker.achievement}
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className={`relative ${isCenter ? "mx-auto max-w-2xl" : ""}`}
          >
            {/* Quote marks */}
            <span
              className={`absolute -top-6 ${
                isRight ? "right-0" : "left-0"
              } text-5xl lg:text-6xl text-red-600/30 font-serif`}
            >
              "
            </span>
            <p
              className={`text-2xl lg:text-3xl italic text-neutral-200 font-serif leading-relaxed ${
                isRight
                  ? "pr-8 lg:pr-12 border-r-2"
                  : "pl-8 lg:pl-12 border-l-2"
              } ${
                isCenter ? "border-l-0 border-r-0 px-0" : ""
              } border-red-600/30`}
            >
              {speaker.quote}
            </p>
          </motion.blockquote>

          {/* Geometric accent */}
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className={`absolute ${isRight ? "-left-12" : "-right-12"} ${
              isCenter ? "hidden" : ""
            } bottom-0 w-8 h-8 border-2 border-red-600 hidden lg:block`}
          />
        </motion.div>
      </div>

      {/* Bottom diagonal slice */}
      {index % 2 === 0 && (
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 w-1/3 h-1 bg-red-600/50"
        />
      )}
    </section>
  );
};

export default SpeakerSection;
