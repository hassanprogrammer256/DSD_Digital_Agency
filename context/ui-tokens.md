# UI Tokens

Design tokens for the DSD marketing site, derived from the **DSD logo** (`public/dsd_logo.png`) — a glossy red swoosh and a navy-blue ring/swoosh crossing a white highlight, on black. Those three brand colors map directly onto the site's palette:

- **Red** (the logo's swoosh) → **accent** — the one color reserved for calls-to-action ("Contact Us", "Send Message", "View Project") and the Mobile App Development category tag
- **Navy Blue** (the logo's ring/swoosh) → **primary** — headings accents, active nav state, links, the Web Development category tag, and the site's dark sections (hero overlay, stats strip, footer)
- **White** → base background/surface and text-on-dark

The site has a real **user-toggleable light/dark theme** (no role-based palette switching — there are no roles). Independently of that toggle, the hero overlay, stats strip, and footer always render on a **fixed navy** background in both themes — a deliberate section-level contrast device (DSD's brand navy), not something that should flip with the page's own light/dark mode. Use these exact values throughout the codebase — never hardcode colors or use raw Tailwind color classes in components.

---

## How to Use

Tokens live in exactly one place — `src/index.css` (the raw, theme-switchable custom properties) plus `src/theme/tokens.ts` (a literal-hex mirror for any JS/SVG context that can't consume a CSS variable) — and are consumed by both Joy UI and Tailwind so there is never a second copy of a color value. Every token is expressed as a CSS custom property so Joy UI, Tailwind, and any hand-written CSS all read the same cascade.

```typescript
// src/theme/tokens.ts — literal-hex mirror of src/index.css, for JS contexts that need a
// real value rather than a var() reference (e.g. an SVG fill, a <meta name="theme-color">
// update on toggle). Components should prefer the CSS-variable-backed Tailwind/Joy tokens
// below over importing this directly.

export const neutrals = {
  light: {
    background: "#FFFFFF", surface: "#FFFFFF", surfaceSecondary: "#F5F7FB",
    border: "#E3E7F0", textPrimary: "#0B1730", textSecondary: "#54607A", textMuted: "#8B93A8",
  },
  dark: {
    background: "#0B1220", surface: "#141D31", surfaceSecondary: "#1B2540",
    border: "#2B3654", textPrimary: "#F2F5FA", textSecondary: "#AAB4CB", textMuted: "#6F7B93",
  },
} as const;

// Fixed in both themes — white text/icons on navy, primary, and accent surfaces, none of
// which ever lighten in dark mode, so this token deliberately does NOT invert between
// themes (see Invariants — this is the one thing the prior project's dashboard tokens got
// wrong: an inverting "textInverse" used on a surface that never actually inverts).
export const textInverse = "#FFFFFF";

// Fixed in both themes — DSD's brand navy, not a neutral that should flip with the page's
// own light/dark mode. Used for the hero overlay, stats strip, and footer.
export const navy = { base: "#0A1B33", elevated: "#060F1E" } as const;

export const brand = {
  light: {
    primary: "#123B8C", primaryDark: "#0B2760", primaryLight: "#E8EEFB",   // logo navy blue
    accent: "#E31E2D", accentDark: "#A9121E", accentLight: "#FDEAEB",      // logo red — CTAs only
  },
  dark: {
    primary: "#4C7FE0", primaryDark: "#2C56B0", primaryLight: "#16213A",
    accent: "#F2434C", accentDark: "#C22530", accentLight: "#33161A",
  },
} as const;

// Semantic tokens — form feedback and category tags reuse these, never invent a new hex
export const semantic = {
  light: {
    success: "#1E9E5A", successLight: "#E3F7EC",
    warning: "#C9821D", warningLight: "#FBEEDC",
    error: "#D92D3D", errorLight: "#FBE3E5",
    info: "#1D6FE0", infoLight: "#E6EFFC",
  },
  dark: {
    success: "#3ECB84", successLight: "#12291F",
    warning: "#E3A23F", warningLight: "#33260F",
    error: "#FF6B72", errorLight: "#331519",
    info: "#5B9BFF", infoLight: "#142A46",
  },
} as const;

// Portfolio category → Tailwind class mapping. Always these four, never reassigned
// per-project. Returns class names (theme-aware automatically) rather than raw colors,
// so components never need an inline style for a category tag.
export const categoryTokens = {
  "web-development": { text: "text-primary", bg: "bg-primary-light", label: "Web Development" },
  "seo": { text: "text-success", bg: "bg-success-light", label: "SEO" },
  "devops": { text: "text-warning", bg: "bg-warning-light", label: "DevOps" },
  "mobile-app-development": { text: "text-accent", bg: "bg-accent-light", label: "Mobile App Development" },
} as const;

export const radius = { sm: "4px", md: "8px", lg: "12px", xl: "20px", full: "9999px" } as const;

export const font = {
  display: "'Plus Jakarta Sans', 'Inter', sans-serif",   // headings, hero text, stat numbers
  sans: "'Inter', 'Plus Jakarta Sans', sans-serif",       // body copy, nav, buttons
  mono: "'Geist Mono', ui-monospace, monospace",          // tech-stack badges, phone number, stat digits
} as const;
```

```css
/* src/index.css — Tailwind v4 CSS-first config. Two-layer indirection is deliberate:
   @theme inline exposes Tailwind's `--color-*` namespace as references to plain custom
   properties, which are then redefined per theme below — this is what lets `bg-background`
   etc. actually switch at runtime instead of being frozen at build time. */
@import "tailwindcss";

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-surface-secondary: var(--surface-secondary);
  --color-border: var(--border);
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);
  --color-text-inverse: var(--text-inverse);

  --color-navy: var(--navy);
  --color-navy-elevated: var(--navy-elevated);

  --color-primary: var(--primary);
  --color-primary-dark: var(--primary-dark);
  --color-primary-light: var(--primary-light);

  --color-accent: var(--accent);
  --color-accent-dark: var(--accent-dark);
  --color-accent-light: var(--accent-light);

  --color-success: var(--success);
  --color-success-light: var(--success-light);
  --color-warning: var(--warning);
  --color-warning-light: var(--warning-light);
  --color-error: var(--error);
  --color-error-light: var(--error-light);
  --color-info: var(--info);
  --color-info-light: var(--info-light);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  --font-display: "Plus Jakarta Sans", "Inter", sans-serif;
  --font-sans: "Inter", "Plus Jakarta Sans", sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;
}

/* Light theme (default) */
:root {
  --background: #ffffff; --surface: #ffffff; --surface-secondary: #f5f7fb;
  --border: #e3e7f0;
  --text-primary: #0b1730; --text-secondary: #54607a; --text-muted: #8b93a8;
  --text-inverse: #ffffff;   /* fixed both themes — see tokens.ts note */

  --navy: #0a1b33; --navy-elevated: #060f1e;   /* fixed both themes — brand color */

  --primary: #123b8c; --primary-dark: #0b2760; --primary-light: #e8eefb;
  --accent: #e31e2d; --accent-dark: #a9121e; --accent-light: #fdeaeb;

  --success: #1e9e5a; --success-light: #e3f7ec;
  --warning: #c9821d; --warning-light: #fbeedc;
  --error: #d92d3d; --error-light: #fbe3e5;
  --info: #1d6fe0; --info-light: #e6effc;

  color-scheme: light;
}

/* System-preference fallback for the instant before the app's blocking init script
   (index.html) applies an explicit [data-theme], and for the no-JS case. Never wins over
   an explicit choice. */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --background: #0b1220; --surface: #141d31; --surface-secondary: #1b2540;
    --border: #2b3654;
    --text-primary: #f2f5fa; --text-secondary: #aab4cb; --text-muted: #6f7b93;

    --primary: #4c7fe0; --primary-dark: #2c56b0; --primary-light: #16213a;
    --accent: #f2434c; --accent-dark: #c22530; --accent-light: #33161a;

    --success: #3ecb84; --success-light: #12291f;
    --warning: #e3a23f; --warning-light: #33260f;
    --error: #ff6b72; --error-light: #331519;
    --info: #5b9bff; --info-light: #142a46;

    color-scheme: dark;
  }
}

/* Explicit dark theme — set on <html> by src/theme/theme.ts, persisted to localStorage,
   always wins over system preference. */
[data-theme="dark"] {
  --background: #0b1220; --surface: #141d31; --surface-secondary: #1b2540;
  --border: #2b3654;
  --text-primary: #f2f5fa; --text-secondary: #aab4cb; --text-muted: #6f7b93;

  --primary: #4c7fe0; --primary-dark: #2c56b0; --primary-light: #16213a;
  --accent: #f2434c; --accent-dark: #c22530; --accent-light: #33161a;

  --success: #3ecb84; --success-light: #12291f;
  --warning: #e3a23f; --warning-light: #33260f;
  --error: #ff6b72; --error-light: #331519;
  --info: #5b9bff; --info-light: #142a46;

  color-scheme: dark;
}
```

```typescript
// src/theme/joyTheme.ts — Joy proxies the CSS variables rather than duplicating values.
// colorSchemes.light and colorSchemes.dark are DELIBERATELY IDENTICAL (both reference the
// same var names) — Joy's own internal light/dark selection is a no-op here on purpose. The
// real switching happens entirely through the CSS cascade via [data-theme], driven by
// src/theme/theme.ts — never through Joy's useColorScheme(). See library-docs.md.
import { extendTheme } from "@mui/joy/styles";

const palette = {
  primary: { 500: "var(--color-primary)", 600: "var(--color-primary-dark)", softBg: "var(--color-primary-light)" },
  danger: { 500: "var(--color-accent)", 600: "var(--color-accent-dark)", softBg: "var(--color-accent-light)" },
  success: { 500: "var(--color-success)", softBg: "var(--color-success-light)" },
  warning: { 500: "var(--color-warning)", softBg: "var(--color-warning-light)" },
  neutral: { softBg: "var(--color-surface-secondary)" },
};

export const joyTheme = extendTheme({
  fontFamily: { body: "var(--font-sans)", display: "var(--font-display)" },
  colorSchemes: {
    light: { palette },
    dark: { palette },
  },
});
```

```typescript
// src/theme/theme.ts — the one place that actually flips the theme. Framework-agnostic
// (no React) so it can run from index.html's blocking init script and be reused by any
// future toggle UI (Navbar, Phase 1 Feature 03).
export type ThemeMode = "light" | "dark";

export function initTheme(): ThemeMode { /* reads localStorage → falls back to system preference → sets [data-theme] */ }
export function toggleTheme(): ThemeMode { /* flips [data-theme], persists to localStorage */ }
export function getCurrentTheme(): ThemeMode { /* reads the live [data-theme] attribute */ }
```

```tsx
// Correct — Tailwind utility referencing the CSS-variable-backed token; automatically
// follows the active theme with zero component-level logic
<div className="bg-surface border border-border rounded-xl" />

// Correct — Joy component themed automatically via CssVarsProvider
<Button color="danger">Contact Us</Button>  {/* "danger" is mapped to accent red above — the CTA color */}

// Never — hardcoded hex
<div className="bg-[#E31E2D]" />

// Never — raw Tailwind color scale
<div className="bg-blue-600 text-gray-500" />

// Never — reading the theme with JS branching to pick a color; let the CSS cascade do it
const bg = theme === "dark" ? "#0B1220" : "#FFFFFF"; // ✗
```

---

## Theme Toggle

- Mechanism: `src/theme/theme.ts` (framework-agnostic, no React) sets/reads a `data-theme="light" | "dark"` attribute on `<html>` and persists the choice to `localStorage` (`dsd-theme`). A tiny blocking script in `index.html`'s `<head>` applies the stored (or system-preference) theme **before first paint**, so there is never a flash of the wrong theme.
- Default: on a visitor's first-ever visit (nothing in `localStorage` yet), the theme follows `prefers-color-scheme` — it is not hardcoded to light. Once the visitor uses the toggle, their explicit choice is persisted and always wins over system preference from then on.
- Toggle control: a `Sun`/`Moon` (lucide-react) icon button in the main nav, immediately before the "Contact Us" button (see `ui-rules.md` → Navbar). Calls `toggleTheme()` from `src/theme/theme.ts`.
- Joy UI's own `useColorScheme()`/mode mechanism is **not** used to drive this toggle — `joyTheme.ts`'s `colorSchemes.light` and `colorSchemes.dark` are defined identically (both proxy the same CSS variable names), so which one Joy thinks is "active" has no visual effect. The actual color values always come from the CSS cascade via `[data-theme]`, driven solely by `theme.ts`. See `library-docs.md`.

---

## Color Usage Guide

### Page Layout

| Element | Token |
| --- | --- |
| Page background | `background` |
| Card / surface | `surface` |
| Alternating section band (testimonials, off-white strips) | `surfaceSecondary` |
| Dark section (hero overlay, stats strip, footer top) | `navy` |
| Footer bottom bar (copyright line) | `navyElevated` |
| Default border | `border` |

### Typography

| Element | Token |
| --- | --- |
| Headings, primary content | `textPrimary` |
| Secondary text, sub-headlines | `textSecondary` |
| Placeholder, timestamps, helper text | `textMuted` |
| On navy surfaces (hero, stats, footer) | `textInverse` |

### Primary (Navy Blue)

Used for: nav active-link underline, links, primary buttons where the CTA red would be too loud (e.g. secondary "Learn More" links), section heading accent word, Web Development category tag, footer background, hero overlay tint.

| Element | Token |
| --- | --- |
| Primary button background | `primary` |
| Primary button hover | `primaryDark` |
| Tinted background (badges, active nav pill) | `primaryLight` |

### Accent (Red) — reserved for calls-to-action

Used **only** for the site's actual calls-to-action, so it never loses its urgency: the persistent "Contact Us" nav button, "Send Message" (contact form submit), the closing CTA section's button, "View Live Preview" buttons on project cards, and the Mobile App Development category tag. Never used as a decorative color or for a passive/secondary action.

| Element | Token |
| --- | --- |
| CTA button background | `accent` |
| CTA button hover | `accentDark` |
| Tinted background (accent badges) | `accentLight` |

### Category Tags (Portfolio)

Always these four, never reassigned per-project — see `categoryTokens` above.

| Category | Token |
| --- | --- |
| Web Development | `primary` / `primaryLight` |
| SEO | `success` / `successLight` |
| DevOps | `warning` / `warningLight` |
| Mobile App Development | `accent` / `accentLight` |

### Form Feedback

| State | Background | Text |
| --- | --- | --- |
| Success toast / success helper text | `successLight` | `success` |
| Error toast / inline validation error | `errorLight` | `error` |
| Informational note | `infoLight` | `info` |

---

## Typography Scale

| Element | Size (desktop) | Size (mobile) | Weight | Font |
| --- | --- | --- | --- | --- |
| Hero headline | 52px / 60px line-height | 34px / 42px | 700 | `display` |
| Section heading | 34px / 42px | 26px / 34px | 700 | `display` |
| Card / sub-section heading | 20px / 28px | 18px / 26px | 600 | `display` |
| Body copy | 16px / 26px | 15px / 24px | 400 | `sans` |
| Nav link | 15px | 15px | 500 | `sans` |
| Small / label (uppercase, tracked) | 12px / 16px | 12px / 16px | 600 | `sans` |
| Stat counter number | 40px / 46px | 30px / 36px | 700 | `mono` |
| Tech-stack badge / phone number in utility bar | 13px | 13px | 500 | `mono` |

Headings use `display` (Plus Jakarta Sans); body, nav, and buttons use `sans` (Inter). `mono` (Geist Mono) is a deliberate accent — never the default body font — reserved for: stat counter digits, project tech-stack badges, the utility bar's phone number, and any "code/technical" flavored label (e.g. a "View Source" GitHub button's label).

---

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `gap-1` | 4px | Icon + label gaps |
| `gap-2` | 8px | Badge/tag gaps |
| `gap-3` | 12px | Form field gaps |
| `gap-4` | 16px | Card internal gaps |
| `gap-6` | 24px | Between cards in a grid |
| `gap-8` | 32px | Between sub-sections |
| `gap-16` / `gap-20` | 64px / 80px | Between full page sections (hero, services, stats, about, projects, testimonials, CTA) |
| `p-6` | 24px | Standard card padding |
| `p-8` | 32px | Section container padding (mobile) |
| `px-6 py-3` | 24px / 12px | Button padding (default size) |

Content max-width: **1280px**, centered, with **24px** side padding on desktop, **16px** on mobile — narrower than a dashboard's 1440px since this is a marketing/reading-focused layout.

---

## Component Tokens

### Cards (Service, Project, Testimonial)

```
background: surface
border: 1px solid border
border-radius: 16px (rounded-xl equivalent, but using the site's own xl=20px on feature cards)
padding: 24px
box-shadow: 0px 2px 8px rgba(11,23,48,0.06), 0px 1px 3px rgba(11,23,48,0.08)
hover: translateY(-4px), shadow deepens to 0px 12px 24px rgba(11,23,48,0.12) — framer-motion, not CSS transition
```

### Buttons (Joy `Button`)

**Primary (navy):** `color="primary"` → background `primary`, text `textInverse`, radius `md` (8px). Used for secondary-important actions ("Learn More", "View All Projects").

**Accent / CTA (red):** `color="danger"` (mapped to accent red in `joyTheme.ts`) → background `accent`, text `textInverse`. Used **only** for true calls-to-action — see Color Usage Guide above.

**Outline:** `variant="outlined" color="neutral"` → background `surface`, border `border`, text `textPrimary`. Used for tertiary actions ("Cancel", filter pills in their unselected state).

**Ghost/text:** `variant="plain"` → no background, `textPrimary` or `primary` text with an underline-on-hover. Used for inline links ("Read More →" on service/testimonial cards).

### Nav Bar

```
utility bar: navy background, textInverse/rgba(255,255,255,0.75) text, 13px, font-mono for the phone number
main nav (default/top of page on hero routes): transparent background over the hero, textInverse links
main nav (scrolled, or on non-hero pages): surface background, border-b border-border, textPrimary links
active link: primary-colored text + 2px primary underline
CTA button: always accent-colored, regardless of scroll state
```

### Hero Section

```
background: full-bleed photo (src/assets/images/hero/), navy gradient overlay
  linear-gradient(120deg, rgba(10,27,51,0.88) 0%, rgba(10,27,51,0.55) 60%, rgba(10,27,51,0.35) 100%)
headline: textInverse, display font
subheadline: rgba(255,255,255,0.82)
CTA button: accent
```

This exact background+overlay formula is shared by every page's top banner, not just Home (2026-08-27) — Home's own `Hero.tsx` keeps its full staggered entrance animation, tagline row, and dual CTA; every other page uses the lighter `PageHeroBanner` (`src/components/common/PageHeroBanner.tsx`) with the same visual treatment but no animation choreography. See `ui-registry.md`.

### Stat Counter Strip

```
background: navy
number: textInverse, font-mono, 40px/700
label: rgba(255,255,255,0.72), 14px/500
divider between stats (desktop): 1px solid rgba(255,255,255,0.14)
```

### Project Card (Portfolio grid)

```
screenshot: 16:9, object-cover, rounded-t-xl
category tag: pill badge, top-left overlay on the screenshot, colored per categoryTokens
hover overlay: navy at 85% opacity fades in over the screenshot, revealing two icon buttons —
  "Live Preview" (ExternalLink icon, accent) and "View Code" (Github icon, outlined/white) — framer-motion opacity + scale
title: textPrimary, display font, 18px/600
excerpt: textSecondary, 2-line clamp
tech badges: font-mono, 12px, surfaceSecondary background pill, textSecondary text
```

### Testimonial Card

```
background: surface (on a surfaceSecondary section band)
quote: textPrimary, 16px, italic
avatar: 48px circle, object-cover
name: textPrimary, 15px/600
role/company: primary-colored, 13px/500
quote mark icon: primaryLight, decorative, top-left, low opacity
```

### Footer

```
top area background: navy
bottom bar background: navyElevated
headings (column titles): textInverse, 14px/600, uppercase, letter-spacing 0.04em
links: rgba(255,255,255,0.72), hover → textInverse
social icons: 36px circle, rgba(255,255,255,0.08) background, hover → accent background
bottom bar text: rgba(255,255,255,0.55), 13px
```

### Logo Mark

```
image: public/dsd_logo.png (the real DSD logo)
nav placement: ~40px height, object-contain, never cropped to a circle (the mark's swoosh shape is the identity, unlike a crest)
footer placement: ~48px height, object-contain
```

---

## Invariants

- Never use hex values directly in components — always reference the CSS-variable-backed tokens, via Joy's theme or the generated Tailwind classes.
- The theme (`light`/`dark`) is the only user-togglable appearance setting — there is no per-route or per-role palette switching (there are no roles). The navy sections (hero, stats, footer) are fixed by section in **both** themes — they never lighten, and are not what the toggle controls.
- `textInverse` is fixed white in both themes, never mode-dependent — it's paired only with surfaces (navy/primary/accent) that never lighten in dark mode. Only `textPrimary`/`textSecondary`/`textMuted` (paired with `background`/`surface`, which do invert) are theme-dependent. Never make a token invert between themes unless the surface it's used on also inverts — an inverting token paired with a fixed-dark surface is exactly how a prior project shipped invisible sidebar text in dark mode.
- Accent red (`accent`/`accentDark`/`accentLight`) is reserved for calls-to-action only — never used as a decorative color, a heading accent, or a passive badge. If a color choice isn't clearly a "click this to take an action" element, it isn't accent red.
- The four portfolio category colors (`categoryTokens`) are fixed and never reassigned per-project — Web Development is always `primary`, SEO always `success`, DevOps always `warning`, Mobile App Development always `accent`.
- Never use Tailwind's built-in color classes (`bg-blue-600`, `text-red-500`) — use project tokens only.
- `font-mono` (Geist Mono) is reserved for stat digits, tech-stack badges, and the utility-bar phone number — never used as a body or heading font.
- Every external link (live preview, GitHub, social icons) is visually marked with a small `ExternalLink`/`Github` lucide icon so a visitor always knows it leaves the site.
