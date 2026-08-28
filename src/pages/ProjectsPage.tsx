import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { projects } from "@/data/projects";
import { categoryTokens } from "@/theme/tokens";
import type { ProjectCategory } from "@/types";
import projectsBanner from "@/assets/images/hero/projects_hero.jpg";

type FilterValue = ProjectCategory | "all";

// Solid background for the *selected* pill — categoryTokens' own `.bg` is a light tint meant
// for badges (light bg + colored text), not a filled pill, so this is a separate mapping to
// the same underlying tokens rather than reusing categoryTokens directly.
const FILTERS: { value: FilterValue; label: string; activeClass: string }[] = [
  { value: "all", label: "All", activeClass: "bg-primary" },
  { value: "web-development", label: categoryTokens["web-development"].label, activeClass: "bg-primary" },
  // { value: "seo", label: categoryTokens.seo.label, activeClass: "bg-success" },
  // { value: "devops", label: categoryTokens.devops.label, activeClass: "bg-warning" },
  { value: "mobile-app-development", label: categoryTokens["mobile-app-development"].label, activeClass: "bg-accent" },
];

export function ProjectsPage() {
  useDocumentTitle("Projects");
  const [selected, setSelected] = useState<FilterValue>("all");
  const filtered = selected === "all" ? projects : projects.filter((p) => p.category === selected);

  return (
    <>
      <PageHeroBanner
        image={projectsBanner}
        imagePosition="center 40%"
        eyebrow="Our Work"
        title={<>Featured <span className="text-accent">Projects</span></>}
        description="A sample of what we've built — filter by discipline to see relevant work."
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((filter) => {
              const isSelected = selected === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelected(filter.value)}
                  className={
                    isSelected
                      ? `rounded-full px-4 py-2 text-sm font-medium text-white ${filter.activeClass}`
                      : "rounded-full border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary hover:text-primary"
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-text-muted">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
