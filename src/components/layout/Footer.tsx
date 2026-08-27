import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/common/SocialIcon";
import { openCookieSettings } from "@/lib/cookieConsent";
import { services } from "@/data/services";

const logo = "/dsd_logo.png";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technologies", label: "Technologies" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://twitter.com", label: "X (Twitter)", Icon: XIcon },
];

const LEGAL_LINKS = [
  { to: "/cookie-policy", label: "Cookie Policy" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/partner-with-us", label: "Partner With Us" },
  { to: "/website-disclaimer", label: "Website Disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="DSD" className="h-11 w-auto object-contain" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              DSD is a digital marketing agency helping businesses grow their brand, connect
              with customers, and increase sales online.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/80 transition-colors hover:bg-accent hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Office No. 1, 1st Floor, Al Hareb Building, Umm Hurair Road, Oud Metha, P.O. Box
                  181040, Dubai, United Arab Emirates
                </span>
              </li>
              <li>
                <a
                  href="tel:+917585889093"
                  className="flex items-center gap-2.5 font-mono text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone size={16} className="shrink-0" />
                  +91 7585889093
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dsdgrp.com"
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail size={16} className="shrink-0" />
                  info@dsdgrp.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy-elevated">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-4 text-center md:flex-row md:justify-between md:px-6">
          <p className="text-[13px] text-white/55">© {year} DSD. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[13px] text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              {/* Permanent Cookie Settings control — reopens the same modal used by the
                  consent banner rather than navigating, so it's always reachable even after
                  the initial banner has been dismissed. */}
              <button
                type="button"
                onClick={openCookieSettings}
                className="text-[13px] text-white/55 transition-colors hover:text-white"
              >
                Cookie Settings
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
