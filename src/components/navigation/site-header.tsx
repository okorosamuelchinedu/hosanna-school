"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";

/* ─────────────────────────────────────────────────────────────────
   Navigation structure
───────────────────────────────────────────────────────────────── */
const aboutItems = [
  { label: "About Hosanna", href: "/about" },
  { label: "Our Story",     href: "/about/our-story" },
  { label: "Facilities",    href: "/about/facilities" },
  { label: "Faculty",       href: "/about/faculty" },
  { label: "Student Life",  href: "/about/student-life" },
];

const programmesItems = [
  { label: "All Programmes", href: "/programmes" },
  { label: "Catering",       href: "/catering" },
  { label: "Fashion",        href: "/fashion" },
  { label: "Admissions",     href: "/admissions" },
];

type DropdownId = "about" | "programmes" | null;

type NavItem =
  | { type: "link";     label: string; href: string }
  | { type: "dropdown"; id: DropdownId & string; label: string; href: string; items: { label: string; href: string }[] };

const navigation: NavItem[] = [
  { type: "link",     label: "Home",       href: "/" },
  { type: "dropdown", id: "about",      label: "About",      href: "/about",      items: aboutItems },
  { type: "dropdown", id: "programmes", label: "Programmes", href: "/programmes", items: programmesItems },
  { type: "link",     label: "Gallery",    href: "/gallery" },
  { type: "link",     label: "Contact",    href: "/contact" },
];

/* ─────────────────────────────────────────────────────────────────
   Desktop dropdown — receives shared open state from parent
───────────────────────────────────────────────────────────────── */
function DesktopDropdown({
  item,
  transparent,
  pathname,
  openId,
  setOpenId,
}: {
  item: Extract<NavItem, { type: "dropdown" }>;
  transparent: boolean;
  pathname: string;
  openId: DropdownId;
  setOpenId: (id: DropdownId) => void;
}) {
  const isOpen = openId === item.id;
  const active = pathname === item.href || pathname.startsWith(item.href);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenId(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setOpenId]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setOpenId(item.id)}
      onMouseLeave={() => setOpenId(null)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setOpenId(isOpen ? null : item.id)}
        className={[
          "relative flex items-center gap-1 px-3 py-2 rounded text-[13px] font-medium transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2",
          transparent
            ? "text-white/90 hover:text-white"
            : active
              ? "text-brand-700"
              : "text-ink-600 hover:text-ink-900",
        ].join(" ")}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
        {active && !transparent && (
          <span
            className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-700"
            aria-hidden="true"
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.14, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full z-50 mt-0 min-w-50 overflow-hidden rounded-xl border border-line bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
          >
            {item.items.map((sub) => {
              const subActive = pathname === sub.href;
              return (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setOpenId(null)}
                  className={[
                    "flex items-center px-4 py-3 text-[13px] font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:bg-brand-50",
                    subActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-600 hover:bg-off-white hover:text-ink-900",
                  ].join(" ")}
                >
                  {sub.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Site Header
───────────────────────────────────────────────────────────────── */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [openId, setOpenId]           = useState<DropdownId>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname                      = usePathname();
  const isHome                        = pathname === "/";
  const navRef                        = useRef<HTMLElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns + mobile on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenId(null);
  }, [pathname]);

  // Lock scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close desktop dropdown on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenId(null);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-white/98 border-b border-line backdrop-blur-md shadow-[0_1px_0_0_rgba(228,225,236,0.8)]",
        ].join(" ")}
        style={{ height: "72px" }}
      >
        <div className="hosanna-container h-full">
          <div className="flex h-full items-center justify-between gap-4">

            {/* Brand */}
            <Link
              href="/"
              aria-label="Hosanna School of Catering and Fashion Design"
              className="flex shrink-0 items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
            >
              <Logo variant={transparent ? "light" : "dark"} />
            </Link>

            {/* Desktop nav — shared openId so only one dropdown at a time */}
            <nav
              ref={navRef}
              className="hidden items-center gap-0.5 lg:flex"
              aria-label="Main navigation"
            >
              {navigation.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <DesktopDropdown
                      key={item.id}
                      item={item}
                      transparent={transparent}
                      pathname={pathname}
                      openId={openId}
                      setOpenId={setOpenId}
                    />
                  );
                }
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setOpenId(null)}
                    className={[
                      "relative px-3 py-2 rounded text-[13px] font-medium transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2",
                      transparent
                        ? "text-white/90 hover:text-white"
                        : active
                          ? "text-brand-700"
                          : "text-ink-600 hover:text-ink-900",
                    ].join(" ")}
                  >
                    {item.label}
                    {active && !transparent && (
                      <span
                        className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-700"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Apply + hamburger */}
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/apply"
                onMouseEnter={() => setOpenId(null)}
                className={[
                  "hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-[13px] font-semibold tracking-wide",
                  "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  transparent
                    ? "bg-white text-brand-700 hover:bg-brand-100 focus-visible:ring-white"
                    : "bg-brand-700 text-white hover:bg-brand-600 focus-visible:ring-brand-700",
                ].join(" ")}
              >
                Apply Now
              </Link>

              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-lg transition-colors lg:hidden",
                  transparent ? "text-white hover:bg-white/15" : "text-ink-900 hover:bg-brand-100",
                ].join(" ")}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{   rotate:  90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span key="menu"
                      initial={{ rotate:  90, opacity: 0 }}
                      animate={{ rotate:   0, opacity: 1 }}
                      exit={{   rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="h-5 w-5" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen nav ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-white pt-18 lg:hidden overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <nav className="hosanna-container flex flex-col py-6">
              {navigation.map((item, i) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                if (item.type === "dropdown") {
                  const isExpanded = mobileExpanded === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(isExpanded ? null : item.id)}
                        className={[
                          "flex w-full items-center justify-between border-b border-line py-5",
                          "text-xl font-medium transition-colors focus-visible:outline-none",
                          active ? "text-brand-700" : "text-ink-900",
                        ].join(" ")}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 text-ink-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className={[
                                  "flex items-center gap-3 border-b border-line/50 py-4 pl-5 text-[15px] font-medium transition-colors",
                                  pathname === sub.href
                                    ? "text-brand-700"
                                    : "text-ink-600 hover:text-brand-700",
                                ].join(" ")}
                              >
                                <span className="h-1 w-1 shrink-0 rounded-full bg-ink-400" aria-hidden="true" />
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                // Plain link
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={[
                        "flex items-center justify-between border-b border-line py-5 text-xl font-medium transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 rounded",
                        active ? "text-brand-700" : "text-ink-900 hover:text-brand-700",
                      ].join(" ")}
                    >
                      {item.label}
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-brand-700" aria-hidden="true" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigation.length * 0.04 + 0.05, duration: 0.25 }}
                className="mt-8"
              >
                <Link
                  href="/apply"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Apply Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {!isHome && <div className="h-18" aria-hidden="true" />}
    </>
  );
}
