// Icon-badge color rotation for card rows (services, etc.) — per ui-rules.md, a row of
// cards should never repeat the same badge color twice in a row of 3. Reuses only the
// existing semantic/brand tokens, never a new hex — see ui-tokens.md's "never define colors
// anywhere but tokens.ts" invariant.
const BADGE_COLORS = [
  { bg: "bg-primary-light", text: "text-primary" },
  { bg: "bg-accent-light", text: "text-accent" },
  { bg: "bg-success-light", text: "text-success" },
  { bg: "bg-warning-light", text: "text-warning" },
  { bg: "bg-info-light", text: "text-info" },
] as const;

export function badgeColorAt(index: number) {
  return BADGE_COLORS[index % BADGE_COLORS.length];
}
