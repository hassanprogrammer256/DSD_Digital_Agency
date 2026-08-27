import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Handshake, Mail, MapPin, Phone, Rocket, Target } from "lucide-react";
import { LinkedinIcon } from "@/components/common/SocialIcon";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ConsentGate } from "@/components/common/ConsentGate";
import { CtaButton } from "@/components/common/CtaButton";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { founder } from "@/data/founder";
import storyPhoto from "@/assets/images/about/story.jpeg";
import heroBannerPhoto from "@/assets/images/hero/home_hero_bg.png";

const VALUE_PROPS = [
  {
    icon: Target,
    title: "End-to-End Expertise",
    description: "From your first website to ongoing SEO and hosting, one team owns the whole picture — no handoffs between disconnected vendors.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnership",
    description: "Clear scope, clear reporting, direct access to the people doing the work — not a rotating cast of account managers.",
  },
  {
    icon: Rocket,
    title: "Built to Grow With You",
    description: "Every site and system we build is structured to scale — not a one-off project that needs replacing in a year.",
  },
];

const MAP_QUERY = "Al Hareb Building, Umm Hurair Road, Oud Metha, Dubai, United Arab Emirates";
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`;

export function AboutPage() {
  useDocumentTitle("About");

  return (
    <>
      <PageHeroBanner
        image={heroBannerPhoto}
        imagePosition="20% 35%"
        eyebrow="About DSD"
        title="About Us"
        description="DSD is your external team of specialists — helping businesses grow their brand, connect with customers, and increase sales using online platforms, search engines, and digital tools."
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src={storyPhoto}
              alt="DSD team members discussing a client project"
              className="h-72 w-full object-cover lg:h-96"
              style={{ objectPosition: "75% 35%" }}
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Our Story</p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              Built on results, not <span className="text-accent">promises</span>
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              DSD started as a small web design shop in Dubai and grew into a full external
              marketing team by staying close to one idea: an agency should be judged on what it
              actually delivers. Today we build websites and web applications, run SEO and paid
              advertising, manage social media and content, and keep it all working long after
              launch — for businesses across the region and beyond.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Our mission is simple — give every client a digital presence that actually earns
              its keep, built by a team that treats their business like it's our own.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why DSD" title="Why Businesses" highlight="Choose Us" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUE_PROPS.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl border border-border bg-surface p-6 text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                  <prop.icon size={22} className="text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-text-primary">{prop.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Meet the Founder
          </p>
          <img
            src={founder.photo}
            alt={founder.name}
            className="mx-auto mt-5 h-32 w-32 rounded-full object-cover"
          />
          <h2 className="mt-5 font-display text-2xl font-bold text-text-primary">
            {founder.name}
          </h2>
          <p className="mt-1 text-base font-medium text-primary">{founder.title}</p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="mailto:info@dsdgrp.com"
              aria-label={`Email ${founder.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

          <p className="mt-6 text-left leading-relaxed text-text-secondary">{founder.bio}</p>
        </div>
      </section>

      <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Our Office
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
              Find Us in <span className="text-accent">Dubai</span>
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-text-secondary">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                Office No. 1, 1st Floor, Al Hareb Building, Umm Hurair Road, Oud Metha, P.O. Box
                181040, Dubai, United Arab Emirates
              </li>
              <li>
                <a
                  href="tel:+917585889093"
                  className="flex items-center gap-3 font-mono text-text-secondary transition-colors hover:text-primary"
                >
                  <Phone size={18} className="shrink-0 text-primary" />
                  +91 7585889093
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dsdgrp.com"
                  className="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary"
                >
                  <Mail size={18} className="shrink-0 text-primary" />
                  info@dsdgrp.com
                </a>
              </li>
            </ul>
          </div>

          <div className="h-80 overflow-hidden rounded-xl border border-border">
            <ConsentGate category="embedded" description="This map">
              <iframe
                title="DSD office location"
                src={MAP_EMBED_SRC}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ConsentGate>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
            <Handshake size={24} className="text-primary" />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary">
            Referral Programme
          </p>
          <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
            Grow With <span className="text-accent">Us</span>
          </h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Share your unique referral link with entrepreneurs and businesses seeking reliable
            corporate services in the UAE. When your referral becomes a client, you may receive
            referral benefits in accordance with our agreed programme terms. Become a partner
            today and let us succeed together.
          </p>
          <div className="mt-6">
            <CtaButton component={Link} to="/partner-with-us">
              Partner With Us
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
