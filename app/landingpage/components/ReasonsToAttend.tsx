"use client";

const reasons = [
  {
    title: "Inspiration",
    description:
      "Hear empowering stories by remarkable individuals that will inspire you to reach greater heights in life.",
  },
  {
    title: "Creative and Diverse",
    description:
      "Explore a rich blend of creative and diverse talks and performances that will expand your perspectives.",
  },
  {
    title: "Networking",
    description:
      "Engage with passionate, like-minded individuals to grow your network through meaningful connections.",
  },
  {
    title: "Learning",
    description:
      "Gain new insights and valuable lessons from each talk, fueling your growth and expanding your knowledge.",
  },
  {
    title: "Transformation",
    description:
      "Spark your imagination, discover groundbreaking ideas, and unlock new paths to personal brilliance.",
  },
  {
    title: "Unforgettable Experience",
    description:
      "Enjoy a day of unique, entertaining, and memorable segments that will leave a lasting impression on you.",
  },
];

export default function ReasonsToAttend() {
  return (
    <section className="py-20 px-6 bg-black text-white relative">
      <div className="mx-[3vw]">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 uppercase tracking-wider">
          Six Reasons to Attend <span className="text-red-600">TEDxCCET</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border-l-4 border-red-600 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
