# Library Docs

Project-specific usage patterns for every third-party library in the DSD marketing site. This file only covers how we use each library in *this* project — general API documentation still applies; this file only overrides it where our usage is specific.

Read the relevant section before implementing any feature that touches these libraries.

---

## Before Using Any Library

1. **Check for an installed skill or MCP server** for any package-specific tooling available in this environment — use it before general training knowledge for fast-moving libraries (Tailwind v4 and MUI Joy have both shipped breaking changes across versions).
2. **Read this file** for project-specific rules.
3. Fall back to general knowledge only when neither of the above covers the case.

---

## react-router-dom

### Route Tree

```tsx
// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <App />, // Navbar + <Outlet/> + Footer
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:slug", element: <ProjectDetailPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
```

**Rules:**

- Every route renders inside the shared `App` layout (Navbar + Footer) — there is no route branch that skips it, since every page on this site shares the same chrome (unlike a role-guarded dashboard).
- On route change, scroll to top (`useLayoutEffect` + `window.scrollTo(0, 0)` in `App`, or a small `ScrollToTop` helper component) — a visitor navigating from a long `/projects` page to `/contact` should land at the top, not mid-scroll.
- `useParams<{ slug: string }>()` on `ProjectDetailPage` — if `projects.find(p => p.slug === slug)` returns `undefined`, render `<Navigate to="/projects" replace />` rather than crashing or rendering an empty page.

---

## Tailwind CSS v4

### CSS-First Config

```css
/* src/index.css — font @import MUST precede @import "tailwindcss": Tailwind expands its
   own import at build time, so anything placed after it ends up after non-import content
   in the generated CSS, which is an invalid position for a browser-level @import */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap");
@import "tailwindcss";

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

@theme inline {
  /* every entry proxies a plain custom property redefined per theme below — see
     ui-tokens.md → How to Use for why the indirection is necessary */
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  /* ...etc, see ui-tokens.md for the full token set */
}

:root { --primary: #123B8C; --accent: #E31E2D; /* ...etc, light values */ }
[data-theme="dark"] { --primary: #4C7FE0; --accent: #F2434C; /* ...etc, dark values */ }
```

```typescript
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

**Rules:**

- Tailwind v4 has **no `tailwind.config.js`** in this project — all theme configuration is the `@theme inline` block in `src/index.css`, per `ui-tokens.md`. Don't reintroduce a JS config file.
- Any `@import` for an external stylesheet (e.g. Google Fonts) must be placed **before** `@import "tailwindcss"` in the file — see the comment above; this produced a real build warning (`@import rules must precede all rules`) when built the other way around.
- The `@custom-variant dark (...)` line makes Tailwind's `dark:` utility prefix target this project's own `[data-theme="dark"]` attribute instead of its default `prefers-color-scheme` behavior — only needed as an escape hatch for a one-off style not already covered by a token; most color switching happens automatically through the tokens themselves.
- Tailwind handles **layout** (flex/grid, spacing, max-width, responsive breakpoints, one-off utilities).
- Joy handles **components** (anything interactive or with built-in state).
- It's expected and correct to see Tailwind classes on Joy's unstyled layout primitives (`Box`, `Stack`) — those aren't themed components.

---

## MUI Joy UI (`@mui/joy`)

### Provider Setup

```tsx
// src/main.tsx
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { joyTheme } from "@/theme/joyTheme";

<CssVarsProvider theme={joyTheme} defaultMode="light" disableTransitionOnChange>
  <CssBaseline />
  <App />
</CssVarsProvider>;
```

**Rules:**

- Joy UI is a **separate component system from MUI Material** — never import from `@mui/material`. Only `@mui/joy` components are used.
- `defaultMode="light"` is set once and never changed — it is **not** how this site's real light/dark toggle works. `joyTheme.ts`'s `colorSchemes.light`/`.dark` are defined identically (both proxy the same CSS variable names), so whichever one Joy thinks is active has no visual effect. The actual theme switching happens entirely through the CSS cascade via the `[data-theme]` attribute, owned by `src/theme/theme.ts` — see Theme Toggle below and `ui-tokens.md` → Theme Toggle. Never call `useColorScheme()`/its `setMode()` to try to toggle the site's theme; it only controls Joy's own internal (here, inert) scheme selection.
- All Joy components consume the theme built in `theme/joyTheme.ts` — never pass ad hoc `sx={{ color: "#..." }}` hex values; reference theme tokens or the semantic `color`/`variant` props.
- `color="danger"` is intentionally remapped to the brand **accent red** in `joyTheme.ts` (see `ui-tokens.md`) — use it for calls-to-action, not for destructive-action semantics (this site has no destructive actions).
- Joy `Button`, `Input`, `Textarea`, `Chip`, `Drawer`, `Tabs` are the primary building blocks — don't hand-roll equivalents with plain `div`s/`input`s.

---

## Theme Toggle (`src/theme/theme.ts`)

```typescript
// src/theme/theme.ts — framework-agnostic, no React, so it can run from index.html's
// blocking init script and be reused by any toggle UI
export type ThemeMode = "light" | "dark";
const STORAGE_KEY = "dsd-theme";

export function getSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function initTheme(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY);
  const mode: ThemeMode = stored === "light" || stored === "dark" ? stored : getSystemTheme();
  document.documentElement.setAttribute("data-theme", mode);
  return mode;
}

