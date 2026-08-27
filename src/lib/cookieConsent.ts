// Categories match context/legal source (Cookie Policy) exactly — necessary is always on and
// not user-togglable; the other 4 default to false and stay false until an explicit choice.
export type ConsentCategory = "functional" | "analytics" | "advertising" | "embedded";

export type ConsentPreferences = Record<ConsentCategory, boolean>;

export const CATEGORY_LABELS: Record<ConsentCategory, string> = {
  functional: "Functional",
  analytics: "Analytics",
  advertising: "Advertising & Marketing",
  embedded: "Social Media & Embedded Content",
};

export type StoredConsent = {
  preferences: ConsentPreferences;
  decidedAt: string;
};

const STORAGE_KEY = "dsd-cookie-consent";
export const OPEN_SETTINGS_EVENT = "dsd:open-cookie-settings";
const CONSENT_CHANGED_EVENT = "dsd:cookie-consent-changed";

const ALL_FALSE: ConsentPreferences = {
  functional: false,
  analytics: false,
  advertising: false,
  embedded: false,
};

const ALL_TRUE: ConsentPreferences = {
  functional: true,
  analytics: true,
  advertising: true,
  embedded: true,
};

export function getStoredConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredConsent;
  } catch {
    return null;
  }
}

export function hasDecided(): boolean {
  return getStoredConsent() !== null;
}

export function getPreferences(): ConsentPreferences {
  return getStoredConsent()?.preferences ?? ALL_FALSE;
}

export function isAllowed(category: ConsentCategory): boolean {
  return getPreferences()[category];
}

function persist(preferences: ConsentPreferences): void {
  const stored: StoredConsent = { preferences, decidedAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: stored }));
}

export function acceptAll(): void {
  persist(ALL_TRUE);
}

export function rejectAll(): void {
  persist(ALL_FALSE);
}

export function savePreferences(preferences: ConsentPreferences): void {
  persist(preferences);
}

export function subscribeToConsentChanges(callback: (stored: StoredConsent) => void): () => void {
  const handler = (event: Event) => callback((event as CustomEvent<StoredConsent>).detail);
  window.addEventListener(CONSENT_CHANGED_EVENT, handler);
  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, handler);
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
