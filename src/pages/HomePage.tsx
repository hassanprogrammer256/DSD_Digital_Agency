import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { Hero } from "@/components/sections/Hero";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClosingCta } from "@/components/sections/ClosingCta";

export function HomePage() {
  useDocumentTitle("");

  return (
    <>
      <Hero />
      <CtaStrip />
      <ServicesOverview />
      <StatsStrip />
      <AboutTeaser />
      <FeaturedProjects />
      <Testimonials />
      <ClosingCta />
    </>
  );
}
