import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { services } from "@/data/services";

// Curated, not services.slice(0, 3) — picks a representative spread across DSD's core
// marketing identity (web + search + paid) rather than whichever 3 happen to be first in
// the data file. See progress-tracker.md's note on this being a deliberate, revisitable
// choice once real service-popularity data exists.
const FEATURED_SLUGS = ["website-development", "seo-optimization", "paid-advertising-ppc"];
const featured = FEATURED_SLUGS.map((slug) => services.find((s) => s.slug === slug)).filter(
  (s): s is (typeof services)[number] => s !== undefined,
);

export function ServicesOverview() {
  return (
    <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="What We Do" title="Our Digital" highlight="Services" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ServiceCard service={service} colorIndex={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
