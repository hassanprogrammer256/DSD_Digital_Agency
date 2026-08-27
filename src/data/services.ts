import type { Service } from "@/types";

// The 10 offerings from context/project-overview.md. `icon` is a lucide-react icon name,
// resolved to a component via the lookup map in ServiceCard — see library-docs.md.
//
// `relatedProjectSlugs`/`teamMemberSlugs` are curated cross-references (into projects.ts /
// team.ts) rather than a derived category mapping — the 4 portfolio categories and 8
// services don't map 1:1, so an editor picking the right examples per service is more
// honest than forcing a lossy automatic mapping. Two services intentionally have an empty
// `relatedProjectSlugs` (no portfolio example fits yet) — ServiceDetailPage hides that
// section entirely rather than padding it, matching the "Similar Projects" precedent on
// ProjectDetailPage.
//
// `awards` and `stats` are PLACEHOLDER DATA (see progress-tracker.md -> Known Gaps) — award
// names/issuers are deliberately generic/illustrative, not naming a specific real, verifiable
// awards body, since DSD has not actually won anything named here. Replace with real
// accolades and numbers before launch.
export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    icon: "Globe",
    summary: "Fast, responsive, brand-consistent websites built to convert visitors into customers.",
    description:
      "We design and build custom websites from the ground up — no bloated page-builder templates. Every site is built for speed, accessibility, and a clear conversion path, matched to your brand from the first pixel.",
    included: [
      "Custom design matched to your brand identity",
      "Fully responsive across mobile, tablet, and desktop",
      "Optimized for fast load times and search engines",
      "Content management handover, so you can update it yourself",
    ],
    heroHeadline: "Websites engineered to convert, not just to impress.",
    relatedProjectSlugs: ["meridian-retail-storefront", "horizon-realty-website"],
    teamMemberSlugs: ["fatima-noor", "marco-rossi"],
    awards: [{ title: "Excellence in Web Design", issuer: "Regional Digital Awards", year: 2024 }],
    stats: [
      { label: "Websites Launched", value: 60, suffix: "+" },
      { label: "Client Retention", value: 92, suffix: "%" },
      { label: "Avg. Support Response", value: 24, suffix: "h" },
    ],
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    icon: "LayoutDashboard",
    summary: "Interactive, data-driven web applications built on modern frameworks.",
    description:
      "From customer dashboards to internal tools, we build web applications that handle real business logic — user accounts, data, workflows — not just static pages. Built with modern frameworks for a fast, app-like experience in the browser.",
    included: [
      "Custom feature scoping around your actual workflow",
      "Modern frontend + backend architecture",
      "Secure authentication and data handling",
      "Ongoing support after launch",
    ],
    heroHeadline: "Web applications built around how your business actually runs.",
    relatedProjectSlugs: ["meridian-retail-storefront", "marketplace-connect-app"],
    teamMemberSlugs: ["arjun-mehta", "ryan-tan"],
    awards: [{ title: "Best Web Application", issuer: "MENA Tech Awards", year: 2023 }],
    stats: [
      { label: "Applications Shipped", value: 25, suffix: "+" },
      { label: "Uptime", value: 99, suffix: "%" },
      { label: "Avg. Delivery Time", value: 10, suffix: " wks" },
    ],
  },
  {
    slug: "custom-system-development",
    title: "Custom System Development",
    icon: "Cpu",
    summary: "Bespoke software systems for the workflows off-the-shelf tools don't cover.",
    description:
      "When a generic SaaS tool doesn't fit how your business actually runs, we build a system that does — internal tools, booking/inventory systems, automation between the tools you already use.",
    included: [
      "Discovery workshop to map your real workflow",
      "System architecture designed around your scale",
      "Integration with your existing tools where needed",
      "Documentation and handover",
    ],
    heroHeadline: "The system your workflow needs — not the one a generic tool assumes.",
    relatedProjectSlugs: ["vantage-analytics-cicd", "northbridge-cloud-migration"],
    teamMemberSlugs: ["yusuf-demir", "daniel-osei"],
    awards: [],
    stats: [
      { label: "Systems Delivered", value: 18, suffix: "+" },
      { label: "Client Retention", value: 95, suffix: "%" },
    ],
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    icon: "Search",
    summary: "Technical and content SEO that gets your business found on search engines.",
    description:
      "We audit, fix, and continuously improve your site's technical SEO health and content strategy — so the customers already searching for what you offer can actually find you.",
    included: [
      "Full technical SEO audit",
      "On-page and content optimization",
      "Keyword and competitor research",
      "Ongoing ranking and traffic reporting",
    ],
    heroHeadline: "Get found by the customers already searching for you.",
    relatedProjectSlugs: ["coastal-dental-seo", "atlas-logistics-seo"],
    teamMemberSlugs: ["sara-ibrahim"],
    awards: [{ title: "Top SEO Agency — Nominee", issuer: "Search Marketing Awards", year: 2024 }],
    stats: [
      { label: "Avg. Organic Traffic Growth", value: 140, suffix: "%" },
      { label: "Campaigns Run", value: 45, suffix: "+" },
      { label: "Keywords Ranked #1-3", value: 300, suffix: "+" },
    ],
  },
  {
    slug: "corporate-business-consulting",
    title: "Corporate Business Consulting",
    icon: "Briefcase",
    summary: "Strategic digital marketing consulting for growing businesses.",
    description:
      "We work directly with your leadership team to build a digital marketing strategy grounded in your actual business goals — channel selection, budget allocation, and a realistic roadmap.",
    included: [
      "Digital presence and competitor audit",
      "Channel and budget strategy",
      "Quarterly strategy reviews",
      "Direct access to a dedicated consultant",
    ],
    heroHeadline: "A digital strategy grounded in your goals, not a template.",
    relatedProjectSlugs: ["atlas-logistics-seo"],
    teamMemberSlugs: ["layla-haddad", "priya-sharma"],
    awards: [{ title: "Business Advisory Partner of the Year", issuer: "Dubai SME Awards", year: 2023 }],
    stats: [
      { label: "Clients Advised", value: 50, suffix: "+" },
      { label: "Avg. Engagement Length", value: 9, suffix: " mo" },
    ],
  },
  {
    slug: "website-hosting",
    title: "Website Hosting",
    icon: "Server",
    summary: "Reliable, managed hosting so your site stays fast and online.",
    description:
      "We host and maintain your website on modern infrastructure — monitored uptime, automatic backups, and security patching — so you never have to think about server management.",
    included: [
      "Managed hosting with monitored uptime",
      "Automatic backups and security patching",
      "SSL certificates included",
      "Direct support when something needs attention",
    ],
    heroHeadline: "Hosting you never have to think about.",
    relatedProjectSlugs: ["northbridge-cloud-migration", "vantage-analytics-cicd"],
    teamMemberSlugs: ["daniel-osei"],
    awards: [],
    stats: [
      { label: "Sites Hosted", value: 80, suffix: "+" },
      { label: "Monitored Uptime", value: 99, suffix: "%" },
      { label: "Avg. Incident Response", value: 15, suffix: " min" },
    ],
  },
  {
    slug: "paid-advertising-ppc",
    title: "Paid Advertising (PPC)",
    icon: "Megaphone",
    summary: "Targeted, budget-controlled ads that bring in fast traffic and customers.",
    description:
      "We plan, launch, and optimize pay-per-click campaigns across search, display, and social — Google Ads and the platforms your customers actually use — with clear reporting on what your ad spend is actually delivering.",
    included: [
      "Platform and audience strategy",
      "Ad creative and copywriting",
      "Budget-controlled campaign management",
      "Transparent performance reporting",
    ],
    heroHeadline: "Ad spend that earns its keep — and proves it.",
    relatedProjectSlugs: [],
    teamMemberSlugs: ["noor-abbas"],
    awards: [{ title: "Best Paid Social Campaign", issuer: "Regional Digital Awards", year: 2024 }],
    stats: [
      { label: "Campaigns Managed", value: 70, suffix: "+" },
      { label: "Avg. Return on Ad Spend", value: 4, suffix: "x" },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    icon: "MessagesSquare",
    summary: "Posts, videos, and a consistent presence across Instagram, TikTok, and Facebook.",
    description:
      "We plan and create the day-to-day content that keeps your brand active and recognizable — posts, short-form video, and community management — so your social presence stays consistent without it being one more thing on your plate.",
    included: [
      "Content calendar and platform strategy",
      "Post and short-form video creation",
      "Community management and engagement",
      "Monthly performance reporting",
    ],
    heroHeadline: "A social presence that stays consistent, without it being your job.",
    relatedProjectSlugs: [],
    teamMemberSlugs: ["noor-abbas"],
    awards: [],
    stats: [
      { label: "Posts Published Monthly", value: 400, suffix: "+" },
      { label: "Avg. Engagement Growth", value: 65, suffix: "%" },
    ],
  },
  {
    slug: "content-email-marketing",
    title: "Content & Email Marketing",
    icon: "Newspaper",
    summary: "Blogs, newsletters, and automated emails that keep buyers interested.",
    description:
      "We write the content that keeps your audience engaged between purchases — helpful blog posts, regular newsletters, and automated email sequences that stay useful instead of feeling like spam.",
    included: [
      "Blog and long-form content writing",
      "Newsletter design and copywriting",
      "Automated email sequences",
      "Open-rate and engagement reporting",
    ],
    heroHeadline: "Content that keeps buyers interested long after the first visit.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    awards: [],
    stats: [
      { label: "Emails Sent Monthly", value: 50000, suffix: "+" },
      { label: "Avg. Open Rate", value: 38, suffix: "%" },
    ],
  },
  {
    slug: "business-setup-advisory",
    title: "UAE Business Setup & Advisory",
    icon: "Landmark",
    summary: "Strategic advisory for your UAE market entry — structured for stability, planned for the long term.",
    description:
      "We simplify the decision, then execute it. From company incorporation to residency pathways and regulatory compliance, DSD helps businesses and entrepreneurs enter the UAE market with a plan grounded in current regulations, real data, and market conditions — not guesswork.",
    included: [
      "Company incorporation and UAE market-entry strategy",
      "Residency solutions — property, business, employment, and family sponsorship pathways",
      "Compliance and regulatory governance",
      "Ongoing structuring for long-term operational stability",
    ],
    heroHeadline: "Strategic advisory for your UAE company, setup entry and residency",
    relatedProjectSlugs: [],
    teamMemberSlugs: ["layla-haddad"],
    awards: [],
    stats: [
      { label: "Entities Formed", value: 30, suffix: "+" },
      { label: "Emirates Covered", value: 7 },
    ],
  },
];
