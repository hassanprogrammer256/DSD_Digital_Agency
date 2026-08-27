import { Link, Navigate, useParams } from "react-router-dom";
import { CtaButton } from "@/components/common/CtaButton";
import { ChecklistCard } from "@/components/common/ChecklistCard";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { complianceIcons } from "@/lib/icons";
import { complianceAreas } from "@/data/compliance";
import complianceHeroPhoto from "@/assets/images/hero/home_hero_bg.png";

function NoteParagraph({ note }: { note: string }) {
  const [body, citation] = note.split(" — ");
  return (
    <p className="text-sm leading-relaxed text-text-secondary">
      {body}
      {citation && <span className="text-text-muted"> — {citation}</span>}
    </p>
  );
}

export function ComplianceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = complianceAreas.find((a) => a.slug === slug);
  useDocumentTitle(area ? area.title : "Company Compliance");

  if (!area) {
    return <Navigate to="/compliance" replace />;
  }

  const Icon = complianceIcons[area.icon];
  // The last `intro` paragraph doubles as the lead-in to the bullet list (identical to
  // `obligationsLabel`), so it's rendered once, right above the list, not twice.
  const leadParagraphs = area.intro.slice(0, -1);

  return (
    <>
      <PageHeroBanner
        image={complianceHeroPhoto}
        imagePosition="40% 55%"
        align="left"
        eyebrow={`Company Compliance — Area ${area.number} of ${complianceAreas.length}`}
        title={
          <span className="flex items-center justify-center gap-3 lg:justify-start">
            {Icon && (
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 lg:flex">
                <Icon size={22} className="text-accent" />
              </span>
            )}
            {area.title}
          </span>
        }
        description={area.summary}
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <CtaButton component={Link} to="/contact">
            Talk to an Advisor
          </CtaButton>
          <Link
            to="/compliance"
            className="inline-flex items-center rounded-md border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            All Compliance Areas
          </Link>
        </div>
      </PageHeroBanner>

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          {leadParagraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-text-secondary">
              {paragraph}
            </p>
          ))}

          <p className="mt-6 font-semibold text-text-primary">{area.obligationsLabel}</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {area.obligations.map((item) => (
              <ChecklistCard key={item}>{item}</ChecklistCard>
            ))}
          </div>

          {area.notes.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border bg-surface-secondary p-6">
              {area.notes.map((note) => (
                <NoteParagraph key={note} note={note} />
              ))}
            </div>
          )}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
