"use client";

import Link from "next/link";
import Image from "next/image";
import { Ticket, Menu, X, LogIn } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/Logo1.svg"
            alt="TEDxCCET Logo"
            width={150}
            height={40}
            className="h-4 w-auto"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
        <Link href="/" className="hover:text-red-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-red-600 transition-colors">
          About
        </Link>
        <Link href="/theme" className="hover:text-red-600 transition-colors">
          Theme
        </Link>
        <Link href="/speakers" className="hover:text-red-600 transition-colors">
          Speakers
        </Link>
        <Link href="/sponsors" className="hover:text-red-600 transition-colors">
          Sponsors
        </Link>
        <Link
          href="/previoustalks"
          className="hover:text-red-600 transition-colors"
        >
          Previous Talks
        </Link>
        <Link
          href="/gettingthere"
          className="hover:text-white transition-colors"
        >
          Getting There
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link
          href="/login"
          className="flex items-center gap-2 px-6 py-2 text-sm font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
        >
          <span>Login</span>
          <LogIn className="w-4 h-4" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium text-white/80">
            <Link
              href="/"
              className="hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/theme"
              className="hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Theme
            </Link>
            <Link
              href="/speakers"
              className="hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="/sponsors"
              className="hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="/previoustalks"
              className="hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Previous Talks
            </Link>
            <Link
              href="/gettingthere"
              className="text-red-600 font-bold hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Getting There
            </Link>
          </div>
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span>Login</span>
            <LogIn className="w-4 h-4" />
          </Link>
        </div>
      )}
    </nav>
  );
}
