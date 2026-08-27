import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { CircleCheck, MailX, ShieldCheck } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { sendLandingPageLead } from "@/lib/email";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { landingLeadSchema, type LandingLeadValues } from "@/lib/validation/landingLeadSchema";
import { landingOffers } from "@/data/landingPages";
import { testimonials } from "@/data/testimonials";

// public/dsd_logo.png is served as-is from the root — see architecture.md's public/ convention.
const logo = "/dsd_logo.png";

// Standalone route, mounted OUTSIDE <App/>'s layout (see router.tsx) — deliberately no
// Navbar, Footer, or CookieConsentBanner. This follows the high-converting-landing-page
// checklist: one goal (fill the form), nothing to click away to. The logo below is a plain
// <img>, not wrapped in a <Link> — the one deliberate exception to "every DSD logo links
// home" elsewhere on the site, because a clickable logo is exactly the kind of exit ramp this
// page is built to not have.
export function LandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const offer = landingOffers.find((o) => o.slug === slug);
  useDocumentTitle(offer ? offer.headline : "");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LandingLeadValues>({ resolver: zodResolver(landingLeadSchema) });

  if (!offer) {
    return <Navigate to="/" replace />;
  }

  const testimonial = testimonials.find((t) => t.id === offer.testimonialId);

  // Non-null assertions below are safe: this function is only ever invoked from the form
  // rendered further down, which doesn't exist unless the `!offer` early-return above already
  // passed — TypeScript just can't carry that narrowing into a nested function declaration.
  async function onSubmit(values: LandingLeadValues) {
    try {
      await sendLandingPageLead(offer!.slug, values);
      navigate(`/lp/${offer!.slug}/thank-you`);
    } catch (err) {
      console.error("[LandingPage/onSubmit]", err);
      toast.error("Something went wrong — please try again, or call us directly.");
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface text-text-primary">
      <header className="flex justify-center border-b border-border py-6">
        <img src={logo} alt="DSD" className="h-9 w-auto object-contain" />
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl font-bold leading-tight text-text-primary md:text-4xl">
              {offer.headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">{offer.subheadline}</p>

            <div className="mt-8 rounded-xl border border-border bg-surface-secondary p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {offer.hookTitle}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {offer.hookPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CircleCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {testimonial && (
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm italic leading-relaxed text-text-secondary">
                      "{testimonial.quote}"
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-text-primary">
                      {testimonial.name}, {testimonial.role}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-primary" />
                  Your information stays private
                </span>
                <span className="flex items-center gap-1.5">
                  <MailX size={14} className="text-primary" />
                  No spam, unsubscribe anytime
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-10">
            <div className="rounded-2xl border border-border bg-surface-secondary p-6 shadow-[0px_4px_16px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-display text-xl font-bold text-text-primary">{offer.formTitle}</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-4" noValidate>
                <FormControl error={!!errors.name} required>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your name" {...register("name")} />
                  {errors.name && <FormHelperText>{errors.name.message}</FormHelperText>}
                </FormControl>

                <FormControl error={!!errors.email} required>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email" placeholder="you@company.com" {...register("email")} />
                  {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
                </FormControl>

                <CtaButton type="submit" loading={isSubmitting} disabled={isSubmitting} size="lg" className="mt-2">
                  {offer.ctaLabel}
                </CtaButton>
              </form>
              <p className="mt-4 text-center text-xs text-text-muted">
                Prefer to talk? Call{" "}
                <a href="tel:+917585889093" className="font-mono text-primary hover:underline">
                  +91 7585889093
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} DSD. See our{" "}
        <a href="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        .
      </footer>
    </div>
  );
}
