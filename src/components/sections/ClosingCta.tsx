import { Link } from "react-router-dom";
import { CtaButton } from "@/components/common/CtaButton";

export function ClosingCta() {
  return (
    <section className="bg-navy px-4 py-16 text-center md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to grow your business?
        </h2>
        <p className="mt-3 text-white/72">
          Let's talk about what DSD can build, market, and grow for you.
        </p>
        <div className="mt-8">
          <CtaButton component={Link} to="/contact" size="lg">
            Get Started
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
