import dynamic from "next/dynamic";
import Hero2 from "./components/Hero2";
import Welcome from "./components/Welcome";

const About = dynamic(() => import("./components/About"), { ssr: true });
const ReasonsToAttend = dynamic(() => import("./components/ReasonsToAttend"), {
  ssr: true,
});
const Theme = dynamic(() => import("./components/Theme"), { ssr: true });
const Speakers = dynamic(() => import("./components/Speakers"), { ssr: true });
const PreviousTalks = dynamic(() => import("./components/PreviousTalks"), {
  ssr: true,
});
const TicketHero = dynamic(() => import("./components/TicketHero"), {
  ssr: true,
});
const Timeline = dynamic(() => import("./components/Timeline"), { ssr: true });

const Gallery2 = dynamic(() => import("./components/gallery2"), { ssr: true });
const GalleryMasonry = dynamic(() => import("./components/gallery_masonry"), {
  ssr: true,
});

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Hero2 />
      <Welcome />
      <Gallery2 />
      {/* <GalleryMasonry /> */}
      <About />
      <ReasonsToAttend />
      <Theme />
      <Speakers />
      {/* <Timeline /> */}
      <TicketHero />
      <PreviousTalks />
    </main>
  );
}
