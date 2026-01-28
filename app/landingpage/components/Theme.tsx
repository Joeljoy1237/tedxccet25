"use client";
import TextType from "@/components/TextType";
import Image from "next/image";

export default function Theme() {
  return (
    <section className="py-14 px-6 bg-black text-white relative flex flex-col items-center justify-center text-center ">
      {/* Pill Label */}
      <div className="mb-8 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
        The Theme
      </div>

      {/* Main Title  DAUNTØ*/}
      <h2 className="text-5xl md:text-7xl font-bold mb-12 font-robofan text-red-600 tracking-wider">
        DAUNT
        <span className="text-white">
          <TextType
            text={["Ø", "LESS"]}
            typingSpeed={100}
            pauseDuration={3500}
            showCursor={true}
            cursorCharacter="_"
            replacements={{
              Ø: (
                <Image
                  src="/fi.png"
                  alt="fi"
                  width={50}
                  height={50}
                  className="inline-block h-[0.8em] w-auto align-baseline mb-[-0.05em]"
                />
              ),
            }}
          />
        </span>
      </h2>

      {/* Content */}
      <div className="max-w-screen-xl mx-[3vw] space-y-8 text-lg md:text-xl text-neutral-300 leading-relaxed font-light md:text-justify">
        <p>
          <span className="text-red-600 font-bold">
            DAUNT <span className="text-white">∅</span>
          </span>{" "}
          {"(Dauntless)"} symbolizing the journey of redesigning fear and
          redefining the future. "Daunt," which means fear that holds us back,
          and "∅" (null), which indicates erasing the limitations and starting
          from scratch. The combination of these two literals showcases the
          power to reframe fear and transform it into a force that reshapes the
          future. symbolizing the journey of redesigning fear and redefining the
          future. "Daunt," which means fear that holds us back, and "∅" (null),
          which indicates erasing the limitations and starting from scratch. The
          combination of these two literals showcases the power to reframe fear
          and transform it into a force that reshapes the future.
        </p>

        <p>
          Fear is a destined phase in everyone's life.{" "}
          <span className="text-red-600 font-bold">DAUNT</span> highlights that
          fear is not a final thought but rather a transition that has the
          potential capability to be reset, rewritten and reimagined via courage
          and clarity. People gain the freedom to invent, innovate, grow and
          move forward without constraining themselves only by lowering their
          fear to zero.
        </p>

        <p>
          The theme <span className="text-red-600 font-bold">DAUNT</span> ∅
          encourages an explorative and diverse journey across dimensions,
          recognizing that growth is slow, iterative and constructed through
          challenges by undertaking consistency. The key motive is to address
          the actual fear rather than avoiding it.
          <span className="text-red-600 font-bold">DAUNT</span>∅ encourages
          ideas that surpass boundaries and recalibrate what lies ahead. On the
          <span className="text-red-600 font-bold">TEDx</span>CCET platform,
          speakers from various fields express their vision under a unified
          framework for this event. By sharing their thoughts and insights, they
          help expand our understanding and inspire collective learning.
        </p>
      </div>

      {/* Diamond Separator */}
      <div className="mt-16 flex items-center gap-4 opacity-50">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-600"></div>
        <div className="w-3 h-3 bg-red-600 rotate-45 transform"></div>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-600"></div>
      </div>
    </section>
  );
}
