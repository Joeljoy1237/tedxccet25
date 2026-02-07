
import Theme from "@/components/landingpage/components/Theme";

export default function ThemePage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <Theme />
      </div>
    </main>
  );
}
