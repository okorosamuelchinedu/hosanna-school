import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** If true, wraps content in .hosanna-container */
  contained?: boolean;
  id?: string;
  as?: "section" | "div" | "article";
}

/**
 * Enforces consistent section padding from globals.css (.section-pad).
 * Use contained=false only when the section itself manages full-bleed layout.
 */
export function Section({
  children,
  className = "",
  contained = true,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("section-pad", className)}>
      {contained ? (
        <div className="hosanna-container">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}
