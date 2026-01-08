
import Speakers from "@/app/landingpage/components/Speakers";

export default function SpeakersPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <Speakers />
      </div>
    </main>
  );
}
