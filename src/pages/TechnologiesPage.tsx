import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { technologies } from "@/data/technologies";
import type { TechnologyCategory } from "@/types";
import techBanner from "@/assets/images/hero/technologies_hero.jpg";

// Fixed display order — not derived from the data array, so the page always reads
// frontend-to-integrations regardless of how technologies.ts happens to be ordered.
const CATEGORY_ORDER: TechnologyCategory[] = [
  "Frontend",
  "Backend",
  "Databases",
  "Mobile",
  "Ecommerce",
  "Smart AI",
  "Design Tools",
  "Integrations",
];

export function TechnologiesPage() {
  useDocumentTitle("Technologies");

  return (
    <>
      <PageHeroBanner
        image={techBanner}
        imagePosition="20% center"
        eyebrow="How We Build"
        title={<>Our <span className="text-accent">Technologies</span></>}
        description="The real, current stack behind DSD's work — not a buzzword list."
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {CATEGORY_ORDER.map((category) => {
              const items = technologies.filter((tech) => tech.category === category);
              if (items.length === 0) return null;

              return (
                <div key={category}>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                    {category}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech.name}
                        className="rounded-full bg-surface-secondary px-3 py-1 font-mono text-xs text-text-secondary"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
