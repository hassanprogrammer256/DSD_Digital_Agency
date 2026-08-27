import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import heroBg from "@/assets/images/hero/home_hero_bg.png";

const container = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const item = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center overflow-hidden bg-navy bg-cover bg-center pt-24 md:min-h-[680px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(10,27,51,0.88) 0%, rgba(10,27,51,0.55) 60%, rgba(10,27,51,0.35) 100%)",
        }}
      />

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="relative mx-auto max-w-7xl px-4 py-16 md:px-6"
      >
        <motion.p variants={item} className="text-sm font-semibold uppercase tracking-wide text-white/60">
          Digital Marketing Agency — Dubai, UAE
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white md:text-[52px] md:leading-[1.1]"
        >
          Grow Your Brand. Reach Your Customers. Increase Your Sales.
        </motion.h1>
        <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-white/82 md:text-lg">
          DSD is your external team of specialists — SEO, paid advertising, web design, and
          content marketing, working together to grow your business online.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/70"
        >
          <span>Plan with a clear strategy</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
          <span>Build for stability</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
          <span>Grow with long-term vision</span>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <CtaButton component={Link} to="/contact" size="lg">
            Get Started
          </CtaButton>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Schedule a Consultation
            <Calendar size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
