
import PreviousTalks from "@/components/landingpage/components/PreviousTalks";

export default function PreviousTalksPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <PreviousTalks />
      </div>
    </main>
  );
}
