"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PageCTAProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function PageCTA({
  eyebrow = "READY TO BEGIN?",
  heading,
  body = "Explore the programmes available and learn more about the admissions process.",
  primaryLabel = "Apply Now",
  primaryHref = "/apply",
  secondaryLabel = "Explore Programmes",
  secondaryHref = "/programmes",
}: PageCTAProps) {
  return (
    <section className="bg-hosanna-purple py-16 text-warm-ivory sm:py-20 lg:py-24">
      <div className="hosanna-container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {eyebrow && <p className="eyebrow text-champagne-gold">{eyebrow}</p>}

          <h2 className="editorial-heading mt-4 text-3xl text-warm-ivory sm:text-4xl lg:text-5xl">
            {heading}
          </h2>

          {body && (
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-warm-ivory/70 sm:text-base">
              {body}
            </p>
          )}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="gold-button">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            {secondaryLabel && (
              <Link href={secondaryHref} className="ghost-button">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
