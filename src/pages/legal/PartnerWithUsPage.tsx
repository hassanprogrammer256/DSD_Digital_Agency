import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import contactPhoto from "@/assets/contact1.png";

// Real content, originally transcribed from "partner_with_us.txt" (supplied 2026-08-27),
// rewritten 2026-08-28 for DSD's real identity as a digital marketing agency instead of the
// unrelated "DSD Corporate Services" entity the source text described — see
// progress-tracker.md for the discrepancy and the explicit user decision to resolve it.
export function PartnerWithUsPage() {
  useDocumentTitle("Partner With Us");

  return (
    <div className="bg-surface px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <img
            src={contactPhoto}
            alt="Two people shaking hands to seal a partnership"
            className="h-72 w-full object-cover lg:h-full"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Referral Programme
          </p>
          <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">Partner With Us</h1>
          <p className="mt-4 text-text-secondary">
            Grow with DSD by joining our referral network. Share your unique referral link with
            entrepreneurs and businesses seeking reliable digital marketing, web development, or
            branding services in the UAE and beyond. When your referral becomes a client, you may
            receive referral benefits in accordance with our agreed programme terms.
          </p>
          <p className="mt-2 font-medium text-text-primary">
            Become a partner today and let us succeed together.
          </p>

          <div className="mt-8">
            <CtaButton component={Link} to="/contact">
              Get In Touch
            </CtaButton>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6">
            <a
              href="mailto:info@dsdgrp.com"
              className="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary"
            >
              <Mail size={18} className="shrink-0 text-primary" />
              info@dsdgrp.com
            </a>
            <a
              href="tel:+917585889093"
              className="flex items-center gap-3 font-mono text-text-secondary transition-colors hover:text-primary"
            >
              <Phone size={18} className="shrink-0 text-primary" />
              +91 7585889093
            </a>
            <span className="flex items-start gap-3 text-text-secondary">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
              Office No. 1, 1st Floor, Al Hareb Building, Umm Hurair Road, Oud Metha, Dubai, UAE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
