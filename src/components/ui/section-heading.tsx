import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  children: ReactNode;
  /** Body copy below the headline */
  body?: ReactNode;
  /** "start" (default) or "center" */
  align?: "start" | "center";
  /** variant passed to Eyebrow */
  eyebrowVariant?: "dark" | "light";
  /** extra classes on the wrapper */
  className?: string;
  /** extra classes on the h2 */
  headingClassName?: string;
}

/**
 * Standardises the eyebrow → rule → heading → optional body block
 * used at the top of most sections.
 */
export function SectionHeading({
  eyebrow,
  children,
  body,
  align = "start",
  eyebrowVariant = "dark",
  className,
  headingClassName,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "text-center" : "", className)}>
      {eyebrow && (
        <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          "section-heading mt-3",
          eyebrowVariant === "light" ? "text-white" : "",
          headingClassName,
        )}
      >
        {children}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-5 text-base leading-[1.7] text-ink-600 max-w-[55ch]",
            eyebrowVariant === "light" ? "text-white/70" : "",
            centered ? "mx-auto" : "",
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
