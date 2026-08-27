import type { ConsentCategory } from "@/lib/cookieConsent";

export type CookieInventoryItem = {
  name: string;
  category: "necessary" | ConsentCategory;
  provider: string;
  purpose: string;
  expiry: string;
};

// A real, code-level audit of everything this site actually stores or loads from a
// third-party origin as of the date below — not a generic template list. Re-verify and
// update whenever a new script, embed, or storage key is added to the codebase (see
// progress-tracker.md -> Known Gaps). Audited 2026-08-27:
// - `localStorage` keys: grepped every `localStorage.setItem`/`getItem` call in `src/`, AND
//   checked the *actual* browser localStorage in a live Playwright session — the grep alone
//   would have missed 3 keys (`joy-mode`, `joy-color-scheme-dark`, `joy-color-scheme-light`)
//   that MUI Joy's `CssVarsProvider` writes automatically on mount, unrelated to this site's
//   own `theme.ts` (which we use instead — see ui-tokens.md -> Theme Toggle). This is exactly
//   why the source checklist calls for a *live* scan rather than a code-only guess.
// - Third-party origins: grepped every external `src`/`href`/`<iframe>` in components and
//   index.html (Google Fonts, the Google Maps embed on AboutPage, EmailJS's API endpoint).
// - No analytics or advertising script is integrated into this site at all — those two
//   categories exist in the consent system as a ready gate for if/when one is added, not
//   because one is active today.
export const cookieInventory: CookieInventoryItem[] = [
  {
    name: "dsd-theme",
    category: "necessary",
    provider: "DSD (first-party, localStorage — no HTTP cookie)",
    purpose: "Remembers your light/dark theme preference between visits.",
    expiry: "Persistent until cleared in your browser",
  },
  {
    name: "dsd-cookie-consent",
    category: "necessary",
    provider: "DSD (first-party, localStorage — no HTTP cookie)",
    purpose: "Stores your cookie preference choices so we don't ask again every visit.",
    expiry: "Persistent until cleared in your browser",
  },
  {
    name: "joy-mode, joy-color-scheme-dark, joy-color-scheme-light",
    category: "necessary",
    provider: "MUI Joy UI (first-party library code, localStorage — no HTTP cookie)",
    purpose: "Written automatically by our component library on load. Not used to control this site's actual light/dark switching (that's the first-party dsd-theme key above) — an inert side effect of the library, kept here for a fully accurate inventory rather than omitted.",
    expiry: "Persistent until cleared in your browser",
  },
  {
    name: "Google Maps embed cookies (e.g. NID, 1P_JAR)",
    category: "embedded",
    provider: "Google (maps.google.com) — set only once the embedded map on the About page loads",
    purpose: "Enables the interactive office-location map and Google's own map-service functionality.",
    expiry: "Set and controlled by Google — commonly ranges from session-length up to 6 months",
  },
  {
    name: "Google Fonts requests",
    category: "necessary",
    provider: "Google (fonts.googleapis.com, fonts.gstatic.com)",
    purpose: "Delivers the site's typefaces. A network request for a static font file — Google does not set a cookie for this.",
    expiry: "Not applicable — no cookie set",
  },
  {
    name: "EmailJS API request",
    category: "necessary",
    provider: "EmailJS (api.emailjs.com)",
    purpose: "Delivers your message when you submit the Contact form. A one-time outbound API call, not a cookie or persistent tracker.",
    expiry: "Not applicable — no cookie set",
  },
];
