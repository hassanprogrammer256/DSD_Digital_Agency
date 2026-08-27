import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { badgeColorAt } from "@/lib/utils";
import { industryIcons } from "@/lib/icons";
import { industries } from "@/data/industries";
import industriesBanner from "@/assets/images/hero/home_hero_bg.png";

export function IndustriesPage() {
  useDocumentTitle("Industries");

  return (
    <>
      <PageHeroBanner
        image={industriesBanner}
        imagePosition="40% 35%"
        eyebrow="Who We Work With"
        title={<>Industries We <span className="text-accent">Serve</span></>}
        description="Real sectors DSD has built for — not a generic checklist."
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry.icon];
              const badge = badgeColorAt(index);
              return (
                <div key={industry.slug} className="rounded-xl border border-border bg-surface p-6">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${badge.bg}`}>
                    <Icon size={20} className={badge.text} />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-text-primary">{industry.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
