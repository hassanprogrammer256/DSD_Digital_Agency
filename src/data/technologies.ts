import type { Technology } from "@/types";

// Grounded in what DSD has actually shipped — pulled from the real `techStack` fields across
// `src/data/projects.ts` — plus two explicitly-confirmed exceptions (see progress-tracker.md):
// Shopify/WooCommerce (industry-standard ecommerce platforms, claimed ahead of a named case
// study) and OpenAI/LangChain (a real, currently-usable AI stack DSD commits to, ahead of a
// named past project). Design Tools are standard industry tooling for the Design & Branding
// services, not portfolio-evidenced the same way the rest of this list is.
export const technologies: Technology[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "React Router", category: "Frontend" },
  { name: "NativeWind", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Django", category: "Backend" },

  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Firebase", category: "Databases" },

  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },

  { name: "Shopify", category: "Ecommerce" },
  { name: "WooCommerce", category: "Ecommerce" },

  { name: "OpenAI / GPT API", category: "Smart AI" },
  { name: "LangChain", category: "Smart AI" },

  { name: "Figma", category: "Design Tools" },
  { name: "Adobe Creative Suite", category: "Design Tools" },

  { name: "JWT", category: "Integrations" },
  { name: "Stripe", category: "Integrations" },
  { name: "PayPal", category: "Integrations" },
  { name: "Mobile Money APIs", category: "Integrations" },
];
