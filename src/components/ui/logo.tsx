import { cn } from "@/lib/utils";

interface LogoProps {
  /** "dark" = purple icon + dark text (on light bg)
   *  "light" = white icon + white text (on dark/brand bg)   */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Hosanna School wordmark with chef's toque icon.
 * Pure SVG — no image file needed, no font-load flash.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const iconColor  = variant === "light" ? "#FFFFFF" : "#4C1D95";
  const textColor  = variant === "light" ? "#FFFFFF" : "#111018";
  const subColor   = variant === "light" ? "rgba(255,255,255,0.55)" : "#9089A4";

  return (
    <svg
      viewBox="0 0 220 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hosanna School of Catering and Fashion Design"
      role="img"
      className={cn("h-10 w-auto", className)}
    >
      {/* ── Chef's toque ─────────────────────────────────────── */}
      {/* Base band */}
      <rect x="4" y="30" width="30" height="6" rx="2" fill={iconColor} />

      {/* Main dome — three overlapping circles forming the toque */}
      {/* Centre puff */}
      <ellipse cx="19" cy="20" rx="9" ry="12" fill={iconColor} />
      {/* Left puff */}
      <ellipse cx="11" cy="23" rx="7" ry="9" fill={iconColor} />
      {/* Right puff */}
      <ellipse cx="27" cy="23" rx="7" ry="9" fill={iconColor} />

      {/* White highlights to separate the puffs */}
      <ellipse cx="15.5" cy="18" rx="1.5" ry="5" fill="white" fillOpacity="0.25" />
      <ellipse cx="22.5" cy="18" rx="1.5" ry="5" fill="white" fillOpacity="0.25" />

      {/* Tiny top knot */}
      <ellipse cx="19" cy="8.5" rx="3" ry="2.5" fill={iconColor} />
      <rect x="17.5" y="10" width="3" height="4" fill={iconColor} />

      {/* ── Text ─────────────────────────────────────────────── */}
      {/* "HOSANNA" — main wordmark */}
      <text
        x="44"
        y="23"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="17"
        letterSpacing="-0.3"
        fill={textColor}
      >
        HOSANNA
      </text>

      {/* "School of Catering & Fashion" — subtitle, wrapped to two lines */}
      <text
        x="44"
        y="33.5"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="400"
        fontSize="8"
        letterSpacing="0.4"
        fill={subColor}
      >
        SCHOOL OF CATERING
      </text>
      <text
        x="44"
        y="42"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="400"
        fontSize="8"
        letterSpacing="0.4"
        fill={subColor}
      >
        &amp; FASHION DESIGN
      </text>
    </svg>
  );
}
