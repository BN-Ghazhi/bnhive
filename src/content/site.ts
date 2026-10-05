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
  email: "bbhaddah@gmail.com",
  // International format, digits only (no +, spaces or dashes). e.g. 233241234567
  whatsappNumber: "233546505612",
  whatsappDisplay: "+233 54 650 5612",
  whatsappGreeting: "Hi BnHive! I'd like to talk about a project.",
  location: "Accra, Ghana",
  // Paste a profile URL to show its icon in the footer; empty ones are hidden.
  socials: {
    linkedin: "",
    instagram: "",
    x: "",
  },
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#portfolio" },
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
  secondaryCta: { label: "View our portfolio", href: "#portfolio" },
};

export const stats = [
  { value: "12", label: "Service lines" },
  { value: "9", label: "Industry areas" },
];

export type ServiceIcon =
  | "web"
  | "ecommerce"
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
    icon: "ecommerce",
    title: "E-commerce Development",
    description: "Online stores and marketplaces with checkout, Mobile Money and card payments, and order management.",
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

// Portfolio. Clicking a card opens a preview with its screenshots and details.
// `images` are screenshots in /public/work/<project>/ — the first one is the card
// cover. Without images, a branded cover is shown. `frame: "phone"` fits
// portrait phone screenshots instead of cropping them. `highlights` are the
// feature bullets in the preview; `result` is a one-line highlight on the card.
export type Project = {
  title: string;
  client: string;
  category: "Web" | "Mobile" | "Desktop" | "SaaS";
  summary: string;
  tags: string[];
  highlights?: string[];
  result?: string;
  images?: { src: string; caption: string }[];
  frame?: "desktop" | "phone";
  link?: string;
};

