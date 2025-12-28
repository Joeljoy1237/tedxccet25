"use client";

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Left Column: Branding */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter text-white">
              TEDx<span className="text-red-600">CCET</span>
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
                href="#"
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
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
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
              {["About", "Speakers", "Schedule", "Partners", "Get Tickets"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-neutral-400 hover:text-red-600 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Column: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span>
                  Carmel College of Engineering & Technology,
                  <br />
                  Punnapra, Alappuzha, Kerala 688004
                </span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <a
                  href="mailto:hello@tedxccet.com"
                  className="hover:text-white transition-colors"
                >
                  hello@tedxccet.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
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
        className="absolute bottom-10 right-6 md:right-10 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] z-20 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
