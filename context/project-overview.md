# Project Overview

## About the Project

**DSD** is a digital marketing agency headquartered in Dubai, United Arab Emirates — an external team of specialists that helps businesses grow their brand, connect with customers, and increase sales using online platforms, search engines, and digital tools. This repository is the agency's own **marketing website** — a fast, static, single-page application built to present DSD's services, showcase its portfolio of client work, and let prospective clients start a conversation.

**Agency details:**

| | |
| --- | --- |
| Name | DSD |
| Address | Office No. 1, 1st Floor, Al Hareb Building, Umm Hurair Road, Oud Metha, P.O. Box 181040, Dubai, United Arab Emirates |
| Phone | +91 7585889093 |
| Email | info@dsdgrp.com |

DSD's core offering maps onto five foundational digital marketing categories — **SEO** (getting a site found on search engines), **Social Media Management** (organic content and community presence), **Paid Advertising / PPC** (budget-controlled ads for fast traffic), **Web Design** (fast, mobile-friendly websites — DSD's **Website Development** service), and **Content & Email Marketing** (blogs, newsletters, and automated emails) — plus DSD's own differentiated additions: **Web App Development**, **Custom System Development**, **Corporate Business Consulting**, **Website Hosting**, and **UAE Business Setup & Advisory** (company incorporation, residency pathways, and regulatory compliance — added 2026-08-26, its voice and category structure adapted from [emiracle.ae](https://emiracle.ae), a UAE business-setup advisory firm, per explicit request; see `progress-tracker.md`). 10 services total.

---

## The Problem It Solves

A prospective client evaluating a digital agency needs to answer three questions fast: *What do they actually build? Have they built anything like mine before? How do I reach them?* Most agency sites bury this behind vague copy and a generic contact form. This site answers all three directly — a clear service breakdown, a browsable portfolio with **live previews, GitHub links, and screenshots** organized by discipline (Web Development, SEO, DevOps, Mobile App Development), and a contact form that reaches the agency's inbox in one step.

The site itself is also a demonstration of the agency's own capability — its build quality, motion polish, and responsiveness are themselves part of the pitch.

---

## Target Audience

- **Prospective clients** — business owners and decision-makers evaluating DSD to build, market, host, or advertise their business online. They browse services, inspect real project work (with functioning live links, not just screenshots), and reach out via the contact form.
- **DSD's own team** — maintains the site's content (services, portfolio, testimonials) directly in code and redeploys; there is no admin dashboard or CMS (see Features Out of Scope) — a deliberate scope decision for a static marketing site with a small, technical content owner.

There are no user accounts, logins, or roles anywhere on this site — every visitor sees the same public content.

---

## Pages

```
/                                        → Home — hero, services overview, stats, about teaser,
                                            featured projects, testimonials, contact CTA
/about                                   → About DSD — story, mission, founder, why-choose-us,
                                            Dubai office
/services                                → Full service list (all 8 offerings, detailed) + a
                                            team carousel (10 members) further down the page
/services/:slug                          → Service detail — hero, Hire Us / View Pricing CTAs,
                                            per-service stats, related projects, team members,
                                            awards & achievements
/team/:slug                              → Team member detail — photo, name, role, full bio,
                                            contact links
/projects                                → Portfolio — filterable by category (Web Development /
                                            SEO / DevOps / Mobile App Development)
/projects/:slug                          → Project detail — screenshots, live preview link, GitHub
                                            link, description, functionalities, similar projects
/pricing                                 → Pricing — illustrative tiers, every CTA leads to
                                            /contact (no checkout — see Features Out of Scope)
/contact                                 → Contact form (name, email, subject, message) + office
                                            info (address, phone, email)
/cookie-policy, /privacy-policy,
/website-disclaimer                      → Legal boilerplate (placeholder — see
                                            progress-tracker.md), footer-only, not in the main nav
/partner-with-us                         → Short marketing page for referral partners, footer-only
*                                        → 404 Not Found
```

No route requires authentication — the whole site is public.

---

## Navigation

Top utility bar (desktop only): a short tagline on the left, phone + email + social icons on the right — matches the reference template's utility strip.

