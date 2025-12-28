import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Theme from "@/app/landingpage/components/Theme";

export default function ThemePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <Theme />
      </div>
      <Footer />
    </main>
  );
}
