import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Fashion & Design" };

const pathways = [
  { n: "01", title: "Fashion Training",     text: "Develop practical fashion skills through guided learning, garment development and hands-on practice.", href: "/fashion/training" },
  { n: "02", title: "Tailoring",            text: "Build practical tailoring skills around measurements, construction, fitting and finishing.", href: "/fashion/tailoring" },
  { n: "03", title: "Garment Construction", text: "Learn how design ideas and fabric become finished garments through practical construction.", href: "/fashion/garment-construction" },
];

const skills = [
  "Measurements",
  "Pattern development",
  "Garment construction",
  "Tailoring",
  "Fitting and finishing",
  "Creative confidence",
];

export default function FashionPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Fashion and Tailoring"
        heading="Create with precision."
        subheading="Practical fashion training designed to help you develop technique, construction skills and confidence through making."
        imageSrc="/images/hero-fashion.png"
        imageAlt="Fashion design training at Hosanna School"
      />

      {/* Discipline intro */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">The Discipline</p>
                <h2 className="section-heading mt-3">
                  From an idea to a finished garment.
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-[1.7] text-ink-600">
                  Fashion design combines creativity with technical precision. Measurements, construction, fitting and finishing all contribute to the quality of the final garment.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {skills.map((s, i) => (
                    <div key={s} className="flex items-center gap-3 border-b border-line py-4">
                      <Check className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                      <span className="flex-1 text-[15px] text-ink-900">{s}</span>
                      <span className="text-[12px] font-semibold text-ink-400">0{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pathways */}
      <section className="section-pad bg-off-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Fashion Pathways</p>
                <h2 className="section-heading mt-3">Find your area of interest.</h2>
              </div>
              <p className="max-w-[40ch] text-[16px] leading-[1.7] text-ink-600 sm:text-right">
                Explore different areas of practical fashion design and garment development.
              </p>
            </div>
          </FadeUp>

          <div className="mt-12 divide-y divide-line border-t border-line">
            {pathways.map((p, i) => (
              <FadeUp key={p.n} delay={i * 60}>
                <Link
                  href={p.href}
                  className="group grid gap-5 py-8 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded md:grid-cols-[40px_1fr_1.6fr_40px] md:items-center md:gap-10"
                >
                  <span className="text-[13px] font-semibold text-ink-400">{p.n}</span>
                  <h3 className="text-[17px] font-semibold text-ink-900 group-hover:text-brand-700">{p.title}</h3>
                  <p className="text-[15px] leading-[1.6] text-ink-600">{p.text}</p>
                  <ArrowRight className="h-5 w-5 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-700 hidden md:block" aria-hidden="true" />
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Craft feature */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion and tailoring practical training"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">Practical Craft</p>
                <h2 className="section-heading mt-3">
                  Learn through cutting, construction and refinement.
                </h2>
                <p className="mt-6 text-[17px] leading-[1.7] text-ink-600">
                  Strong fashion skills develop through practice. Learners work through the process of creating garments while developing accuracy, technique and attention to detail.
                </p>
                <blockquote className="mt-8 border-l-2 border-brand-700 pl-5">
                  <p className="text-[17px] font-semibold text-ink-900">"Learn the skill. Develop the craft."</p>
                </blockquote>
                <Link href="/fashion/training" className="btn-primary mt-8 inline-flex">
                  Explore Fashion Training
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        eyebrow="Ready to Start?"
        heading="Turn practice into craft."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Admissions"
        secondaryHref="/admissions"
      />
    </div>
  );
}
