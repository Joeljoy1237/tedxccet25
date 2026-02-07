import { Metadata } from "next";
import Script from "next/script";
import Speakers from "@/components/landingpage/components/Speakers";
import { speakers } from "@/data/speakers";

export const metadata: Metadata = {
  title: "Speakers | TEDxCCET 2026",
  description: "Meet the visionary speakers of TEDxCCET 2026. Discover pioneers and change-makers who are redesigning fear and redefining the future.",
  keywords: ["TEDxCCET Speakers", "TEDx 2026 Speakers", "Pioneers", "Visionaries", "Change-makers", "Carmel College of Engineering", "Alappuzha"],
  openGraph: {
    title: "Speakers | TEDxCCET 2026",
    description: "Meet the visionary speakers who are turning fear into fuel at TEDxCCET 2026.",
    url: "https://tedxccet.com/speakers",
    siteName: "TEDxCCET",
    type: "website",
  },
};

export default function SpeakersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "TEDxCCET 2026 Speakers",
    "description": "A list of speakers for the TEDxCCET 2026 event.",
    "numberOfItems": speakers.length,
    "itemListElement": speakers.map((speaker, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Person",
        "name": speaker.name,
        "jobTitle": speaker.role,
        "affiliation": {
          "@type": "Organization",
          "name": speaker.org
        },
        "description": speaker.quote,
        "url": `https://tedxccet.com/speakers/${speaker.slug}`,
        "image": `https://tedxccet.com${speaker.imageUrl}`
      }
    }))
  };

  return (
    <main className="bg-black min-h-screen">
      <Script
        id="speakers-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <Speakers />
      </div>
    </main>
  );
}
