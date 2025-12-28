import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import About from "@/app/landingpage/components/About";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <About />
      </div>
      <Footer />
    </main>
  );
}
