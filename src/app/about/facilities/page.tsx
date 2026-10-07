import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const facilityAreas = [
  {
    number: "01",
    title: "Culinary Learning",
    description:
      "A practical environment for developing catering, food preparation and culinary skills through hands-on learning.",
  },
  {
    number: "02",
    title: "Fashion & Tailoring",
    description:
      "A creative work environment where learners can practise fashion design, tailoring and garment construction.",
  },
  {
    number: "03",
    title: "Practical Work Areas",
    description:
      "Spaces designed around the principle that useful skills develop through repeated practice and making.",
  },
];

const experiencePoints = [
  "Hands-on practical training",
  "Dedicated areas for different disciplines",
  "Learning through guided practice",
  "A creative environment for developing craft",
];

export default function FacilitiesPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-warm-ivory">
        {/* Hero */}
        <section className="border-b border-linen">
          <div className="hosanna-container py-16 sm:py-20 lg:py-28">
            <Link
              href="/about"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-noir transition-colors hover:text-burnished-gold"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to About
            </Link>

            <p className="eyebrow mb-4">ABOUT / FACILITIES</p>

            <h1 className="editorial-heading max-w-5xl text-4xl sm:text-5xl lg:text-6xl">
              Spaces made for practical learning.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate sm:text-lg">
              A look at the kinds of practical learning environments that
              support catering, culinary and fashion training at Hosanna.
            </p>
          </div>
        </section>

        {/* Feature image */}
        <section className="hosanna-container py-14 sm:py-16 lg:py-20">
          <div className="relative aspect-[16/8] overflow-hidden border border-linen bg-white">
            <Image
              src="/images/hero-catering.png"
              alt="Practical culinary training environment"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-4 flex flex-col justify-between gap-3 text-xs text-slate sm:flex-row">
            <span className="uppercase tracking-[0.12em]">
              Practical learning environment
            </span>

            <span>Editorial demo image</span>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-y border-linen bg-linen/40">
          <div className="hosanna-container py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
              <div>
                <p className="eyebrow">THE ENVIRONMENT</p>

                <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
                  The space should support the skill.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-7 text-slate">
                  Practical education works best when learners have an
                  environment where they can practise techniques, work with
                  appropriate materials and develop confidence through
                  repetition.
                </p>

                <p className="mt-5 text-base leading-7 text-slate">
                  The facilities section of the finished website can become a
                  detailed visual tour once the school provides approved
                  photographs and confirms the exact facilities available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facility areas */}
        <section className="hosanna-container py-16 sm:py-20 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">LEARNING AREAS</p>

            <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
              Built around practical disciplines.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-linen bg-linen md:grid-cols-3">
            {facilityAreas.map((area) => (
              <article
                key={area.number}
                className="bg-white p-6 sm:p-8"
              >
                <span className="font-display text-2xl text-burnished-gold">
                  {area.number}
                </span>

                <h3 className="mt-8 font-display text-2xl text-emerald-noir">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Fashion feature */}
        <section className="border-y border-linen">
          <div className="hosanna-container py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative order-2 aspect-[4/3] overflow-hidden border border-linen bg-white lg:order-1">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion design and tailoring training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="order-1 max-w-xl lg:order-2">
                <p className="eyebrow">FASHION WORKSPACE</p>

                <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
                  A place to measure, cut and construct.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate">
                  Fashion training requires space for careful measurement,
                  cutting, construction and finishing. The final site can
                  showcase the school&apos;s actual fashion workspaces once
                  approved photography is available.
                </p>

                <Link
                  href="/fashion"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-noir underline decoration-burnished-gold underline-offset-4"
                >
                  Explore Fashion
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What the experience supports */}
        <section className="hosanna-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">LEARNING EXPERIENCE</p>

              <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
                More than a room. A place to practise.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate">
                The purpose of the facilities is not simply to provide space,
                but to give learners an environment where practical work can
                happen consistently.
              </p>
            </div>

            <div className="atelier-card">
              <div className="space-y-5">
                {experiencePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pale-gold text-emerald-noir">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>

                    <span className="text-sm leading-6 text-charcoal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Verification notice */}
        <section className="hosanna-container pb-16 sm:pb-20">
          <div className="border border-dashed border-burnished-gold bg-pale-gold/30 p-6 sm:p-8">
            <p className="eyebrow text-burnished-gold">
              CONTENT VERIFICATION
            </p>

            <h2 className="editorial-heading mt-3 text-2xl sm:text-3xl">
              Replace demo imagery with verified school photography.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-charcoal">
              The photographs on this demo page are temporary editorial
              placeholders. Before production launch, they should be replaced
              with approved photographs of the school&apos;s actual facilities.
              Exact equipment, room names, capacities and other facility
              details should only be published after confirmation by Hosanna.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-linen bg-emerald-noir text-warm-ivory">
          <div className="hosanna-container py-16 sm:py-20">
            <p className="eyebrow text-pale-gold">CONTINUE EXPLORING</p>

            <h2 className="editorial-heading mt-4 max-w-3xl text-3xl text-warm-ivory sm:text-4xl lg:text-5xl">
              See what learning at Hosanna is designed to feel like.
            </h2>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about/student-life"
                className="primary-button inline-flex items-center justify-center gap-2"
              >
                Student Life
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/about/faculty"
                className="secondary-button inline-flex items-center justify-center border-pale-gold text-warm-ivory hover:bg-warm-ivory hover:text-emerald-noir"
              >
                Meet the Faculty
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}