import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import ReasonsToAttend from "./components/ReasonsToAttend";
import Theme from "./components/Theme";
import Speakers from "./components/Speakers";
import PreviousTalks from "./components/PreviousTalks";
import Timeline from "./components/Timeline";
import Sponsors from "./components/Sponsors";
import Hero2 from "./components/Hero2";
import Welcome from "./components/Welcome";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero2 />
      <Welcome />
      <About />
      <ReasonsToAttend />
      <Theme />
      <Speakers />
      <Timeline />
      <Sponsors />
      <PreviousTalks />
      <Footer />
    </main>
  );
}
