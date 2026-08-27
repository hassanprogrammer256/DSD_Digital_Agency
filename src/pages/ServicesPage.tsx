import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/common/ServiceCard";
import { TeamCarousel } from "@/components/sections/TeamCarousel";
import { CtaButton } from "@/components/common/CtaButton";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import { services } from "@/data/services";
import servicesBanner from "@/assets/images/hero/home_hero_bg.png";

export function ServicesPage() {
  useDocumentTitle("Services");

  return (
    <>
      <PageHeroBanner
        image={servicesBanner}
        imagePosition="70% 30%"
        eyebrow="What We Do"
        title={<>Our <span className="text-accent">Services</span></>}
        description="From building your website to growing it, DSD covers every part of your digital presence."
      />

      <section className="bg-surface px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
            >
              <ServiceCard service={service} colorIndex={index} detailed />
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="relative bg-navy bg-cover bg-center px-4 py-20 text-center md:px-6"
        style={{ backgroundImage: `url(${servicesBanner})`, backgroundPosition: "30% 40%" }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Not sure which service fits your business?
          </h2>
          <p className="mt-3 text-white/75">
            Tell us what you're trying to achieve and we'll point you to the right service — or
            build a plan that combines a few.
          </p>
          <div className="mt-7">
            <CtaButton component={Link} to="/contact">
              Talk to Our Team
            </CtaButton>
          </div>
        </div>
      </section>

      <TeamCarousel />
    </>
  );
}
