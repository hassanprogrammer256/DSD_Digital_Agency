import { Link, Navigate, useParams } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { landingOffers } from "@/data/landingPages";

const logo = "/dsd_logo.png";

// Reached only after a successful lead submission (see LandingPage's onSubmit). Renders from
// the offer's own copy, not router state, so a direct visit or page refresh still works —
// same defensive pattern as every other slug-resolved page on this site.
export function LandingThankYouPage() {
  const { slug } = useParams<{ slug: string }>();
  const offer = landingOffers.find((o) => o.slug === slug);
  useDocumentTitle(offer ? `Thank You — ${offer.headline}` : "Thank You");

  if (!offer) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface text-text-primary">
      <header className="flex justify-center border-b border-border py-6">
        <img src={logo} alt="DSD" className="h-9 w-auto object-contain" />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center md:px-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-light">
          <CircleCheck size={32} className="text-success" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-text-primary md:text-4xl">
          {offer.thankYouHeadline}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">{offer.thankYouBody}</p>
        <p className="mt-2 text-sm font-medium text-primary">{offer.nextStepNote}</p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-sm text-text-muted">While you wait, take a look around:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
            >
              Browse Our Services
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
            >
              Follow Us on LinkedIn
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} DSD. All rights reserved.
      </footer>
    </div>
  );
}
