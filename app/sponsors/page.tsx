import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Sponsors from "@/app/landingpage/components/Sponsors";

export default function SponsorsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <Sponsors />
      </div>
      <Footer />
    </main>
  );
}
