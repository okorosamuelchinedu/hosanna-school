import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  backHref?: string;
  backLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * Standard inner-page hero — brand-900 background, optional split image.
 * Used on every section and sub-page for consistency.
 */
export function PageHero({
  eyebrow,
  heading,
  subheading,
  backHref,
  backLabel,
  imageSrc,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="page-hero" aria-label={`${heading} hero`}>
      <div className="hosanna-container">
        {backHref && (
          <Link
            href={backHref}
            className="mb-10 inline-flex items-center gap-2 text-[13px] font-medium text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 rounded"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {backLabel ?? "Back"}
          </Link>
        )}

        <div className={imageSrc ? "grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20" : "max-w-3xl"}>
          {/* Copy */}
          <div>
            <p className="eyebrow-light">{eyebrow}</p>
            <h1 className="display-heading mt-4 text-white">{heading}</h1>
            {subheading && (
              <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.7] text-white/65">
                {subheading}
              </p>
            )}
          </div>

          {/* Optional image */}
          {imageSrc && (
            <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-96">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width:1023px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
