import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Catering & Culinary" };

const pathways = [
  { n: "01", title: "Catering Training",  text: "Build practical catering skills through guided preparation, technique and repeated practice.", href: "/catering/training" },
  { n: "02", title: "Pastry & Baking",    text: "Explore pastry and baking techniques with attention to preparation, consistency and presentation.", href: "/catering/pastry" },
  { n: "03", title: "Events & Catering",  text: "Develop practical knowledge for preparing and presenting food for events and hospitality settings.", href: "/catering/events" },
];

const skills = [
  "Food preparation",
  "Kitchen techniques",
  "Presentation and plating",
  "Pastry and baking",
  "Event catering",
  "Creative confidence",
];

export default function CateringPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Catering & Culinary"
        heading="Create with flavour."
        subheading="Practical catering training designed to help you develop technique, confidence and the ability to create with your hands."
        imageSrc="/images/hero-catering.png"
        imageAlt="Catering training at Hosanna School"
      />

      {/* Discipline intro */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">The Discipline</p>
                <h2 className="section-heading mt-3">
                  More than recipes. Build the skill behind the work.
                </h2>
              </div>
              <div>
                <p className="text-[17px] leading-[1.7] text-ink-600">
                  Catering combines preparation, technique, presentation and attention to detail. Practical training gives learners the opportunity to develop these skills through doing and refining the work.
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
                <p className="eyebrow">Catering Pathways</p>
                <h2 className="section-heading mt-3">Find your area of interest.</h2>
              </div>
              <p className="max-w-[40ch] text-[16px] leading-[1.7] text-ink-600 sm:text-right">
                Explore the different areas of practical catering and culinary development.
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

      {/* Feature */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image
                  src="/images/hero-catering.png"
                  alt="Culinary practical training at Hosanna"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">Practical Learning</p>
                <h2 className="section-heading mt-3">
                  Learn through preparation, practice and refinement.
                </h2>
                <p className="mt-6 text-[17px] leading-[1.7] text-ink-600">
                  The strongest skills are developed through repetition. Catering training gives learners space to practise techniques, understand processes and improve their work.
                </p>
                <blockquote className="mt-8 border-l-2 border-brand-700 pl-5">
                  <p className="text-[17px] font-semibold text-ink-900">"Learn the skill. Develop the craft."</p>
                </blockquote>
                <Link href="/catering/training" className="btn-primary mt-8 inline-flex">
                  Explore Catering Training
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
        body="Explore the training options or begin your application to Hosanna School."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Admissions"
        secondaryHref="/admissions"
      />
    </div>
  );
}
