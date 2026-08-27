# Architecture

## Stack

| Layer | Tool | Purpose |
| --- | --- | --- |
| Frontend framework | React 19 + Vite + TypeScript | SPA build tool and UI runtime — fully static output, no server runtime |
| Routing | react-router-dom | Client-side route tree (`/`, `/about`, `/services`, `/projects`, `/projects/:slug`, `/contact`, `*`) |
| Utility styling | Tailwind CSS v4 (CSS-first `@theme`) | Layout, spacing, responsive breakpoints, one-off utility classes |
| Component library | MUI Joy UI (`@mui/joy`) | Buttons, inputs, modals/drawers, tabs, chips |
| Motion | framer-motion | Page transitions, scroll-triggered reveals, stat count-ups, hover/tap micro-interactions |
| Icons | lucide-react | All iconography |
| Toasts | react-toastify | Contact form success/error feedback |
| Forms | react-hook-form + zod (`@hookform/resolvers/zod`) | Contact form state, validation schema, and resolver |
| Email delivery | EmailJS (`@emailjs/browser`) | Sends the contact form directly from the browser to `info@dsdgrp.com` — no backend server exists, so this is the mechanism that fulfills "clients contact the agency via email" without standing up an API |
| Fonts | Plus Jakarta Sans (display/headings), Inter (body), Geist Mono (accents) | Loaded via `@fontsource/*` or Google Fonts `<link>`, see `ui-tokens.md` |
| Deployment | Static hosting (e.g. Vercel) | `vite build` output is a static bundle — no server process to run or manage |

