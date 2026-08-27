import { useNavigate } from "react-router-dom";
import { Code, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { categoryTokens } from "@/theme/tokens";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const navigate = useNavigate();
  const category = categoryTokens[project.category];
  const goToDetail = () => navigate(`/projects/${project.slug}`);

  return (
    // A plain <a>/<Link> can't wrap this card — the hover overlay below needs its own real
    // <a> tags (Live Preview / GitHub), and nested anchors are invalid HTML that React 19
    // flags as a hydration hazard. role="link" + onClick/onKeyDown gives the same click and
    // keyboard behavior without that nesting.
    <div
      role="link"
      tabIndex={0}
      onClick={goToDetail}
      onKeyDown={(e) => {
        if (e.key === "Enter") goToDetail();
      }}
      className="group block cursor-pointer overflow-hidden rounded-xl border border-border bg-surface shadow-[0px_2px_8px_rgba(11,23,48,0.06),0px_1px_3px_rgba(11,23,48,0.08)] transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.screenshots[0]}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover"
        />

        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold ${category.bg} ${category.text}`}
        >
          {category.label}
        </span>

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-navy/85 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Live Preview"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-105"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="View Code"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-transform hover:scale-105"
            >
              <Code size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-text-secondary">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-secondary px-2.5 py-0.5 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
