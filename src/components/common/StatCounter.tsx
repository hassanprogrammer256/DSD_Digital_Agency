import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import type { Stat } from "@/types";

// Only the fields actually rendered — decoupled from Stat's full shape (which carries an
// `id` this component never needs) so it can also be used with ServiceStat, which has no id.
type Props = Pick<Stat, "value" | "suffix" | "label">;

export function StatCounter({ value, suffix, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  // Always rounded before display — an in-progress animated float renders as visual noise
  // (see code-standards.md -> Numeric Display), and this guarantees landing exactly on the
  // target integer at animation end.
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-0.5 font-mono text-4xl font-bold text-white md:text-[40px]">
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="mt-2 text-sm font-medium text-white/72">{label}</p>
    </div>
  );
}
