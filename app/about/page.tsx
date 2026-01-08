
import About from "@/app/landingpage/components/About";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <About />
      </div>
    </main>
  );
}
