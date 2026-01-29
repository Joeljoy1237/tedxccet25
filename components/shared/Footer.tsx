"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

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
            <h2 className="text-3xl font-black tracking-tighter text-red-600">
              TEDx<span className="text-white">CCET</span>
            </h2>
            <p className="text-sm text-neutral-400 font-medium">
              DAUNTØ – Redesigning Fear. Redefining the Future.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-md">
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
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
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
          <div className="-ml-16 md:-ml-0">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <MapPin className="w-5 h-5 md:mt-2 text-red-600 shrink-0 " />
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
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <a
                  href="mailto:tedxccet@carmelcet.in"
                  className="hover:text-white transition-colors"
                >
                  tedxccet@carmelcet.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <a
                  href="tel:+918590123899"
                  className="hover:text-white transition-colors"
                >
                  +91 8590123899
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>
            &copy; 2025 TEDxCCET. This independent TEDx event is operated under
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

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-6 md:right-10 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] z-50 group ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
