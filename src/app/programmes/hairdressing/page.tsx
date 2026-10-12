import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "Hairdressing Programme" };

const skills = [
  "Shampooing and hair care basics",
  "Cutting and styling techniques",
  "Relaxing and texturising",
  "Braiding and natural hair styling",
  "Colour application fundamentals",
  "Client consultation and service",
];

const pillars = [
  { n: "01", h: "Core Technique",   t: "Build a solid foundation in the practical skills every professional hairdresser needs." },
  { n: "02", h: "Hands-on Practice",t: "Every session is practical, working directly with tools, products and techniques." },
  { n: "03", h: "Client Skills",    t: "Learn how to consult with clients and deliver a professional, confident service." },
];

export default function HairdressingPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Programmes / Hairdressing"
        heading="Hairdressing"
        subheading="Develop the practical skills of the modern salon, cutting, styling, braiding, colour and client service, through hands-on guided training."
        backHref="/programmes"
        backLabel="All Programmes"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image src="/images/hero-fashion.png" alt="Hairdressing training at Hosanna" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">What You Will Learn</p>
                <h2 className="section-heading mt-3">Skills for the modern salon.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  This programme prepares you for professional hairdressing work, covering the core techniques from cutting and styling to colour and client care.
                </p>
                <ul className="mt-8 space-y-3">
                  {skills.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                      <span className="text-[15px] text-ink-900">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/apply" className="btn-primary inline-flex">Apply for This Programme <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                  <Link href="/contact" className="btn-secondary inline-flex">Ask a Question</Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <div className="grid gap-5 sm:grid-cols-3">
            {pillars.map((c, i) => (
              <FadeUp key={c.n} delay={i * 70}>
                <div className="h-card h-full">
                  <span className="text-5xl font-bold leading-none tracking-tight text-ink-900/[0.07] select-none" aria-hidden="true">{c.n}</span>
                  <h3 className="card-heading mt-5 text-ink-900">{c.h}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-ink-600">{c.t}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready to Start?"
        heading="Apply for Hairdressing."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Ask a Question"
        secondaryHref="/contact"
      />
    </div>
  );
}
