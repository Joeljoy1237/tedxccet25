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
    name: "Advocate Jince T. Thomas",
    role: "Cyber Crime Lawyer, High Court of Kerala & Honorary Assistant Commander at Kerala Police Cyberdome ",
    title: "CYBER JINCE",
    org: " High Court of Kerala, Kerala Police Cyberdome",
    image: "/speakers/speaker-01.jpg",
    imageUrl: "/speakers/speaker-01.jpg",
    achievement: "",
    quote: "Translating complex digital crimes into effective legal remedies and justice.",
    layout: "left",
  },
  {
    name: "Dr. Jose Chacko",
    role: "Cardiac Surgeon and Author",
    title: "DOCTOR AND AUTHOR",
    org: "Organization Name",
    image: "/speakers/speaker-02.jpg",
    imageUrl: "/speakers/speaker-02.jpg",
    achievement: "",
    quote: "Medicine heals the body, but understanding heals the person.",
    layout: "right",
  },
  {
    name: "Manoj Abraham IPS",
    role: "Director General of Police (DGP), Fire & Rescue Services, and Director of the Vigilance and Anti-Corruption Bureau (VACB) ",
    title: "SENIOR INDIAN POLICE SERVICE OFFICER, KERALA CADRE",
    org: "Government of Kerala",
    image: "/speakers/speaker-01.jpg",
    imageUrl: "/speakers/speaker-01.jpg",
    achievement: "",
    quote: "Fearlessness is not about power—it is about standing by what is right, even when the cost is high.",
    layout: "right",
  },
  {
    name: "Arvind Venugopal",
    role: "Playback singer and filmmaker in the Malayalam film industry",
    title: "PLAYBACK SINGER",
    org: "Malayalam film industry",
    image: "/speakers/speaker-01.jpg",
    imageUrl: "/speakers/speaker-01.jpg",
    achievement: "",
    quote: "Meaning gives melody its life.",
    layout: "left",
  },
  
];
