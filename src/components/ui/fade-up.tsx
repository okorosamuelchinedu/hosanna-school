"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;   // ms
  className?: string;
}

/**
 * Wraps children in a div that fades up when it enters the viewport.
 * Respects prefers-reduced-motion (the CSS already handles it via .fade-up).
 */
export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Honour delay via a timeout so CSS transition still runs
          const id = setTimeout(() => {
            el.classList.add("in-view");
          }, delay);
          observer.unobserve(el);
          return () => clearTimeout(id);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}
