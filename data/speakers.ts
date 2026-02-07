export interface Speaker {
  name: string;
  slug: string; // URL-friendly identifier
  role: string; // e.g. "Serial Entrepreneur"
  title: string; // e.g. "THE VISIONARY"
  org: string; // e.g. "Founder, NexGen AI"
  image: string;
  imageUrl: string; 
  achievement: string; // Short bio/achievement
  quote: string;
  layout: "left" | "right" | "center";
  googleLink: string;
  detailedBio: string[];
}

export const speakers: Speaker[] = [
  {
    name: "Advocate Jince T. Thomas",
    slug: "jince-t-thomas",
    role: "Cyber Crime Lawyer, High Court of Kerala & Honorary Assistant Commander at Kerala Police Cyberdome ",
    title: "CYBER JINCE",
    org: " High Court of Kerala, Kerala Police Cyberdome",
    image: "/speakers_s2/Jince_T_Thomas.png",
    imageUrl: "/speakers_s2/Jince_T_Thomas.png",
    achievement: "",
    quote: "Translating complex digital crimes into effective legal remedies and justice.",
    layout: "left",
    googleLink: "https://www.google.com/search?q=Advocate+Jince+T.+Thomas+Cyber+Crime+Lawyer",
    detailedBio: [],
  },
  {
    name: "Divya Sudheer",
    slug: "divya-sudheer",
    role: "DGCA-approved SEP Instructor",
    title: " A320 / A321 / XLR Expert",
    org: "Divya's Aviation (YouTube channel)",
    image: "/speakers_s2/Divya_Sudheer.png",
    imageUrl: "/speakers_s2/Divya_Sudheer.png",
    achievement: "",
    quote: "Aviation isn't just a career; it's a commitment to precision, safety, and the seamless journey of every passenger.",
    layout: "left",
    googleLink: "https://www.google.com/search?q=Divya+Sudheer+Aviation+Instructor",
    detailedBio: [],
  },
  
  {
    name: "Manoj Abraham IPS",
    slug: "manoj-abraham",
    role: "Director General of Police (DGP), Fire & Rescue Services, and Director of the Vigilance and Anti-Corruption Bureau (VACB) ",
    title: "SENIOR INDIAN POLICE SERVICE OFFICER, KERALA CADRE",
    org: "Government of Kerala",
    image: "/speakers_s2/Manoj_Abhraham.png",
    imageUrl: "/speakers_s2/Manoj_Abhraham.png",
    achievement: "",
    quote: "Fearlessness is not about power—it is about standing by what is right, even when the cost is high.",
    layout: "right",
    googleLink: "https://www.google.com/search?q=Manoj+Abraham+IPS+Kerala+Police",
    detailedBio: [],
  },
  {
    name: "Arvind Venugopal",
    slug: "arvind-venugopal",
    role: "Playback singer and filmmaker in the Malayalam film industry",
    title: "PLAYBACK SINGER",
    org: "Malayalam film industry",
    image: "/speakers_s2/Arvind_Venugopal.png",
    imageUrl: "/speakers_s2/Arvind_Venugopal.png",
    achievement: "",
    quote: "Meaning gives melody its life.",
    layout: "left",
    googleLink: "https://www.google.com/search?q=Arvind+Venugopal+Playback+Singer",
    detailedBio: [],
  },
  {
    name: "Dr. Jose Chacko",
    slug: "jose-chacko",
    role: "Cardiac Surgeon and Author",
    title: "DOCTOR AND AUTHOR",
    org: "Medical Author",
    image: "/speakers_s2/Dr_Jose_Chacko.png",
    imageUrl: "/speakers_s2/Dr_Jose_Chacko.png",
    achievement: "",
    quote: "Medicine heals the body, but understanding heals the person.",
    layout: "right",
    googleLink: "https://www.google.com/search?q=Dr.+Jose+Chacko+Cardiac+Surgeon+Author",
    detailedBio: [
      "Dr. Jose Chacko is a distinguished Cardiac Surgeon with a profound commitment to both the art of healing and the power of the written word. With years of experience in high-stakes surgical environments, he has dedicated his career to mending hearts, both literally and figuratively.",
      "Beyond the operating theater, Dr. Chacko is an accomplished author, exploring the intersections of medicine, ethics, and the human experience. His insights into the delicate balance between technical precision and empathetic care provide a unique perspective on what it truly means to be a healer in the modern world.",
      "At TEDxCCET, Dr. Chacko shares his journey and the vital lessons learned from the rhythmic beat of thousands of hearts, advocating for a healthcare approach that prioritizes understanding as much as intervention."
    ],
  },
  
];
