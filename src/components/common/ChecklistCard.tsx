import type { LucideIcon } from "lucide-react";
import { CircleCheck } from "lucide-react";

type Props = {
  icon?: LucideIcon;
  tone?: "primary" | "accent";
  surface?: "surface" | "surface-secondary";
  children: string;
};

export function ChecklistCard({ icon: Icon = CircleCheck, tone = "primary", surface = "surface-secondary", children }: Props) {
  const badge = tone === "accent" ? { bg: "bg-accent-light", text: "text-accent" } : { bg: "bg-primary-light", text: "text-primary" };
  const bg = surface === "surface" ? "bg-surface" : "bg-surface-secondary";

  return (
    <div className={`flex items-start gap-2.5 rounded-lg border border-border ${bg} p-3.5`}>
      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${badge.bg}`}>
        <Icon size={14} className={badge.text} />
      </span>
      <span className="text-sm leading-relaxed text-text-secondary">{children}</span>
    </div>
  );
}
