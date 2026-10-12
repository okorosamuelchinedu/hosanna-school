import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Garment Construction" };

const skills = [
  "Pattern tracing and adaptation",
  "Fabric layout and cutting",
  "Seam types and construction",
  "Interfacing and underlining",
  "Zip, button and closure techniques",
  "Pressing, finishing and quality check",
];

export default function FashionGarmentConstructionPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Fashion / Garment Construction"
        heading="Garment Construction"
        subheading="Learn how to turn fabric and pattern into a finished, professional-quality garment, step by step, stitch by stitch."
        backHref="/fashion"
        backLabel="Back to Fashion"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Garment construction training at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">What You Will Learn</p>
                <h2 className="section-heading mt-3">From flat fabric to wearable art.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Garment construction is where design meets technical skill. This training gives you the foundation to assemble garments that are well-made, well-fitted and finished to a high standard.
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
        heading="Build garments that last."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="All Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
