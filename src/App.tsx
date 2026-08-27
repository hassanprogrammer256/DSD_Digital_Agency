import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentBanner } from "@/components/common/CookieConsentBanner";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    // bg-background/text-text-primary are set explicitly here, not left to `body` — Joy's
    // CssBaseline applies its own background from Joy's internal palette, which is frozen
    // at light mode (joyTheme.ts's defaultMode is never toggled) and would otherwise show
    // through as a stray white background in dark mode wherever a page's own content is
    // shorter than the viewport. This div owning the background outright sidesteps that
    // cascade fight entirely instead of trying to out-specificity CssBaseline.
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
          className={`flex-1 ${isHome ? "" : "pt-16 md:pt-18"}`}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}
