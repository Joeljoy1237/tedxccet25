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
    detailedBio: [
      "Advocate Jince T. Thomas is a prominent Cyber Crime Lawyer practicing at the High Court of Kerala, where he specializes in the legal complexities of the digital age. As an Honorary Assistant Commander at the Kerala Police Cyberdome, he plays a pivotal role in bridging the gap between law enforcement and technical investigative procedures.",
      "With a career dedicated to combating digital offenses, Adv. Jince has been at the forefront of handling high-profile cybercrime cases, ranging from financial fraud to data privacy violations. His expertise is frequently sought not only in the courtroom but also in advisory capacities for shaping cyber policy and security frameworks.",
      "At TEDxCCET, he delves into the evolving landscape of digital justice, exploring how legal systems must adapt to the rapid pace of technological innovation to ensure a safer and more accountable digital world for all."
    ],
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
    detailedBio: [
      "Divya Sudheer is a highly respected DGCA-approved SEP (Safety Emergency Procedures) Instructor, renowned for her expertise in the A320, A321, and XLR aircraft series. Her deep understanding of aviation safety protocols has made her a vital figure in training the next generation of cabin crew and aviation professionals.",
      "Beyond her professional training role, she is a popular aviation educator through her YouTube channel, \"Divya's Aviation,\" where she simplifies complex aviation concepts for a global audience. Her commitment to precision and safety is matched by her passion for making aviation knowledge accessible and engaging.",
      "Her talk at TEDxCCET explores the critical importance of safety culture and the meticulous preparation required behind every takeoff, emphasizing how excellence in aviation is built on a foundation of discipline and unwavering commitment to passenger well-being."
    ],
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
    detailedBio: [
      "Manoj Abraham IPS is a distinguished senior Indian Police Service officer of the Kerala cadre, currently serving as the Director General of Police (DGP) for Fire & Rescue Services. He also holds the significant responsibility of Director of the Vigilance and Anti-Corruption Bureau (VACB), where he leads efforts to maintain integrity and transparency in public service.",
      "Throughout his illustrious career, he has been recognized for his innovative approach to policing, particularly in the realm of community participation and the integration of technology in law enforcement. As one of the key architects of the Kerala Police Cyberdome, he has revolutionized how the force tackles modern-day security challenges.",
      "At TEDxCCET, he shares insights into the true nature of courage and leadership in public service, advocating for a principled approach to governance that stands firm against corruption and prioritizes the safety and dignity of every citizen."
    ],
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
    detailedBio: [
      "Arvind Venugopal is a talented playback singer and filmmaker who has carved a unique niche for himself in the vibrant Malayalam film industry. Known for his soulful voice and emotive performances, he has lent his vocals to numerous popular tracks, capturing the hearts of music lovers across the globe.",
      "In addition to his musical accomplishments, Arvind is a creative filmmaker, bringing a cinematic perspective to his artistic endeavors. This multidisciplinary approach allows him to explore storytelling through both sound and vision, creating immersive experiences that resonate with a wide audience.",
      "During his appearance at TEDxCCET, he discusses the profound connection between meaning and melody, illustrating how the stories behind the songs are what truly give them life and longevity in the hearts of listeners and creators alike."
    ],
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
  {
  name: "Col Sanjeev Nair (Retd)",
  slug: "sanjeev-nair",
  role: "Former CEO of Technopark, Kerala & Veteran Indian Army Officer",
  title: "LEADER IN DEFENCE, TECHNOLOGY & INNOVATION",
  org: "Technopark Kerala, Indian Army",
  image: "/speakers_s2/ColSanjeevNair.png",
  imageUrl: "/speakers_s2/ColSanjeevNair.png",
  achievement: "",
  quote: "Leadership is tested not in comfort, but in complexity and conflict.",
  layout: "left",
  googleLink: "https://www.google.com/search?q=Col+Sanjeev+Nair+Technopark",
  detailedBio: [
    "Col Sanjeev Nair (Retd) is a former CEO of Technopark, Kerala, and a highly respected veteran of the Indian Army with over 21 years of leadership experience across operations, project management, and mission-critical ICT and COMINT solutions.",
    "During his military career, he commanded a regiment in Jammu and Kashmir and received two commendations for operational excellence, reflecting his ability to lead decisively in high-risk and high-stakes environments. His work spans cyber intelligence, data analytics, and defence technology integration.",
    "Post-retirement, he led the Ministry of Defence’s iDEX innovation initiative, driving collaboration between startups and national defence needs. An alumnus of IIT Bombay with a Master’s in Communication Engineering and MDI Gurugram, his TEDxCCET talk focuses on leadership, innovation, and building resilient systems under pressure."
  ],
},
{
  name: "Dr. Saikat Kar",
  slug: "saikat-kar",
  role: "Physician-Scientist, Neuroscience Researcher & Educator",
  title: "BUILDING SCIENCE FROM THE GROUND UP",
  org: "Founder, CodonMind Nexus",
  image: "/speakers_s2/Dr_saikat_kar.png",
  imageUrl: "/speakers_s2/Dr_saikat_kar.png",
  achievement: "",
  quote: "True innovation begins when talent returns home to rebuild what was missing.",
  layout: "right",
  googleLink: "https://www.google.com/search?q=Dr+Saikat+Kar+CodonMind+Nexus",
  detailedBio: [
    "Dr. Saikat Kar is a physician-scientist, neuroscience researcher, and educator dedicated to building world-class scientific innovation from underserved regions. A first-generation graduate from Agartala, his journey reflects persistence, purpose, and a deep commitment to social impact.",
    "He trained in integrative neuroscience at the University of Edinburgh and in clinical research at Harvard Medical School, gaining global exposure before making the deliberate choice to return to India. His work bridges cutting-edge neuroscience research with real-world clinical and educational applications.",
    "He is the founder of CodonMind Nexus, Tripura’s first neuroscience-led innovation hub, where he has mentored over 600 students and contributed through research and patents. At TEDxCCET, he speaks about the powerful philosophy of “return and rebuild” and how community-driven science can transform regions."
  ],
},
{
  name: "PMA Gafoor",
  slug: "pma-gafoor",
  role: "Author, Counselor, Motivational Speaker & Storyteller",
  title: "THE STORYTELLER OF PURPOSE",
  org: "Independent Author & Visiting Faculty",
  image: "/speakers_s2/PMA_Gafoor.png",
  imageUrl: "/speakers_s2/PMA_Gafoor.png",
  achievement: "",
  quote: "Life changes when stories turn into self-awareness.",
  layout: "left",
  googleLink: "https://www.google.com/search?q=PMA+Gafoor+motivational+speaker",
  detailedBio: [
    "PMA Gafoor is a well-known author, counselor, motivational speaker, and storyteller from Kozhikode, Kerala. He is widely recognized as a visiting faculty member across Kerala, known for his deeply engaging and relatable sessions.",
    "His talks uniquely blend powerful storytelling with practical life lessons, helping individuals navigate emotional well-being, personal growth, and purpose-driven living. Rather than abstract motivation, his approach focuses on reflection, awareness, and actionable change.",
    "Through his writings and public engagements, he has inspired diverse audiences to approach life with clarity, enthusiasm, and resilience. At TEDxCCET, he shares insights on how stories shape identity and how conscious living can transform everyday life."
  ],
},

  
];
