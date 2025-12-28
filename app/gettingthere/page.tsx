import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import GettingThereSection from "./components/GettingThereSection";

export default function GettingTherePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <GettingThereSection />
      </div>
      <Footer />
    </main>
  );
}
