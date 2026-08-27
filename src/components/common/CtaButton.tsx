import { Button, type ButtonProps } from "@mui/joy";
import type { ComponentProps } from "react";
import type { Link } from "react-router-dom";

// joyTheme.ts's palette is frozen at literal light-mode hex (Joy can't accept a var(--...)
// string at construction time — see that file's comment). This wrapper overrides the
// rendered background/hover explicitly with the live CSS variables, so the accent CTA
// color actually tracks the real light/dark toggle instead of staying stuck on light-mode
// red. Use this instead of a raw `<Button color="danger">` for every call-to-action.
//
// Joy's Button is a fully generic OverridableComponent, and a wrapper function component
// can't propagate that generic through JSX inference — rather than fighting that, this
// explicitly types the one polymorphic case this project actually uses (`component={Link}`
// for navigation CTAs) alongside plain button usage (onClick, type="submit").
type CtaButtonProps = ButtonProps & {
  component?: typeof Link;
  to?: ComponentProps<typeof Link>["to"];
};

export function CtaButton({ sx, ...props }: CtaButtonProps) {
  return (
    <Button
      color="danger"
      {...props}
      sx={{
        backgroundColor: "var(--color-accent)",
        "&:hover": { backgroundColor: "var(--color-accent-dark)" },
        "&:active": { backgroundColor: "var(--color-accent-dark)" },
        ...sx,
      }}
    />
  );
}
