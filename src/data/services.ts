import type { Service, ServiceCategory } from "@/types";

// 20 offerings across 6 categories (restructured 2026-08-27 — see progress-tracker.md for the
// removal of the prior corporate-consulting/business-setup services and the Digital
// Graphiks-referenced category restructure). `icon` is a lucide-react icon name, resolved to a
// component via the lookup map in ServiceCard — see library-docs.md.
//
// `relatedProjectSlugs`/`teamMemberSlugs` are curated cross-references (into projects.ts /
// team.ts), not a derived category mapping. Several new services intentionally have an empty
// `relatedProjectSlugs` or `teamMemberSlugs` — no honest portfolio/team example fits yet.
// ServiceDetailPage hides each section entirely rather than padding it — never fabricate a
// reference to make a section non-empty.
//
// `stats` is PLACEHOLDER DATA (see progress-tracker.md -> Known Gaps) — replace with real
// numbers before launch. The Awards & Achievements section (and its `ServiceAward` type) was
// removed 2026-08-27, not left as an empty/placeholder field — see progress-tracker.md.
export const serviceCategoryMeta: { slug: ServiceCategory; label: string }[] = [
  { slug: "digital-marketing", label: "Digital Marketing" },
  { slug: "web-development", label: "Web Development" },
  { slug: "design-branding", label: "Design & Branding" },
  { slug: "mobile-app-development", label: "Mobile App Development" },
  { slug: "ecommerce-development", label: "Ecommerce Development" },
  { slug: "smart-ai-services", label: "Smart AI Services" },
];

