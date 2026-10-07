"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Catering", href: "/catering" },
  { label: "Fashion", href: "/fashion" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-linen/80 bg-warm-ivory/95 backdrop-blur-xl">
        <div className="hosanna-container">
          <div className="flex h-16 items-center justify-between gap-3">
        {/* Brand */}
<Link
  href="/"
  className="flex min-w-0 items-center"
  aria-label="Hosanna School of Catering & Fashion Design"
>
  <img
    src="/logo/hosanna-logo.svg"
    alt="Hosanna School of Catering & Fashion Design"
    className="h-10 w-auto"
  />
</Link>
            {/* Desktop navigation */}
            <nav
              className="hidden items-center gap-6 lg:flex"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-charcoal transition-colors hover:text-emerald-noir"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-1.5">
              <a
                href="tel:+2348035513434"
                aria-label="Call Hosanna Admissions"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-emerald-noir transition-colors hover:bg-linen"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>

              <Link
                href="/apply"
                className="hidden rounded-full bg-pale-gold px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-noir transition-colors hover:bg-champagne-gold sm:inline-flex"
              >
                Apply
              </Link>

              <button
                type="button"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-emerald-noir transition-colors hover:bg-linen lg:hidden"
              >
                {open ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
              open
                ? "max-h-[520px] border-t border-linen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav
              className="flex flex-col py-3"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-linen py-4 text-sm font-medium text-charcoal transition-colors hover:text-emerald-noir"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="mt-4 flex min-h-12 items-center justify-center rounded-sm bg-emerald-noir px-5 py-3 text-sm font-semibold text-warm-ivory"
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Prevent fixed header from covering page content */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}