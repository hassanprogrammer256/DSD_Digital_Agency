import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Building2, ChevronDown, Cpu, Mail, Menu, Phone, Users, X, type LucideIcon } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { services, serviceCategoryMeta } from "@/data/services";

// public/dsd_logo.png is served as-is from the root — referenced by string path, not
// imported, per Vite's convention for the public/ directory (see architecture.md).
const logo = "/dsd_logo.png";

type NavDropdownItem = { to: string; label: string; icon?: LucideIcon };
type NavGroup = { label: string; items: NavDropdownItem[] };

type NavItem = {
  to: string;
  label: string;
  dropdown?: NavDropdownItem[];
  groups?: NavGroup[];
  extraLinks?: NavDropdownItem[];
  layout?: "categorized" | "list";
};

const NAV_LINKS: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    to: "/services",
    label: "Services",
    layout: "categorized",
    groups: serviceCategoryMeta.map((category) => ({
      label: category.label,
      items: services
        .filter((service) => service.category === category.slug)
        .map((service) => ({ to: `/services/${service.slug}`, label: service.title })),
    })),
    extraLinks: [
      { to: "/services#team", label: "Meet the Team", icon: Users },
      { to: "/technologies", label: "Technologies", icon: Cpu },
      { to: "/industries", label: "Industries We Serve", icon: Building2 },
    ],
  },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  {
    to: "/legal",
    label: "Legal",
    dropdown: [
      { to: "/cookie-policy", label: "Cookie Policy" },
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/partner-with-us", label: "Partner With Us" },
      { to: "/website-disclaimer", label: "Website Disclaimer" },
    ],
  },
  { to: "/contact", label: "Contact" },
];

