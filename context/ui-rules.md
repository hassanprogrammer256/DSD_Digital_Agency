# UI Rules

Concise rules for building the DSD marketing site. `context/designs/layout.jpg` (the TemplateMo Finance Business template) is the source of truth for **layout rhythm** — hero, quick-glance strip, 3-up service cards, dark stat-counter band, split about section, testimonial cards, contact form band, multi-column footer. These rules adapt that structure to DSD's own red/blue/white brand and the Tailwind v4 + Joy UI + framer-motion stack.

---

## Font

Load Plus Jakarta Sans and Inter once (via `@fontsource/plus-jakarta-sans` + `@fontsource/inter`, or a Google Fonts `<link>`), and Geist Mono via the `geist` npm package. Set `display`/`sans` as the Joy theme's `fontFamily` (see `ui-tokens.md`). Never fall back to a bare system font stack for headings or body — Geist Mono is the only token allowed to fall back to `ui-monospace`.

Stat counter digits, project tech-stack badges, and the utility bar's phone number always render in `font-mono` — never in the body sans font. This is the one deliberate typographic accent on the site; use it consistently so it reads as an intentional "technical" flourish, not an inconsistency.

---

## Layout

- Content max-width: **1280px**, centered, **24px** side padding on desktop, **16px** on mobile.
- Gap between full page sections (hero → services → stats → about → projects → testimonials → CTA): **64–80px**.
- Every page opens with a photo-background hero banner (`PageHeroBanner`, `src/components/common/PageHeroBanner.tsx`) — full-bleed background photo + the same navy gradient overlay as the Home hero, page title + one-line description in white text on top. This superseded the earlier plain-`surfaceSecondary`-band convention (2026-08-27, explicit user request to make every page banner "look like the home banner") — never reintroduce a flat-color, photo-less header band on a listing/detail page. See `ui-tokens.md` → Hero Section for the shared overlay spec.
- No sidebar anywhere — this is a top-nav marketing site, not a dashboard. `AppShell`-style fixed sidebars from a product-dashboard reference do not apply here.

---

## Navbar

