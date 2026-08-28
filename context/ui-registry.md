# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

**Status:** Phases 1, 2, 3, and 8 are built (`build-plan.md`). Most of the registry below reflects the real, verified state as of 2026-08-26/27 — checked in a real browser (light + dark theme, desktop + mobile) via Playwright, not just type-checked. **Exception:** the 2026-08-27 corporate-content-removal + service-catalog restructure (Navbar's categorized mega-menu, `ServicesPage`'s category sections, `TechnologiesPage`, `IndustriesPage`) was type-checked/linted/built clean but **not** real-browser-verified — no browser-automation tool was available in that session. Verify these specifically before trusting them the way the rest of this doc can be trusted.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here.
2. If yes — match its exact classes/props, don't reinvent the pattern.
3. If no — build it following `ui-rules.md` and `ui-tokens.md`, then add it here.

After building any component, update this file with the component name, file path, and exact classes/props used.

---

## Layout Components

### Navbar

File: `src/components/layout/Navbar.tsx`
Last updated: 2026-08-27

**Pattern notes:**
Two-tier: utility bar (navy, `h-9`, hidden on mobile, phone/email + tagline) collapses via height+opacity transition once `transparent` becomes false; main nav (`h-16 md:h-[72px]`, `fixed inset-x-0 top-0 z-50`). `transparent = isHome && !scrolledPastThreshold` — derived fresh every render, not stored as its own effect-driven state (see the `react-hooks/set-state-in-effect` fix below). `scrolledPastThreshold` is tracked via `framer-motion`'s `useScroll`/`useMotionValueEvent` against a 60px threshold. Active link gets a `layoutId="nav-underline"` sliding indicator.

**`NavItem` shape (rebuilt 2026-08-27, corporate-content-removal pass):** `{ to: string; label: string; dropdown?: NavDropdownItem[]; groups?: NavGroup[]; extraLinks?: NavDropdownItem[]; layout?: "categorized" | "list" }`, `NavDropdownItem = { to: string; label: string; icon?: LucideIcon }`, `NavGroup = { label: string; items: NavDropdownItem[] }`. Replaces the earlier `layout: "grid" | "list"` shape (which both "Services" and the now-removed "Compliance" used as a single flat icon grid) — at 20 services, a flat 3-column icon grid read as noise, so "Services" is now `layout: "categorized"` with `groups` (one per `serviceCategoryMeta` category) and a separate `extraLinks` row ("Meet the Team" / "Technologies" / "Industries We Serve") appended below the grid, generalizing the old single-item "Meet the Team" append. "Legal" is unaffected — still `dropdown` + `layout: "list"` (or omitted), a flat single column, no groups needed for 4 items. `to` is **required** — every dropdown-carrying nav item must itself be a real routed page (explicit user rule: "every dropdown menu item must be routed i.e with a pathname"). All `openDropdown`/`mobileDropdownOpen` state keys off `link.label` (always present, always unique), not `link.to`.

**Two dropdown shapes, same rendering branch on `link.layout`:**

