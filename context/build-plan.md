# Build Plan

## Core Principle

Full page UI built with real static content from the start — there is no "mock vs. real" data distinction on a static site, since `src/data/*.ts` **is** the real data source (see `architecture.md`). Every feature must be visible and testable in the browser before moving to the next. Build the shared shell (Navbar/Footer/tokens) first, since every page depends on it.

---

## Phase 1 — Foundation — done 2026-08-26

### 01 Tooling Setup — done

**Logic:**

- [x] Tailwind CSS v4 (`@tailwindcss/vite` plugin, wired into `vite.config.ts`), `geist` (Geist Mono).
- [x] `@mui/joy` + `@emotion/react`/`@emotion/styled`, `react-router-dom`, `framer-motion`, `lucide-react`, `react-toastify`, `react-hook-form`, `zod` + `@hookform/resolvers`, `@emailjs/browser` — all installed.
- [x] `@/*` path alias added to `tsconfig.app.json` (`paths`, no `baseUrl` — deprecated under this project's TypeScript 6.x) and `vite.config.ts` (`resolve.alias`), needed once real imports started using it.
- A required (non-optional) peer dependency of `geist` auto-installed a full copy of `next` into `node_modules` — never imported anywhere, harmless, but not removable without disabling npm's peer-dep auto-install project-wide (which would mask real peer conflicts elsewhere, e.g. React 19 vs. Joy). Left as a known, documented quirk rather than fought.

### 02 Design Tokens & Theme — done

**Logic:**

- `src/index.css`, `src/theme/tokens.ts`, `src/theme/theme.ts`, `index.html`'s anti-flash script — all as originally planned.
- `src/theme/joyTheme.ts` — built, but **not** as originally sketched. `extendTheme()` throws at construction time if given a `var(--...)` string (`MUI: Unsupported color`) — it decomposes every palette color into RGB channels eagerly. Fixed with **literal hex per theme** (`lightPalette`/`darkPalette` objects) instead of CSS-variable references; `defaultMode="light"` is set once and never toggled, since `colorSchemes.light`/`.dark` are just Joy's required construction-time input, not the real switch. `src/components/common/CtaButton.tsx` was added as the one place that needs the CTA color to actually track the live theme — it wraps Joy's `Button` with an `sx` override pointing at `var(--color-accent)`/`var(--color-accent-dark)` directly. See `library-docs.md` and the 2026-08-26 "joyTheme runtime crash" decision below.

### 03 App Shell — Navbar + Footer + Route Tree — done

**UI:**

- `Navbar`, `Footer`, `App.tsx` (page-transition `AnimatePresence` + hash-aware scroll-to-top), stub pages for every route, `src/router.tsx` — all built.
- `ThemeToggle` (`src/components/common/ThemeToggle.tsx`) — the `Sun`/`Moon` button, added to `Navbar`.
- `SocialIcon.tsx` — lucide-react 1.x ships **no branded social icons** (Facebook/Instagram/Linkedin/Twitter all removed for trademark reasons) — hand-rolled minimal stand-ins instead of adding a new icon-library dependency.

**Logic:**

- `ProjectCard`-shaped click targets (built in Phase 2, but the pattern belongs here): a card can't be a `<Link>`/`<a>` wrapping other real `<a>` tags (invalid HTML, React 19 flags it as a hydration hazard) — use a `div role="link" tabIndex={0} onClick/onKeyDown` instead. Documented so future card-shaped components don't reintroduce it.

### 04 Static Content Data — done

**Logic:**

- `src/types/index.ts`, `src/data/{services,projects,testimonials,stats}.ts` — all built, with **8** services (not 7 — see Phase 8 below) and clearly-labeled placeholder sample data throughout (see `progress-tracker.md` → Known Gaps).

---

## Phase 2 — Home Page — done 2026-08-26

All 5 features (05–09: Hero + CTA Strip, Services Overview, Stats Counter Strip, About Teaser + Featured Projects, Testimonials + Closing CTA) built as originally planned, plus:

- **Hero background** — a real supplied photo (`src/assets/images/hero/home_hero_bg.png`), not the originally-sketched placeholder. The existing navy gradient overlay direction happened to line up well with the photo's own dark-left/photo-content-right composition.
- **`whileInView`/`useInView` sections verified with real scroll-through, not a raw `fullPage` screenshot** — Playwright's full-page capture doesn't reliably trigger IntersectionObserver-based animations the way a real user's scroll does; screenshotting without first scrolling made Services/Stats/Featured Projects/Testimonials look blank/un-animated when they render correctly for actual visitors. Documented so a future verification pass doesn't misdiagnose this as a bug again.

---

## Phase 3 — Services Page — done 2026-08-26

### 10 Full Services Listing — done

All 8 services (see Phase 8) render in a responsive grid with anchor IDs (`scroll-mt-24` so the fixed nav doesn't cover the target) — footer/nav deep links (`/services#seo-optimization`) confirmed working, including scroll-to-hash handling added to `App.tsx`.

---

## Phase 4 — Portfolio — not started

### 11 Projects Listing + Category Filter — done 2026-08-26

**UI + Logic:** `/projects` — filter pill row (`All` / `Web Development` / `SEO` / `DevOps` / `Mobile App Development`), local `selectedCategory` state, filtered grid with `framer-motion` `layout` + `AnimatePresence mode="popLayout"` (cards re-flow and fade rather than hard-cutting on filter change). Reuses `ProjectCard` directly (built in Phase 2), including its `role="link"` click pattern. Selected pill fills solid with the category's own color (`bg-primary`/`bg-success`/`bg-warning`/`bg-accent`) via a small `activeClass` mapping — `categoryTokens`' own `.bg` is a light tint meant for badges, not a filled pill, so this is a deliberate separate mapping to the same tokens, not a duplicate color definition.

### 12 Project Detail Page — done 2026-08-26

**UI + Logic:** `/projects/:slug` — full build: primary screenshot + clickable thumbnail row (local `activeShot` state) for multi-screenshot projects, conditional Live Preview (`ExternalLink`, accent) / View Code (`Code` icon, outlined) buttons — the row itself only renders if at least one URL exists — description, "Key Functionality" checklist, `font-mono` tech-stack pills, and a "Similar Projects" section (same category, up to 3, hidden entirely if none exist, reusing `ProjectCard`).

---

## Phase 5 — About Page — done 2026-08-26

### 13 About Page — done

**UI:** `/about` — header band → "Our Story" (mission copy) → "Why Businesses Choose Us" (3-card value-prop grid: End-to-End Expertise / Transparent Partnership / Built to Grow With You, `whileInView`-staggered) → "Meet the Founder" (built in Phase 8, unchanged) → office block (address/phone/email + a **real, working Google Maps embed** — `https://maps.google.com/maps?q=<office address>&z=15&output=embed` in an `<iframe>`, no API key needed for this basic embed format; verified in a real browser to actually render the correct Dubai neighborhood, not a placeholder graphic).

---

## Phase 6 — Contact — done 2026-08-26

### 14 Contact Form — done

**UI:** `/contact` — two-column form + office-info layout, Joy `FormControl`/`FormLabel`/`Input`/`Textarea`/`FormHelperText` fields (Full Name, Email, Subject, Message), inline validation errors, `CtaButton` submit with Joy's `loading` state bound to `isSubmitting` (also `disabled` while submitting, so a double-submit is structurally impossible, not just discouraged).

**Logic:**

- `src/lib/validation/contactSchema.ts` — the zod schema (name/email/subject/message).
- `src/lib/email.ts` — the EmailJS send wrapper; throws a clear error if `VITE_EMAILJS_*` env vars are missing rather than silently no-op-ing.
- react-hook-form wiring, success/error toast via react-toastify, form reset only on success.
- `.env.local.example` added (real `.env.local` still doesn't exist — `*.local` is already covered by `.gitignore`) documenting the 3 required vars. **Verified end-to-end in a real browser**: empty-submit shows all 4 inline validation errors correctly; a valid fill-and-submit correctly reaches `emailjs.send()`, which fails gracefully (no credentials configured yet) and shows the designed error toast — confirms the whole validation → submit → error-handling path works, pending only real EmailJS credentials for an actual send.

---

## Phase 7 — Polish — done 2026-08-26

### 15 Page Transitions Everywhere — confirmed

**Logic:** The `AnimatePresence` page-transition wrapper (built in Phase 1) confirmed smooth across every route added since, including `/projects/:slug`, `/services/:slug`, and `/team/:slug`.

### 16 Responsive QA — done

**Logic:** Verified at mobile (390px), and desktop (1280px) across Home, Projects (+ filter), Project Detail, About (+ map), Contact (+ form), Services, and dark mode variants of each — nav collapse to hamburger, filter pills wrap, grid columns collapse to 1, footer stacks. Tablet (768px) was not separately screenshotted this pass but uses the same Tailwind breakpoint scale already exercised at mobile/desktop.

### 17 SEO Basics — done

**Logic:** `src/lib/useDocumentTitle.ts` — a tiny hook setting `document.title` to `"{title} | DSD"`, or the site-wide default when `title` is empty (used by `HomePage`), called by every page (dynamic pages compute the title from the resolved entity, called *before* their not-found early return to satisfy the Rules of Hooks). Verified all 10+ routes produce the correct title in a real browser. `index.html` gained a real `<meta name="description">`, Open Graph tags (`og:title`/`og:description`/`og:image`/`og:type`/`og:site_name`), Twitter card tags, and `theme-color`. Fixed a real pre-existing bug in the process: the favicon `<link>` pointed at `/favicon.svg`, which never existed (a stale Vite-scaffold leftover) — repointed to the real `/dsd_logo.png`. Every `<img>` across the codebase audited and confirmed to have a real `alt` (or deliberate `alt=""` on the one purely-decorative duplicate thumbnail in the Project Detail gallery, which sits next to a `<button aria-label>` that already names it).

### 18 Accessibility & 404 — done

**Logic:** `NotFoundPage` confirmed working (built in Phase 1). Keyboard navigation verified in a real browser — tabbing through the header reaches the Services dropdown trigger with a clearly visible focus ring (no suppressed outline anywhere). Color contrast for text-on-navy already covered by `ui-tokens.md`'s token choices, unchanged this phase. The mobile drawer's full keyboard focus-trap behavior (cycling focus back to the first element at the end of the drawer) was not separately verified — noted as a residual gap in `progress-tracker.md` rather than assumed complete.

---

## Phase 8 — Extended Offering: Team, Pricing & Dropdown Nav — done 2026-08-26

Added mid-build, after Phases 1–3 shipped, in response to two explicit user requests: (1) a Pricing page, a founder section on About, and a 10-person team carousel with individual detail pages, requiring dropdown nav support; (2) adapting [emiracle.ae](https://emiracle.ae)'s communication style and adding its core offering (UAE business setup, residency, and compliance advisory) as an 8th DSD service. See `progress-tracker.md`'s Decisions Made for the full reasoning.

### 19 Eighth Service — UAE Business Setup & Advisory

**Logic:** `src/data/services.ts` gained an 8th entry, `Landmark` icon (added to `src/lib/icons.ts`), copy adapted from Emiracle's three core categories (Residency Solutions / Company Incorporation / Compliance & Governance) and its "simplifies the decision, then execute it" value proposition — reworded in DSD's own voice, not copied verbatim, and using DSD's own placeholder-labeled numbers rather than Emiracle's real client-count/years-in-market stats.

### 20 Team Carousel + Member Detail Pages

**UI:** `TeamCarousel` (`src/components/sections/TeamCarousel.tsx`) — a dependency-free horizontal scroll-snap carousel (no new library; `overflow-x-auto` + `scroll-snap` + prev/next buttons scrolling by one card width), embedded on `/services` (`id="team"`, matching the nav dropdown's `/services#team` link) per the user's explicit placement choice. `TeamMemberCard` links to `/team/:slug`. `TeamMemberDetailPage` — photo, name, role, bio, email/LinkedIn icons, redirects to `/services#team` on an unknown slug.

**Logic:** `src/data/team.ts` — 10 placeholder members (see `progress-tracker.md` → Known Gaps), `src/types/index.ts` gained `TeamMember`. Router gained `/team/:slug`.

### 21 Pricing Page

**UI:** `PricingPage` (`/pricing`) — 3 tiers from `src/data/pricing.ts` (placeholder numbers), middle tier visually highlighted (`Most Popular` badge, accent border). Every tier's CTA links to `/contact`, never a checkout flow — this site has no payment processing (`project-overview.md` → Features Out of Scope); pricing here is a conversation-starter, not a self-serve purchase.

**Logic:** `src/types/index.ts` gained `PricingTier`. Router gained `/pricing`. Footer's Quick Links gained a Pricing entry (auto-covered for Services/Team since those already map over `src/data/services.ts`).

### 22 Navbar Dropdown Navigation

**UI:** `Navbar`'s `NAV_LINKS` gained an optional `dropdown` field. Desktop: hover-triggered panel (`framer-motion` fade+slide, 150ms) under "Services", listing all 8 services plus "Meet the Team". Mobile: the same list as an accordion (chevron rotates, height-animated expand/collapse) inside the slide-in drawer, since a hover panel doesn't translate to touch. `ChevronDown` (lucide-react) marks any nav item with a dropdown. **Updated in Phase 9** — the 8 service links now point to real detail pages (`/services/:slug`), not `/services#slug` anchors.

---

## Phase 9 — Service Detail Pages & Legal Pages — done 2026-08-26

Added immediately after Phase 8, in response to explicit user request: a full detail page per service (hero with a specific supplied headline for UAE Business Setup, CTAs, pricing-or-hire-us, service-scoped projects/team/awards/stats), plus 4 legal/utility pages (Cookie Policy, Privacy Policy, Partner With Us, Website Disclaimer) matching a pattern the user pointed to on a reference site's footer. See `progress-tracker.md` for the full reasoning.

### 23 Service Detail Pages (`/services/:slug`)

**UI:** `ServiceDetailPage` — one data-driven component (not 8 separate files), matching the `ProjectDetailPage`/`TeamMemberDetailPage` slug-resolution pattern. Sections, each conditionally rendered (hidden entirely if the service has no data for it, never padded): navy hero (`heroHeadline`, summary, "Hire Us" `CtaButton` + "View Pricing" outlined link to `/pricing`) → stats strip (`bg-primary`, reuses `StatCounter`) → description + included checklist → "Related Projects" (reuses `ProjectCard`) → "Team Members" (reuses `TeamMemberCard`) → "Awards & Achievements" (`Trophy` icon cards) → `ClosingCta`.

**Logic:** `src/types/index.ts` gained `ServiceAward`/`ServiceStat`; `Service` gained `heroHeadline`, `relatedProjectSlugs`, `teamMemberSlugs`, `awards`, `stats` — all populated for all 8 services in `src/data/services.ts` (curated cross-references into `projects.ts`/`team.ts`, not a derived category mapping — the 4 portfolio categories and 8 services don't line up 1:1). Two services deliberately ship an empty `relatedProjectSlugs` (no portfolio example fits yet) to exercise the hidden-section path. Router gained `/services/:slug`. `ServiceCard`'s "Learn More" (compact) and new "View Full Details" (detailed variant) links, the Navbar dropdown, and the Footer's Services column all point here now instead of `/services#slug` anchors. `StatCounter`'s prop type was tightened from the full `Stat` (which required an unused `id`) to `Pick<Stat, "value" | "suffix" | "label">` so it could accept `ServiceStat` (no `id`) without a type error.

### 24 Legal / Utility Pages

**UI:** `CookiePolicyPage`, `PrivacyPolicyPage`, `WebsiteDisclaimerPage` (`src/pages/legal/`) — generic placeholder legal boilerplate, clearly marked as not-reviewed-by-counsel in a file-level comment (see `progress-tracker.md` → Known Gaps). `PartnerWithUsPage` is a short marketing page (not legal copy) with a `CtaButton` to `/contact`. All 4 live in the Footer's new bottom-bar link row (`LEGAL_LINKS`), not the main nav — standard convention for this class of page.

**Logic:** Router gained `/cookie-policy`, `/privacy-policy`, `/partner-with-us`, `/website-disclaimer`.

---

## Feature Count

| Phase | Features | Status |
| --- | --- | --- |
| Phase 1 — Foundation | 4 | Done |
| Phase 2 — Home Page | 5 | Done |
| Phase 3 — Services Page | 1 | Done |
| Phase 4 — Portfolio | 2 | Done |
| Phase 5 — About Page | 1 | Done |
| Phase 6 — Contact | 1 | Done |
| Phase 7 — Polish | 4 | Done |
| Phase 8 — Team, Pricing & Dropdown Nav | 4 | Done |
| Phase 9 — Service Detail Pages & Legal Pages | 2 | Done |
| **Total** | **24** | **24 done — see progress-tracker.md for residual gaps (real content, mobile drawer focus-trap, EmailJS credentials)** |
