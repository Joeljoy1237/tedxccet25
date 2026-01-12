"use client";

const reasons = [
  {
    title: "Inspiration",
    description:
      "Inspiring speakers share transformative ideas that broaden perspectives and motivate meaningful personal growth.",
  },
  {
    title: "Creative and Diverse",
    description:
      "Network with curious minds, innovators and leaders, to build connections that spark collaboration and future opportunities.",
  },
  {
    title: "Networking",
    description:
      "Experience diverse topics such as technology, creativity, science and society, delivered through engaging storytelling formats by experts.",
  },
  {
    title: "Learning",
    description:
      "Gain fresh insights and practical takeaways you can apply immediately to your studies, career and life.",
  },
  {
    title: "Transformation",
    description:
      "Be part of a campus event celebrating ideas, curiosity and the power of shared learning.",
  },
  {
    title: "Unforgettable Experience",
    description:
      "Get inspired to think boldly, challenge assumptions and create a positive impact within your community.",
  },
];

export default function ReasonsToAttend() {
  return (
    <section className="py-12 px-6 bg-black/40 text-white relative">
      <div className="mx-[3vw]">
        {/* Pill Label - Added for consistency if needed, but for now just matching font */}
        <h2 className="text-center text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">
          Six Reasons to <span className="text-red-600">Attend</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-l-4 border-red-600 bg-black transition-colors duration-300"
            >
             
              <p className="text-neutral-200 text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