export function getCurrentTheme(): ThemeMode {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function toggleTheme(): ThemeMode {
  const next: ThemeMode = getCurrentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(STORAGE_KEY, next);
  return next;
}
```

```html
<!-- index.html <head>, before any stylesheet — prevents a flash of the wrong theme -->
<script>
  (function () {
    try {
      var stored = localStorage.getItem("dsd-theme");
      var mode = stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", mode);
    } catch (e) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  })();
</script>
```

```tsx
// A future Navbar toggle button — the only place toggleTheme() is ever called
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { getCurrentTheme, toggleTheme } from "@/theme/theme";

function ThemeToggle() {
  const [mode, setMode] = useState(getCurrentTheme());
  return (
    <button onClick={() => setMode(toggleTheme())} aria-label="Toggle theme">
      {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
```

**Rules:**

- `theme.ts` is the single source of truth for the active theme — components never read/write `localStorage` or the `data-theme` attribute directly, always through `getCurrentTheme()`/`toggleTheme()`.
- The `index.html` blocking script and `theme.ts`'s `initTheme()` intentionally duplicate the same resolution logic — the script must run synchronously before first paint (import cannot be lazy/async there), so it can't just call into the bundled module. Keep both in sync if the resolution logic ever changes.
- A component holding UI state for the current mode (e.g. to swap the toggle's icon) re-derives it from `getCurrentTheme()` on mount and updates local state in the toggle's own `onClick` — there is no global theme context/store, since only one component (the toggle button) ever needs to know the current mode reactively.

---

## framer-motion

### Page Transitions

```tsx
// src/App.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
```

### Scroll-Triggered Reveals

```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.4 }}
>
  <ServiceCard />
</motion.div>
```

### Stat Count-Up

```tsx
// src/components/common/StatCounter.tsx
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

type Props = { value: number; label: string };

export function StatCounter({ value, label }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref}>
      <motion.span className="font-mono">{rounded}</motion.span>
      <span>{label}</span>
    </div>
  );
}
```

**Rules:** see `ui-rules.md` → Motion for timing/stagger rules. Every `whileInView` reveal uses `viewport={{ once: true }}` — nothing on this site re-animates on repeated scroll.

---

## lucide-react

Import icons individually — never a barrel/wildcard import.

```tsx
import { ExternalLink, Github, CheckCircle2, Menu, X } from "lucide-react";
```

Suggested semantic mapping (keep consistent once chosen, add to `ui-registry.md`): `ExternalLink` — live preview / any outbound link; `Github` — view source; `CheckCircle2` — functionality list items; `Menu`/`X` — mobile nav open/close; `Phone`/`Mail`/`MapPin` — contact details; `ArrowRight` — inline "Learn More" links.

---

## react-toastify

```tsx
// src/main.tsx — mounted once, at the app root
import { ToastContainer } from "react-toastify";

<ToastContainer position="top-right" autoClose={5000} />;
```

```typescript
import { toast } from "react-toastify";

toast.success("Message sent — DSD will get back to you shortly.");
toast.error("Couldn't send your message — please try again or email info@dsdgrp.com directly.");
```

**Rules:** one `<ToastContainer />` mounted once at the app root. Messages are always human-readable, never a raw exception string. The error toast's message always includes the fallback direct email address, since this is the only feedback channel this site has for a failed send.

---

## zod + react-hook-form

```tsx
// src/pages/ContactPage.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contactSchema";
import { sendContactMessage } from "@/lib/email";
import { toast } from "react-toastify";

const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
} = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

async function onSubmit(values: ContactFormValues) {
  try {
    await sendContactMessage(values);
    toast.success("Message sent — DSD will get back to you shortly.");
    reset();
  } catch (err) {
    console.error("[ContactPage/onSubmit]", err);
    toast.error("Couldn't send your message — please try again or email info@dsdgrp.com directly.");
  }
}
```

**Rules:** `register()` wires every field; `errors.<field>?.message` renders inline below each field (`ui-rules.md`). Submit button's Joy `loading` prop is bound to `isSubmitting`. Form only resets on a **successful** send — a failed send keeps the visitor's typed values so they don't have to retype.

---

## EmailJS (`@emailjs/browser`)

```typescript
// src/lib/email.ts
import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "@/lib/validation/contactSchema";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendContactMessage(values: ContactFormValues): Promise<void> {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { from_name: values.name, from_email: values.email, subject: values.subject, message: values.message },
    { publicKey: PUBLIC_KEY },
  );
}
```

**Rules:**

- This is the **only** network call in the entire project. It runs entirely client-side — there is no server to relay through.
- The EmailJS template (configured on emailjs.com, not in this codebase) must be set to deliver to `info@dsdgrp.com`.
- Never call `emailjs.send()` with unvalidated data — it's only ever invoked from `ContactPage`'s `onSubmit`, which react-hook-form only calls once zod validation passes.
- The public key is safe to ship in the client bundle by EmailJS's own design (it identifies the account, it doesn't authorize arbitrary sends) — still read from `import.meta.env`, never hardcoded, so it can be rotated without a code change.

---

## Geist Mono (`geist` npm package)

The `geist` package is built primarily for Next.js's `next/font/local` API, which doesn't apply to a plain Vite app — reaching directly into `node_modules/geist/dist/fonts/...` from a CSS `url()` is fragile (an internal package path that can shift on a version bump). Instead, the variable woff2 is copied once into the source tree, where it's just a normal Vite-bundled asset:

```bash
cp node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2 src/assets/fonts/geist-mono/
```

```css
/* src/index.css */
@font-face {
  font-family: "Geist Mono";
  src: url("./assets/fonts/geist-mono/GeistMono-Variable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

**Rules:** used only where `ui-tokens.md` specifies `font-mono` (stat digits, tech-stack badges, the utility bar's phone number) — never as the default body or heading font. The variable font covers the full 100–900 weight range in one file, so no separate `@font-face` block per weight is needed. If the `geist` package's internal `dist/` path ever changes on an upgrade, re-copy from the new path — the committed copy in `src/assets/fonts/` is what actually ships, not a live reference into `node_modules`.
