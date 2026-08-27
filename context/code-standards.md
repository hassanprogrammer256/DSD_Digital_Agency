# Code Standards

Implementation rules and conventions for the DSD marketing site — a frontend-only, statically-built React/TypeScript project. The AI agent must follow these in every session without exception. These rules prevent pattern drift across sessions.

---

## Engineering Mindset

- **Think before implementing** — check which page/section this belongs to in `build-plan.md` and whether an equivalent pattern already exists in `ui-registry.md` before writing a component.
- **Read context files first** — never assume; verify against `architecture.md` and `ui-tokens.md`.
- **Scope is sacred** — this is a static marketing site with no backend, no auth, no CMS (see `project-overview.md` → Features Out of Scope). Do not introduce any of those to "make it more complete" — that is a scope change requiring an explicit decision, not a default.
- **Brand consistency is non-negotiable** — every color traces back to `theme/tokens.ts`, sourced from the DSD logo. No component ships with an ad hoc color choice.
- **Clean over clever** — simple, readable code a junior developer can follow.
- **One thing at a time** — complete one feature/page fully (per `build-plan.md`) before the next.
- **Failures are expected** — the one external call in this whole project (`emailjs.send()`) is wrapped in try/catch, surfaced as a toast, and never left as an unhandled promise rejection.

---

## There Is No Backend

This project has no server, API, or database — see `architecture.md`. Every rule below is about the React/TypeScript frontend. If a task seems to require server-side logic (e.g. "validate this on the server too"), that is a signal the task has drifted out of this project's scope — flag it rather than inventing a backend.

---

## TypeScript

- Strict mode enabled — no exceptions.
- Never use `any` — use `unknown` and narrow.
- Never use type assertions (`as SomeType`) unless unavoidable, and comment why.
- All function parameters and return types explicitly typed.
- Use `type` for object shapes/unions; `interface` only for extendable component props.
- Use `const` by default; `let` only when reassignment is necessary.

---

## File and Folder Naming

- Folders: kebab-case — `components/layout`, `assets/images`.
- Component files: PascalCase — `ProjectCard.tsx`, `StatCounter.tsx`.
- Data/utility files: camelCase — `projects.ts`, `contactSchema.ts`, `utils.ts`.
- One component per file — never export multiple components from one file.
- Index/barrel files only in `components/common/` — never elsewhere.

---

## Component Structure

```typescript
// 1. External imports
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/joy";

// 2. Internal imports
import { CategoryBadge } from "@/components/common/CategoryBadge";
import type { Project } from "@/types";

// 3. Type definitions
type Props = {
  project: Project;
};

// 4. Component
export function ProjectCard({ project }: Props) {
  // state
  // derived values
  // handlers
  // return JSX
}
```

- Never use default exports for components — always named exports.
- Props type defined directly above the component, not in a shared file unless truly shared.
- No inline styles — Joy `sx` prop or Tailwind classes only, using tokens from `theme/tokens.ts`.

---

## Static Content (`src/data/`)

- All site content (services, projects, testimonials, stats) is a typed, hand-authored array in `src/data/*.ts` — never fetched, never hardcoded inline in a page/component.
- Every array element is typed against `src/types/index.ts` (`Service`, `Project`, `Testimonial`, `Stat`) — a new field on any of these means updating the type first, then every existing data entry, not just the new one.
- A `Project`'s `liveUrl` and `githubUrl` fields are both optional (`string | undefined`) — a project may legitimately have neither, one, or both. Never fabricate a placeholder URL for a missing one; the UI omits the corresponding button entirely (`ui-rules.md`).
- `Project.slug` is unique and kebab-case, hand-authored (not auto-generated from the title at render time) — it's the URL, so it must be stable even if the title copy changes later.

```typescript
// src/types/index.ts
export type ProjectCategory = "web-development" | "seo" | "devops" | "mobile-app-development";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  functionality: string[];
  techStack: string[];
  screenshots: string[];       // imported asset paths, src/assets/images/projects/{slug}/
  liveUrl?: string;
  githubUrl?: string;
};
```

---

## Forms (react-hook-form + zod)

- Every form uses `useForm` with `zodResolver(schema)` — never manual `useState`-per-field form handling.
- Validation schemas live in `src/lib/validation/`, one file per form, imported by both the form component and (if ever needed) reused elsewhere — never redefined inline in the component.
- `onSubmit` is only ever reached with already-validated data — no additional manual validation inside the handler.

```typescript
// src/lib/validation/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
```

---

## Error Handling (frontend)

- Never show a raw error message to the visitor — map to a human-readable `react-toastify` toast (e.g. "Something went wrong sending your message — please try again or email us directly at info@dsdgrp.com", not the raw EmailJS error).
- Console errors always include a context prefix: `[ContactPage/onSubmit]`.
- Never leave an empty `catch` block.

---

## Numeric Display (stat counters)

- The animated stat count-up (`useCountUp`, driven by `framer-motion`'s `useMotionValue`/`useTransform` or `requestAnimationFrame`) always rounds the in-progress value to an integer before rendering (`Math.round(value)`) — never render a raw animated float mid-count, and always land exactly on the target integer at animation end.

---

## Comments

- No comments explaining *what* the code does — code must be self-explanatory.
- Comments only for *why* — e.g. why a project card's overlay buttons call `stopPropagation()`.
- Never leave TODO comments in committed code.

---

## Environment Variables

All environment variables are Vite-prefixed (`VITE_...`) and read via `import.meta.env` — never hardcoded.

| Variable | Used In |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | `src/lib/email.ts` |
| `VITE_EMAILJS_TEMPLATE_ID` | `src/lib/email.ts` |
| `VITE_EMAILJS_PUBLIC_KEY` | `src/lib/email.ts` |

Defined in `.env.local` for local dev (gitignored) and in the hosting provider's environment panel for production. The EmailJS public key is safe to ship in the client bundle by the service's own design — see `architecture.md`.

---

## Dependencies

Approved dependencies for this project:

- `react`, `react-dom` — app runtime
- `react-router-dom` — routing
- `@mui/joy`, `@emotion/react`, `@emotion/styled` — component library (Joy's peer deps)
- `tailwindcss`, `@tailwindcss/vite` — utility styling (Tailwind v4, CSS-first config)
- `framer-motion` — animation
- `lucide-react` — icons
- `react-toastify` — toasts
- `react-hook-form` — form state
- `zod`, `@hookform/resolvers` — validation schema + resolver
- `@emailjs/browser` — contact form email delivery (no backend)
- `geist` — Geist Mono font (`geist/font/mono`)

Never install a new package without checking: does Joy UI already have this component? Does the browser/`Intl` API already provide this? Is there a simpler native solution? Update this list before adding anything new. In particular, never add a state-management library (Redux, Zustand, etc.) — this site's only state is local component state (form values, the active portfolio filter, mobile nav open/closed) and none of it needs to be global.
