import LandingPage from "@/components/landingpage/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEDxCCET 2026 | DAUNT∅ (Dauntless) | Carmel College of Engineering & Technology",
  description: "Join us for TEDxCCET 2026 on March 21. Exploring the theme DAUNTLESS (DAUNT∅) — Redesigning fear and redefining the future through consistency and courage at CCET Punnapra.",
  alternates: {
    canonical: "https://tedxccet.com",
  },
};

export default function Home() {
  return <LandingPage />;
}
