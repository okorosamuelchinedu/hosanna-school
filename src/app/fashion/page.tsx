import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const pathways = [
  {
    number: "01",
    title: "Fashion Training",
    text: "Develop practical fashion skills through guided learning, garment development and repeated hands-on practice.",
    href: "/fashion/training",
  },
  {
    number: "02",
    title: "Tailoring",
    text: "Build practical tailoring skills around measurements, construction, fitting and finishing.",
    href: "/fashion/tailoring",
  },
  {
    number: "03",
    title: "Garment Construction",
    text: "Learn how design ideas and fabric become finished garments through practical construction techniques.",
    href: "/fashion/garment-construction",
  },
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
    <>
      <SiteHeader />

      <main className="bg-warm-ivory">
        {/* Hero */}
        <section className="bg-emerald-noir text-warm-ivory">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center">
              <div className="hosanna-container w-full py-16 sm:py-20 lg:py-24 lg:pr-10">
                <div className="max-w-xl">
                  <p className="eyebrow text-pale-gold">
                    FASHION & TAILORING
                  </p>

                  <h1 className="editorial-heading mt-5 text-4xl text-warm-ivory sm:text-5xl lg:text-6xl">
                    Create with precision.
                  </h1>

                  <p className="mt-6 text-base leading-7 text-warm-ivory/80 sm:text-lg">
                    Practical fashion training designed to help you develop
                    technique, construction skills and confidence through
                    making.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/fashion/training"
                      className="primary-button bg-pale-gold text-emerald-noir hover:bg-champagne-gold"
                    >
                      Explore Training
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/apply"
                      className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-6 py-3 text-sm font-semibold text-warm-ivory transition-colors hover:bg-white/10"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[650px]">
              <Image
                src="/images/hero-fashion.png"
                alt="Editorial image representing fashion design and tailoring training"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="hosanna-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow text-adire-indigo">
                  THE DISCIPLINE
                </p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  From an idea to a finished garment.
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="max-w-2xl text-[15px] leading-7 text-slate sm:text-base">
                  Fashion design combines creativity with technical
                  precision. Measurements, construction, fitting and finishing
                  all contribute to the quality of the final garment.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 border-b border-linen py-4"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-champagne-gold"
                        aria-hidden="true"
                      />

                      <span className="text-sm text-charcoal">
                        {skill}
                      </span>

                      <span className="ml-auto font-serif text-xs text-slate">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pathways */}
        <section className="border-y border-linen bg-white py-16 sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-adire-indigo">
                  FASHION PATHWAYS
                </p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  Find your area of interest.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate">
                Explore different areas of practical fashion design and
                garment development.
              </p>
            </div>

            <div className="mt-10 divide-y divide-linen border-y border-linen">
              {pathways.map((pathway) => (
                <Link
                  key={pathway.number}
                  href={pathway.href}
                  className="group grid gap-5 py-7 transition-colors hover:bg-linen/30 md:grid-cols-12 md:gap-8 md:px-5"
                >
                  <div className="md:col-span-1">
                    <span className="font-serif text-lg text-champagne-gold">
                      {pathway.number}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-serif text-xl text-emerald-noir sm:text-2xl">
                      {pathway.title}
                    </h3>
                  </div>

                  <div className="md:col-span-6">
                    <p className="max-w-xl text-sm leading-6 text-slate">
                      {pathway.text}
                    </p>
                  </div>

                  <div className="md:col-span-1 md:flex md:justify-end">
                    <ArrowRight
                      className="h-5 w-5 text-emerald-noir transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Craft Feature */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="hosanna-container">
            <div className="grid overflow-hidden border border-linen bg-white lg:grid-cols-2">
              <div className="relative min-h-[360px] lg:min-h-[540px]">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion design and tailoring editorial image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex items-center p-7 sm:p-10 lg:p-14 xl:p-16">
                <div>
                  <p className="eyebrow text-adire-indigo">
                    PRACTICAL CRAFT
                  </p>

                  <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                    Learn through cutting, construction and refinement.
                  </h2>

                  <p className="mt-5 text-sm leading-6 text-slate sm:text-base">
                    Strong fashion skills develop through practice. Learners
                    can work through the process of creating garments while
                    developing accuracy, technique and attention to detail.
                  </p>

                  <div className="mt-7 border-l-2 border-champagne-gold pl-5">
                    <p className="font-serif text-lg text-emerald-noir">
                      “Learn the skill. Develop the craft.”
                    </p>
                  </div>

                  <Link
                    href="/fashion/training"
                    className="secondary-button mt-8"
                  >
                    Explore Fashion Training
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-noir py-16 text-warm-ivory sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-pale-gold">
                READY TO START?
              </p>

              <h2 className="editorial-heading mt-4 text-3xl text-warm-ivory sm:text-4xl lg:text-5xl">
                Turn practice into craft.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-warm-ivory/70 sm:text-base">
                Explore the training options or learn more about how to begin
                your application.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/fashion/training"
                  className="primary-button bg-pale-gold text-emerald-noir hover:bg-champagne-gold"
                >
                  Explore Training
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/admissions"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-warm-ivory transition-colors hover:bg-white/10"
                >
                  Admissions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}