export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "dsd-theme";

export function getSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getStoredTheme(): ThemeMode | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function applyTheme(mode: ThemeMode): void {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem(STORAGE_KEY, mode);
}

export function initTheme(): ThemeMode {
  const mode = getStoredTheme() ?? getSystemTheme();
  document.documentElement.setAttribute("data-theme", mode);
  return mode;
}

export function getCurrentTheme(): ThemeMode {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

export function toggleTheme(): ThemeMode {
  const next: ThemeMode = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}
