import HeroText from "@/app/landingpage/components/HeroText";
import HeroX from "./X";
import BackgroundSlideshow from "./BackgroundSlideshow";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black pl-[2vw]  overflow-hidden">
      <BackgroundSlideshow />

      {/* Full screen interactive Lanyard overlay */}
      <div className="absolute inset-0 z-1 h-full w-full pointer-events-none">
        <HeroX className="w-full h-full" />
      </div>

      <div className="relative z-10 min-h-screen px-[2vw] mt-24 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 justify-between md:gap-10 w-full">
          <HeroText />
          {/* Spacer to keep layout balance if needed, or just let text take space. 
              Since HeroX was taking 1/2 width, removing it might shift text. 
              I'll leave the text container as is but let it manage its own width. 
              If HeroText was relying on flex justification, I might need a spacer or max-width on text.
          */}
        </div>
      </div>
    </section>
  );
}
