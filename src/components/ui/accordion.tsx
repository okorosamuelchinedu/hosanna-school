"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

function AccordionRow({
  item,
  open,
  onToggle,
  index,
}: {
  item: AccordionItem;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className={cn(
          "flex w-full items-start justify-between gap-6 py-6 text-left",
          "transition-colors hover:text-brand-700",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 rounded",
          open ? "text-brand-700" : "text-ink-900",
        )}
      >
        <span className="text-[15px] font-medium leading-snug">{item.question}</span>
        <span
          className={cn(
            "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300",
            open
              ? "bg-brand-700 text-white rotate-45"
              : "bg-brand-100 text-brand-700 rotate-0",
          )}
          aria-hidden="true"
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>

      {/* Height-animating panel via max-height trick */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-150 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="pb-6 pr-10 text-[15px] leading-[1.7] text-ink-600">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          open={openIndex === i}
          onToggle={() => toggle(i)}
          index={i}
        />
      ))}
    </div>
  );
}
