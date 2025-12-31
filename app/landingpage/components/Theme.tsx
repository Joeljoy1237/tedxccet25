"use client";
import TextType from "@/components/TextType";

export default function Theme() {
  return (
    <section className="py-24 px-6 bg-black text-white relative flex flex-col items-center justify-center text-center ">
      {/* Pill Label */}
      <div className="mb-8 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
        The Theme
      </div>

      {/* Main Title  DAUNTØ*/}
      <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
        DAUNT <span className="text-red-600">

<TextType 
  text={["Ø", "LESS"]}
  typingSpeed={100}
  pauseDuration={3500}
  showCursor={true}
  cursorCharacter="_"
/>
          </span>
      </h2>

      {/* Content */}
      <div className="max-w-4xl space-y-8 text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
        <p>
          Fear is the oldest story we tell ourselves. It whispers limits, builds
          walls, and keeps us small. But what if fear wasn't the end—{" "}
          <span className="text-white font-bold">
            what if it was the beginning?
          </span>
        </p>

        <p>
          <span className="text-red-600 font-bold">DAUNTØ</span> is a
          declaration. The zero represents the void where fear once lived—now
          emptied, now ready to be filled with{" "}
          <span className="text-white font-bold">
            courage, innovation, and possibility
          </span>
          .
        </p>

        <p>
          This isn't about being fearless. It's about being{" "}
          <span className="text-white font-bold">dauntless</span>— moving
          forward despite the fear, transforming it into fuel for the future we
          deserve.
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