- `layout: "categorized"` — "Services" only. Desktop panel: `grid grid-cols-3 gap-x-6 gap-y-5`, `left-0 w-[720px] max-w-[92vw]` (left-anchored to the trigger, **not** `left-1/2 -translate-x-1/2` — a wide panel centered under a nav item positioned left-of-center clips off the viewport edge at 768–1024px; left-anchoring avoids that everywhere), each group a `text-xs uppercase tracking-wide text-text-muted` label over a stacked plain-text link list — **no per-item icons at this scale** (20 items across 6 columns was too much visual weight; the old grid had one icon per item at 10–11 items, which read fine at that count but wouldn't here). `extraLinks` render as a `border-t border-border` row below the grid, `text-primary`, each with its own icon — this is the one place icons remain, since there are only 3 of them.
- `layout: "list"` (or omitted) — "Legal" (Cookie Policy, Privacy Policy, Partner With Us, Website Disclaimer, no icons). Panel: `left-1/2 w-64 -translate-x-1/2`, single-column.

Desktop: hover-triggered (`onMouseEnter`/`onMouseLeave` on the wrapping `div`), `framer-motion` fade+slide panel, `bg-surface`/`border-border`/`shadow-lg`. Mobile: "Services" renders its `groups` as a flat scrollable list with plain, non-interactive `text-white/45` uppercase category-label dividers (not a second nested accordion level — deliberately kept to one interaction level) plus its `extraLinks` in a `border-t` row at the end; "Legal" still renders its flat `dropdown` list the original way. CTA button is `CtaButton`, not a raw Joy `Button` (see below). Logo is `public/dsd_logo.png`, referenced by string path (not imported — public/ convention, see `architecture.md`).

**Fixed bug (2026-08-26):** originally called `setScrolled(...)` inside a `useEffect` reacting to `isHome`, and `setMobileOpen(false)` inside a `useEffect` reacting to `location.pathname` — both flagged by `eslint-plugin-react-hooks`' `set-state-in-effect` rule. Fixed by (a) deriving `transparent` directly from `isHome` + a route-independent `scrolledPastThreshold` state instead of a separate isHome-reactive effect, and (b) calling `setMobileOpen(false)` from each nav link's own `onClick` instead of a location-watching effect.

**Verified (2026-08-27):** adding an 8th top-level item (Compliance) didn't overflow the bar — screenshotted at 1024/1280/1440px before considering the grid-dropdown restructure done.

### Footer

File: `src/components/layout/Footer.tsx`
Last updated: 2026-08-27

**Pattern notes:**
`bg-navy` top area (4-col grid: logo+blurb / Quick Links / Services / Contact) + `bg-navy-elevated` bottom bar. Quick Links and Services columns are both generated from data (`QUICK_LINKS` constant array — as of the 2026-08-27 corporate-content-removal pass, includes Technologies/Industries in place of the removed "Company Compliance" link; Services column maps `src/data/services.ts` directly, so any of the 20 services appears automatically). `LEGAL_LINKS` (bottom bar, above the copyright line) plus a `Cookie Settings` button calling `openCookieSettings()` from `src/lib/cookieConsent.ts` — reopens the same modal the consent banner uses, so it's reachable even after the banner's first-visit prompt is gone. Social icons use `SocialIcon.tsx`'s hand-rolled components, not lucide-react (see below).

---

## Common Components

### ThemeToggle

File: `src/components/common/ThemeToggle.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Wraps `src/theme/theme.ts`'s `getCurrentTheme`/`toggleTheme` — local `useState` re-derived from `getCurrentTheme()` on mount, updated in the button's own `onClick`. `inverse` prop (boolean) swaps icon/hover colors for use over a transparent-navy nav vs. a solid-surface nav. `Sun` shown in dark mode (click to go light), `Moon` in light mode.

### CtaButton

File: `src/components/common/CtaButton.tsx`
Last updated: 2026-08-26

**Pattern notes:**
**Use this, never a raw Joy `<Button color="danger">`, for any accent/CTA button.** `joyTheme.ts`'s palette is frozen at literal light-mode hex (Joy's `extendTheme()` can't accept a `var(--...)` string — see `library-docs.md`), so a plain Joy button's color never tracks the live light/dark toggle. `CtaButton` wraps `Button` with an explicit `sx` override (`backgroundColor: var(--color-accent)`, hover/active → `var(--color-accent-dark)`) that does. Props: `ButtonProps & { component?: typeof Link; to?: ... }` — typed narrowly for the one polymorphic case this project actually uses (`component={Link}`) rather than chasing full generic parity with Joy's `OverridableComponent` typing (that path didn't type-check cleanly through a wrapper function — see `progress-tracker.md`).

### SocialIcon

File: `src/components/common/SocialIcon.tsx`
Last updated: 2026-08-26

**Pattern notes:**
`FacebookIcon`/`InstagramIcon`/`LinkedinIcon`/`XIcon`/`WhatsappIcon` — lucide-react 1.x ships no branded social icons at all (dropped for trademark reasons; confirmed by grepping the installed package's type declarations before building anything that assumed otherwise). Each draws only its glyph in `currentColor` (Facebook/LinkedIn as `<text>`, Instagram/X as simple geometric primitives, `WhatsappIcon` as a simplified speech-bubble-plus-handset outline) with **no self-contained background** — callers own the background treatment (e.g. Footer's circular badge). Used in `Footer` and both `AboutPage`'s founder section and `TeamMemberDetailPage`'s LinkedIn/WhatsApp links. `WhatsappIcon` added 2026-08-27 alongside `TeamMember.whatsapp`/`.phone` (see `TeamMemberDetailPage` below).

### SectionHeading

File: `src/components/common/SectionHeading.tsx`
Last updated: 2026-08-26

**Pattern notes:**
`{ eyebrow?, title, highlight?, description?, align? }`. `title` renders plain, `highlight` renders in `text-accent` appended after it — the "colored last word(s)" pattern from the TemplateMo reference. `align="center"` (default) centers with `max-w-2xl mx-auto`; `align="left"` uses `max-w-xl`, no centering. Used by every Home section and `ServicesPage`/`TeamCarousel`.

### PageHeroBanner

File: `src/components/common/PageHeroBanner.tsx`
Last updated: 2026-08-28

**Pattern notes:**
`{ image, imagePosition?, eyebrow?: ReactNode, title: ReactNode, description?: ReactNode, align?: "center" | "left", children? }`. The site-wide replacement (2026-08-27, explicit user request) for the old plain-`surfaceSecondary` page-header band — every page's top banner now uses this: full-bleed background photo + the exact same navy gradient overlay as Home's `Hero.tsx` (`linear-gradient(120deg, rgba(10,27,51,0.88) 0%, rgba(10,27,51,0.55) 60%, rgba(10,27,51,0.35) 100%)`), `py-20 md:py-28` rather than Home's fixed `min-h-[600px]` — proportional to a short title+description, not forcing Home's largest-hero-on-the-site height onto a listing page. `align="center"` (the default; used by every simple listing/hub page) centers everything in a `max-w-3xl` column; `align="left"` (used by `ServiceDetailPage`, which also passes CTA buttons via `children`) centers on mobile, left-aligns from `lg:` up — matching Home hero's own left-aligned convention. `eyebrow` and `title` accept `ReactNode`, not just `string`, specifically so `ProjectDetailPage` can pass its colored category-tag pill as the eyebrow — a plain category pill needed `style={{ textTransform: "none" }}` since the banner's own eyebrow wrapper applies `uppercase` for the plain-text case and Tailwind class order alone can't reliably win that override. Text is plain `text-white`/`text-white/60`/`text-white/75` (not the `text-inverse` token) — matching the exact convention every other navy/photo section on this site already uses (`Hero.tsx`, `ServicesPage`'s CTA banner, `Footer`), not a new choice introduced here. **2026-08-28**: the former "one photo (`home_hero_bg.png`), many crops" convention was replaced with a distinct photo per page, per explicit user request ("apart from the homepage") — `home_hero_bg.png` is now used only by Home's own `Hero.tsx`. All 10 new photos (`src/assets/images/hero/{about,contact,industries,pricing,service_detail,technologies,services,projects,project_detail,legal}_hero.jpg`) are real, royalty-free photos downloaded from Unsplash (Unsplash License — free for commercial use, no attribution required), each thematically matched to its page (e.g. Technologies → code on screen, Pricing → calculator/money, Legal → signing a document) and re-encoded to `w=1920&q=75` to keep file size reasonable. Content-section photos (`story.jpeg`, `about_dsd.jpeg`, `contact1.png`) are untouched and unrelated to this component.

Used by: `AboutPage`, `ServicesPage`, `ProjectsPage`, `PricingPage`, `ContactPage`, `LegalPage`, `TechnologiesPage`, `IndustriesPage`, `ProjectDetailPage` (all `align="center"`, no `children`), and `ServiceDetailPage` (`align="left"`, CTA row passed as `children`). **Not** used by `TeamMemberDetailPage`, `PartnerWithUsPage`, `NotFoundPage`, or the 3 pure-legal-text pages (`CookiePolicyPage`/`PrivacyPolicyPage`/`WebsiteDisclaimerPage`) — none of these had a distinct "banner + further sections" shape to begin with (each is effectively one single content block), so converting them would have meant redesigning the whole page rather than "modifying the hero banner." Flagged to the user rather than assumed in scope.

### ServiceCard

File: `src/components/common/ServiceCard.tsx`
Last updated: 2026-08-26

**Pattern notes:**
`{ service, colorIndex, detailed? }`. Icon resolved via `src/lib/icons.ts`'s `serviceIcons` map (keeps `src/data/services.ts` framework-import-free). Badge color from `src/lib/utils.ts`'s `badgeColorAt(colorIndex)` — cycles `[primary, accent, success, warning, info]`, so a row of 3 never repeats. `detailed=false` (Home's featured row): summary + "Learn More" `Link`. `detailed=true` (`/services` full grid): longer description + `included` bullet list (`CircleCheck` icon) + "View Full Details" `Link`; the card itself still gets `id={service.slug}` + `scroll-mt-24` for backward-compatible anchor scrolling even though nothing links to `/services#slug` anymore. **Both link variants point to `/services/:slug` (`ServiceDetailPage`, Phase 9), not `/services#slug`** — updated together with the Navbar dropdown and the Footer's Services column when the per-service detail pages shipped.

### ProjectCard

File: `src/components/common/ProjectCard.tsx`
Last updated: 2026-08-26

**Pattern notes:**
16:9 screenshot, category tag pill (top-left overlay, colored via `theme/tokens.ts`'s `categoryTokens`), hover overlay (`bg-navy/85`, fades in via `group-hover`) with conditional Live Preview (`ExternalLink`, accent circle) / View Code (`Code` icon — **not** `Github`, which lucide-react 1.x also dropped; outlined circle) buttons, each only rendered if the project has that URL. Title, 2-line-clamped summary, `font-mono` tech-stack badge pills.

**Fixed bug (2026-08-26):** originally the whole card was a react-router `<Link>` (renders `<a>`) wrapping the overlay's own `<a>` tags — invalid HTML (`<a>` cannot contain `<a>`), which React 19 flags as a hydration hazard even though it happened to render "fine" visually. Fixed: the card is now a `div role="link" tabIndex={0}` with `onClick`/`onKeyDown` calling `useNavigate()`, so the overlay's real anchors are siblings-in-DOM-position but no longer nested inside another anchor. **Any future card-shaped clickable-container-with-nested-real-links component must follow this pattern, not `<Link>`-wraps-everything.**

### TestimonialCard

File: `src/components/common/TestimonialCard.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Simple: `Quote` icon (decorative, `text-primary-light`, top-left), italic quote, avatar (48px circle) + name + role (`text-primary`). No hover state, no link — testimonials aren't interactive.

### StatCounter

File: `src/components/common/StatCounter.tsx`
Last updated: 2026-08-26

**Pattern notes:**
`{ value, suffix?, label }` — `Pick<Stat, "value" | "suffix" | "label">`, not the full `Stat` (which carries an `id` this component never renders; tightened in Phase 9 so `ServiceStat`, which has no `id`, could also be passed in without a type error). `useInView(ref, { once: true, amount: 0.5 })` gates a `framer-motion` `animate()` call counting a `useMotionValue` from 0 → `value` over 1.4s; displayed value always passed through `useTransform(count, Math.round)` so it never renders a raw animated float. `font-mono`, `text-white`. Used in `StatsStrip` (navy band, `grid-cols-2 md:grid-cols-4`, `md:divide-x md:divide-white/14`) and `ServiceDetailPage` (`bg-primary` band, `flex flex-wrap justify-center` instead of a strict grid — handles 2, 3, or 4 stats per service without lopsided empty cells).

### CookieConsentBanner / CookieSettingsModal / ConsentGate

Files: `src/components/common/{CookieConsentBanner,CookieSettingsModal,ConsentGate}.tsx`
Last updated: 2026-08-27

**Pattern notes:**
Built together as one system on top of `src/lib/cookieConsent.ts` (5 categories: `necessary` implicit + `functional`/`analytics`/`advertising`/`embedded`, `localStorage`-persisted under `dsd-cookie-consent`, cross-component sync via plain DOM `CustomEvent`s — `dsd:open-cookie-settings`, `dsd:cookie-consent-changed` — not React Context, since this project has no global-state library).

- **`CookieConsentBanner`** — mounted once in `App.tsx`, right after `Footer`. Fixed bottom bar, `AnimatePresence` slide-up, visible only pre-decision (`useState(() => !hasDecided())`, lazy initializer, no effect needed for the initial value). Reject All / Manage Settings / Accept All are **deliberately equal size and weight** (`border border-border` outlined for the first two, solid `bg-accent` only for Accept) — never style Reject as a smaller/quieter link next to a prominent Accept.
- **`CookieSettingsModal`** — Joy `Modal`/`ModalDialog`, per-category `Switch` toggles + a `<details>` disclosure rendering the full `src/data/cookieInventory.ts` table (name/category/provider/expiry). `useState<ConsentPreferences>(getPreferences)` with **no effect** — Joy's `Modal` unmounts its children by default when `open={false}`, so the lazy initializer alone gets fresh data every time it reopens.
- **`ConsentGate`** — `{ category, description, children }`. Structurally prevents `children` from ever entering the DOM until `isAllowed(category)` — used to wrap the About page's Google Maps `<iframe>`, the site's one real third-party embed. Shows a `ShieldAlert` fallback + "Manage Cookie Settings" button (calls `openCookieSettings()`) when blocked. `useState(() => isAllowed(category))` lazy initializer + an effect that only *subscribes* to future changes via `subscribeToConsentChanges`, doesn't re-derive on mount.

All three originally had a `react-hooks/set-state-in-effect` violation (an effect immediately calling `setState` with a value derivable at initializer time) — same fix pattern each time: lazy `useState(() => ...)`, effect trimmed to only handle genuinely future/external events.

### TeamMemberCard

File: `src/components/common/TeamMemberCard.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Fixed-width (`w-64 md:w-72`) card for `TeamCarousel`'s horizontal scroll — `shrink-0 snap-start`. Circular photo, name, role (`text-primary`), 3-line-clamped bio. Whole card is a real `Link` to `/team/:slug` (no nested-anchor risk here, unlike `ProjectCard` — no overlay buttons inside it).

### ChecklistCard

File: `src/components/common/ChecklistCard.tsx`
Last updated: 2026-08-27

**Pattern notes:**
`{ icon?: LucideIcon; tone?: "primary" | "accent"; surface?: "surface" | "surface-secondary"; children: string }` — a compact card for a single checklist/fact item, replacing a bare `<li>` bullet row wherever a flat list of short items sat directly on page background instead of in a card (per explicit user request to favor cards over bulleted typography site-wide). `rounded-lg border border-border p-3.5` with a small circular icon badge (`h-6 w-6`, `CircleCheck` default) — color lives only in the badge, never the card background, per `ui-rules.md`'s "never a colored card background" invariant. `surface` picks `bg-surface` or `bg-surface-secondary` so the card contrasts against whichever band it sits on (the site's established alternating-shade convention) — callers must check their own section's background before picking. `tone="accent"` was originally scoped to one usage on the now-removed `CompliancePage` (see `progress-tracker.md`'s 2026-08-27 corporate-content-removal entry) — not a general "make this card red" switch; default everywhere else is `tone="primary"`. Used in `ProjectDetailPage` (Key Functionality) and `ServiceDetailPage` (What's Included — this heading was also added, it didn't exist before).

