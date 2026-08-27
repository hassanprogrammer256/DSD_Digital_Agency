import { Link } from "react-router-dom";

export function CtaStrip() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:flex-row sm:text-left md:px-6">
        <div>
          <p className="text-lg font-semibold text-white">Ready to talk about your project?</p>
          <p className="mt-1 text-sm text-white/80">
            Tell us what you're building — we'll get back to you within one business day.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center rounded-md border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
