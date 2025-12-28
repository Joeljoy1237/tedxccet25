import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PreviousTalks from "@/app/landingpage/components/PreviousTalks";

export default function PreviousTalksPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <PreviousTalks />
      </div>
      <Footer />
    </main>
  );
}