export const services: Service[] = [
  // ---------------------------------------------------------------------------------------
  // Digital Marketing
  // ---------------------------------------------------------------------------------------
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    category: "digital-marketing",
    icon: "Search",
    summary: "Technical and content SEO that gets your business found on search engines.",
    description:
      "We audit, fix, and continuously improve your site's technical SEO health and content strategy, precisely targeting the searches your customers are already making — so ranking gains show up where they actually matter: in traffic and enquiries.",
    included: [
      "Full technical SEO audit",
      "On-page and content optimization",
      "Keyword and competitor research",
      "Ongoing ranking and traffic reporting",
    ],
    heroHeadline: "Get found by the customers already searching for you.",
    relatedProjectSlugs: ["coastal-dental-seo", "atlas-logistics-seo"],
    teamMemberSlugs: ["sara-ibrahim"],
    stats: [
      { label: "Avg. Organic Traffic Growth", value: 140, suffix: "%" },
      { label: "Campaigns Run", value: 45, suffix: "+" },
      { label: "Keywords Ranked #1-3", value: 300, suffix: "+" },
    ],
  },
  {
    slug: "paid-advertising-ppc",
    title: "Paid Advertising (PPC)",
    category: "digital-marketing",
    icon: "Megaphone",
    summary: "Targeted, budget-controlled ads that bring in fast traffic and customers.",
    description:
      "We plan, launch, and optimize pay-per-click campaigns across search, display, and social — Google Ads and the platforms your customers actually use — with precise budget control and clear reporting on what your ad spend is actually delivering.",
    included: [
      "Platform and audience strategy",
      "Ad creative and copywriting",
      "Budget-controlled campaign management",
      "Transparent performance reporting",
    ],
    heroHeadline: "Ad spend that earns its keep — and proves it.",
    relatedProjectSlugs: [],
    teamMemberSlugs: ["noor-abbas"],
    stats: [
      { label: "Campaigns Managed", value: 70, suffix: "+" },
      { label: "Avg. Return on Ad Spend", value: 4, suffix: "x" },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    category: "digital-marketing",
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
    stats: [
      { label: "Posts Published Monthly", value: 400, suffix: "+" },
      { label: "Avg. Engagement Growth", value: 65, suffix: "%" },
    ],
  },
  {
    slug: "content-email-marketing",
    title: "Content & Email Marketing",
    category: "digital-marketing",
    icon: "Newspaper",
    summary: "Blogs, newsletters, and automated emails that keep buyers interested.",
    description:
      "We write the content that keeps your audience engaged between purchases — helpful blog posts, regular newsletters, and automated email sequences precisely sequenced to a real buying journey, not a generic drip.",
    included: [
      "Blog and long-form content writing",
      "Newsletter design and copywriting",
      "Automated email sequences",
      "Open-rate and engagement reporting",
    ],
    heroHeadline: "Content that keeps buyers interested long after the first visit.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "Emails Sent Monthly", value: 50000, suffix: "+" },
      { label: "Avg. Open Rate", value: 38, suffix: "%" },
    ],
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    category: "digital-marketing",
    icon: "Share2",
    summary: "Creator partnerships that put your brand in front of an audience that already trusts them.",
    description:
      "We identify and manage creator partnerships matched to your actual audience — not follower count alone — from outreach and briefing through to content approval and performance reporting, so every collaboration earns its budget.",
    included: [
      "Creator research and audience-fit vetting",
      "Outreach, briefing, and negotiation",
      "Content approval and campaign coordination",
      "Reach, engagement, and conversion reporting",
    ],
    heroHeadline: "Reach an audience that already trusts the person talking about you.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "Creator Partnerships Run", value: 35, suffix: "+" },
      { label: "Avg. Campaign Reach", value: 250000, suffix: "+" },
    ],
  },

  // ---------------------------------------------------------------------------------------
  // Web Development
  // ---------------------------------------------------------------------------------------
  {
    slug: "website-development",
    title: "Website Development",
    category: "web-development",
    icon: "Globe",
    summary: "Fast, responsive, brand-consistent websites built to convert visitors into customers.",
    description:
      "We design and build custom websites from the ground up — no bloated page-builder templates. Every site is engineered for speed, accessibility, and a clear conversion path, matched to your brand from the first pixel.",
    included: [
      "Custom design matched to your brand identity",
      "Fully responsive across mobile, tablet, and desktop",
      "Optimized for fast load times and search engines",
      "Content management handover, so you can update it yourself",
    ],
    heroHeadline: "Websites engineered to convert, not just to impress.",
    relatedProjectSlugs: ["meridian-retail-storefront", "horizon-realty-website"],
    teamMemberSlugs: ["fatima-noor", "marco-rossi"],
    stats: [
      { label: "Websites Launched", value: 60, suffix: "+" },
      { label: "Client Retention", value: 92, suffix: "%" },
      { label: "Avg. Support Response", value: 24, suffix: "h" },
    ],
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    category: "web-development",
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
    stats: [
      { label: "Applications Shipped", value: 25, suffix: "+" },
      { label: "Uptime", value: 99, suffix: "%" },
      { label: "Avg. Delivery Time", value: 10, suffix: " wks" },
    ],
  },
  {
    slug: "custom-system-development",
    title: "Custom System Development",
    category: "web-development",
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
    stats: [
      { label: "Systems Delivered", value: 18, suffix: "+" },
      { label: "Client Retention", value: 95, suffix: "%" },
    ],
  },
  {
    slug: "website-hosting",
    title: "Website Hosting",
    category: "web-development",
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
    stats: [
      { label: "Sites Hosted", value: 80, suffix: "+" },
      { label: "Monitored Uptime", value: 99, suffix: "%" },
      { label: "Avg. Incident Response", value: 15, suffix: " min" },
    ],
  },

  // ---------------------------------------------------------------------------------------
  // Design & Branding
  // ---------------------------------------------------------------------------------------
  {
    slug: "logo-design",
    title: "Logo Design",
    category: "design-branding",
    icon: "PenTool",
    summary: "A distinct mark built to work everywhere your brand shows up.",
    description:
      "We design logos that hold up at every size and on every surface — app icon, signage, a business card — starting from a real brief on who you are and who you're trying to reach, not a stock template with your name dropped in.",
    included: [
      "Discovery on your brand, audience, and competitors",
      "Multiple distinct concept directions",
      "Refinement rounds on your chosen direction",
      "Final files in every format you need (vector, PNG, favicon-ready)",
    ],
    heroHeadline: "A mark that's actually yours, not a template with your name on it.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "Logos Delivered", value: 40, suffix: "+" },
      { label: "Concept Directions per Brief", value: 3 },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "design-branding",
    icon: "Palette",
    summary: "Interfaces designed around how people actually use them.",
    description:
      "We design the screens and flows behind your website or app — wireframes, visual design, and interaction detail — validated against real user behavior, not just made to look good in a mockup.",
    included: [
      "User flow mapping and wireframing",
      "Full visual design system (color, type, components)",
      "Interactive prototypes for stakeholder review",
      "Developer-ready handoff files",
    ],
    heroHeadline: "Interfaces people actually enjoy using, not just look at.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "Interfaces Designed", value: 30, suffix: "+" },
      { label: "Avg. Revision Rounds", value: 2 },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "design-branding",
    icon: "Brush",
    summary: "Social posts, ads, and print material that stay on-brand every time.",
    description:
      "From social media graphics to print collateral, we produce visual assets that stay consistent with your brand system — so every post, ad, and flyer looks like it came from the same company.",
    included: [
      "Social media post and story templates",
      "Digital and print ad creative",
      "Brochure, flyer, and presentation design",
      "Brand-consistent asset library for your team",
    ],
    heroHeadline: "On-brand, every post — not just the first one.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "Assets Produced Monthly", value: 60, suffix: "+" },
    ],
  },
  {
    slug: "video-motion-animation",
    title: "Video & Motion Animation",
    category: "design-branding",
    icon: "Clapperboard",
    summary: "Short-form video and motion graphics that hold attention in a crowded feed.",
    description:
      "We produce short-form video, explainer animation, and motion graphics built for how people actually watch — the first two seconds decide whether they keep watching, so we design for that first.",
    included: [
      "Scripting and storyboarding",
      "Motion graphics and short-form video editing",
      "Platform-specific formatting (Reels, TikTok, YouTube)",
      "Captioning and accessibility pass",
    ],
    heroHeadline: "Built to hold attention in the first two seconds, not just look good after that.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "Videos Produced", value: 90, suffix: "+" },
      { label: "Avg. Turnaround", value: 5, suffix: " days" },
    ],
  },

  // ---------------------------------------------------------------------------------------
  // Mobile App Development
  // ---------------------------------------------------------------------------------------
  {
    slug: "ios-app-development",
    title: "iOS App Development",
    category: "mobile-app-development",
    icon: "Apple",
    summary: "Native-feeling iOS apps built for App Store approval and real-world reliability.",
    description:
      "We build iOS apps that feel native — smooth, responsive, and consistent with Apple's own design conventions — from initial scoping through App Store submission and post-launch support.",
    included: [
      "Feature scoping and technical planning",
      "Native-feeling UI matched to iOS design conventions",
      "App Store submission and approval support",
      "Post-launch monitoring and updates",
    ],
    heroHeadline: "An iOS app that feels like it belongs on the platform.",
    relatedProjectSlugs: ["kss-e-voting-app", "title-plz"],
    teamMemberSlugs: [],
    stats: [
      { label: "iOS Apps Shipped", value: 12, suffix: "+" },
      { label: "Avg. App Store Rating", value: 4.7 },
    ],
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    category: "mobile-app-development",
    icon: "Smartphone",
    summary: "Android apps built to perform consistently across a wide range of real devices.",
    description:
      "Android's device diversity is the real challenge — we build and test across the screen sizes and hardware tiers your users actually have, not just a single reference device.",
    included: [
      "Feature scoping and technical planning",
      "Testing across a real device/screen-size spread",
      "Google Play submission support",
      "Post-launch monitoring and updates",
    ],
    heroHeadline: "Built and tested for the devices your users actually carry.",
    relatedProjectSlugs: ["kss-e-voting-app", "quiz-hub-app"],
    teamMemberSlugs: [],
    stats: [
      { label: "Android Apps Shipped", value: 14, suffix: "+" },
      { label: "Avg. App Store Rating", value: 4.6 },
    ],
  },
  {
    slug: "cross-platform-app-development",
    title: "Cross-Platform App Development",
    category: "mobile-app-development",
    icon: "Layers",
    summary: "One codebase, shipped natively to both iOS and Android — with Flutter or React Native.",
    description:
      "When two separate native builds isn't the right tradeoff for your budget or timeline, we ship one codebase to both platforms — with Flutter or React Native, chosen on the specifics of your project, not a one-size-fits-all default.",
    included: [
      "Framework choice matched to your project's needs",
      "Single codebase, native builds for iOS and Android",
      "Shared business logic, platform-appropriate UI",
      "Both App Store and Google Play submission support",
    ],
    heroHeadline: "One build. Both platforms. No duplicated engineering effort.",
    relatedProjectSlugs: ["quiz-hub-app", "title-plz"],
    teamMemberSlugs: [],
    stats: [
      { label: "Cross-Platform Apps Shipped", value: 16, suffix: "+" },
      { label: "Engineering Time Saved", value: 40, suffix: "%" },
    ],
  },

  // ---------------------------------------------------------------------------------------
  // Ecommerce Development
  // ---------------------------------------------------------------------------------------
  {
    slug: "shopify-store-development",
    title: "Shopify Store Development",
    category: "ecommerce-development",
    icon: "Store",
    summary: "A Shopify storefront built to convert, not just a default theme with your logo on it.",
    description:
      "We build and customize Shopify stores around your actual product catalog and checkout flow — theme customization, app integration, and performance tuning — so the store converts, not just exists.",
    included: [
      "Custom theme setup and storefront design",
      "Product catalog and collection structure",
      "Payment gateway and app integrations",
      "Speed and mobile checkout optimization",
    ],
    heroHeadline: "A storefront built to convert, not a theme with your logo on it.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "Stores Launched", value: 15, suffix: "+" },
      { label: "Avg. Checkout Load Time", value: 2, suffix: "s" },
    ],
  },
  {
    slug: "custom-ecommerce-solutions",
    title: "Custom Ecommerce Solutions",
    category: "ecommerce-development",
    icon: "ShoppingCart",
    summary: "A fully custom storefront when an off-the-shelf platform doesn't fit your catalog.",
    description:
      "When your product complexity, inventory logic, or integrations outgrow a template platform, we build a custom storefront around your actual catalog, pricing rules, and fulfillment workflow.",
    included: [
      "Custom catalog, pricing, and inventory logic",
      "Secure checkout and payment integration",
      "Order management and fulfillment workflow",
      "Admin dashboard for day-to-day operations",
    ],
    heroHeadline: "Built around your catalog, not the other way around.",
    relatedProjectSlugs: ["minify-gadgets"],
    teamMemberSlugs: [],
    stats: [
      { label: "Ecommerce Platforms Built", value: 9, suffix: "+" },
      { label: "Avg. Cart Conversion Lift", value: 22, suffix: "%" },
    ],
  },

  // ---------------------------------------------------------------------------------------
  // Smart AI Services
  // ---------------------------------------------------------------------------------------
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    category: "smart-ai-services",
    icon: "Bot",
    summary: "A chatbot trained on your own content, handling real questions — not scripted dead ends.",
    description:
      "We build chatbots grounded in your own product, FAQ, and support content, so visitors get real answers instead of a rigid decision tree — with a clear handoff to a human when the conversation needs one.",
    included: [
      "Chatbot trained on your own content and FAQs",
      "Website and messaging-platform integration",
      "Human handoff for conversations it can't resolve",
      "Conversation analytics and ongoing tuning",
    ],
    heroHeadline: "Real answers, not a scripted decision tree.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "Chatbots Deployed", value: 6, suffix: "+" },
      { label: "Avg. Query Resolution Rate", value: 78, suffix: "%" },
    ],
  },
  {
    slug: "generative-ai-integration",
    title: "Generative AI Integration",
    category: "smart-ai-services",
    icon: "Sparkles",
    summary: "AI features built into your product — content generation, summarization, and search.",
    description:
      "We integrate generative AI directly into your website or app — content generation, document summarization, or intelligent search — scoped to a real workflow it actually improves, not added for its own sake.",
    included: [
      "Use-case scoping around a real workflow",
      "Integration with your existing website or app",
      "Prompt design and output quality tuning",
      "Usage monitoring and cost controls",
    ],
    heroHeadline: "AI built into your product where it actually helps, not bolted on for its own sake.",
    relatedProjectSlugs: [],
    teamMemberSlugs: [],
    stats: [
      { label: "AI Integrations Delivered", value: 5, suffix: "+" },
    ],
  },
];
