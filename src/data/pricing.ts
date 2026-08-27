import type { PricingTier } from "@/types";

// PLACEHOLDER DATA — real DSD pricing has not been supplied yet (see
// progress-tracker.md -> Known Gaps). These are illustrative tiers only — replace with real
// numbers before this site ever goes live. Every tier links to /contact rather than a
// checkout flow, since there is no payment processing on this site (see project-overview.md
// -> Features Out of Scope) — pricing is a starting point for a conversation, not a
// self-serve purchase.
export const pricingTiers: PricingTier[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "$1,500",
    period: "starting at",
    description: "A focused website build for businesses getting their first real online presence.",
    features: [
      "Custom-designed website, up to 5 pages",
      "Fully responsive, mobile-first build",
      "Basic on-page SEO setup",
      "Content management handover",
      "2 weeks of post-launch support",
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    price: "$4,500",
    period: "starting at",
    description: "For businesses ready to combine a full site build with ongoing marketing.",
    features: [
      "Everything in Starter",
      "Web app functionality (accounts, forms, dashboards)",
      "Technical + on-page SEO audit and fixes",
      "1 social media ad campaign setup",
      "3 months of post-launch support",
    ],
    highlighted: true,
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Custom systems, ongoing consulting, and managed hosting for larger operations.",
    features: [
      "Everything in Growth",
      "Custom system development",
      "Dedicated business consultant",
      "Managed hosting with monitored uptime",
      "Ongoing SEO and social media management",
    ],
  },
];
