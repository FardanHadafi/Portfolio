import NihongoLab from "./assets/nihongolab.png";

export const services = [
  {
    title: "Fullstack Development",
    desc: "End-to-end web application development. I handle the database, API, and frontend interface to ensure a seamless product.",
    icon: "⚡",
  },
  {
    title: "Backend & API Design",
    desc: "Robust RESTful APIs built focused on high concurrency, rate limiting, and secure authentication.",
    icon: "🛡️",
  },
  {
    title: "Performance Optimization",
    desc: "Audit and fix slow legacy applications. I optimize database queries and reduce bundle sizes for better performance.",
    icon: "🚀",
  },
];

export const projects = [
  {
    title: "NihongoLab",
    status: "live",
    description:
      "A comprehensive Japanese learning platform. Features spaced-repetition algorithms, interactive quizzes, and a PostgreSQL database managing user progress.",
    image: NihongoLab,
    tech: ["SvelteKit", "CSS", "Hono", "PostgreSQL"],
    demo: "https://nihongo-lab-web.vercel.app/",
    source: "https://github.com/FardanHadafi/NihongoLab",
  },
  {
    title: "E-Commerce for PC Enthusiast",
    status: "soon",
    description:
      "A high-performance E-Commerce system for local retail businesses.",
    image: null,
    tech: ["SvelteKit", "Tailwind", "Go", "PostgreSQL"],
    demo: "#",
    source: "#",
  },
  {
    title: "Charity Platform",
    status: "soon",
    description:
      "An open-source boilerplate for building SaaS applications with authentication and payments pre-configured.",
    image: null,
    tech: ["SvelteKit", "Tailwind", "Go", "PostgreSQL"],
    demo: "#",
    source: "#",
  },
];

export const techColors: Record<string, { bg: string }> = {
  SvelteKit: { bg: "#FF3E00" },
  Svelte: { bg: "#FF3E00" },
  CSS: { bg: "#1572B6" },
  Tailwind: { bg: "#06B6D4" },
  Hono: { bg: "#E36002" },
  Go: { bg: "#00ADD8" },
  PostgreSQL: { bg: "#336791" },
};

export function getTechStyle(tech: string) {
  const colors = techColors[tech] || { bg: "#333" };
  return `background-color: ${colors.bg};`;
}

export const techStack = [
  { name: "Svelte", color: "#FF3E00", icon: "svelte" },
  { name: "SvelteKit", color: "#FF3E00", icon: "svelte" },
  { name: "Go", color: "#00ADD8", icon: "go" },
  { name: "Gin", color: "#00ADD8", icon: "gin" },
  { name: "PostgreSQL", color: "#4169E1", icon: "postgresql" },
  { name: "Hono", color: "#E36002", icon: "hono" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: "tailwindcss" },
  { name: "TypeScript", color: "#3178C6", icon: "typescript" },
  { name: "Vue", color: "#4FC08D", icon: "vuedotjs" },
  { name: "Nuxt", color: "#00DC82", icon: "nuxt" },
];
