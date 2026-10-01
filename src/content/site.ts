// All website copy lives here. Edit this file to update the site —
// no need to touch the components.

export const site = {
  name: "BnHive",
  legalName: "BnHive Technologies",
  tagline: "Building ideas. Creating technology.",
  focus: "Software • Technology • Digital Solutions • AI",
  description:
    "BnHive Technologies is a software and technology company building web, mobile, backend, AI, SaaS, and custom digital solutions for businesses and organizations. We turn ideas and real-world problems into practical, scalable technology.",
  url: "https://bnhive.com",
  email: "hello@bnhive.com",
  // International format, digits only (no +, spaces or dashes). e.g. 233241234567
  whatsappNumber: "233546505612",
  whatsappDisplay: "+233 54 650 5612",
  whatsappGreeting: "Hi BnHive! I'd like to talk about a project.",
  location: "Accra, Ghana",
  socials: {
    linkedin: "https://www.linkedin.com/company/bnhive",
    instagram: "https://www.instagram.com/bnhive",
    x: "https://x.com/bnhive",
  },
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Software • Technology • Digital Solutions • AI",
  title: "Your idea. Our technology.",
  highlight: "Real solutions.",
  subtitle:
    "BnHive Technologies designs, develops and deploys practical digital solutions — combining modern software engineering, cloud, mobile, backend systems and AI to turn ideas and operational challenges into reliable products.",
  buildPrefix: "We build",
  rotating: ["web applications", "mobile apps", "AI-powered products", "SaaS platforms", "backend systems", "business software"],
  // Floating chips around the hero logo
  chips: ["Next.js", "Flutter", "Rust", "AI / LLMs", "FastAPI", "Go"],
  primaryCta: { label: "Chat with us on WhatsApp" },
  secondaryCta: { label: "See our work", href: "#work" },
};

export const stats = [
  { value: "11", label: "Service lines" },
  { value: "9", label: "Industry areas" },
];

export type ServiceIcon =
  | "web"
  | "mobile"
  | "api"
  | "software"
  | "ai"
  | "saas"
  | "workflow"
  | "cloud"
  | "database"
  | "integration"
  | "desktop";

export const services: {
  icon: ServiceIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: "web",
    title: "Web Applications",
    description: "Fast, secure web apps, portals and dashboards built with React, Next.js and TypeScript.",
  },
  {
    icon: "mobile",
    title: "Mobile Applications",
    description: "Cross-platform Android and iOS apps built with Flutter — including offline-first apps.",
  },
  {
    icon: "api",
    title: "Backend & APIs",
    description: "Reliable REST APIs and backend services in Go, Rust, Python/FastAPI and Node.js.",
  },
  {
    icon: "software",
    title: "Custom Business Software",
    description: "Software shaped around how your organization actually works, not the other way round.",
  },
  {
    icon: "ai",
    title: "AI Integration & AI Apps",
    description: "LLM-powered features, intelligent workflows and AI-powered products that do real work.",
  },
  {
    icon: "saas",
    title: "SaaS & Multi-tenant Platforms",
    description: "Scalable platforms that serve many organizations securely from one codebase.",
  },
  {
    icon: "workflow",
    title: "Business & Workflow Systems",
    description: "Management, POS, inventory and workflow systems that streamline daily operations.",
  },
  {
    icon: "cloud",
    title: "Cloud & Server Deployment",
    description: "Linux, Docker, VPS and cloud infrastructure set up, deployed and kept running.",
  },
  {
    icon: "database",
    title: "Database Design & Management",
    description: "Well-modelled PostgreSQL databases designed for integrity, performance and growth.",
  },
  {
    icon: "integration",
    title: "System Integration & Automation",
    description: "Connect your tools, payment providers and third-party services, and automate the busywork.",
  },
  {
    icon: "desktop",
    title: "Desktop & System Software",
    description: "High-performance desktop and systems software built in Rust.",
  },
];

// Technology choices are project-driven and may vary according to requirements.
export const techStack: { area: string; items: string[] }[] = [
  { area: "Web", items: ["React", "Next.js", "TypeScript"] },
  { area: "Mobile", items: ["Flutter", "Dart"] },
  { area: "Systems / Desktop", items: ["Rust"] },
  { area: "Backend", items: ["Go", "Rust", "Python", "FastAPI", "Node.js"] },
  { area: "Databases", items: ["PostgreSQL"] },
  { area: "Infrastructure", items: ["Linux", "Docker", "VPS & Cloud"] },
  { area: "APIs", items: ["REST APIs", "Third-party integrations"] },
  { area: "AI", items: ["LLMs", "AI APIs", "Intelligent workflows"] },
];

export type IndustryIcon =
  | "fintech"
  | "agritech"
  | "edtech"
  | "faithtech"
  | "businesstech"
  | "mediatech"
  | "healthtech"
  | "proptech"
  | "logisticstech";

export const industries: { icon: IndustryIcon; name: string; text: string }[] = [
  { icon: "fintech", name: "FinTech", text: "Financial and payment-related platforms" },
  { icon: "agritech", name: "AgriTech", text: "Agriculture, farm, field and agribusiness systems" },
  { icon: "edtech", name: "EdTech", text: "School, learning and education platforms" },
  { icon: "faithtech", name: "FaithTech", text: "Church and ministry management and media systems" },
  { icon: "businesstech", name: "BusinessTech", text: "Business management, POS, inventory and workflow systems" },
  { icon: "mediatech", name: "MediaTech", text: "Media, event and digital content solutions" },
  { icon: "healthtech", name: "HealthTech", text: "Healthcare and service-management platforms" },
  { icon: "proptech", name: "PropTech", text: "Property and real-estate management systems" },
  { icon: "logisticstech", name: "LogisticsTech", text: "Logistics, delivery, tracking and operational systems" },
];

