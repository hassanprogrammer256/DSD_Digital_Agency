import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Code, ExternalLink } from "lucide-react";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ChecklistCard } from "@/components/common/ChecklistCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { projects } from "@/data/projects";
import { categoryTokens } from "@/theme/tokens";
import projectHeroBanner from "@/assets/images/hero/home_hero_bg.png";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [activeShot, setActiveShot] = useState(0);
  useDocumentTitle(project ? project.title : "Projects");

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const category = categoryTokens[project.category];
  const similarProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeroBanner
        image={projectHeroBanner}
        imagePosition="65% 20%"
        eyebrow={
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${category.bg} ${category.text}`}
            style={{ textTransform: "none" }}
          >
            {category.label}
          </span>
        }
        title={project.title}
        description={project.summary}
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <img
            src={project.screenshots[activeShot]}
            alt={`${project.title} screenshot ${activeShot + 1}`}
            className="w-full rounded-xl border border-border object-cover"
          />
          {project.screenshots.length > 1 && (
            <div className="mt-4 flex justify-center gap-3">
              {project.screenshots.map((shot, index) => (
                <button
                  key={shot}
                  type="button"
                  onClick={() => setActiveShot(index)}
                  aria-label={`Show screenshot ${index + 1}`}
                  className={`h-16 w-28 overflow-hidden rounded-md border-2 transition-colors ${
                    index === activeShot ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <img src={shot} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
                >
                  <Code size={16} />
                  View Code
                </a>
              )}
            </div>
          )}

          <p className="mt-12 leading-relaxed text-text-secondary">{project.description}</p>

          <h2 className="mt-10 text-lg font-semibold text-text-primary">Key Functionality</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.functionality.map((item) => (
              <ChecklistCard key={item}>{item}</ChecklistCard>
            ))}
          </div>

          <h2 className="mt-10 text-lg font-semibold text-text-primary">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-surface-secondary px-3 py-1 font-mono text-xs text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {similarProjects.length > 0 && (
        <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="More Work" title="Similar" highlight="Projects" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similarProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
