import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import contactPhoto from "@/assets/contact1.png";

// REAL content, transcribed verbatim from "partner_with_us.txt" (supplied 2026-08-27) — not
// placeholder copy. Contact block uses the real "DSD Corporate Services" entity details, same
// as the three legal pages. See progress-tracker.md for the identity discrepancy this
// surfaced.
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
            Grow with DSD Corporate Services by joining our referral network. Share your unique
            referral link with entrepreneurs and businesses seeking reliable corporate services
            in the UAE. When your referral becomes a client, you may receive referral benefits in
            accordance with our agreed programme terms.
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
              href="mailto:info@dsdcop.com"
              className="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary"
            >
              <Mail size={18} className="shrink-0 text-primary" />
              info@dsdcop.com
            </a>
            <a
              href="tel:+971585889033"
              className="flex items-center gap-3 font-mono text-text-secondary transition-colors hover:text-primary"
            >
              <Phone size={18} className="shrink-0 text-primary" />
              +971 58 588 9033
            </a>
            <span className="flex items-start gap-3 text-text-secondary">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
              1st Floor, Office 06, Al Habeb Building, Umm Hurair Street, Oud Metha, Dubai, UAE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
