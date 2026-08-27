import { useEffect, useState, type ReactNode } from "react";
import { ShieldAlert } from "lucide-react";
import {
  CATEGORY_LABELS,
  isAllowed,
  openCookieSettings,
  subscribeToConsentChanges,
  type ConsentCategory,
} from "@/lib/cookieConsent";

type Props = {
  category: ConsentCategory;
  description: string;
  children: ReactNode;
};

// Wraps any third-party embed that should stay unloaded until the visitor has actually
// consented to its category — fulfills "block optional cookies until consent" structurally
// (the iframe/script simply isn't in the DOM yet) rather than loading it and hoping a
// separate opt-out mechanism catches up later. Reactive: flips the moment consent changes,
// no reload needed, since Manage Settings can be reopened from the footer at any time.
export function ConsentGate({ category, description, children }: Props) {
  // Lazy initializer covers the mount-time value; the effect below only needs to subscribe
  // to *future* changes (Manage Settings saving new preferences), not re-derive on mount —
  // `category` is a static prop at every call site in this app, never changes after mount.
  const [allowed, setAllowed] = useState(() => isAllowed(category));

  useEffect(() => {
    return subscribeToConsentChanges(() => setAllowed(isAllowed(category)));
  }, [category]);

  if (allowed) return <>{children}</>;

  return (
    <div className="flex h-full min-h-60 flex-col items-center justify-center gap-3 bg-surface-secondary p-6 text-center">
      <ShieldAlert size={24} className="text-text-muted" />
      <p className="max-w-xs text-sm text-text-secondary">
        {description} requires {CATEGORY_LABELS[category]} cookies, which you haven't allowed
        yet.
      </p>
      <button
        type="button"
        onClick={openCookieSettings}
        className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
      >
        Manage Cookie Settings
      </button>
    </div>
  );
}
