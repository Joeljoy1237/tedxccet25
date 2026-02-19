"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  X,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white md:pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className=" mx-[2vw] px-[2vw] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {/* Left Column: Branding */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-[#EB0028]">
                TEDx<span className="text-white">CCET</span>
              </h2>
            </Link>
            <p className="text-sm text-neutral-400 font-medium">
              DAUNTØ – Redesigning Fear. Redefining the Future.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              This independent TEDx event is operated under license from TED.
              TEDxCCET brings together bright minds to give talks that are
              idea-focused, and on a wide range of subjects, to foster learning,
              inspiration and wonder.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://www.instagram.com/tedxccet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 group"
                aria-label="X (formerly Twitter)"
              >
                <X className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tedxccet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.youtube.com/results?search_query=tedxccet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:pl-12">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About", href: "/about" },
                { name: "Speakers", href: "/speakers" },
                { name: "Schedule", href: "/#timeline" },
                { name: "Partners", href: "/sponsors" },
                { name: "Venue", href: "/gettingthere" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-red-600 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact */}
          <div className="-ml-16 md:ml-0">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <MapPin className="w-5 h-5 md:mt-2 text-red-500 shrink-0 " />
                <Link
                  href="/gettingthere"
                  className="hover:text-white transition-colors"
                >
                  Carmel College of Engineering & Technology,
                  <br />
                  Punnapra, Alappuzha, Kerala 688004
                </Link>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a
                  href="mailto:tedxccet@carmelcet.in"
                  className="hover:text-white transition-colors"
                  aria-label="Send an email to tedxccet@carmelcet.in"
                >
                  tedxccet@carmelcet.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <a
                  href="tel:+918590123899"
                  className="hover:text-white transition-colors"
                  aria-label="Call +9-1 85-9012-3899"
                >
                  +91 8590123899
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>
            &copy; 2026 TEDxCCET. This independent TEDx event is operated under
            license from TED.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-700">•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      {/* Early Bird Floating Button - Shown all the time */}
      <div className="fixed bottom-10 right-6 md:right-10 z-100 group">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleCopy("TEDXCCET26")}
          className="relative"
          aria-label="Early Bird Ticket"
        >
          {/* Ambient Pulse */}

          {/* Circular Base */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-red-600 bg-zinc-900/80 backdrop-blur-sm shadow-[0_0_30px_rgba(235,0,40,0.3)] flex items-center justify-center transition-transform duration-500 group-hover:rotate-6">

            {/* Overflowing Bird Animation */}
            <div className="absolute -inset-6 md:-inset-8 pointer-events-none select-none">
              <Image
                src="/early.gif"
                alt="Early Bird"
                fill
                className="object-contain mix-blend-screen contrast-[2.5] brightness-[1.1]"
                unoptimized
              />
            </div>

            {/* Interaction Overlay (Text) */}
            <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center z-20 pointer-events-none">
              <span className="text-[10px] font-black text-red-500 uppercase tracking-tighter">Copy Code</span>
            </div>
          </div>

          {/* Speech Bubble from the Bird */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-56 bg-zinc-900 border border-red-500/20 text-white text-xs font-medium px-4 py-3 rounded-2xl shadow-[0_0_20px_rgba(235,0,40,0.15)] z-30"
              >
                <p className="text-red-400 font-bold mb-1">✦ Code Copied!</p>
                <p className="text-neutral-400 leading-relaxed">
                  Paste <span className="text-red-500 font-bold">TEDXCCET26</span> in GrabUrPass to get your discount!
                </p>
                {/* Speech bubble tail */}
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-10 border-l-zinc-900" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </footer>
  );
}
