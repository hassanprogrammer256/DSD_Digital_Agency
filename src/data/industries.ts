import type { Industry } from "@/types";

// Trimmed from Digital Graphiks' 15-industry reference list down to the industries DSD's own
// portfolio (`src/data/projects.ts`) actually evidences — same no-overclaim discipline applied
// to `technologies.ts`. See progress-tracker.md.
export const industries: Industry[] = [
  {
    slug: "education",
    name: "Education & E-Learning",
    description: "Course platforms, student portals, and interactive learning tools built for real classroom and campus workflows.",
    icon: "GraduationCap",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & Ecommerce",
    description: "Storefronts and shopping experiences built to handle real catalogs, checkout flows, and order volume.",
    icon: "ShoppingBag",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "Listing platforms and property websites that make browsing, searching, and enquiring simple.",
    icon: "Building2",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Websites and booking tools for clinics and practices, built with patient trust and clarity in mind.",
    icon: "Stethoscope",
  },
  {
    slug: "travel-tourism",
    name: "Travel & Tourism",
    description: "Booking engines and destination content for tour operators and travel businesses.",
    icon: "Plane",
  },
  {
    slug: "logistics",
    name: "Logistics",
    description: "Sites and systems built to make a logistics or freight business easy to find and easy to trust.",
    icon: "Truck",
  },
  {
    slug: "non-profit",
    name: "Non-Profit",
    description: "Donation, volunteer, and impact-reporting websites built for organizations that need trust, not flash.",
    icon: "HeartHandshake",
  },
  {
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    description: "Apps and sites for fitness brands, built around real member and class-booking workflows.",
    icon: "Dumbbell",
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    description: "Media and content-discovery apps built around real-time search and recommendation.",
    icon: "Clapperboard",
  },
  {
    slug: "technology-saas",
    name: "Technology & SaaS",
    description: "Internal tools, CI/CD pipelines, and cloud infrastructure for tech teams that need it to just work.",
    icon: "Cpu",
  },
];