export const projects: Project[] = [
  {
    title: "micRo-C",
    client: "micRo-C",
    category: "SaaS",
    summary:
      "Multi-tenant microcredit management for Ghanaian lenders. Every lending institution gets its own branded portal on its own subdomain, from loan application to repayment and accounting.",
    tags: ["Go", "Next.js", "PostgreSQL", "Multi-tenant"],
    highlights: [
      "Full loan lifecycle with 4 interest methods and live repayment schedules",
      "Mobile-money repayments (MTN MoMo, Telecel Cash, AT Money)",
      "Double-entry accounting, PAR30/PAR90 and Bank of Ghana loan classification",
      "Self-serve lender onboarding and an operator console",
      "Tenant isolation enforced in the database with row-level security",
    ],
    result: "82 API endpoints, 7 lender roles — working prototype",
    images: [
      { src: "/work/micro-c/05.jpg", caption: "Operator console: every lender on the platform and their combined portfolio" },
      { src: "/work/micro-c/01.jpg", caption: "A lender's branded portal: portfolio outstanding, portfolio-at-risk and arrears" },
      { src: "/work/micro-c/02.jpg", caption: "Loan detail with the generated repayment schedule and lifecycle actions" },
      { src: "/work/micro-c/03.jpg", caption: "Borrower register with filters by status, KYC, branch and loan officer" },
      { src: "/work/micro-c/04.jpg", caption: "Recording a mobile-money repayment with the allocation previewed before posting" },
      { src: "/work/micro-c/06.jpg", caption: "Self-serve onboarding: a new lender gets its own subdomain and starter products" },
    ],
  },
  {
    title: "Church Management System",
    client: "Kingdom Grace Chapel",
    category: "Desktop",
    summary:
      "A complete management console for a church — members, attendance, events, departments, leadership and reports. It carries its own database, so it works fully offline with no server.",
    tags: ["Flutter", "SQLite", "Offline-first", "Windows · macOS · Linux · Web"],
    highlights: [
      "Member directory with profiles and rich filters",
      "Attendance headcounts, check-in and trend charts",
      "Events calendar, departments and discipleship",
      "10 roles with a per-module permission matrix",
      "Reports with CSV export, light and dark theme",
    ],
    result: "One codebase for desktop and web, works offline",
    images: [
      { src: "/work/church-management/01.jpg", caption: "Dashboard: active members, Sunday attendance and in-person vs online trend" },
      { src: "/work/church-management/03.jpg", caption: "Attendance: service headcounts, 26-week average and online share" },
      { src: "/work/church-management/04.jpg", caption: "Member directory with search and status, gender, title and baptism filters" },
      { src: "/work/church-management/02.jpg", caption: "Congregation age distribution alongside upcoming events" },
      { src: "/work/church-management/05.jpg", caption: "Events calendar for rehearsals, youth nights, prayer meetings and outreach" },
      { src: "/work/church-management/06.jpg", caption: "Pastors and leaders across the church's departments" },
    ],
  },
  {
    title: "Bible Presentation",
    client: "Bible Presentation",
    category: "Desktop",
    summary:
      "A desktop app that listens to a live sermon, detects Bible references as they're spoken, and puts the verse on the projector screen — automatically.",
    tags: ["Rust", "Tauri", "React", "Speech-to-text"],
    highlights: [
      "Offline speech recognition on-device with Whisper, or Deepgram online",
      "Preview / Live workflow with history, queue and chapter navigator",
      "Bundled translations plus downloads including Twi, Ewe and Yoruba",
      "Separate projector window with live typography and theme settings",
    ],
    result: "Spoken reference to projector, hands-free",
    images: [
      { src: "/work/bible-presentation/01.jpg", caption: "Operator console mid-sermon: \"John 3:16\" is detected and sent to Preview and Live" },
      { src: "/work/bible-presentation/02.jpg", caption: "Staging the next verse in Preview while the current one stays live" },
      { src: "/work/bible-presentation/05.jpg", caption: "Projector output shown to the congregation" },
      { src: "/work/bible-presentation/03.jpg", caption: "Transcription settings: offline Whisper or online Deepgram" },
      { src: "/work/bible-presentation/04.jpg", caption: "Bible Bank: bundled and downloadable translations" },
    ],
  },
  {
    title: "Scholae",
    client: "Scholae",
    category: "SaaS",
    summary:
      "A multi-tenant school management platform with separate experiences for admins, teachers, students, parents and supervisors, managed from a central superadmin.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    result: "5 user roles per school, unlimited schools",
    highlights: [
      "Attendance with QR / kiosk check-in",
      "Grades, report cards and offline marksheet upload",
      "Fees, payments and school financials",
      "Superadmin plans, subscriptions and feature flags",
    ],
    images: [
      { src: "/work/scholae/01.jpg", caption: "Sign-in for admins, teachers, students, parents and supervisors" },
    ],
    link: "https://scholae.cloud",
  },
  {
    title: "Fleet Manager",
    client: "Fleet Manager",
    category: "Mobile",
    summary:
      "Fleet operations in one app — live vehicle tracking, running costs, driver safety and compliance for admins, with separate driver and owner apps.",
    tags: ["Flutter", "OpenStreetMap", "Android · iOS · Web"],
    highlights: [
      "Live map with route trails and ETAs",
      "Fleet cost, cost per km and utilisation KPIs",
      "Driver safety scorecards (harsh braking, cornering, acceleration)",
      "Compliance alerts for services, insurance and licences",
      "Admin, manager, dispatcher, driver and owner roles",
    ],
    images: [
      { src: "/work/fleet-manager/01.jpg", caption: "Operations dashboard: fleet cost, cost per km, utilisation and on-time KPIs" },
      { src: "/work/fleet-manager/02.jpg", caption: "Live map tracking vehicles with route trail and ETAs" },
      { src: "/work/fleet-manager/03.jpg", caption: "Driver safety scorecard with risk bands by driver" },
      { src: "/work/fleet-manager/04.jpg", caption: "Running costs by insurance, maintenance, salary and fuel" },
      { src: "/work/fleet-manager/05.jpg", caption: "Fleet register with search, sort and status filters" },
      { src: "/work/fleet-manager/06.jpg", caption: "Compliance alerts for overdue services and expiring documents" },
    ],
  },
  {
    title: "Church Website",
    client: "Kingdom Grace Chapel",
    category: "Web",
    summary:
      "A modern, mobile-responsive website for a church with branches across Ghana — sermons, branches, ministries, events, giving and live streaming.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    highlights: [
      "Searchable sermon library with speaker, series and book filters",
      "Branch finder with region filter and map",
      "Watch live, giving, prayer requests and membership",
      "Pre-rendered pages, structured data and sitemap for search",
    ],
    result: "21 pages, 7 branches",
    images: [
      { src: "/work/kgc-website/01.jpg", caption: "Homepage with service times and live-stream call to action" },
      { src: "/work/kgc-website/04.jpg", caption: "Service times, latest sermon and upcoming events at a glance" },
      { src: "/work/kgc-website/03.jpg", caption: "Branch finder with search, region filter and map" },
      { src: "/work/kgc-website/05.jpg", caption: "Annual convention feature section" },
    ],
  },
  {
    title: "StitchBook",
    client: "StitchBook",
    category: "Mobile",
    summary:
      "An offline notebook app for tailors and fashion designers in Ghana — customers, measurements, orders and payments, all stored securely on the tailor's phone.",
    tags: ["Flutter", "Offline-first", "Encrypted storage", "Android"],
    highlights: [
      "No account needed: business name, PIN and a recovery code, with optional fingerprint",
      "Preloaded Ghanaian garment templates — kaba & slit, smock (fugu), kaftan and more",
      "Orders move from Received to Collected, with late and ready-for-pickup alerts",
      "Cash and Mobile Money payments, with balances and monthly reports",
      "Encrypted backups to the phone, Google Drive or WhatsApp",
    ],
    result: "Works fully offline, PIN & biometric lock",
    frame: "phone",
    images: [
      { src: "/work/stitchbook/01.jpg", caption: "Home: money owed, with late, due-this-week and ready-for-pickup orders at a glance" },
      { src: "/work/stitchbook/02.jpg", caption: "An order: fabric photo, progress from Received to Collected, and Mobile Money deposit and balance" },
      { src: "/work/stitchbook/03.jpg", caption: "Every job in progress with fabric thumbnails, status, due dates and what each customer owes" },
      { src: "/work/stitchbook/04.jpg", caption: "A customer's kaba & slit measurements, ready to reuse for a new order" },
      { src: "/work/stitchbook/05.jpg", caption: "Customer page: one-tap call or WhatsApp, orders and measurement history" },
      { src: "/work/stitchbook/06.jpg", caption: "Monthly report: money received, split by cash and Mobile Money, with a daily chart" },
    ],
  },
  {
    title: "Learner",
    client: "Learner",
    category: "Mobile",
    summary:
      "Turns photos of textbook pages, PDFs and Word documents into digital books, then automatically generates quizzes from your notes to help you revise.",
    tags: ["Flutter", "OCR", "EdTech", "Web & Android"],
    highlights: [
      "Add pages from photos, PDFs or Word files — text is read on-device",
      "Switch between the extracted text and the original page photo",
      "Offline quizzes: fill-in-the-blank, multiple choice, true/false and definitions",
      "Every mistake links back to the sentence and page it came from",
      "Subjects, books and a scored quiz history, all stored on the device",
    ],
    result: "Offline quiz generation from your own notes",
    images: [
      { src: "/work/learner/01.jpg", caption: "Correcting a scanned page: the original textbook photo beside its editable text" },
      { src: "/work/learner/02.jpg", caption: "Quiz results: each mistake shows the source sentence from your notes and a link to the page" },
      { src: "/work/learner/03.jpg", caption: "Reading a digital book page by page, with a one-tap \"Quiz me\"" },
      { src: "/work/learner/04.jpg", caption: "A multiple-choice question generated offline from the student's own notes" },
      { src: "/work/learner/05.jpg", caption: "Photo view: the same page as the original textbook scan" },
      { src: "/work/learner/06.jpg", caption: "A subject's books and its quiz history with colour-coded scores" },
    ],
  },
  {
    title: "LiveProd",
    client: "LiveProd",
    category: "Desktop",
    summary:
      "A professional live production switcher for broadcasters — mix cameras, screens and media, then record or stream live with GPU compositing and overlays.",
    tags: ["Rust", "FFmpeg", "GPU", "RTMP / SRT"],
    highlights: [
      "Preview / Program workflow with cut, T-bar and fade, wipe, zoom and slide transitions",
      "Cameras, video, images, slides, countdowns, titles and lower thirds as inputs",
      "Eight overlay channels and picture-in-picture layouts on top of Program",
      "Stream to YouTube, Facebook, Twitch, custom RTMP or SRT",
      "Keyboard-driven like a hardware switcher: 1–9 to preview, Space to cut",
    ],
    result: "Hardware-accelerated recording & streaming",
    images: [
      { src: "/work/liveprod/01.jpg", caption: "On air: stage camera with a lower third and logo on Program, a picture-in-picture layout waiting on Preview" },
      { src: "/work/liveprod/04.jpg", caption: "Pre-show: a countdown on Program, the event title card on Preview and nine inputs ready" },
      { src: "/work/liveprod/02.jpg", caption: "Mid-transition: the T-bar pulled halfway between the title card and the stage camera" },
      { src: "/work/liveprod/03.jpg", caption: "Streaming live to a custom RTMP destination, with the stream key masked" },
      { src: "/work/liveprod/05.jpg", caption: "Adding a text input: templates and a gallery of lower-third designs" },
      { src: "/work/liveprod/06.jpg", caption: "Lower-third settings: title, subtitle and design, with a live output preview" },
    ],
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
