import HeroText from "@/app/landingpage/components/HeroText";
import HeroX from "./X";
import BackgroundSlideshow from "./BackgroundSlideshow";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundSlideshow />

      <div className="relative z-10 min-h-screen px-[2vw] flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 justify-between  md:gap-10 w-full">
          <HeroText />
          <HeroX className="w-full md:w-1/2 max-w-[400px]" />
        </div>
      </div>
    </section>
  );
}
