"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { Logo } from "@/components/ui/logo";

/* Facebook icon as inline SVG ,  not in this lucide-react version */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const programmes = [
  { label: "Catering & Culinary",  href: "/programmes/catering-culinary" },
  { label: "Pastry & Baking",      href: "/programmes/pastry-baking" },
  { label: "Events & Catering",    href: "/programmes/events-catering" },
  { label: "Fashion Design",       href: "/programmes/fashion-design" },
  { label: "Tailoring",            href: "/programmes/tailoring" },
  { label: "Millinery",            href: "/programmes/millinery" },
  { label: "Hairdressing",         href: "/programmes/hairdressing" },
];

const school = [
  { label: "About Us",    href: "/about" },
  { label: "Our Story",   href: "/about/our-story" },
  { label: "Facilities",  href: "/about/facilities" },
  { label: "Admissions",  href: "/admissions" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Contact",     href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="hosanna-container py-20 lg:py-24">
        <FadeUp>
          <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr] lg:gap-10">

            {/* Brand column */}
            <div>
              <Link
                href="/"
                aria-label="Hosanna School home"
                className="inline-block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              >
                <Logo variant="light" />
              </Link>

              {/* subtitle is now built into the Logo SVG */}

              <p className="mt-5 max-w-70 text-sm leading-[1.7] text-white/55">
                The home of amazing creativity and excellence. We teach practical
                skills in catering, fashion, event management, hairdressing,
                millinery and industrial production.
              </p>

              <ul className="mt-7 space-y-3">
                <li>
                  <a
                    href="tel:+2348035513434"
                    className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                    0803 551 3434
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:nwabiabenny2017@gmail.com"
                    className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                    nwabiabenny2017@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden="true" />
                  <span>
                    No. 1 Njoku Street, Opp Keystone Bank,<br />
                    Umungasi, Aba, Abia State, Nigeria
                  </span>
                </li>
              </ul>
            </div>

            {/* Programmes */}
            <div>
              <p className="eyebrow-light">Programmes</p>
              <ul className="mt-5 space-y-3">
                {programmes.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* School */}
            <div>
              <p className="eyebrow-light">School</p>
              <ul className="mt-5 space-y-3">
                {school.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Start Learning */}
            <div className="lg:pl-4">
              <p className="eyebrow-light">Start Learning</p>
              <p className="mt-4 max-w-55 text-sm leading-[1.7] text-white/55">
                Ready to develop a skill? Begin your application to Hosanna
                School today.
              </p>
              <Link href="/apply" className="btn-white mt-6 inline-flex">
                Apply Now
              </Link>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-xs text-white/35">Follow us</p>
                <a
                  href="https://web.facebook.com/p/Hosanna-School-of-Catering-Fashion-Design-100063503025406"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hosanna School on Facebook"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook
                </a>
              </div>
            </div>

          </div>
        </FadeUp>

        {/* Bottom bar */}
        <FadeUp delay={80}>
          <div className="flex flex-col gap-4 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              {`\u00a9`} {new Date().getFullYear()} Hosanna School of Catering and Fashion Design.
              All rights reserved.
            </p>
            <a
              href="https://web.facebook.com/p/Hosanna-School-of-Catering-Fashion-Design-100063503025406"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hosanna School on Facebook"
              className="inline-flex items-center gap-2 transition-colors hover:text-white/70"
            >
              <FacebookIcon className="h-4 w-4" />
              <span>Facebook</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
