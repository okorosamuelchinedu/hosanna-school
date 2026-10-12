import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "Millinery Programme" };

const skills = [
  "Hat block and frame construction",
  "Fabric and material selection",
  "Blocking and shaping techniques",
  "Trimming and embellishment",
  "Sizing and fitting",
  "Creative headwear design",
];

export default function MillineryPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Programmes / Millinery"
        heading="Millinery"
        subheading="Explore the art of hat-making and creative headwear design through practical construction and hands-on learning."
        backHref="/programmes"
        backLabel="All Programmes"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image src="/images/hero-fashion.png" alt="Millinery training at Hosanna" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">What You Will Learn</p>
                <h2 className="section-heading mt-3">The art of headwear.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Millinery combines craftsmanship and creativity. This programme teaches the techniques behind designing and constructing beautiful, wearable headpieces.
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
        heading="Apply for Millinery."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Ask a Question"
        secondaryHref="/contact"
      />
    </div>
  );
}
