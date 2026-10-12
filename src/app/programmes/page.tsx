import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Programmes" };

const cateringProgrammes = [
  { n: "01", title: "Catering & Culinary",  desc: "Food preparation, cooking techniques, presentation and kitchen operations.", href: "/programmes/catering-culinary" },
  { n: "02", title: "Pastry & Baking",       desc: "Pastry dough, cake baking, bread and presentation skills.",               href: "/programmes/pastry-baking" },
  { n: "03", title: "Events & Catering",     desc: "Practical food service skills for events and hospitality settings.",       href: "/programmes/events-catering" },
];

const fashionProgrammes = [
  { n: "04", title: "Fashion Design",        desc: "Design concepts, fabric selection, pattern making and garment construction.", href: "/programmes/fashion-design" },
  { n: "05", title: "Tailoring",             desc: "Measurements, cutting, construction, fitting and professional finishing.",    href: "/programmes/tailoring" },
  { n: "06", title: "Garment Construction",  desc: "Pattern to finished garment, every technique in between.",                   href: "/programmes/garment-construction" },
];

const otherProgrammes = [
  { n: "07", title: "Millinery",             desc: "Hat-making and creative headwear design through practical construction.", href: "/programmes/millinery" },
  { n: "08", title: "Hairdressing",          desc: "Cutting, styling, treatment and client service for the modern salon.",    href: "/programmes/hairdressing" },
];

const learningPoints = [
  "Hands-on practical training",
  "Guided skill development",
  "Repeated practice and refinement",
  "Creative confidence that grows with you",
];

export default function ProgrammesPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Programmes"
        heading="Practical skills. Creative confidence."
        subheading="Eight areas of practical training in catering, fashion, hairdressing, millinery and more. All designed around learning by doing."
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">Learn by Doing</p>
                <h2 className="section-heading mt-3">
                  Training built around practical development.
                </h2>
              </div>
              <p className="text-[17px] leading-[1.7] text-ink-600 lg:pt-2">
                Hosanna brings together creative disciplines under one practical learning philosophy. Each area gives learners room to develop technical skills, practise repeatedly and build confidence through making.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Catering section */}
      <section className="section-pad bg-off-white" aria-label="Catering programmes">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-155">
                <Image
                  src="/images/hero-catering.png"
                  alt="Catering training at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center rounded-full bg-black/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm">
                    Catering
                  </span>
                </div>
              </div>
              <div>
                <p className="eyebrow">Catering Programmes</p>
                <h2 className="section-heading mt-3">Create with flavour.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Develop practical catering, culinary, pastry and events skills through preparation, technique and hands-on practice.
                </p>
                <div className="mt-8 divide-y divide-line">
                  {cateringProgrammes.map((p) => (
                    <Link
                      key={p.n}
                      href={p.href}
                      className="group flex items-start gap-4 py-5 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded"
                    >
                      <span className="min-w-[28px] text-[13px] font-semibold text-ink-400">{p.n}</span>
                      <div className="flex-1">
                        <p className="text-[15px] font-semibold text-ink-900 group-hover:text-brand-700">{p.title}</p>
                        <p className="mt-1 text-[14px] leading-[1.6] text-ink-600">{p.desc}</p>
                      </div>
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-700" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <Link href="/catering" className="btn-secondary mt-8 inline-flex">
                  View Catering
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Fashion section */}
      <section className="section-pad bg-warm-50" aria-label="Fashion programmes">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="lg:order-2">
                <p className="eyebrow">Fashion Programmes</p>
                <h2 className="section-heading mt-3">Create with precision.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Develop fashion design, tailoring, millinery and garment-making skills through construction, fitting and creative practice.
                </p>
                <div className="mt-8 divide-y divide-line">
                  {fashionProgrammes.map((p) => (
                    <Link
                      key={p.n}
                      href={p.href}
                      className="group flex items-start gap-4 py-5 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded"
                    >
                      <span className="min-w-[28px] text-[13px] font-semibold text-ink-400">{p.n}</span>
                      <div className="flex-1">
                        <p className="text-[15px] font-semibold text-ink-900 group-hover:text-brand-700">{p.title}</p>
                        <p className="mt-1 text-[14px] leading-[1.6] text-ink-600">{p.desc}</p>
                      </div>
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-700" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <Link href="/fashion" className="btn-secondary mt-8 inline-flex">
                  View Fashion
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:order-1 lg:aspect-auto lg:h-155">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion training at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center rounded-full bg-black/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm">
                    Fashion
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Additional programmes */}
      <section className="section-pad bg-white" aria-label="More programmes">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow">More Programmes</p>
              <h2 className="section-heading mt-3">Even more ways to learn.</h2>
            </div>
          </FadeUp>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {otherProgrammes.map((p, i) => (
              <FadeUp key={p.n} delay={i * 70}>
                <Link
                  href={p.href}
                  className="h-card group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                >
                  <span className="font-bold text-5xl leading-none tracking-tight text-ink-900/[0.07] select-none" aria-hidden="true">
                    {p.n}
                  </span>
                  <h3 className="card-heading mt-3 text-ink-900">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-ink-600">{p.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-brand-700">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Learning experience */}
      <section className="section-pad bg-warm-50" aria-label="The learning experience">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
              <div>
                <p className="eyebrow">The Learning Experience</p>
                <h2 className="section-heading mt-3">
                  Skills become stronger through practice.
                </h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Every programme at Hosanna is built around practical development rather than simply reading about a skill.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {learningPoints.map((point, i) => (
                  <div key={point} className="h-card flex gap-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                    <p className="text-[15px] font-medium leading-[1.6] text-ink-900">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        eyebrow="Find Your Direction"
        heading="Choose a skill. Start building your craft."
        body="Explore the areas of training that interest you, then learn more about admissions and how to begin."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Admissions"
        secondaryHref="/admissions"
      />
    </div>
  );
}
