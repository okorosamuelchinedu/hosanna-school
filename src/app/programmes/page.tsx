import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const cateringProgrammes = [
  {
    number: "01",
    title: "Catering & Culinary",
    description:
      "Explore practical catering and culinary skills through preparation, technique, presentation and hands-on practice.",
    href: "/programmes/catering-culinary",
  },
  {
    number: "02",
    title: "Pastry & Baking",
    description:
      "Develop practical skills around pastry, baking, preparation and presentation in a hands-on learning environment.",
    href: "/programmes/pastry-baking",
  },
  {
    number: "03",
    title: "Events & Catering",
    description:
      "Build practical knowledge for preparing, organising and presenting food for events and hospitality settings.",
    href: "/programmes/events-catering",
  },
];

const fashionProgrammes = [
  {
    number: "01",
    title: "Fashion Design & Training",
    description:
      "Build practical fashion skills through guided learning, garment development and repeated hands-on practice.",
    href: "/programmes/fashion-design",
  },
  {
    number: "02",
    title: "Tailoring",
    description:
      "Develop practical tailoring skills with attention to measurements, construction, fitting and finishing.",
    href: "/programmes/tailoring",
  },
  {
    number: "03",
    title: "Garment Construction",
    description:
      "Learn the principles of turning design ideas and fabric into finished garments through practical construction.",
    href: "/programmes/garment-construction",
  },
];

const learningPoints = [
  "Hands-on practical training",
  "Guided skill development",
  "Repeated practice and refinement",
  "Creative confidence",
];

export default function ProgrammesPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-warm-ivory">
        {/* Hero */}
        <section className="bg-emerald-noir text-warm-ivory">
          <div className="hosanna-container py-16 sm:py-20 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="eyebrow text-pale-gold">
                  PROGRAMMES
                </p>

                <h1 className="editorial-heading mt-5 max-w-4xl text-4xl text-warm-ivory sm:text-5xl lg:text-6xl">
                  Practical skills.
                  <br />
                  Creative confidence.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-warm-ivory/80 sm:text-lg">
                  Explore practical training across catering, culinary,
                  fashion and tailoring — designed around learning by doing.
                </p>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pale-gold">
                  HOSANNA SCHOOL
                </p>

                <p className="mt-3 text-sm leading-6 text-warm-ivory/70">
                  Aba, Abia State · Nigeria
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-14 sm:py-18 lg:py-24">
          <div className="hosanna-container">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">LEARN BY DOING</p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  Training built around practical development.
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="max-w-2xl text-[15px] leading-7 text-slate sm:text-base">
                  Hosanna brings together two creative disciplines under one
                  practical learning philosophy: catering and fashion design.
                  Each area gives learners room to develop technical skills,
                  practise repeatedly and build confidence through making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering */}
        <section className="border-y border-linen bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[360px] lg:min-h-[600px]">
              <Image
                src="/images/hero-catering.png"
                alt="Editorial image representing catering and culinary training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex items-center">
              <div className="w-full p-7 sm:p-10 lg:p-14 xl:p-20">
                <p className="eyebrow text-terracotta">
                  CATERING
                </p>

                <h2 className="editorial-heading mt-4 text-3xl text-emerald-noir sm:text-4xl">
                  Create with flavour.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-slate sm:text-base">
                  Develop practical catering and culinary skills through
                  preparation, technique, presentation and hands-on practice.
                </p>

                <div className="mt-8 divide-y divide-linen border-y border-linen">
                  {cateringProgrammes.map((programme) => (
                    <Link
                      key={programme.number}
                      href={programme.href}
                      className="group flex gap-4 py-5"
                    >
                      <span className="w-8 shrink-0 font-serif text-sm text-champagne-gold">
                        {programme.number}
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-serif text-lg text-emerald-noir">
                          {programme.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate">
                          {programme.description}
                        </p>

                        <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-noir">
                          Explore
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/catering"
                  className="secondary-button mt-8"
                >
                  View Catering
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fashion */}
        <section className="border-b border-linen bg-linen/40">
          <div className="grid lg:grid-cols-2">
            <div className="order-2 flex items-center lg:order-1">
              <div className="w-full p-7 sm:p-10 lg:p-14 xl:p-20">
                <p className="eyebrow text-adire-indigo">
                  FASHION
                </p>

                <h2 className="editorial-heading mt-4 text-3xl text-emerald-noir sm:text-4xl">
                  Create with precision.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-slate sm:text-base">
                  Develop practical fashion and tailoring skills through
                  construction, fitting, finishing and repeated practice.
                </p>

                <div className="mt-8 divide-y divide-linen border-y border-linen">
                  {fashionProgrammes.map((programme) => (
                    <Link
                      key={programme.number}
                      href={programme.href}
                      className="group flex gap-4 py-5"
                    >
                      <span className="w-8 shrink-0 font-serif text-sm text-champagne-gold">
                        {programme.number}
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-serif text-lg text-emerald-noir">
                          {programme.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate">
                          {programme.description}
                        </p>

                        <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-noir">
                          Explore
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/fashion"
                  className="secondary-button mt-8"
                >
                  View Fashion
                </Link>
              </div>
            </div>

            <div className="relative order-1 min-h-[360px] lg:order-2 lg:min-h-[600px]">
              <Image
                src="/images/hero-fashion.png"
                alt="Editorial image representing fashion design and tailoring training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Learning Experience */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="hosanna-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">THE LEARNING EXPERIENCE</p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  Skills become stronger through practice.
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-slate">
                  The programme structure is centred on practical development
                  rather than simply reading about a skill.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {learningPoints.map((point, index) => (
                    <div
                      key={point}
                      className="atelier-card bg-white"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <Check
                          className="h-5 w-5 shrink-0 text-champagne-gold"
                          aria-hidden="true"
                        />

                        <span className="font-serif text-sm text-slate">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-6 font-serif text-lg text-emerald-noir">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme Note */}
        <section className="border-y border-linen bg-emerald-noir py-14 text-warm-ivory sm:py-18 lg:py-20">
          <div className="hosanna-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-pale-gold">
                FIND YOUR DIRECTION
              </p>

              <h2 className="editorial-heading mt-4 text-3xl text-warm-ivory sm:text-4xl">
                Choose a skill.
                <br />
                Start building your craft.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-warm-ivory/70 sm:text-base">
                Explore the areas of training that interest you, then learn
                more about admissions and how to begin.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="primary-button bg-pale-gold text-emerald-noir hover:bg-champagne-gold"
                >
                  Admissions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/apply"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-warm-ivory transition-colors hover:bg-white/10"
                >
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