// ─────────────────────────────────────────────────────────────
// KK Group — company content. Edit here to update the website.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: "KK Group",
  short: "KK",
  tagline: "We design & build mobile apps and websites",
  location: "Karachi, Pakistan",
  email: "kanayalal.khatri7@gmail.com",
  phone: "+92 336 3762106",
  whatsapp: "923363762106", // international format, no + or spaces
  whatsappMessage: "Hi KK Group! I'd like to discuss a project.",
  linkedin: "https://www.linkedin.com/in/kanayalal-khatri",
  github: "https://github.com/KanayaLalKhatri",
  intro:
    "KK Group is a digital product studio crafting secure, high-performance mobile apps and websites. From KYC & biometric onboarding to fintech, e-commerce, and AI-powered experiences — we turn ideas into polished, production-grade products.",
  about: [
    "We're a team of mobile and web engineers with 7+ years of experience building for banking, fintech, and digital-identity clients across Pakistan, the UAE, and Europe.",
    "Our work spans native Android (Kotlin, Jetpack Compose), Flutter, and modern web — backed by Clean Architecture, strong security (SSL pinning, biometrics, encryption), and on-device ML. We obsess over performance, design, and long-term maintainability.",
  ],
  stats: [
    { value: "7+", label: "Years of Experience" },
    { value: "20+", label: "Apps & Products Shipped" },
    { value: "3", label: "Regions Served" },
    { value: "98%", label: "Verification Accuracy" },
  ],
};

export type Service = {
  icon: string; // lucide icon name
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Native Android (Kotlin, Jetpack Compose) and cross-platform Flutter apps — fast, secure, and beautifully crafted.",
    points: ["Android & iOS (Flutter)", "Jetpack Compose", "Clean Architecture / MVVM"],
  },
  {
    icon: "Globe",
    title: "Web Design & Development",
    description:
      "Modern, responsive websites and web apps with smooth animations and excellent performance.",
    points: ["Next.js / React", "Responsive & SEO-ready", "Landing pages & dashboards"],
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Clean, conversion-focused interfaces — from wireframes to polished, pixel-perfect product design.",
    points: ["Design systems", "Prototyping", "User-flow design"],
  },
  {
    icon: "ShieldCheck",
    title: "KYC & Biometric Solutions",
    description:
      "Digital onboarding with face liveness, OCR document scanning, and secure identity verification.",
    points: ["Face liveness & OCR", "Digital identity / mDoc", "Secure onboarding SDKs"],
  },
  {
    icon: "Cpu",
    title: "AI / ML Integration",
    description:
      "On-device intelligence — computer vision, detection, and inference optimized for mobile.",
    points: ["TensorFlow Lite / ML Kit", "Computer vision", "On-device inference"],
  },
  {
    icon: "Wrench",
    title: "Maintenance & Support",
    description:
      "Ongoing updates, performance tuning, and store releases so your product keeps improving.",
    points: ["CI/CD & releases", "Performance tuning", "Monitoring & fixes"],
  },
];

export type Step = { title: string; description: string };

export const process: Step[] = [
  { title: "Discover", description: "We understand your goals, users, and scope to define the right solution." },
  { title: "Design", description: "We craft wireframes and a polished UI/UX that fits your brand." },
  { title: "Develop", description: "We build secure, scalable apps with clean, maintainable code." },
  { title: "Deploy", description: "We ship to the stores and the web with CI/CD and QA." },
  { title: "Support", description: "We monitor, iterate, and keep your product fast and reliable." },
];
