"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import { Analytics } from "@vercel/analytics/next";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHiddenRoute = pathname === "/inauguration";

  return (
    <>
      <SmoothScroll />
      {!isHiddenRoute && <Navbar />}
      {children}
      {!isHiddenRoute && <Footer />}
      {!isHiddenRoute && <Loader />}
      <Analytics />
    </>
  );
}
