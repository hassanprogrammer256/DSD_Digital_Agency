import { Link } from "react-router-dom";
import { ArrowRight, Cookie, Handshake, ShieldCheck, TriangleAlert, type LucideIcon } from "lucide-react";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { badgeColorAt } from "@/lib/utils";
import legalBanner from "@/assets/images/hero/legal_hero.jpg";

// Hub page for the Navbar's "Legal" dropdown — gives that nav trigger a real route of its
// own (2026-08-27), matching the pattern every other dropdown-carrying nav item (Services,
// Compliance) already follows: the trigger links somewhere real, the dropdown is a shortcut
// to its children, not the only way in. The 4 linked pages were rewritten 2026-08-28 to
// carry DSD's real digital-marketing identity (see progress-tracker.md) — this hub's own
// copy is kept in sync.
const LEGAL_PAGES: { to: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    to: "/cookie-policy",
    title: "Cookie Policy",
    description: "What cookies and similar technologies this site uses, and how to manage your preferences.",
    icon: Cookie,
  },
  {
    to: "/privacy-policy",
    title: "Privacy Policy",
    description: "What personal information DSD collects, why, and your rights over it.",
    icon: ShieldCheck,
  },
  {
    to: "/partner-with-us",
    title: "Partner With Us",
    description: "Join the referral programme and earn benefits for clients you introduce to DSD.",
    icon: Handshake,
  },
  {
    to: "/website-disclaimer",
    title: "Website Disclaimer",
    description: "The terms governing use of this website, including liability and licensing information.",
    icon: TriangleAlert,
  },
];

export function LegalPage() {
  useDocumentTitle("Legal");

  return (
    <>
      <PageHeroBanner
        image={legalBanner}
        imagePosition="60% 30%"
        eyebrow="Legal"
        title={<>Policies &amp; <span className="text-accent">Agreements</span></>}
        description="The documents governing how this website and DSD's digital marketing services work."
      />

      <div className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {LEGAL_PAGES.map((page, index) => {
              const Icon = page.icon;
              const badge = badgeColorAt(index);
              return (
                <Link
                  key={page.to}
                  to={page.to}
                  className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${badge.bg}`}>
                    <Icon size={20} className={badge.text} />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-text-primary">{page.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{page.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read More
                    <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