- Two-tier on desktop: a slim **utility bar** (navy background, 36px tall) with a tagline/hours on the left and phone + email + social icons on the right (phone in `font-mono`), then the **main nav** (64–72px tall) below it.
- Main nav is `position: sticky; top: 0`, and only the main nav (not the utility bar) persists on scroll.
- On the Home page, the main nav renders transparent over the hero image until the user scrolls past the hero's height, then crossfades to a `surface` background with a `border-b border-border` — framer-motion `useScroll`/`useMotionValueEvent`, not a hard CSS breakpoint. On every other page, the nav is always the scrolled (`surface`) style, since there's no hero to sit transparently over.
- Active route: `primary`-colored link text + a 2px `primary` underline (`layoutId`-based `framer-motion` indicator that slides between links, not a hard swap).
- The **Contact Us** button is always accent-colored and always visible, regardless of scroll state or transparent/opaque nav mode. Use `CtaButton` (`src/components/common/CtaButton.tsx`), never a raw Joy `Button color="danger"` — see `ui-tokens.md` → Invariants.
- Mobile (`<768px`): utility bar hides entirely; main nav shows logo + hamburger only. Hamburger opens a full-height `framer-motion` slide-in panel from the right, `navy` background, stacked nav links in `textInverse`, Contact Us button at the bottom.
- **Dropdown items:** only a nav item with genuinely many children gets one (currently: "Services" only — 8 offerings + "Meet the Team"). Desktop: hover-triggered panel (fade + 8px slide, 150ms), `surface` background, `border-border`, positioned below the parent item. Mobile: the same list as a tap-to-expand accordion inside the drawer (a hover panel doesn't translate to touch) — chevron rotates 180° when open, content height-animates in/out. Never build a dropdown for an item with only 1–2 children; a flat link is simpler and just as fast to reach.

---

## Hero (Home page)

- Full-bleed background photo (`src/assets/images/hero/`) with the navy gradient overlay specified in `ui-tokens.md`, min-height ~600px desktop / ~480px mobile.
- Headline (display font, `textInverse`) + subheadline (`rgba(255,255,255,0.82)`) + one accent CTA button (`Get Started` / `Contact Us` → `/contact`) + one outlined ghost button (`View Our Work` → `/projects`), left-aligned, matching the reference template's hero text block.
- Entrance animation: headline/subheadline/buttons fade + slide up in a staggered sequence (framer-motion `variants`, 60–80ms stagger) on mount only — never re-triggers on scroll back to the top.
- A slim **CTA strip** sits directly below the hero (matches the reference's "Request a call back" bar): `primary` background, a short prompt line in `textInverse`, and an outlined `textInverse` button linking to `/contact`.
- This full animated build (`src/components/sections/Hero.tsx`) is Home-only. Every other page uses the lighter shared `PageHeroBanner` (see Layout above and `ui-registry.md`) — same background-photo-plus-overlay visual language, no entrance-animation choreography, no CTA strip.

---

## Cards

Every content block (service, project, testimonial) lives in a card — see `ui-tokens.md` → Component Tokens → Cards for the exact spec. Never a colored card background outside the fixed navy sections (hero, stats, footer) — color is carried by icon badges, category tags, and buttons inside an otherwise white card.

---

## Services Section / Page

- Home page: 3-up grid (desktop) of the top featured services, each card: icon badge (40×40px rounded-lg, `primaryLight` background, `primary` icon), title, 2–3 line description, "Learn More →" ghost link to `/services#anchor`.
- `/services` page: same card shape, all 8 offerings, in a responsive grid (3-up desktop / 2-up tablet / 1-up mobile), each with a slightly longer description and 3–4 bullet "what's included" list. Further down the same page, a **team carousel** (see below) — placed here deliberately, not on a separate page.
- Icon badge color rotates through `primary` / `accent` / `success` / `warning` / `info` across a row so the row reads as a set (never the same color twice in a row of 3), matching the reference dashboard-card convention adapted from a prior project — but here `accent` (red) may only appear on services cards as a badge tint, never implying the whole card is a CTA.

---

## Team Carousel (on `/services`) & Member Detail Pages

- Sits below the full services grid on `/services`, `id="team"` + `scroll-mt-24` (so `/services#team` links from the nav dropdown and footer land correctly below the fixed nav) — never a separate `/team` listing page; only individual members get their own route (`/team/:slug`).
- Horizontal scroll-snap carousel, no carousel library — `overflow-x-auto` + CSS `scroll-snap`, scrollbar hidden. Two `ChevronLeft`/`ChevronRight` buttons (desktop only, `hidden md:flex`) scroll by one card width; mobile relies on touch-swipe.
- Each card: circular photo, name, role (`primary`-colored), 2–3 line bio, whole card links to `/team/:slug`. Fixed width (`w-64`/`w-72`), never full-bleed.
- Detail page (`/team/:slug`): centered layout — photo, name, role, email/LinkedIn icon buttons, full bio below. "Back to Team" link at the top returns to `/services#team`. An unrecognized slug redirects to `/services#team`, matching the Project Detail page's not-found pattern.

---

## Pricing Page (`/pricing`)

- `PageHeroBanner` (per the standard site-wide pattern), then a 3-tier card grid (`md:grid-cols-3`).
- One tier may be visually highlighted (accent border, `shadow-lg`, a small "Most Popular" pill badge in `accentLight`/`accent`) — at most one at a time.
- Each card: name, one-line description, price (large, `text-text-primary`) with an optional smaller `period` label ("starting at") before it, a feature checklist (`CircleCheck`, `primary`), and a CTA button at the bottom.
- Every tier's CTA links to `/contact` — never a checkout flow (this site has no payment processing, see `project-overview.md` → Features Out of Scope). The highlighted tier uses `CtaButton`; other tiers use an outlined button, so the highlighted card's CTA still reads as the primary action on the page.

---

## Stats Counter Strip

- `navy` background, full-bleed, 4 stats in a row (desktop) / 2×2 grid (mobile).
- Each stat: large `font-mono` number (`textInverse`) + short label (`rgba(255,255,255,0.72)`).
- Numbers count up from 0 on first scroll into view (framer-motion `useInView` + a small custom `useCountUp` hook), once per page load — never re-triggers if the user scrolls away and back.
- Always render the final integer with no decimal jitter — round every intermediate animated value before display.

---

## About Section / Page

- Home page teaser: photo + text split (image left, copy + one ghost "Learn More →" link right, or reversed — match the reference's alternating split), on a `surfaceSecondary` band.
- `/about` page: full story (who DSD is, mission), a "why choose us" mini-grid (3–4 short value props with icon), and the Dubai office block (address, embedded or static map graphic, phone, email).

---

## Portfolio (`/projects`)

- Filter pills row at the top: `All`, `Web Development`, `SEO`, `DevOps`, `Mobile App Development` — unselected pills are `variant="outlined" color="neutral"`, the selected pill fills with that category's token color (`ui-tokens.md` → `categoryTokens`) and `textInverse` text.
- Grid: 3-up desktop / 2-up tablet / 1-up mobile. Filtering re-renders the grid with a `framer-motion` stagger fade-in (30–50ms per card) — never an abrupt cut.
- Each `ProjectCard` — see `ui-tokens.md` → Component Tokens → Project Card for the exact hover-overlay spec. The whole card is clickable through to `/projects/:slug`; the two hover-overlay icon buttons (`Live Preview`, `View Code`) `stopPropagation()` so they open their external link directly without also navigating to the detail page.

---

## Project Detail (`/projects/:slug`)

- `PageHeroBanner`: project title, category tag (as the banner's `eyebrow` slot), one-line summary — same photo-background treatment as every other page hero.
- Screenshot gallery: a primary large image + a row of thumbnails below (click to swap the primary), or a simple responsive grid if only 1–2 screenshots exist — never a broken/empty gallery section.
- Action row (directly under the gallery, not buried at the page bottom): **Live Preview** button (`accent`, `ExternalLink` icon, only rendered if the project has a live URL) and **View Code** button (`outlined`, `Code` icon — lucide-react 1.x has no `Github` icon, dropped for trademark reasons — only rendered if the project has a repo URL). A project may have neither, one, or both — never render a disabled/dead button for a link that doesn't exist.
- Description, then a **Key Functionality** bulleted list (`CheckCircle2` lucide icon per item, `primary` colored), then a **Tech Stack** row of `font-mono` pill badges.
- **Similar Projects** section at the bottom: up to 3 other projects sharing the same category, rendered as compact `ProjectCard`s. If fewer than 3 exist in that category, show however many there are — never pad with unrelated projects, and hide the section entirely if none exist.

---

## Testimonials

- 2-up grid (desktop) / 1-up (mobile), on a `surfaceSecondary` band, matching the reference's testimonial-card layout: quote, then avatar + name + role/company below.
- No carousel/autoplay for the initial build — a static grid is simpler and sufficient at small testimonial counts; revisit only if the dataset grows large enough to need pagination.

---

## Contact Page (`/contact`)

- Two-column layout (desktop): form on one side, office info card (address, phone `font-mono`, email, and a small static/embedded map) on the other. Stacks to one column on mobile, form first.
- Joy `Input`/`Textarea` throughout — never raw `<input>`/`<textarea>` elements.
- Fields: Full Name, Email Address, Subject, Message (textarea) — matches the reference template's contact form field set exactly.
- Label above field, 13px/600/`textSecondary`. Required-field asterisk in `accent` color (not a generic red — here accent red *is* the brand CTA color, so this is consistent, not a clash).
- Validation errors render inline below the field in `error` color, 13px, via react-hook-form + zod (see `library-docs.md`) — never a raw browser alert.
- Submit button (`Send Message`) is `accent`-colored, shows Joy's `loading` state while `emailjs.send()` is in flight, and is disabled while loading (never allow a double-submit).
- On success: `react-toastify` success toast + form reset. On failure: error toast, form values preserved.

---

## Buttons

**Accent (CTA)** — `Button color="danger"` (mapped to accent red): the one main action per view — Contact Us, Send Message, hero's primary CTA, project card's Live Preview. See `ui-tokens.md`'s accent-usage rule — never used for a non-CTA element.

**Primary (navy)** — `Button color="primary"`: secondary-important actions — Learn More links styled as buttons, "View All Projects".

**Outlined** — `Button variant="outlined" color="neutral"`: tertiary actions — unselected filter pills, View Code (GitHub) button, hero's secondary CTA.

**Ghost/text** — `Button variant="plain"`: inline "Read More →" / "Learn More →" links inside cards.

---

## Badges & Chips

Use Joy `Chip`. Default shape is pill, `12px/600` text, `px-[10px] py-[2px]`.

- **Category tags** (portfolio) always use the fixed `categoryTokens` mapping — never recolor a category tag for any other purpose, and never introduce a 5th category color without updating `ui-tokens.md` first.
- **Tech-stack badges** (project detail) are `font-mono`, `surfaceSecondary` background, `textSecondary` text — never category-colored, since they're informational, not a status.

---

## Motion (framer-motion)

- Page-level transitions: fade + 12px vertical slide, 200ms, on route change (`AnimatePresence mode="wait"` wrapping the routed page).
- Scroll-triggered section reveals: fade + 16px slide-up, triggered once via `whileInView` with `viewport={{ once: true, amount: 0.2 }}` — sections never re-animate if scrolled past and back.
- Card grid entrances (services, projects, testimonials): staggered fade-in, 40–60ms stagger, on initial mount/filter change only.
- Stat counters: count up once on first `useInView`, per the Stats Counter Strip rule above.
- Hover states (cards, buttons): `whileHover`/`whileTap` scale (1.02 / 0.98) — subtle, never a large jump.
- Never animate the portfolio filter pills' text content, only their background/border color transition.

---

## Footer

- `navy` top area: 4-column grid (Logo+blurb / Quick Links / Services / Contact) on desktop, stacked on mobile.
- `navyElevated` bottom bar: centered copyright line + current year, 13px, `rgba(255,255,255,0.55)`.
- Social icons (lucide `Facebook`/`Instagram`/`Linkedin`/`Twitter` or equivalent, whichever DSD actually uses) in the Contact column, 36px circular buttons per `ui-tokens.md`.

---

## Do Nots

- Never use Tailwind's built-in color classes (`bg-blue-600`, `text-red-500`) — use project tokens only.
- Never define colors anywhere but `theme/tokens.ts`.
- Never use accent red for anything that isn't a genuine call-to-action.
- Never show a raw error (network failure, EmailJS error) to the visitor — always map to a human-readable toast via react-toastify.
- Never use `position: fixed` for in-content UI — only the sticky main nav uses fixed/sticky positioning.
- Never render a dead/disabled "Live Preview" or "View Code" button when a project lacks that link — omit the button entirely (see Project Detail above).
- Never build a second sidebar-style nav — this is a top-nav site throughout, on every page.
