export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content: string[];
  externalLinks: { label: string; href: string }[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  focus: string;
  details: string[];
};

export const stats = [
  { label: "Years of Service", value: "30+ Years" },
  { label: "Key Roles", value: "Law & Order Leadership" },
  { label: "Administrative Experience", value: "Statewide Governance" },
  { label: "Public Service", value: "Institutional Duty" }
];

export const timeline: TimelineEntry[] = [
  {
    year: "2023",
    title: "Director General of Police, Jharkhand",
    description: "Leading police administration with emphasis on public trust, institutional discipline, and responsive governance.",
    focus: "State leadership",
    details: [
      "Oversight of statewide police administration and strategic law-and-order response.",
      "Institutional focus on public confidence, coordination, and operational steadiness.",
      "Represents the highest tier of police leadership in Jharkhand."
    ]
  },
  {
    year: "2018",
    title: "Senior Leadership Role",
    description: "Steered major administrative and law-and-order responsibilities across the state apparatus.",
    focus: "Administrative command",
    details: [
      "Directed senior operational and administrative responsibilities in high-pressure contexts.",
      "Strengthened interdepartmental coordination and command discipline.",
      "Built systems-led leadership across broad institutional functions."
    ]
  },
  {
    year: "2010",
    title: "District Leadership",
    description: "Oversaw district-level policing with focus on field coordination, civil order, and operational integrity.",
    focus: "Field administration",
    details: [
      "Managed district-level policing with direct responsibility for field execution.",
      "Balanced civil order, local governance demands, and operational readiness.",
      "Developed command experience rooted in ground realities and public interface."
    ]
  },
  {
    year: "Earlier Service",
    title: "Foundational Public Service Years",
    description: "Built a long career shaped by disciplined service, responsibility, and field experience.",
    focus: "Career foundation",
    details: [
      "Early service years shaped by rigorous field exposure and institutional learning.",
      "Developed a professional identity grounded in discipline, restraint, and service.",
      "Created the foundation for later senior leadership roles."
    ]
  }
];

export const achievements = [
  "Long-standing service in Indian policing and state administration.",
  "Leadership in institutional law-and-order management.",
  "Experience spanning field command, administrative stewardship, and public-facing governance.",
  "Recognized for a composed, disciplined, and service-first professional presence."
];

export const articles: Article[] = [
  {
    slug: "discipline-public-duty",
    title: "Discipline as the Quiet Foundation of Public Duty",
    date: "2026-01-12",
    excerpt: "A reflection on why disciplined institutions create calm, continuity, and public confidence in moments of pressure.",
    category: "Public Service",
    content: [
      "Public service is often measured by moments of visible action, yet its real strength is built in quieter habits. Discipline is what allows institutions to remain steady when events become difficult and expectations intensify.",
      "Leadership in policing asks for more than command. It asks for composure, a sense of proportion, and an ability to protect both order and dignity. These values do not appear suddenly in crisis. They are formed through daily practice.",
      "A disciplined institution gives citizens confidence that systems will hold, decisions will be weighed carefully, and service will remain guided by responsibility rather than impulse."
    ],
    externalLinks: [
      { label: "Publish on Hindustan Times", href: "https://www.hindustantimes.com/" },
      { label: "Interview placement on The Indian Express", href: "https://indianexpress.com/" }
    ]
  },
  {
    slug: "clarity-and-leadership",
    title: "Leadership Requires Clarity Before Speed",
    date: "2025-11-07",
    excerpt: "Why inner clarity matters in administrative leadership, especially when the public expects quick and decisive response.",
    category: "Leadership",
    content: [
      "Administrative life often rewards urgency, but not every urgent moment benefits from haste. Clear leadership depends on the ability to pause, weigh consequences, and act with conviction rather than noise.",
      "Clarity is not withdrawal from action. It is what allows action to remain effective, proportionate, and aligned with duty.",
      "Institutions gain moral force when their leaders combine responsiveness with steadiness. That balance shapes trust."
    ],
    externalLinks: [
      { label: "Editorial syndication on The Telegraph", href: "https://www.telegraphindia.com/" },
      { label: "Profile feature on India Today", href: "https://www.indiatoday.in/" }
    ]
  },
  {
    slug: "service-and-stillness",
    title: "Service and Stillness Can Coexist",
    date: "2025-08-18",
    excerpt: "An editorial note on public action, restraint, and the role of inner stillness in responsible leadership.",
    category: "Philosophy",
    content: [
      "A life of service is rarely quiet on the outside. Yet without a disciplined interior life, action can lose precision and meaning.",
      "Stillness is not passivity. It is the source of perspective. It helps leaders distinguish the immediate from the important and the loud from the necessary.",
      "In public roles, that inner discipline becomes a form of service in itself."
    ],
    externalLinks: [
      { label: "Essay placement on The Print", href: "https://theprint.in/" },
      { label: "Opinion publication on Firstpost", href: "https://www.firstpost.com/" }
    ]
  }
];

export const galleryImages = [
  {
    src: "/images/portraits/tadasha-portrait.png",
    alt: "Formal portrait of Tadasha Mishra in uniform",
    featured: true,
    tags: ["Featured", "Portraits"]
  },
  {
    src: "/images/gallery/office-writing.jpg",
    alt: "Tadasha Mishra writing at her desk",
    tags: ["Office"]
  },
  {
    src: "/images/gallery/desk-signing.jpg",
    alt: "Tadasha Mishra signing documents at headquarters",
    tags: ["Office"]
  },
  {
    src: "/images/gallery/flag-meeting.jpg",
    alt: "Official meeting at police headquarters",
    tags: ["Meetings"]
  },
  {
    src: "/images/gallery/formal-address.jpg",
    alt: "Formal seated portrait in office",
    tags: ["Office", "Portraits"]
  },
  {
    src: "/images/gallery/ceremonial-bouquet.jpg",
    alt: "Ceremonial bouquet presentation in office",
    tags: ["Ceremony"]
  },
  {
    src: "/images/gallery/government-meeting.jpg",
    alt: "Official gathering with government representatives",
    tags: ["Meetings"]
  },
  {
    src: "/images/gallery/arrival-ceremony.jpg",
    alt: "Ceremonial arrival with officers and dignitaries",
    tags: ["Ceremony"]
  },
  {
    src: "/images/gallery/field-visit.jpg",
    alt: "Field visit and reception by officials",
    tags: ["Field"]
  }
];

export const contactDetails = {
  email: "office@tadashamishra.in",
  office: "Police Headquarters, Ranchi, Jharkhand"
};
