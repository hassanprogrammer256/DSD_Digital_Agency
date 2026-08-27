import { Link, Navigate, useParams } from "react-router-dom";
import { Trophy } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { StatCounter } from "@/components/common/StatCounter";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/common/ProjectCard";
import { TeamMemberCard } from "@/components/common/TeamMemberCard";
import { ChecklistCard } from "@/components/common/ChecklistCard";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { team } from "@/data/team";
import serviceHeroPhoto from "@/assets/images/hero/home_hero_bg.png";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  useDocumentTitle(service ? service.title : "Services");

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = projects.filter((p) => service.relatedProjectSlugs.includes(p.slug));
  const relatedTeam = team.filter((m) => service.teamMemberSlugs.includes(m.slug));

  return (
    <>
      <PageHeroBanner
        image={serviceHeroPhoto}
        imagePosition="55% 45%"
        align="left"
        eyebrow="Services"
        title={service.heroHeadline}
        description={service.summary}
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <CtaButton component={Link} to="/contact">
            Hire Us
          </CtaButton>
          <Link
            to="/pricing"
            className="inline-flex items-center rounded-md border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>
      </PageHeroBanner>

      {service.stats.length > 0 && (
        <section className="bg-primary px-4 py-12 md:px-6">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-12 gap-y-8">
            {service.stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </section>
      )}

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="leading-relaxed text-text-secondary">{service.description}</p>
          <h2 className="mt-10 text-lg font-semibold text-text-primary">What's Included</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.included.map((item) => (
              <ChecklistCard key={item}>{item}</ChecklistCard>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Portfolio" title="Related" highlight="Projects" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedTeam.length > 0 && (
        <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Who You'll Work With" title="Team" highlight="Members" />
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {relatedTeam.map((member) => (
                <TeamMemberCard key={member.slug} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {service.awards.length > 0 && (
        <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Recognition" title="Awards &" highlight="Achievements" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.awards.map((award) => (
                <div
                  key={award.title}
                  className="rounded-xl border border-border bg-surface p-6 text-left"
                >
                  <Trophy size={24} className="text-accent" />
                  <p className="mt-3 font-semibold text-text-primary">{award.title}</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {award.issuer} — {award.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCta />
    </>
  );
}
