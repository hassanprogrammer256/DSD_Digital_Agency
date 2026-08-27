import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CookieSettingsModal } from "@/components/common/CookieSettingsModal";
import { OPEN_SETTINGS_EVENT, acceptAll, hasDecided, rejectAll } from "@/lib/cookieConsent";

export function CookieConsentBanner() {
  // Lazy initializer — this only needs to read localStorage once, at mount, not "sync" on
  // every render, so a plain useState(() => ...) covers it without an effect.
  const [visible, setVisible] = useState(() => !hasDecided());
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setVisible(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setVisible(false);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
    setVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="region"
            aria-label="Cookie consent"
            className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-surface px-4 py-5 shadow-[0_-4px_16px_rgba(11,23,48,0.1)] md:px-6"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-text-secondary">
                We use cookies to run this site securely and, only with your permission, to
                power a few optional features. See our{" "}
                <Link to="/cookie-policy" className="text-primary hover:underline">
                  Cookie Policy
                </Link>{" "}
                for the exact details.
              </p>

              {/* Reject / Manage / Accept are deliberately the same size and visual weight —
                  never bury Reject as a small link while Accept is a large button. */}
              <div className="flex shrink-0 flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={() => setSettingsOpen(true)}
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
                >
                  Manage Settings
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookieSettingsModal open={settingsOpen} onClose={handleSettingsClose} />
    </>
  );
}
