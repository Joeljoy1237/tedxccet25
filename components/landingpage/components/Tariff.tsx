"use client";

import { Check } from "lucide-react";

export default function Tariff() {
  const tiers = [
    /* {
      name: "Student",
      price: "800",
      description: "For students with valid ID cards.",
      features: [
        "Access to all talks",
        "Networking sessions",
        "Event kit",
        "Lunch & refreshments",
        "Valid ID Card Mandatory",
      ],
      highlight: false,
      buttonText: "Get Student Ticket",
      url: "https://www.graburpass.com/e/QuY6el", // Assuming same URL, can be changed if different
    }, */
    {
      name: "Early Bird",
      price: "1050",
      description: "Limited offer for the first 25 people.",
      highlight: true,
      buttonText: "Get Early Bird Ticket",
      url: "https://www.graburpass.com/e/QuY6el",
      badge: "First 25 Only",
      couponCode: "TEDXCCET26",
    },
    {
      name: "Regular",
      price: "1200",
      description: "Standard admission for all attendees.",
      highlight: false,
      buttonText: "Get Regular Ticket",
      url: "https://www.graburpass.com/e/QuY6el",
    },
  ];

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-4">
            Ticket <span className="text-[#EB0028]">Tariff</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your TEDxCCET experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-3xl border ${
                tier.highlight
                  ? "bg-zinc-900/80 border-[#EB0028] shadow-[0_0_40px_rgba(235,0,40,0.15)] md:-mt-8 md:mb-8"
                  : "bg-zinc-900/40 border-white/10"
              } flex flex-col backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#EB0028] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  {tier.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-zinc-400 font-medium">₹</span>
                  <span className="text-5xl font-black text-white">
                    {tier.price}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {tier.couponCode ? (
                <div
                  className="mb-8 w-full cursor-pointer group relative"
                  onClick={() => {
                    navigator.clipboard.writeText("TEDXCCET26");
                    // Assuming you don't use a toast library for simplicity, maybe just let the cursor indicate action
                  }}
                >
                  <div className="border border-dashed border-[#EB0028]/50 rounded-lg p-3 bg-red-600/5 group-hover:bg-red-600/10 transition-colors flex justify-between items-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">
                        Use Coupon Code
                      </p>
                      <p className="text-lg font-black tracking-wider text-[#EB0028] uppercase">
                        tedxccet26
                      </p>
                    </div>
                    <div className="text-[10px] text-zinc-500 group-hover:text-white transition-colors uppercase tracking-wider font-bold">
                      Click to Copy
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-8" />
              )}

              <a
                href={tier.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl text-center font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  tier.highlight
                    ? "bg-[#EB0028] text-white hover:bg-red-700 shadow-lg hover:shadow-red-600/25"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
