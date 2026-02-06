"use client";

import Link from "next/link";
import Image from "next/image";
import { Ticket, Menu, X, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Theme", href: "/theme" },
  { name: "Speakers", href: "/speakers" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Talks", href: "/previoustalks" },
  { name: "Getting There", href: "/gettingthere" },
  /*  { name: "Team", href: "/team" }, */
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] flex items-center font-sans tracking-wide justify-between px-[4vw] py-4 md:py-6 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-black/50 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center gap-2 relative z-[70]">
          <Link href="/">
            <Image
              src="/Logo1.svg"
              alt="TEDxCCET Logo"
              width={120}
              height={220}
              className="w-32 md:w-36 h-auto transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-red-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {/* <Link
            href="/login"
            className="flex items-center gap-2 px-6 py-2 text-sm font-bold text-white bg-[#EB0028] rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
          >
            <span>Login</span>
            <LogIn className="w-4 h-4" />
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none relative z-[70] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            {/* Background Element */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-bold text-white/90 hover:text-red-600 transition-colors tracking-tight"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                {/* <Link
                  href="/login"
                  className="flex items-center gap-3 px-8 py-3 text-lg font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Login / Register</span>
                  <LogIn className="w-5 h-5" />
                </Link> */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
