import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Catering Training" };

const skills = [
  "Food preparation and hygiene",
  "Professional kitchen safety",
  "Cooking methods and techniques",
  "Portion control and costing",
  "Food presentation and plating",
  "Practical kitchen operations",
];

export default function CateringTrainingPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Catering / Training"
        heading="Catering Training"
        subheading="Build practical catering skills through guided preparation, kitchen technique and hands-on repeated practice."
        backHref="/catering"
        backLabel="Back to Catering"
      />

      {/* What you will learn */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image
                  src="/images/hero-catering.png"
                  alt="Catering training at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">What You Will Learn</p>
                <h2 className="section-heading mt-3">From preparation to presentation.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  This training covers the core practical skills of catering, from safe food handling and kitchen operations to cooking, plating and professional service.
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
                  <Link href="/apply" className="btn-primary inline-flex">
                    Apply Now
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="btn-secondary inline-flex">Ask a Question</Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        eyebrow="Ready?"
        heading="Start your catering journey."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="All Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
