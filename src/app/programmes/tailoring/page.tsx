import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "Tailoring Programme" };

const skills = [
  "Taking accurate measurements",
  "Fabric cutting techniques",
  "Sewing machine operation",
  "Seaming and finishing",
  "Fitting and alterations",
  "Professional garment completion",
];

export default function TailoringPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Programmes / Tailoring"
        heading="Tailoring"
        subheading="Build practical tailoring skills, measurements, cutting, construction, fitting and finishing, through guided hands-on practice."
        backHref="/programmes"
        backLabel="All Programmes"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image src="/images/hero-fashion.png" alt="Tailoring training at Hosanna" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">What You Will Learn</p>
                <h2 className="section-heading mt-3">Precision in every stitch.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Tailoring is a discipline built on precision and practice. This programme gives you the skills to measure, cut, sew and finish garments to a professional standard.
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

      <PageCTA
        eyebrow="Ready to Start?"
        heading="Apply for Tailoring."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Ask a Question"
        secondaryHref="/contact"
      />
    </div>
  );
}
