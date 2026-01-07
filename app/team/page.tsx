import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function TeamPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto px-[4vw] pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Team</h1>
        <p className="text-white/60">Coming soon...</p>
      </div>
      <Footer />
    </div>
    
  );
}
