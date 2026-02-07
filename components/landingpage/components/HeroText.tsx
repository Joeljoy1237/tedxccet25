import Link from "next/link";
import Button from "./Button";
import Tooltip from "./Tooltip";
import { IoTicket } from "react-icons/io5";

export default function HeroText() {
  // Hero text component
  return (
    <div className="w-full md:w-1/2 pointer-events-auto">
      {/* Headline */}
      <h1
        className="md:text-[70px] text-[12vw] leading-[0.8em] font-extrabold uppercase"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        AN <span className="text-red-600 blankRedScroll">INDEPENDENTLY</span>
        <br />
        <span className="text-white blankWhite">ORGANIZED</span>
        <br />
        <span className="text-red-600">TED</span> EVENT
      </h1>

      {/* Meta info */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 bg-red-600/10 px-4 py-3 rounded-xl w-fit">
        <Tooltip content="Add to Calendar">
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            {/* Calendar Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>

            <span>
              7<sup>th</sup> September 2024
            </span>
          </div>
        </Tooltip>

        <div className="hidden md:block">|</div>

        <Link href="/gettingthere">
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            {/* Location Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Carmel College of Engineering & Technology
          </div>
        </Link>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 pointer-events-auto">
        <Link
          href="#ticket-hero"
          className="group relative px-8 py-3 bg-[#EB0028] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">GET TICKETS</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
