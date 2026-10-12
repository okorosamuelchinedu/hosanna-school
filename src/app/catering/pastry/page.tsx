import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Pastry & Baking" };

const skills = [
  "Pastry dough preparation",
  "Cake baking and decoration",
  "Bread and rolls",
  "Tarts, pies and quiches",
  "Chocolate and sugar work",
  "Presentation and plating",
];

export default function CateringPastryPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Catering / Pastry and Baking"
        heading="Pastry & Baking"
        subheading="Explore the art and technique of pastry and baking, from dough preparation to beautiful finished products."
        backHref="/catering"
        backLabel="Back to Catering"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image
                  src="/images/hero-catering.png"
                  alt="Pastry and baking training at Hosanna"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">What You Will Learn</p>
                <h2 className="section-heading mt-3">Sweet skills, real technique.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Develop consistent baking skills through guided practice, learning the methods behind great pastry, bread and confectionery.
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

      <PageCTA
        eyebrow="Ready?"
        heading="Start baking with confidence."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="All Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