---

## Section Components (`src/components/sections/`)

Originally scoped to Home-page-only blocks (see `architecture.md`); broadened in practice once `TeamCarousel` shipped on `/services` — this folder now means "composed, page-level section block," not "Home-page-only."

### Hero

File: `src/components/sections/Hero.tsx`
Last updated: 2026-08-26

**Pattern notes:**
`bg-cover bg-center` on `src/assets/images/hero/home_hero_bg.png` (a real supplied photo — the original placeholder abstract SVG was deleted, not kept as a fallback), navy gradient overlay (`linear-gradient(120deg, rgba(10,27,51,0.88) 0% → 0.55 60% → 0.35 100%)`) on a separate absolutely-positioned `div` (not baked into the background image, so it composes independently). Content: `framer-motion` `container`/`item` variants with `staggerChildren: 0.08`. Eyebrow → headline → subheadline → a small 3-phrase strategic tagline row ("Plan with a clear strategy • Build for stability • Grow with long-term vision", `text-white/70`, dot separators hidden below `sm`) → CTA row (`CtaButton` + outlined ghost `Link`). `pt-24` accounts for the transparent nav sitting on top of it.

### CtaStrip

File: `src/components/sections/CtaStrip.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Slim `bg-primary` band directly under `Hero`. Prompt text + one outlined-white `Link` button (not `CtaButton` — this is a secondary prompt, not the page's primary CTA).

### ServicesOverview

File: `src/components/sections/ServicesOverview.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Home only. `services.slice(0, 3)` (Website/Web App/Custom System Development) — **not** re-evaluated when the 8th service was added (see `progress-tracker.md` → Known Gaps: deliberate for now). 3-col grid, each card `whileInView`-staggered (40-50ms delay per index).

