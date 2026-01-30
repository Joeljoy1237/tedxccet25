"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Timer } from "lucide-react";
import Button from "@/app/landingpage/components/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black/80 to-black pointer-events-none"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-lg p-12 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-500">
        {/* Icon */}
        <div className="p-4 bg-red-600/10 rounded-full">
          <Timer className="w-12 h-12 text-red-600 animate-pulse" />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-robofan tracking-wider">
            COMING <span className="text-red-600">SOON</span>
          </h1>
          <p className="text-neutral-400 text-lg font-intro max-w-sm mx-auto">
            Our attendee portal is currently under construction. Get ready for a
            dauntless experience.
          </p>
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Link href="/">
            <Button
              title="Return Home"
              position="left"
              icon={<ArrowLeft className="w-4 h-4" />}
              className="bg-white text-black hover:bg-neutral-200 px-8 py-3 rounded-xl font-bold transition-all"
            />
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute -z-10 w-full h-full top-0 left-0 overflow-hidden rounded-2xl">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/5 to-transparent animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
}
