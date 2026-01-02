"use client";
import TextType from "@/components/TextType";

export default function Theme() {
  return (
    <section className="py-10 px-6 bg-black text-white relative flex flex-col items-center justify-center text-center ">
      {/* Pill Label */}
      <div className="mb-8 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
        The Theme
      </div>

      {/* Main Title  DAUNTØ*/}
      <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
        DAUNT
        <span className="text-red-600">
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
      <div className="max-w-4xl space-y-8 text-lg md:text-xl text-neutral-300 leading-relaxed font-light ">
        <p>
          <span className="text-red-600 font-bold">DAUNT∅</span> {"(Dauntless)"}{" "}
          symbolizes the journey of redesigning fear and redefining the future.
          "Daunt" represents the limits that hold us back, while "∅" signifies
          erasing them to start from scratch—reframing fear into a force that
          reshapes our destiny.
        </p>

        <p>
          Fear is not a final destination, but a transition ready to be reset
          and reimagined. By lowering fear to zero, we gain the freedom to{" "}
          <span className="text-white font-bold">
            invent, innovate, and grow
          </span>
          .
        </p>

        <p>
          <span className="text-red-600 font-bold">DAUNT∅</span> encourages us
          to address our fears directly—not to avoid them, but to surpass
          boundaries and recalibrate what lies ahead.
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