const SCROLL_THRESHOLD = 60;

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  // Tracks raw scroll position only — decoupled from route, so navigating to/from Home
  // never needs a separate effect to "reset" it; `transparent` below derives the actual
  // display state fresh on every render instead.
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(
    () => window.scrollY > SCROLL_THRESHOLD,
  );
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolledPastThreshold(latest > SCROLL_THRESHOLD);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const transparent = isHome && !scrolledPastThreshold;
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(null);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Utility bar — desktop only, hides once the main nav goes solid on non-hero pages too */}
        <div
          className={`hidden bg-navy px-6 text-xs text-white/75 transition-[height,opacity] duration-200 md:block ${
            transparent ? "h-9 opacity-100" : "h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between">
            <span>Growing businesses online, from Dubai to the world.</span>
            <div className="flex items-center gap-5">
              <a href="tel:+917585889093" className="flex items-center gap-1.5 font-mono hover:text-white">
                <Phone size={13} />
                +91 7585889093
              </a>
              <a href="mailto:info@dsdgrp.com" className="flex items-center gap-1.5 hover:text-white">
                <Mail size={13} />
                info@dsdgrp.com
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav
          className={`transition-colors duration-200 ${
            transparent ? "bg-transparent" : "border-b border-border bg-surface"
          }`}
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="DSD" className="h-9 w-auto object-contain md:h-10" />
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => {
                const hasDropdown = Boolean(link.dropdown || link.groups);
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                    onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `relative flex items-center gap-1 py-1 text-[15px] font-medium transition-colors ${
                          isActive
                            ? "text-primary"
                            : transparent
                              ? "text-white/90 hover:text-white"
                              : "text-text-primary hover:text-primary"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {hasDropdown && <ChevronDown size={14} />}
                          {isActive && (
                            <motion.span
                              layoutId="nav-underline"
                              className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                              transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>

                    <AnimatePresence>
                      {hasDropdown && openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute top-full mt-3 rounded-xl border border-border bg-surface p-4 shadow-lg ${
                            link.layout === "categorized"
                              ? "left-0 w-[720px] max-w-[92vw]"
                              : "left-1/2 w-64 -translate-x-1/2 p-2"
                          }`}
                        >
                          {link.layout === "categorized" && link.groups ? (
                            <>
                              <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                                {link.groups.map((group) => (
                                  <div key={group.label}>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                                      {group.label}
                                    </p>
                                    <div className="mt-2 flex flex-col gap-1">
                                      {group.items.map((item) => (
                                        <Link
                                          key={item.to}
                                          to={item.to}
                                          onClick={() => setOpenDropdown(null)}
                                          className="rounded-md px-2 py-1.5 text-sm text-text-primary transition-colors hover:bg-surface-secondary hover:text-primary"
                                        >
                                          {item.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {link.extraLinks && link.extraLinks.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4">
                                  {link.extraLinks.map((item) => (
                                    <Link
                                      key={item.to}
                                      to={item.to}
                                      onClick={() => setOpenDropdown(null)}
                                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
                                    >
                                      {item.icon && <item.icon size={15} />}
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            link.dropdown?.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setOpenDropdown(null)}
                                className="block rounded-md px-3 py-2 text-sm text-text-primary transition-colors hover:bg-surface-secondary hover:text-primary"
                              >
                                {item.label}
                              </Link>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <ThemeToggle inverse={transparent} />
              <CtaButton component={Link} to="/contact" className="hidden md:inline-flex">
                Contact Us
              </CtaButton>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`flex h-9 w-9 items-center justify-center rounded-full md:hidden ${
                  transparent ? "text-white" : "text-text-primary"
                }`}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[80%] max-w-xs flex-col overflow-y-auto bg-navy px-6 py-6 md:hidden"
            >
              <div className="flex items-center justify-between">
                <img src={logo} alt="DSD" className="h-8 w-auto object-contain" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link) =>
                  link.dropdown || link.groups ? (
                    <div key={link.label}>
                      <div className="flex items-center rounded-md">
                        <NavLink
                          to={link.to}
                          onClick={closeMobileMenu}
                          className={({ isActive }) =>
                            `flex-1 rounded-md px-3 py-3 text-base font-medium ${
                              isActive ? "bg-white/10 text-white" : "text-white/75 hover:text-white"
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                        <button
                          type="button"
                          aria-label={`Toggle ${link.label} submenu`}
                          onClick={() =>
                            setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)
                          }
                          className="flex h-11 w-11 items-center justify-center text-white/75 hover:text-white"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              mobileDropdownOpen === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {mobileDropdownOpen === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.groups
                              ? link.groups.map((group) => (
                                  <div key={group.label} className="mb-3">
                                    <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-white/45">
                                      {group.label}
                                    </p>
                                    {group.items.map((item) => (
                                      <Link
                                        key={item.to}
                                        to={item.to}
                                        onClick={closeMobileMenu}
                                        className="block rounded-md px-3 py-2 text-sm text-white/65 hover:text-white"
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                ))
                              : link.dropdown?.map((item) => (
                                  <Link
                                    key={item.to}
                                    to={item.to}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-white/65 hover:text-white"
                                  >
                                    {item.icon && <item.icon size={15} className="shrink-0" />}
                                    {item.label}
                                  </Link>
                                ))}
                            {link.extraLinks && link.extraLinks.length > 0 && (
                              <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-3">
                                {link.extraLinks.map((item) => (
                                  <Link
                                    key={item.to}
                                    to={item.to}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-white/85 hover:text-white"
                                  >
                                    {item.icon && <item.icon size={15} className="shrink-0" />}
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      end={link.to === "/"}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `rounded-md px-3 py-3 text-base font-medium ${
                          isActive ? "bg-white/10 text-white" : "text-white/75 hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ),
                )}
              </div>

              <CtaButton component={Link} to="/contact" onClick={closeMobileMenu} className="mt-8">
                Contact Us
              </CtaButton>

              <div className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/70">
                <a href="tel:+917585889093" className="flex items-center gap-2 font-mono hover:text-white">
                  <Phone size={14} />
                  +91 7585889093
                </a>
                <a href="mailto:info@dsdgrp.com" className="flex items-center gap-2 hover:text-white">
                  <Mail size={14} />
                  info@dsdgrp.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
