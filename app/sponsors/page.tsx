
import Sponsors from "@/app/landingpage/components/Sponsors";

export default function SponsorsPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <Sponsors />
      </div>
    </main>
  );
}
