import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  /** "dark" = on light backgrounds (ink-400); "light" = on dark/brand backgrounds (white/65) */
  variant?: "dark" | "light";
  className?: string;
}

export function Eyebrow({ children, variant = "dark", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        variant === "light" ? "eyebrow-light" : "eyebrow",
        className,
      )}
    >
      {children}
    </p>
  );
}
