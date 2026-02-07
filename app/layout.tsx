import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist_Mono, Raleway } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import Loader from "../components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const robofan = localFont({
  src: "../public/fonts/Robofan Free.otf",
  variable: "--font-robofan",
});

const introDemo = localFont({
  src: "../public/fonts/IntroDemoBlackCaps.otf",
  variable: "--font-intro",
});

const introLight = localFont({
  src: "../public/fonts/intro-cond.light-free.otf",
  variable: "--font-intro-light",
});

export const viewport: Viewport = {
  themeColor: "#EB0028",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tedxccet.com"),
  title: {
    default: "TEDxCCET | Carmel College of Engineering & Technology",
    template: "%s | TEDxCCET",
  },
  description:
    "Join us at TEDxCCET, hosted by Carmel College of Engineering & Technology. Discover ideas worth spreading from Kerala's most inspiring innovators, thinkers, and change-makers.",
  keywords: [
    "TEDx",
    "TEDxCCET",
    "Carmel College of Engineering & Technology",
    "CCET",
    "Alappuzha",
    "Kerala",
    "Technology",
    "Entertainment",
    "Design",
    "Ideas Worth Spreading",
    "Innovation",
    "Talks",
  ],
  authors: [{ name: "TEDxCCET Team" }],
  creator: "TEDxCCET",
  publisher: "TEDxCCET",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tedxccet.com",
    title: "TEDxCCET | Carmel College of Engineering & Technology",
    description:
      "Join us at TEDxCCET for an exhilarating event showcasing brilliant minds and ideas worth spreading.",
    siteName: "TEDxCCET",
    images: [
      {
        url: "/og-image.jpg", // We will need to ensure this image exists or is added
        width: 1200,
        height: 630,
        alt: "TEDxCCET Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDxCCET | Carmel College of Engineering & Technology",
    description:
      "Ideas worth spreading at Carmel College of Engineering & Technology. Join the conversation.",
    images: ["/og-image.jpg"],
    creator: "@tedxccet", // Assuming handle, can be updated
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://tedxccet.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${raleway.variable} ${robofan.variable} ${introDemo.variable} ${introLight.variable} antialiased font-sans`}
      >
        <Providers>
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationEvent",
                name: "TEDxCCET",
                description: "Ideas Worth Spreading at Carmel College of Engineering & Technology",
                url: "https://tedxccet.com",
                location: {
                  "@type": "Place",
                  name: "Carmel College of Engineering & Technology",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Punnapra",
                    addressRegion: "Alappuzha",
                    addressCountry: "IN",
                  },
                },
                organizer: {
                  "@type": "Organization",
                  name: "Carmel College of Engineering & Technology (CCET)",
                  url: "https://www.carmelcet.in/",
                },
                about: {
                  "@type": "Organization",
                  name: "TEDxCCET",
                  url: "https://tedxccet.com",
                }
              }),
            }}
          />
          <SmoothScroll />
          <Navbar />
          {children}
          <Footer />
          <Loader />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
