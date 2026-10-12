import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "How to Apply" };

const steps = [
  { n: "01", title: "Explore Programmes",      text: "Browse the available training areas and choose the programme that interests you most." },
  { n: "02", title: "Check Requirements",      text: "Review the entry requirements for your chosen programme and prepare accordingly." },
  { n: "03", title: "Contact the School",      text: "Call, WhatsApp or email the school to express your interest and ask any questions." },
  { n: "04", title: "Submit Your Application", text: "Follow the guidance provided and complete your application with accurate details." },
  { n: "05", title: "Await Confirmation",      text: "The school will review your application and contact you with the next steps." },
];

export default function HowToApplyPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Admissions / How to Apply"
        heading="How to Apply"
        subheading="A step-by-step guide to applying for a place at Hosanna School of Catering and Fashion Design."
        backHref="/admissions"
        backLabel="Back to Admissions"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="mx-auto max-w-2xl">
              {steps.map((step, i) => (
                <div
                  key={step.n}
                  className={`flex gap-8 ${i < steps.length - 1 ? "pb-10 mb-10 border-b border-line" : ""}`}
                >
                  <span className="min-w-[40px] text-3xl font-bold leading-none tracking-tight text-ink-900/15 select-none" aria-hidden="true">
                    {step.n}
                  </span>
                  <div>
                    <h2 className="text-[17px] font-semibold text-ink-900">{step.title}</h2>
                    <p className="mt-3 text-[15px] leading-[1.7] text-ink-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready to Apply?"
        heading="Take the next step."
        primaryLabel="Start Application"
        primaryHref="/apply"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}
