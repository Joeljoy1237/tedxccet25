export interface Speaker {
  name: string;
  role: string; // e.g. "Serial Entrepreneur"
  title: string; // e.g. "THE VISIONARY"
  org: string; // e.g. "Founder, NexGen AI"
  image: string;
  imageUrl: string; 
  achievement: string; // Short bio/achievement
  quote: string;
  layout: "left" | "right" | "center";
}

export const speakers: Speaker[] = [
  {
    name: "Speaker Name 1",
    role: "Role / Designation",
    title: "THE PIONEER",
    org: "Organization Name",
    image: "/speakers/speaker-01.jpg",
    imageUrl: "/speakers/speaker-01.jpg",
    achievement: "First to revolutionize the industry with AI-driven solutions.",
    quote: "Innovation is not about creating new things, but seeing old things in new ways.",
    layout: "left",
  },
  {
    name: "Speaker Name 2",
    role: "Role / Designation",
    title: "THE CATALYST",
    org: "Organization Name",
    image: "/speakers/speaker-02.jpg",
    imageUrl: "/speakers/speaker-02.jpg",
    achievement: "Transformed the way we perceive sustainable energy.",
    quote: "The future belongs to those who learn more skills and combine them in creative ways.",
    layout: "right",
  },
  {
    name: "Speaker Name 3",
    role: "Tech Innovator",
    title: "THE ARCHITECT",
    org: "Tech Solutions Inc.",
    image: "/speakers/speaker-01.jpg",
    imageUrl: "/speakers/speaker-01.jpg",
    achievement: "Building the digital infrastructure of tomorrow.",
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    layout: "left",
  },
  {
    name: "Speaker Name 4",
    role: "Social Activist",
    title: "THE WARRIOR",
    org: "Global Change Initiative",
    image: "/speakers/speaker-02.jpg",
    imageUrl: "/speakers/speaker-02.jpg",
    achievement: "Fighting for equality and justice on a global scale.",
    quote: "Be the change that you wish to see in the world.",
    layout: "right",
  },
  {
    name: "Speaker Name 5",
    role: "Space Explorer",
    title: "THE VOYAGER",
    org: "Star Systems",
    image: "/speakers/speaker-01.jpg",
    imageUrl: "/speakers/speaker-01.jpg",
    achievement: "Pushing the boundaries of human exploration.",
    quote: "Somewhere, something incredible is waiting to be known.",
    layout: "left",
  },
  {
    name: "Speaker Name 6",
    role: "Creative Director",
    title: "THE ARTIST",
    org: "Creative Minds Studio",
    image: "/speakers/speaker-02.jpg",
    imageUrl: "/speakers/speaker-02.jpg",
    achievement: "Redefining visual storytelling for the digital age.",
    quote: "Creativity is intelligence having fun.",
    layout: "right",
  },
];
