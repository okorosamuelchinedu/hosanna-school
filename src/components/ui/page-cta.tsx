import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "./fade-up";

interface PageCTAProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * The unified CTA block used across every page.
 * Matches the Admissions CTA on the landing page exactly:
 * brand-900 solid background, white text, white-solid primary + ghost secondary.
 */
export function PageCTA({
  eyebrow = "Ready to Begin?",
  heading,
  body,
  primaryLabel = "Apply Now",
  primaryHref = "/apply",
  secondaryLabel = "Explore Programmes",
  secondaryHref = "/programmes",
}: PageCTAProps) {
  return (
    <section className="section-pad bg-off-white" aria-label="Call to action">
      <div className="hosanna-container">
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl bg-brand-900 px-8 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow-light">{eyebrow}</p>
              <h2 className="section-heading mt-3 text-white">{heading}</h2>
              {body && (
                <p className="mx-auto mt-5 max-w-[48ch] text-[17px] leading-[1.7] text-white/65">
                  {body}
                </p>
              )}
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={primaryHref} className="btn-white inline-flex">
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href={secondaryHref} className="btn-ghost inline-flex">
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
