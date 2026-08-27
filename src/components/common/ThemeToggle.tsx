import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { getCurrentTheme, toggleTheme } from "@/theme/theme";

type Props = {
  inverse?: boolean;
};

export function ThemeToggle({ inverse = false }: Props) {
  const [mode, setMode] = useState(getCurrentTheme());

  return (
    <button
      type="button"
      onClick={() => setMode(toggleTheme())}
      aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={
        inverse
          ? "flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          : "flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary"
      }
    >
      {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
