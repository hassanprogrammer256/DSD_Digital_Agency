import type { LandingOffer } from "@/types";

// Ad-campaign landing pages — built to the 7-point high-converting-landing-page checklist
// (message match, single goal, short form, strong CTA, trust signals, thank-you page with a
// next step). See progress-tracker.md for the full rationale.
//
// `headline` is written to match a plausible ad's own headline verbatim (message match is the
// whole point — an ad promising "Get a Free Website Audit" must land on a page that says the
// same thing within the first second, not a generic homepage).
//
// Each offer below is tied to a real, already-built DSD service (`relatedServiceSlug`) and
// uses generic, honest lead-magnet framing — no fabricated stats, client counts, or urgency
// claims. Add a new entry here (plus one ad) to spin up another campaign; nothing else in the
// route or component needs to change.
export const landingOffers: LandingOffer[] = [
  {
    slug: "free-website-audit",
    headline: "Get a Free Website Audit",
    subheadline: "A specialist reviews your site's speed, SEO, and conversion path — and sends you a clear, written breakdown of what's costing you visitors.",
    hookTitle: "What you'll get",
    hookPoints: [
      "A full review of load speed, mobile usability, and on-page SEO",
      "A prioritized list of the 3 changes that will move the needle fastest",
      "No sales pitch attached — just the findings, from a real specialist",
    ],
    ctaLabel: "Send My Free Audit",
    formTitle: "Get Your Free Audit",
    testimonialId: "samuel-adeyemi",
    relatedServiceSlug: "website-development",
    thankYouHeadline: "Your audit request is in.",
    thankYouBody: "A DSD specialist will review your site and email your audit within 2 business days.",
    nextStepNote: "Check your inbox — that's where your audit will land.",
  },
];