export type ProcessIcon = "understand" | "define" | "design" | "develop" | "test" | "deploy" | "support";

export const process: { step: string; icon: ProcessIcon; title: string; text: string }[] = [
  {
    step: "01",
    icon: "understand",
    title: "Understand",
    text: "We start with the problem and your business objective — who it's for, what success looks like.",
  },
  {
    step: "02",
    icon: "define",
    title: "Define",
    text: "We turn that into clear requirements and user workflows, so everyone agrees on what we're building.",
  },
  {
    step: "03",
    icon: "design",
    title: "Design",
    text: "We design the system architecture and the product experience before a line of production code.",
  },
  {
    step: "04",
    icon: "develop",
    title: "Develop",
    text: "We build the web, mobile, backend, AI and supporting services — with regular demos along the way.",
  },
  {
    step: "05",
    icon: "test",
    title: "Test & improve",
    text: "We test thoroughly and refine the solution with your feedback until it's ready.",
  },
  {
    step: "06",
    icon: "deploy",
    title: "Deploy",
    text: "We ship to the infrastructure that suits you — VPS, cloud or your own servers.",
  },
  {
    step: "07",
    icon: "support",
    title: "Support",
    text: "We stay on for maintenance, improvements and ongoing technical support.",
  },
];

// Portfolio. `image` is optional — put files in /public/work/ and set
// e.g. image: "/work/locagri.jpg". Without an image, a branded cover is shown.
// `result` is a one-line highlight shown under the summary.
export type Project = {
  title: string;
  client: string;
  category: "Web" | "Mobile" | "Software";
  summary: string;
  tags: string[];
  result?: string;
  image?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "StitchBook",
    client: "StitchBook",
    category: "Mobile",
    summary:
      "An offline notebook app for tailors and fashion designers in Ghana — customers, measurements, orders and payments, all stored securely on the tailor's phone.",
    tags: ["Flutter", "Offline-first", "Encrypted storage", "Android"],
    result: "Works fully offline, PIN & biometric lock",
  },
  {
    title: "Learner",
    client: "Learner",
    category: "Mobile",
    summary:
      "Turns photos of textbook pages, PDFs and Word documents into digital books, then automatically generates quizzes from your notes to help you revise.",
    tags: ["Flutter", "OCR", "EdTech", "Web & Android"],
    result: "Offline quiz generation from your own notes",
  },
  {
    title: "Scholae",
    client: "Scholae",
    category: "Software",
    summary:
      "A multi-tenant school management platform with separate experiences for admins, teachers, students, parents and supervisors, managed from a central superadmin.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    result: "5 user roles per school, unlimited schools",
    link: "https://scholae.cloud",
  },
  {
    title: "LiveProd",
    client: "LiveProd",
    category: "Software",
    summary:
      "A professional live production switcher for broadcasters — mix cameras, screens and media, then record or stream live with GPU compositing and overlays.",
    tags: ["Rust", "FFmpeg", "GPU", "RTMP / SRT"],
    result: "Hardware-accelerated recording & streaming",
  },
];

// Add real client quotes here — the section is hidden while this list is empty.
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const about = {
  title: "Bridging ideas, business operations and technology.",
  paragraphs: [
    "BnHive Technologies is a modern software and technology company focused on designing, developing and deploying practical digital solutions for businesses, organizations, institutions and emerging ventures.",
    "We're not limited to a single industry or programming language — we build the technology each client or product actually needs. We develop both client-specific software and reusable products that can evolve into SaaS platforms.",
  ],
  vision:
    "To build useful, scalable, and intelligent technology that helps people and organizations work better, serve customers better, and create new opportunities.",
  mission:
    "To transform ideas, business processes, and real-world problems into secure, modern, and maintainable software solutions using the right technology for each project.",
  why: [
    "Technology choices based on the actual problem rather than trends",
    "Strong focus on practical and maintainable software",
    "Web, mobile, backend, systems and AI capabilities under one technology direction",
    "Ability to build both custom solutions and scalable SaaS products",
    "Focus on security, reliability and long-term maintainability",
    "Flexible solutions for startups, SMEs, institutions and larger organizations",
  ],
  productsTitle: "What we're building",
  products: [
    "Agriculture and farm-management platforms",
    "Church and event-management software",
    "Fashion business management systems",
    "School management and POS/printing platforms",
    "Business POS and inventory systems",
    "Cloud-connected IP camera and security platforms",
    "AI-powered business and productivity tools",
    "Custom SaaS products",
  ],
};

// Add `photo: "/team/name.jpg"` (in /public/team/) to show a photo instead of initials.
// The team grid is hidden while this list is empty.
export const team: { name: string; role: string; photo?: string }[] = [];

export const contact = {
  title: "Let's build something great together.",
  subtitle:
    "Tell us about your idea or the problem you need solved. The fastest way to reach us is WhatsApp.",
  budgets: ["Under $2k", "$2k – $5k", "$5k – $15k", "$15k+", "Not sure yet"],
};

export function whatsappLink(message: string = site.whatsappGreeting) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