### StatsStrip

File: `src/components/sections/StatsStrip.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Thin wrapper — `bg-navy`, grid over `src/data/stats.ts`, each cell rendering `StatCounter`.

### AboutTeaser

File: `src/components/sections/AboutTeaser.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Home only. Split layout (image left / copy right on `lg:`, stacked below), `bg-surface-secondary`. Image is `src/assets/images/about/about-teaser.svg` (placeholder graphic, distinct from the founder/team photos).

### FeaturedProjects

File: `src/components/sections/FeaturedProjects.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Home only. `projects.filter(p => p.featured).slice(0, 3)`. Same `whileInView` stagger pattern as `ServicesOverview`. "View All Projects" outlined `Link` to `/projects` below the grid.

### Testimonials

File: `src/components/sections/Testimonials.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Home only. 2-col grid (`md:grid-cols-2`) over all of `src/data/testimonials.ts` (currently 3 — an intentionally odd count in a 2-col grid, not padded to an even number). `bg-surface-secondary`.

### ClosingCta

File: `src/components/sections/ClosingCta.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Home only. `bg-navy`, centered, one `CtaButton size="lg"` to `/contact`.

### TeamCarousel

File: `src/components/sections/TeamCarousel.tsx`
Last updated: 2026-08-26

**Pattern notes:**
Mounted on `/services` (`ServicesPage.tsx`, after the full service grid), `id="team"` + `scroll-mt-24` — matches the Navbar dropdown's `/services#team` link and `TeamMemberDetailPage`'s "Back to Team" link. Dependency-free carousel: `overflow-x-auto` + `snap-x snap-mandatory` on the scroll container (scrollbar hidden via `[scrollbar-width:none]`/`[&::-webkit-scrollbar]:hidden` — **not** a `scrollbar-hide` class, which isn't a real Tailwind utility without a plugin), two `ChevronLeft`/`ChevronRight` buttons calling `el.scrollBy({ left: ±(cardWidth + 24), behavior: "smooth" })`. Buttons are `absolute`, `-translate-x-1/2`/`translate-x-1/2` so they sit half-outside the scroll container's edge, `hidden md:flex` (arrow nav is a desktop affordance; mobile relies on touch-swipe).

