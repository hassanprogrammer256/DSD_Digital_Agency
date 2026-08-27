import { useState } from "react";
import { Modal, ModalClose, ModalDialog, Switch } from "@mui/joy";
import { CtaButton } from "@/components/common/CtaButton";
import {
  CATEGORY_LABELS,
  getPreferences,
  savePreferences,
  type ConsentCategory,
  type ConsentPreferences,
} from "@/lib/cookieConsent";
import { cookieInventory } from "@/data/cookieInventory";

const CATEGORY_DESCRIPTIONS: Record<ConsentCategory, string> = {
  functional: "Remembers preferences and provides enhanced features.",
  analytics: "Helps us understand how visitors use the site so we can improve it. Not currently active on this site — see the inventory below.",
  advertising: "Used to measure and personalize advertising, where configured. Not currently active on this site — see the inventory below.",
  embedded: "Powers embedded content, such as the office map on our About page.",
};

const CATEGORIES = Object.keys(CATEGORY_LABELS) as ConsentCategory[];

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CookieSettingsModal({ open, onClose }: Props) {
  // Lazy initializer only — no effect needed. Joy's Modal unmounts its content when
  // `open={false}` (no `keepMounted` passed), so this component itself fully remounts each
  // time it opens, and the initializer re-reads fresh preferences from localStorage for free.
  const [prefs, setPrefs] = useState<ConsentPreferences>(getPreferences);

  const toggle = (category: ConsentCategory, checked: boolean) => {
    setPrefs((current) => ({ ...current, [category]: checked }));
  };

  const handleSave = () => {
    savePreferences(prefs);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog size="lg" sx={{ maxWidth: 640, width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
        <ModalClose />
        <h2 className="font-display text-xl font-semibold text-text-primary">Cookie Settings</h2>
        <p className="mt-1 text-sm text-text-secondary">
          Choose which optional cookies we're allowed to use. Strictly necessary cookies keep
          the site working and can't be turned off.
        </p>

        <div className="mt-5 flex flex-col divide-y divide-border">
          <div className="flex items-center justify-between gap-4 py-3">
            <div>
              <p className="text-sm font-semibold text-text-primary">Strictly Necessary</p>
              <p className="text-xs text-text-muted">
                Required for the site to function and stay secure. Always active.
              </p>
            </div>
            <Switch checked disabled aria-label="Strictly necessary — always on" />
          </div>

          {CATEGORIES.map((category) => (
            <div key={category} className="flex items-center justify-between gap-4 py-3">
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {CATEGORY_LABELS[category]}
                </p>
                <p className="text-xs text-text-muted">{CATEGORY_DESCRIPTIONS[category]}</p>
              </div>
              <Switch
                checked={prefs[category]}
                onChange={(event) => toggle(category, event.target.checked)}
                aria-label={`Toggle ${CATEGORY_LABELS[category]} cookies`}
              />
            </div>
          ))}
        </div>

        <details className="mt-5">
          <summary className="cursor-pointer text-sm font-medium text-primary">
            View the exact cookies and storage used on this site
          </summary>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs">
              <thead>
                <tr className="border-b border-border text-text-secondary">
                  <th className="py-2 pr-3 font-semibold">Name</th>
                  <th className="py-2 pr-3 font-semibold">Category</th>
                  <th className="py-2 pr-3 font-semibold">Provider</th>
                  <th className="py-2 font-semibold">Expiry</th>
                </tr>
              </thead>
              <tbody>
                {cookieInventory.map((item) => (
                  <tr key={item.name} className="border-b border-border align-top text-text-secondary">
                    <td className="py-2 pr-3 font-mono">{item.name}</td>
                    <td className="py-2 pr-3 capitalize">{item.category}</td>
                    <td className="py-2 pr-3">{item.provider}</td>
                    <td className="py-2">{item.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
          >
            Cancel
          </button>
          <CtaButton onClick={handleSave}>Save Preferences</CtaButton>
        </div>
      </ModalDialog>
    </Modal>
  );
}
