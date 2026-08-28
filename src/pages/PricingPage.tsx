import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { pricingTiers } from "@/data/pricing";
import pricingBanner from "@/assets/images/hero/pricing_hero.jpg";

export function PricingPage() {
  useDocumentTitle("Pricing");

  return (
    <>
      <PageHeroBanner
        image={pricingBanner}
        imagePosition="center"
        eyebrow="Pricing"
        title={<>Plans That <span className="text-accent">Fit Your Business</span></>}
        description="Every project starts with a conversation — these are starting points, not a fixed menu. Reach out and we'll scope it to what you actually need."
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex flex-col rounded-xl border p-6 ${
                tier.highlighted ? "border-accent shadow-lg" : "border-border"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-3 w-fit rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-semibold text-accent">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-semibold text-text-primary">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{tier.description}</p>

              <div className="mt-5 flex items-baseline gap-1.5">
                {tier.period && <span className="text-xs text-text-muted">{tier.period}</span>}
                <span className="text-3xl font-bold text-text-primary">{tier.price}</span>
              </div>

              <ul className="mt-6 flex flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CircleCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {tier.highlighted ? (
                  <CtaButton component={Link} to="/contact" className="w-full justify-center">
                    Get Started
                  </CtaButton>
                ) : (
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
