import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutTeaserImg from "@/assets/images/about/about_dsd.jpeg";

export function AboutTeaser() {
  return (
    <section className="bg-surface-secondary px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.img
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          src={aboutTeaserImg}
          alt="DSD team at work"
          className="w-full rounded-xl object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Who We Are</p>
          <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
            Get to know about <span className="text-accent">DSD</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Based in Dubai, DSD helps businesses build, market, and grow their presence online —
            from custom websites and web apps to SEO, hosting, and social media advertising. We
            work as an extension of your team, not just a vendor.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Learn More
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