---

## Page Patterns

### ServiceDetailPage (`/services/:slug`)

File: `src/pages/ServiceDetailPage.tsx`
Last updated: 2026-08-28

**Pattern notes:**
One data-driven component for all 20 services (not 20 files) — same slug-resolution/not-found-redirect shape as `ProjectDetailPage`/`TeamMemberDetailPage`. Section order: `PageHeroBanner` (`align="left"`, background is now `service.heroImage` — **2026-08-28**: each of the 20 services carries its own distinct photo (`src/assets/images/services/<slug>.jpg`), replacing the earlier single shared `home_hero_bg.png` background every service detail page used to render, per explicit user request. `imagePosition="center"` uniformly now, since crop tuning happens per-photo at source rather than per-usage. headline/summary + Hire Us/View Pricing CTA row passed as `children`) → `bg-primary` stats band (`StatCounter`s, `flex flex-wrap justify-center` not a grid) → description + a "What's Included" heading + `included` list rendered as a `ChecklistCard` grid → "Related Projects" (`ProjectCard` grid) → "Team Members" (`TeamMemberCard`s in a `flex flex-wrap justify-center`, not the carousel's fixed-width scroll container) → `ClosingCta`. **The Awards & Achievements section was removed entirely (2026-08-27, explicit user request), not left as an empty/placeholder section** — the `ServiceAward` type, `Service.awards` field, and the section's markup/`Trophy` import are all gone; do not reintroduce an awards concept without that being a new, explicit decision. **Every remaining section past the description is conditionally rendered — `.length > 0` checks around each, never an empty/padded section.** Many of the 12 services added in the 2026-08-27 corporate-content-removal pass have empty `relatedProjectSlugs`/`teamMemberSlugs` — deliberate, not a gap, per that day's Decisions Made entry. Reuses `ClosingCta`, `ProjectCard`, and `TeamMemberCard` directly rather than duplicating their markup — the same compose-before-duplicate approach `ProjectDetailPage` (Phase 4) followed too.

### TeamMemberDetailPage (`/team/:slug`)

File: `src/pages/TeamMemberDetailPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
Single content block, not banner+sections (unlike most other detail pages) — no `PageHeroBanner` here, deliberately out of scope for the 2026-08-27 hero-banner pass (see `PageHeroBanner`'s registry entry above). Centered profile layout on `bg-surface-secondary`: circular photo, name, role, then a contact-icon row, then full bio. **Contact-icon row (Mail/LinkedIn/Phone/WhatsApp) is fully independent-optional per icon** — `TeamMember.email`/`.linkedin`/`.phone`/`.whatsapp` are all optional fields, each icon button renders only `{member.X && (...)}`; any combination (including zero) renders correctly, added 2026-08-27 per explicit user request ("make them optional... only the missing is ignored"). `Phone` (lucide-react) links `tel:` with whitespace stripped from the stored number; `WhatsappIcon` (`SocialIcon.tsx`) links `https://wa.me/<digits>`, digits derived by stripping all non-digit characters from `member.whatsapp` rather than storing a second, differently-formatted field for the same number.

### ProjectsPage (`/projects`)

File: `src/pages/ProjectsPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
`PageHeroBanner` (previously a plain header band — converted in the 2026-08-27 hero-banner pass) sits above the filter/grid section described below. Filter pills (`All` + the 4 `ProjectCategory` values) drive a local `selected` state; the selected pill fills solid via a per-filter `activeClass` (`bg-primary`/`bg-success`/`bg-warning`/`bg-accent` — a separate mapping from `categoryTokens`, whose own `.bg` is a light tint for badges, not a filled pill). Grid uses `motion.div layout` + `AnimatePresence mode="popLayout"` around each `ProjectCard` wrapper so filtering re-flows/fades cards instead of a hard cut. Empty-result state (a category with zero projects) shows a muted message rather than a blank grid.

### ProjectDetailPage (`/projects/:slug`)

File: `src/pages/ProjectDetailPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
Same slug-resolution/redirect shape as `ServiceDetailPage`/`TeamMemberDetailPage`. `PageHeroBanner` (previously a plain centered header — converted in the 2026-08-27 hero-banner pass; the category pill moves into the banner's `eyebrow` slot, needing an inline `textTransform: none` override — see `PageHeroBanner`'s own registry entry). Primary screenshot + clickable thumbnail row (local `activeShot` state) — thumbnails only render when `screenshots.length > 1`. Live Preview/View Code button row only renders when at least one URL exists (not two independent conditionals sharing a wrapper that could render empty). "Key Functionality" renders as a `ChecklistCard` grid (was a bare `CircleCheck` bullet list before the 2026-08-27 cards-over-bullets pass). "Similar Projects" (same category, up to 3, excluding self) hidden entirely when empty, reusing `ProjectCard`.

### AboutPage (`/about`)

File: `src/pages/AboutPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
`PageHeroBanner` (previously a plain header band — converted in the 2026-08-27 hero-banner pass) → Story/Mission (`lg:grid-cols-2` split — `story.jpeg` photo left, prose right; was centered-prose-only before the 2026-08-27 photo pass, then swapped from a `home_hero_bg.png` crop to its own dedicated photo) → "Why Businesses Choose Us" (3-card `whileInView`-staggered grid, `VALUE_PROPS` constant with a lucide icon per card) → "Meet the Founder" (Phase 8) → office block (split layout: address/phone/email list left, a **real Google Maps `<iframe>` embed** right, wrapped in `ConsentGate category="embedded"` — see the cookie-consent entry above; not loaded until the visitor consents) → "Referral Programme" teaser (`Handshake` icon, `CtaButton` to `/partner-with-us`). The map takes a few seconds to finish its async render once consented — never judge it broken from an immediate screenshot; wait or check network responses before concluding it's actually empty.

### ServicesPage (`/services`)

File: `src/pages/ServicesPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
`PageHeroBanner` (previously a plain, photo-less header band — converted in the 2026-08-27 hero-banner pass, see `PageHeroBanner`'s own registry entry) → **one section per category** (rebuilt 2026-08-27, corporate-content-removal pass — previously one flat grid of all services): `serviceCategoryMeta.map(...)`, each category a `SectionHeading align="left"` (category label as the plain `title`, no `eyebrow`/`highlight`) over a `ServiceCard` grid filtered to that category, `services.filter(s => s.category === category.slug)` — a category with zero services (not currently possible with all 6 populated) would render nothing, matching the "hide empty sections, never pad" convention used elsewhere → photo CTA banner (added 2026-08-27, distinct from the hero banner above): `bg-navy bg-cover bg-center` on `home_hero_bg.png` (yet another distinct `objectPosition` crop) + `bg-navy/80` overlay + centered heading/copy/`CtaButton` to `/contact` → `TeamCarousel`.

### TechnologiesPage (`/technologies`)

File: `src/pages/TechnologiesPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
Added in the corporate-content-removal + service-catalog restructure pass, referenced against Digital Graphiks' own `/technologies` page structure. `PageHeroBanner` → a fixed `CATEGORY_ORDER: TechnologyCategory[]` (not derived from `src/data/technologies.ts`'s own array order, so the page always reads Frontend→Integrations regardless of data-file ordering) driving a 2-col grid, each category a `text-xs uppercase tracking-wide text-text-muted` label over a `flex flex-wrap` row of pill badges — reuses `ProjectCard`'s exact tech-badge spec (`rounded-full bg-surface-secondary px-3 py-1 font-mono text-xs text-text-secondary`) rather than inventing a new pill style. No per-technology detail page or icon — this is a single hub page, not a hub+detail pair like Services/Team/Projects. Content is grounded in real `techStack` values from `src/data/projects.ts`, plus 2 explicitly user-confirmed exceptions (Shopify/WooCommerce, OpenAI/LangChain) — see `progress-tracker.md`.

### IndustriesPage (`/industries`)

File: `src/pages/IndustriesPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
Added alongside `TechnologiesPage` in the same pass. `PageHeroBanner` → a 3-col card grid over `src/data/industries.ts`, same badge-icon-in-colored-box look as `LegalPage`'s hub cards (`badgeColorAt` cycling, icons via a new `industryIcons` map in `src/lib/icons.ts` — parallel to `serviceIcons`, same data-layer-boundary rationale) but **not clickable** — unlike `LegalPage`'s cards, there's no per-industry detail page to link to, so these are plain `div`s with icon/title/description, no `Link` wrapper, no "Read More" affordance. 10 industries, trimmed from Digital Graphiks' 15-industry reference list down to what DSD's own portfolio (`src/data/projects.ts`) actually evidences.

### ContactPage (`/contact`)

File: `src/pages/ContactPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
`PageHeroBanner` (previously a plain header band — converted in the 2026-08-27 hero-banner pass; the office-info card's own `contact1.png` photo below is unrelated and unchanged) → two-column: `react-hook-form` + `zodResolver(contactSchema)` form left, office-info card right. The office-info card now has a photo header (`src/assets/contact1.png`, a real supplied handshake photo, `h-44 w-full object-cover`, `rounded-xl` container clipped via `overflow-hidden`) above the address/phone/email list — added in the 2026-08-27 photo pass, previously text-only. Joy `FormControl error={!!errors.x} required` + `FormLabel` + `Input`/`Textarea` + conditional `FormHelperText` per field — never a hand-rolled error `<p>`. Submit is `CtaButton type="submit" loading={isSubmitting} disabled={isSubmitting}`. `onSubmit` calls `sendContactMessage` (`src/lib/email.ts`) in a try/catch — success toasts + `reset()`s the form, failure toasts (message includes the `info@dsdgrp.com` fallback) and **leaves the typed values in place** so the visitor doesn't retype.

### Legal / Utility Pages (`src/pages/legal/`)

Files: `CookiePolicyPage.tsx`, `PrivacyPolicyPage.tsx`, `WebsiteDisclaimerPage.tsx`, `PartnerWithUsPage.tsx`
Last updated: 2026-08-28

**Pattern notes:**
`CookiePolicyPage`/`PrivacyPolicyPage`/`WebsiteDisclaimerPage` use shared-per-file (not cross-file-shared) private `Section`/`List` helper components — `max-w-2xl` centered, numbered sections. Originally (2026-08-27) transcribed verbatim from 3 supplied `.docx` documents written for an unrelated UAE company-formation/immigration business ("DSD Corporate Services") — see `progress-tracker.md` → Known Gaps for that discrepancy. **2026-08-28: rewritten** for DSD's real identity and business as a digital marketing agency, per explicit user request and confirmed identity (site-wide `dsdgrp.com` details, not the `dsdcop.com` ones the source docs carried). `CookiePolicyPage` kept its original structure/cookie-taxonomy (already accurate for a marketing site) and just needed its identity block fixed — 12 sections, still renders the live inventory table from `src/data/cookieInventory.ts`. `PrivacyPolicyPage` (17 sections) and `WebsiteDisclaimerPage` (19 sections) got full substantive rewrites, not just identity swaps — the originals were entirely about AML/KYC checks, trade-licence/visa processing, and Ajman free-zone jurisdiction, none of which apply here; replaced with content about contact/lead-form data, ad-platform account access, no-guaranteed-marketing-results disclaimers, third-party-platform dependency, and UAE-federal/Dubai-courts governing law (no free-zone/licence-number claim, since none was ever supplied — still not fabricated). All 3 end with DSD's real contact block (Al Hareb Building, Dubai · `+91 7585889093` · `info@dsdgrp.com` · `www.dsdgrp.com`). `PartnerWithUsPage` is real short marketing/referral copy (from a supplied `partner_with_us.txt`), an `lg:grid-cols-2` split with `contact1.png` left, copy + `CtaButton` + contact block right; its "corporate services" wording and contact block were corrected 2026-08-28 alongside the 3 pages above. No nav/footer entry beyond the footer's bottom-bar `LEGAL_LINKS` row and the Navbar's "Legal" list-dropdown (2026-08-27) — never add this class of page as its own top-level nav link.

### LegalPage (`/legal`)

File: `src/pages/legal/LegalPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
Added so the Navbar's "Legal" dropdown trigger has a real destination (see Navbar entry above — every dropdown-carrying nav item must itself be routed). `PageHeroBanner` (previously a plain centered header block — converted in the 2026-08-27 hero-banner pass) → simple 4-card hub, same badge-icon-in-colored-box look as `IndustriesPage`'s card grid (`badgeColorAt`, inline — not importing `ServiceCard`, whose prop type doesn't fit this page's data shape), each card linking to one of the existing `CookiePolicyPage`/`PrivacyPolicyPage`/`PartnerWithUsPage`/`WebsiteDisclaimerPage` routes with a 1-sentence description. No new legal content — purely an index over pages that already existed. Note: the 3 pure-legal-text pages this hub links to (`CookiePolicyPage`/`PrivacyPolicyPage`/`WebsiteDisclaimerPage`) do **not** get a `PageHeroBanner` — see that component's own registry entry for why.

### LandingPage (`/lp/:slug`) / LandingThankYouPage (`/lp/:slug/thank-you`)

Files: `src/pages/landing/LandingPage.tsx`, `src/pages/landing/LandingThankYouPage.tsx`
Last updated: 2026-08-27

**Pattern notes:**
**Not children of `<App/>`** — declared as sibling top-level objects in `router.tsx`, specifically so they render with **no** `Navbar`, `Footer`, or `CookieConsentBanner`. This is a hard requirement from the source checklist ("remove the main navigation menu, sidebar, and footer links — only allow one action"), not achievable by hiding chrome with CSS from inside the normal layout. Any future "outside the main layout" page (a print view, an embed) should follow this same sibling-route pattern rather than trying to conditionally suppress `App`'s own `Navbar`/`Footer`.

- **Data-driven, one template** — `LandingOffer` (`src/types/index.ts`) + `src/data/landingPages.ts` (currently 2 seeded offers, both tied to real existing services). Adding a campaign is one data entry; no new route/component code needed unless the layout itself needs to change.
- **Logo is a plain `<img>`, not a `<Link>`** — the one deliberate site-wide exception to "the logo always links home." A clickable logo is an exit ramp, which this page is built to not have.
- **Desktop: `lg:grid-cols-[1.1fr_0.9fr]`, form column `lg:sticky lg:top-10`** so the form stays visible without scrolling. Content order is swapped between breakpoints via `order-1`/`order-2` (not two copies of the markup) — **on mobile the form renders first**, pitch/hook/trust content after, because the source brief's own guidance ("60%+ of ad clicks are mobile") makes the form-above-the-fold case stronger on small screens than the usual "story before ask" default.
- **Form is name + email only** (`landingLeadSchema`) — same Joy `FormControl`/`FormLabel`/`Input`/`FormHelperText` pattern as `ContactPage`, deliberately not reusing its 4-field schema. Submits via `sendLandingPageLead` (`src/lib/email.ts`, same EmailJS relay the Contact form uses — **not a real CRM**, see `progress-tracker.md` → Known Gaps) and on success calls `navigate` to the sibling thank-you route, rather than an inline toast-and-reset like `ContactPage`.
- **Trust signals**: one reused `testimonials.ts` entry (already flagged placeholder data) + two non-numeric reassurance lines ("Your information stays private," "No spam, unsubscribe anytime") — deliberately no invented client counts or star ratings, since `data/stats.ts` is itself still placeholder and presenting placeholder numbers as proof would compound that gap.
- **`LandingThankYouPage`** resolves its copy from `LandingOffer` by slug (same `<Navigate to="/" replace>` fallback shape as every other slug-resolved page), not from router state — a direct visit or refresh renders correctly. Offers exactly one further engagement action (Browse Services / Follow on LinkedIn) per the checklist's "ask for one more action" point.
- **Fine print**: a single Privacy Policy link in a minimal footer bar is the *only* outbound link on `LandingPage` besides the tel: "prefer to call" line — kept deliberately, unlike every other link that was removed, since a page collecting personal data linking to the real privacy policy is a trust signal this session's cookie/privacy-consent work already established as expected, not a competing distraction.

### useDocumentTitle

File: `src/lib/useDocumentTitle.ts`
Last updated: 2026-08-26

**Pattern notes:**
`useDocumentTitle(title: string)` — sets `document.title` to `"{title} | DSD"`, or the bare site name when `title` is empty (only `HomePage` does this). Called at the very top of every page component. **Dynamic pages must call it before any early-return** (Rules of Hooks) — compute a fallback (`entity?.title ?? "Fallback Section Name"`) rather than skipping the call when the slug doesn't resolve.

---

## Do Nots (learned this session, not yet in `ui-rules.md`)

- Never wrap a clickable card in `<Link>`/`<a>` if it contains its own real `<a>` tags anywhere inside (e.g. an overlay with external links) — use `div role="link" tabIndex={0} onClick/onKeyDown` instead. See `ProjectCard`.
- Never pass a `var(--...)` CSS variable string into Joy's `extendTheme()` palette — it decomposes colors into RGB channels at construction time and throws. Use literal hex per theme, and `CtaButton`-style `sx` overrides for anything that must track the live toggle.
- Never assume a lucide-react icon by a name that "sounds standard" without grepping `node_modules/lucide-react/dist/lucide-react.d.ts` first — this version has dropped all branded/social icons (`Facebook`, `Github`, `Twitter`, etc.) and renamed some common ones (`CheckCircle2` → `CircleCheck`).
- Never call `setState` directly inside a `useEffect` body reacting to a prop/route change if the value can instead be derived during render, or the state change can instead happen at the actual triggering event (a click) — `eslint-plugin-react-hooks`' `set-state-in-effect` rule catches this, and both real instances this session were avoidable.
