import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck } from "lucide-react";
import type { Service } from "@/types";
import { serviceIcons } from "@/lib/icons";
import { badgeColorAt } from "@/lib/utils";

type Props = {
  service: Service;
  colorIndex: number;
  detailed?: boolean;
};

export function ServiceCard({ service, colorIndex, detailed = false }: Props) {
  const Icon = serviceIcons[service.icon];
  const badge = badgeColorAt(colorIndex);

  return (
    <motion.div
      id={detailed ? service.slug : undefined}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="scroll-mt-24 rounded-xl border border-border bg-surface p-6 shadow-[0px_2px_8px_rgba(11,23,48,0.06),0px_1px_3px_rgba(11,23,48,0.08)]"
    >
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${badge.bg}`}>
        {Icon && <Icon size={20} className={badge.text} />}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-text-primary">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {detailed ? service.description : service.summary}
      </p>

      {detailed && (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <CircleCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to={`/services/${service.slug}`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View Full Details
            <ArrowRight size={14} />
          </Link>
        </>
      )}

      {!detailed && (
        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Learn More
          <ArrowRight size={14} />
        </Link>
      )}
    </motion.div>
  );
}
