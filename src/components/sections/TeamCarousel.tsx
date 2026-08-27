import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TeamMemberCard } from "@/components/common/TeamMemberCard";
import { team } from "@/data/team";

export function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("a");
    const step = (card?.offsetWidth ?? 280) + 24;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="team" className="scroll-mt-24 bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The People Behind DSD"
          title="Meet the"
          highlight="Team"
          description="The specialists behind every DSD project — from development to strategy."
        />

        <div className="relative mt-10">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {team.map((member) => (
              <TeamMemberCard key={member.slug} member={member} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous team member"
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface p-2 text-text-primary shadow-md transition-colors hover:border-primary hover:text-primary md:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next team member"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface p-2 text-text-primary shadow-md transition-colors hover:border-primary hover:text-primary md:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
