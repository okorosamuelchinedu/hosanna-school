import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const values = [
  {
    number: "01",
    title: "Practical Learning",
    text: "We believe skills grow through practice, repetition and doing the work with your own hands.",
  },
  {
    number: "02",
    title: "Creative Confidence",
    text: "Training should help learners develop confidence in their ability to create, solve problems and improve.",
  },
  {
    number: "03",
    title: "Craft & Discipline",
    text: "Good craft requires attention to detail, consistency, patience and a commitment to learning.",
  },
];

const learningAreas = [
  "Catering and culinary skills",
  "Fashion design and tailoring",
  "Hands-on practical training",
  "Creative and entrepreneurial development",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-warm-ivory">
        {/* Page Hero */}
        <section className="border-b border-linen bg-emerald-noir text-warm-ivory">
          <div className="hosanna-container py-16 sm:py-20 lg:py-28">
            <div className="max-w-4xl">
              <p className="eyebrow text-pale-gold">
                ABOUT HOSANNA
              </p>

              <h1 className="editorial-heading mt-5 max-w-4xl text-4xl text-warm-ivory sm:text-5xl lg:text-6xl">
                Learn the skill.
                <br />
                Develop the craft.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-warm-ivory/80 sm:text-lg">
                Hosanna School of Catering & Fashion Design is built around
                practical learning, creative development and the belief that
                useful skills can become lasting craft.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-pale-gold">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Aba, Abia State · Nigeria</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="hosanna-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-7">
                <p className="eyebrow">OUR STORY</p>

                <h2 className="editorial-heading mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
                  Where skill becomes craft.
                </h2>

                <div className="mt-7 max-w-2xl space-y-5 text-[15px] leading-7 text-slate">
                  <p>
                    Hosanna is designed as a practical learning environment
                    where students can develop useful skills through direct
                    experience and guided practice.
                  </p>

                  <p>
                    Our focus brings together two creative disciplines:
                    catering and fashion design. Both require technical
                    knowledge, attention to detail and the confidence that
                    comes from repeated practice.
                  </p>

                  <p>
                    The aim is simple: help learners build a foundation they
                    can continue developing long after the classroom.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="atelier-card overflow-hidden bg-white">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/hero-catering.png"
                      alt="Editorial image representing practical catering training"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>

                  <div className="border-t border-linen p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-noir">
                      THE HOSANNA APPROACH
                    </p>

                    <p className="mt-2 font-serif text-lg text-charcoal">
                      Practical learning. Creative confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-linen bg-linen/50 py-16 sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="max-w-2xl">
              <p className="eyebrow">WHAT GUIDES US</p>

              <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                Three principles behind the learning experience.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="atelier-card bg-white"
                >
                  <span className="font-serif text-3xl text-champagne-gold">
                    {value.number}
                  </span>

                  <div className="mt-6 gold-rule" />

                  <h3 className="mt-5 font-serif text-xl text-emerald-noir">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate">
                    {value.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Focus */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="hosanna-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">WHAT YOU CAN LEARN</p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  Skills with room to grow.
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-slate">
                  Our public programme structure centres on practical
                  development across catering, culinary, fashion and creative
                  enterprise.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="border-t border-emerald-noir">
                  {learningAreas.map((area, index) => (
                    <div
                      key={area}
                      className="flex items-center gap-4 border-b border-linen py-5"
                    >
                      <CheckCircle2
                        className="h-5 w-5 shrink-0 text-champagne-gold"
                        aria-hidden="true"
                      />

                      <span className="text-sm font-medium text-charcoal sm:text-base">
                        {area}
                      </span>

                      <span className="ml-auto font-serif text-sm text-slate">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Disciplines */}
        <section className="bg-emerald-noir py-16 text-warm-ivory sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="max-w-3xl">
              <p className="eyebrow text-pale-gold">
                TWO DISCIPLINES
              </p>

              <h2 className="editorial-heading mt-4 text-3xl text-warm-ivory sm:text-4xl lg:text-5xl">
                One standard:
                <br />
                learn by doing.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Link
                href="/catering"
                className="group border border-white/15 bg-white/5 p-6 transition-colors hover:bg-white/10 sm:p-8"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-pale-gold">
                  CATERING
                </span>

                <h3 className="mt-4 font-serif text-2xl text-warm-ivory">
                  Create with flavour.
                </h3>

                <p className="mt-3 text-sm leading-6 text-warm-ivory/70">
                  Explore practical culinary and catering skills through
                  preparation, technique and presentation.
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-pale-gold">
                  Explore Catering
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                href="/fashion"
                className="group border border-white/15 bg-white/5 p-6 transition-colors hover:bg-white/10 sm:p-8"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-pale-gold">
                  FASHION
                </span>

                <h3 className="mt-4 font-serif text-2xl text-warm-ivory">
                  Create with precision.
                </h3>

                <p className="mt-3 text-sm leading-6 text-warm-ivory/70">
                  Develop fashion and tailoring skills through construction,
                  technique, finishing and practice.
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-pale-gold">
                  Explore Fashion
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="border border-linen bg-white p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-12">
              <div>
                <p className="eyebrow">START YOUR JOURNEY</p>

                <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
                  Your next skill can start here.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate sm:text-base">
                  Explore the programmes available and learn more about the
                  admissions process.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                <Link href="/programmes" className="primary-button">
                  Explore Programmes
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link href="/apply" className="secondary-button">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}