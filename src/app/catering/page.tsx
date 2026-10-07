import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const pathways = [
  {
    number: "01",
    title: "Catering Training",
    text: "Build practical catering skills through guided preparation, technique and repeated hands-on practice.",
    href: "/catering/training",
  },
  {
    number: "02",
    title: "Pastry & Baking",
    text: "Explore pastry and baking techniques with attention to preparation, consistency and presentation.",
    href: "/catering/pastry",
  },
  {
    number: "03",
    title: "Events & Catering",
    text: "Develop practical knowledge for preparing and presenting food for events and hospitality settings.",
    href: "/catering/events",
  },
];

const skills = [
  "Food preparation",
  "Kitchen techniques",
  "Presentation",
  "Pastry and baking",
  "Event catering",
  "Creative confidence",
];

export default function CateringPage() {
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
                    CATERING & CULINARY
                  </p>

                  <h1 className="editorial-heading mt-5 text-4xl text-warm-ivory sm:text-5xl lg:text-6xl">
                    Create with flavour.
                  </h1>

                  <p className="mt-6 text-base leading-7 text-warm-ivory/80 sm:text-lg">
                    Practical catering training designed to help you develop
                    technique, confidence and the ability to create with your
                    hands.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/catering/training"
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
                src="/images/hero-catering.png"
                alt="Editorial image representing catering and culinary training"
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
                <p className="eyebrow text-terracotta">
                  THE DISCIPLINE
                </p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  More than recipes.
                  <br />
                  Build the skill behind the work.
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="max-w-2xl text-[15px] leading-7 text-slate sm:text-base">
                  Catering combines preparation, technique, presentation,
                  organisation and attention to detail. Practical training
                  gives learners the opportunity to develop these skills
                  through doing and refining the work.
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
                <p className="eyebrow text-terracotta">
                  CATERING PATHWAYS
                </p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  Find your area of interest.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate">
                Explore the different areas of practical catering and
                culinary development.
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

        {/* Practical Feature */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="hosanna-container">
            <div className="grid overflow-hidden border border-linen bg-white lg:grid-cols-2">
              <div className="relative min-h-[360px] lg:min-h-[540px]">
                <Image
                  src="/images/hero-catering.png"
                  alt="Culinary training editorial image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex items-center p-7 sm:p-10 lg:p-14 xl:p-16">
                <div>
                  <p className="eyebrow text-terracotta">
                    PRACTICAL LEARNING
                  </p>

                  <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                    Learn through preparation, practice and refinement.
                  </h2>

                  <p className="mt-5 text-sm leading-6 text-slate sm:text-base">
                    The strongest skills are developed through repetition.
                    Catering training gives learners space to practise
                    techniques, understand processes and improve their work.
                  </p>

                  <div className="mt-7 border-l-2 border-champagne-gold pl-5">
                    <p className="font-serif text-lg text-emerald-noir">
                      “Learn the skill. Develop the craft.”
                    </p>
                  </div>

                  <Link
                    href="/catering/training"
                    className="secondary-button mt-8"
                  >
                    Explore Catering Training
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
                Explore the training options or begin your application to
                Hosanna School of Catering & Fashion Design.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/catering/training"
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