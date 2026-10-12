import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Fashion Training" };

const skills = [
  "Fashion sketching and design concepts",
  "Fabric selection and handling",
  "Taking and recording measurements",
  "Pattern drafting fundamentals",
  "Cutting and sewing techniques",
  "Garment finishing and presentation",
];

const pillars = [
  { n: "01", h: "Creative Foundation", t: "Develop a design sense through sketching, colour and fabric exploration." },
  { n: "02", h: "Technical Skills",    t: "Learn the practical techniques of cutting, sewing and garment assembly." },
  { n: "03", h: "Growing Confidence",  t: "Repeated practice turns individual skills into a reliable craft." },
];

export default function FashionTrainingPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Fashion / Training"
        heading="Fashion Training"
        subheading="Build practical fashion skills from the ground up, design, fabric, measurement, cutting and construction, through hands-on guided practice."
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
                  alt="Fashion training at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">What You Will Learn</p>
                <h2 className="section-heading mt-3">Create with skill and precision.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  This training covers the full foundations of fashion, combining creative thinking with the technical skills to bring garments to life.
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

      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-5 sm:grid-cols-3">
              {pillars.map((c, i) => (
                <FadeUp key={c.n} delay={i * 70}>
                  <div className="h-card h-full">
                    <span className="text-5xl font-bold leading-none tracking-tight text-ink-900/[0.07] select-none" aria-hidden="true">{c.n}</span>
                    <h3 className="card-heading mt-4 text-ink-900">{c.h}</h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-ink-600">{c.t}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready?"
        heading="Start your fashion journey."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="All Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