Main nav (sticky on scroll): **Logo** · Home · About · **Services** (dropdown — links to each of the 8 services' own detail page, `/services/:slug`, plus "Meet the Team" → `/services#team`) · Projects · Pricing · Contact · a standalone **Contact Us** button (accent-colored, always visible — the one persistent call-to-action). Services is the only dropdown — it's the one item with genuinely many children; every other item is a flat single link.

Mobile: main nav collapses into a slide-in drawer (a custom `framer-motion` panel) containing the same links stacked, plus the Contact Us button. The Services dropdown becomes a tap-to-expand accordion (a hover panel doesn't translate to touch).

Footer (every page): logo + one-line agency description, **Quick Links** column (Home/About/Services/Projects/Pricing/Contact), **Services** column (all 8 offerings, each linking to its own `/services/:slug` page), **Contact** column (address, phone, email, social icons), bottom bar with copyright plus a legal link row (Cookie Policy / Privacy Policy / Partner With Us / Website Disclaimer).

---

## Core User Flow

### Visitor Journey

1. Lands on **Home** — sees the hero (headline + subheadline + CTA over a background photo), a quick-glance services strip, and stat counters (projects delivered, clients served, years active, awards).
2. Scrolls to **Featured Projects** — a handful of portfolio highlights pulled from the same data source as the full `/projects` page.
3. Reads **Testimonials** for social proof, then hits the closing **CTA section** ("Ready to grow your business?") linking to `/contact`.
4. Optionally visits **/services** for the full breakdown of what DSD offers (via the nav's Services dropdown, which links straight to any of the 8 offerings or to the team carousel further down the same page), or **/projects** to filter the whole portfolio by category and open individual project detail pages.
5. On a **project detail page**, the visitor can open the project's **live preview** in a new tab, open its **GitHub repository** in a new tab, browse its **screenshots**, read its functionality list, and see **similar projects** (same category) linked below.
6. On **/services**, scrolling to the **team carousel** and clicking a member opens their **/team/:slug** detail page (full bio, contact links); an unrecognized slug redirects back to the carousel rather than showing a broken page.
7. Optionally visits **/about** to read DSD's story and meet the founder, or **/pricing** to see illustrative starting-point tiers — every tier's CTA leads to **/contact**, since this site has no checkout.
8. Reaches **/contact**, fills in name/email/subject/message, submits. Client-side validation (zod + react-hook-form) catches problems inline before anything is sent. On submit, the message is emailed to `info@dsdgrp.com` and the visitor sees a success toast; a failure shows an error toast and never silently fails.

### Content Maintenance (DSD's own workflow)

- Services, portfolio projects, testimonials, and stats are all **static TypeScript data files** (`src/data/*.ts`) — there is no database and no admin UI. Adding a new project means adding an entry (plus its screenshots in `src/assets/`) and redeploying.
- This is a deliberate trade-off for a small, fast, fully static site with no ongoing hosting cost for a backend — documented in `architecture.md`.

---

## Features In Scope

- Fully static, responsive marketing site (mobile/tablet/desktop)
- Home page: hero, services overview, stats counters, about teaser, featured projects, testimonials, closing CTA
- Full Services page — all 8 offerings with descriptions, plus a 10-person team carousel
- Service detail pages (`/services/:slug`) — hero, Hire Us / View Pricing CTAs, per-service stats, related portfolio projects, team members, awards & achievements
- Team member detail pages (`/team/:slug`) — photo, role, full bio, contact links
- Portfolio (`/projects`) filterable by category: Web Development, SEO, DevOps, Mobile App Development
- Project detail pages: screenshot gallery, live preview link, GitHub repository link, description, feature/functionality list, similar/related projects
- About page — agency story, mission, a founder spotlight section, Dubai office details
- Pricing page — illustrative tiers, every CTA leading to Contact (no checkout)
- Contact page — validated contact form (name, email, subject, message) that emails the agency directly (no backend server), plus office address/phone/email
- Dropdown navigation on "Services" (desktop hover panel, mobile accordion) — the only nav item with a dropdown
- Legal / utility pages (Cookie Policy, Privacy Policy, Partner With Us, Website Disclaimer) — footer-only, placeholder boilerplate pending legal review
- Corporate motion design throughout via framer-motion (page transitions, scroll-triggered reveals, stat count-ups, hover states)
- Brand-consistent styling — red/blue/white palette sourced from the DSD logo (`public/dsd_logo.png`) applied via design tokens, never hardcoded
- 404 page

## Features Out of Scope

- User accounts, authentication, or roles of any kind
- Admin dashboard / CMS for editing content without a code change
- Backend server, database, or API of any kind — the site is fully static
- Payments or e-commerce
- Blog / articles system
- Multi-language UI
- Live chat / messaging widget
- Client project management portal (this site markets DSD's work — it is not the delivery platform for that work)

---

## Success Criteria

- A visitor can understand DSD's full service offering without leaving the site.
- A visitor can browse real portfolio work, filter it by category, and open a working live preview and GitHub link for any project that has one.
- A visitor can submit the contact form and have their message actually land in DSD's inbox (`info@dsdgrp.com`), with clear success/error feedback and no silent failures.
- The site is visually consistent with DSD's brand (red/blue/white, per the logo) on every page, in both structure and motion.
- The site loads fast and works correctly with no backend — a static build deployable to any static host (e.g. Vercel, matching the reference `dsd-client.vercel.app` deployment).
- Layout rhythm (hero → quick strip → services → stats → about → testimonials → contact → footer) matches the structure of the reference design (`context/designs/layout.jpg`, the TemplateMo Finance Business template) adapted to DSD's own red/blue/white identity and content.

---

## Design References

- **Layout & section rhythm:** `context/designs/layout.jpg` — a full-page capture of the [TemplateMo Finance Business](https://templatemo.com/live/templatemo_545_finance_business) template. Use this for section order, card layout, spacing rhythm, and component shapes (hero carousel, 3-up service cards, dark stat-counter strip, split about section, testimonial cards, contact form band, multi-column footer). Do **not** copy its green accent color or its stock photography — those are replaced by DSD's own red/blue/white brand and photography.
- **Brand colors:** `public/dsd_logo.png` — the DSD mark's red, navy blue, and white define the entire palette (see `ui-tokens.md`).
- **Live brand/content reference:** [dsd-client.vercel.app](https://dsd-client.vercel.app/) — an existing DSD-branded deployment; use it as a secondary reference for tone, photography style, and hero imagery. It is a client-rendered SPA that automated tooling could not scrape for exact colors/copy during this planning pass — cross-check it manually in a browser before finalizing hero imagery and any copy lifted from it.
- **Voice reference (Hero + the UAE Business Setup & Advisory service):** [emiracle.ae](https://emiracle.ae) — a UAE business-setup/residency advisory firm. Its confident, results-oriented, "simplify the decision, then execute it" copywriting style is adapted into DSD's own Hero headline/subheadline and the new 8th service's copy — the *style* was adapted, not Emiracle's own client-count/years-in-market numbers, which belong to them, not DSD. See `progress-tracker.md` for the full reasoning.