**There is no backend in this project.** No Node/Express/Django server, no database, no auth. This is a deliberate architectural decision driven by the product itself (`project-overview.md` → Features Out of Scope): the site has no user accounts and no data that needs server-side persistence — every piece of content (services, projects, testimonials, stats) is static and ships in the JS bundle, and the one piece of "write" behavior (a visitor's contact message) is handled by a client-only email API instead of a custom API route.

---

## Repository Layout

```
/
├── Agents.md / CLAUDE.md
├── context/
│   ├── designs/
│   │   └── layout.jpg                       → TemplateMo Finance Business reference capture
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-tokens.md
│   ├── ui-rules.md
│   ├── ui-registry.md
│   ├── code-standards.md
│   ├── library-docs.md
│   ├── build-plan.md
│   └── progress-tracker.md
├── public/
│   ├── dsd_logo.png                         → source of the red/blue/white brand palette
│   └── favicon / og-image (added as built)
├── src/
│   ├── main.tsx                             → CssVarsProvider + ToastContainer + RouterProvider mount
│   ├── App.tsx                              → route-level layout wrapper (Navbar + <Outlet/> + Footer)
│   ├── router.tsx                           → route tree (react-router-dom)
│   ├── index.css                            → Tailwind v4 `@theme inline` block, light/dark theme tokens,
│   │                                            fonts, global base styles — imported once by main.tsx
│   ├── theme/
│   │   ├── tokens.ts                        → literal-hex mirror of index.css's tokens, for JS-only contexts
│   │   ├── theme.ts                         → light/dark toggle logic (see ui-tokens.md → Theme Toggle)
│   │   └── joyTheme.ts                      → extendTheme() built from the same CSS variables
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── geist-mono/                  → Geist Mono variable woff2 (copied from the `geist` package)
│   │   ├── images/
│   │   │   ├── hero/                        → landing page hero background (real photo, home_hero_bg.png)
│   │   │   ├── about/                       → about page imagery (placeholder graphic)
│   │   │   ├── projects/{project-slug}/     → each project's screenshots, one folder per project
│   │   │   ├── testimonials/                → avatar images
│   │   │   └── team/                        → team member + founder photos
│   │   └── brand/                           → any exported/cropped logo variants
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                   → utility bar + main nav (dropdown-capable) + mobile drawer
│   │   │   └── Footer.tsx
│   │   ├── common/                          → CtaButton, ThemeToggle, SocialIcon, SectionHeading,
│   │   │                                        StatCounter, ServiceCard, ProjectCard, TestimonialCard,
│   │   │                                        TeamMemberCard
│   │   └── sections/                        → composed page-level section blocks — originally Home-only,
│   │                                            broadened once TeamCarousel shipped on /services (Hero,
│   │                                            CtaStrip, ServicesOverview, StatsStrip, AboutTeaser,
│   │                                            FeaturedProjects, Testimonials, ClosingCta, TeamCarousel)
│   ├── data/                                → static content — the site's only "data layer"
│   │   ├── services.ts                      → 8 offerings (see project-overview.md)
│   │   ├── projects.ts
│   │   ├── testimonials.ts
│   │   ├── stats.ts
│   │   ├── team.ts                          → 10 team members
│   │   ├── founder.ts                       → 1 founder profile (About page)
│   │   └── pricing.ts                       → 3 pricing tiers
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx                 → full service grid + TeamCarousel
│   │   ├── ProjectsPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── TeamMemberDetailPage.tsx          → /team/:slug
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── lib/
│   │   ├── email.ts                         → EmailJS send wrapper
│   │   ├── validation/contactSchema.ts      → zod schema for the contact form
│   │   ├── icons.ts                         → Service.icon (string) → lucide-react component map
│   │   └── utils.ts                         → shared helpers (badgeColorAt, etc.)
│   └── types/
│       └── index.ts                         → Service, Project, Testimonial, Stat, TeamMember, Founder,
│                                                PricingTier types
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── eslint.config.js
└── package.json
```

There is no `client/` or `server/` split — this repository *is* the frontend, at the project root.

---

## System Boundaries

| Folder | Owns |
| --- | --- |
| `src/pages/` | Route-level components. Compose sections/common components; may read `src/data/`; never define new content inline that belongs in `data/`. |
| `src/components/sections/` | Composed, page-level section blocks (not limited to Home — e.g. `TeamCarousel` mounts on `/services`). No direct data fetching (there is none) — receive data as props or import directly from `src/data/`. |
| `src/components/common/` | Reusable presentational building blocks used across ≥2 pages. |
| `src/components/layout/` | Navbar/Footer only — the two chrome elements present on every page. |
| `src/data/` | The single source of truth for all site content (services, projects, testimonials, stats). Typed against `src/types/index.ts`. |
| `src/theme/` | The only place raw color/spacing/radius values are allowed to exist. |
| `src/lib/` | EmailJS wrapper, validation schemas, pure utility functions — no UI. |

---

## Data Flow

Since there is no backend, "data flow" here means **how static content reaches the screen** and **how the one write operation (a contact message) leaves the browser**.

### Static Content Rendering (services, projects, testimonials, stats)

```
src/data/*.ts (typed arrays, hand-authored)
        ↓ imported directly
Page / section component (e.g. ProjectsPage, FeaturedProjects)
        ↓ .map() over the array
Presentational component (ServiceCard, ProjectCard, TestimonialCard)
        ↓
Rendered UI — no loading state, no error state, no network round trip
```

### Portfolio Filtering (`/projects`)

```
ProjectsPage local state: selectedCategory ("all" | "web-development" | "seo" | "devops" | "mobile-app-development")
        ↓
projects.filter(p => selectedCategory === "all" || p.category === selectedCategory)
        ↓
framer-motion <AnimatePresence> / layout animation on the filtered grid
        ↓
ProjectCard[] re-render — no route change, no data fetch
```

### Project Detail (`/projects/:slug`)

```
useParams<{ slug: string }>()
        ↓
projects.find(p => p.slug === slug)  — not found → <Navigate to="/projects" /> or render NotFoundPage inline
        ↓
ProjectDetailPage renders: screenshot gallery, live-preview link (external <a target="_blank">),
GitHub link (external <a target="_blank">), description, functionality list
        ↓
"Similar Projects" = projects.filter(p => p.category === current.category && p.slug !== current.slug).slice(0, 3)
```

### Contact Form Submission (the one place data leaves the browser)

```
ContactPage — react-hook-form, resolver: zodResolver(contactSchema)
        ↓ client-side validation (name/email/subject/message — see library-docs.md)
        ↓ onSubmit (only reached once valid)
emailjs.send(serviceId, templateId, formValues, publicKey)  — lib/email.ts
        ↓ success → toast.success(...), form reset
        ↓ failure → toast.error(...), form values preserved so the visitor doesn't retype
```

No request ever goes to a DSD-owned server — EmailJS relays the message directly from the visitor's browser to the configured email template/recipient. `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` are Vite env vars (`import.meta.env`), never hardcoded — see `code-standards.md` → Environment Variables.

---

## Environment Configuration

| Concern | Value |
| --- | --- |
| Env file | `.env.local` (dev, gitignored) / hosting provider's env panel (prod) |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template identifier (must render to `info@dsdgrp.com`) |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key (safe to ship client-side by EmailJS's own design — it is not a secret the way a server API key is) |
| Build | `vite build` → static `dist/` |
| Deployment | Any static host; Vercel is the reference target (see `dsd-client.vercel.app`) |

There is no `DJANGO_ENV`-style environment split beyond Vite's own `import.meta.env.DEV`/`PROD` — dev and prod both run the exact same static bundle, just built and served differently.

---

## Invariants

Rules that must never be violated:

- No backend, database, or server-side code is introduced for this project — if a future requirement seems to need one (e.g. a CMS), that is a scope change requiring an explicit decision (see `progress-tracker.md`), not something to quietly add.
- Raw color values and Tailwind's built-in color classes never appear in components — always reference `theme/tokens.ts` (see `ui-tokens.md`).
- The contact form is always validated client-side with zod **before** `emailjs.send()` is ever called — never send an unvalidated payload.
- Every external link (a project's live preview, a project's GitHub link, social icons) opens in a new tab (`target="_blank" rel="noopener noreferrer"`) — the visitor's place on the DSD site is never lost.
- All site content (services, projects, testimonials, stats) lives in `src/data/*.ts`, typed against `src/types/index.ts` — never hardcoded inline in a page or component.
- Project screenshots and hero imagery live under `src/assets/images/`, organized by page/project — never referenced from an arbitrary or undocumented path.
- The EmailJS public key is safe to expose client-side (by design of the service) — but the service/template IDs and key are still read from `import.meta.env`, never hardcoded, so they can be rotated without a code change.
