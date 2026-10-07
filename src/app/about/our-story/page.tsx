import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const values = [
  {
    number: "01",
    title: "Practical Learning",
    description:
      "Learning is centred on developing useful skills through guided practice and repeated hands-on work.",
  },
  {
    number: "02",
    title: "Creative Craft",
    description:
      "Students are encouraged to develop their own sense of creativity while building strong practical foundations.",
  },
  {
    number: "03",
    title: "Confidence to Create",
    description:
      "The goal is to help learners move from learning a technique to applying their skills with confidence.",
  },
];

const disciplines = [
  "Catering & Culinary Skills",
  "Fashion Design & Tailoring",
  "Practical Creative Skills",
  "Enterprise-minded Learning",
];

export default function OurStoryPage() {
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

            <p className="eyebrow mb-4">ABOUT / OUR STORY</p>

            <h1 className="editorial-heading max-w-5xl text-4xl sm:text-5xl lg:text-6xl">
              Where skill becomes craft.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate sm:text-lg">
              Hosanna School of Catering & Fashion Design is presented as a
              practical learning environment where students can develop
              catering, culinary and fashion skills through hands-on practice.
            </p>
          </div>
        </section>

        {/* Story introduction */}
        <section className="hosanna-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <p className="eyebrow">THE IDEA</p>

              <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
                Learn the skill. Develop the craft.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate">
              <p>
                Hosanna is built around a simple idea: practical skills become
                more valuable when learners have the opportunity to practise
                them, refine them and eventually use them with confidence.
              </p>

              <p>
                The school brings together two practical disciplines —
                catering and fashion design — creating a learning environment
                where creativity and technical skill meet.
              </p>

              <p>
                From the kitchen to the workroom, the emphasis is on making,
                practising and developing useful skills rather than learning
                only through theory.
              </p>
            </div>
          </div>
        </section>

        {/* Visual story */}
        <section className="border-y border-linen bg-linen/40">
          <div className="hosanna-container py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden border border-linen bg-white">
                <Image
                  src="/images/hero-catering.png"
                  alt="Culinary training demonstration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="max-w-xl">
                <p className="eyebrow">A PRACTICAL APPROACH</p>

                <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
                  Learning happens through doing.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate">
                  Practical training gives learners room to work with
                  techniques, tools and materials while developing the
                  discipline required to turn a skill into a dependable craft.
                </p>

                <div className="mt-8 h-px w-24 bg-burnished-gold" />
              </div>
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section className="hosanna-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <p className="eyebrow">WHAT WE DEVELOP</p>

              <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
                Practical skills for creative work.
              </h2>
            </div>

            <div>
              <div className="divide-y divide-linen border-y border-linen">
                {disciplines.map((discipline, index) => (
                  <div
                    key={discipline}
                    className="flex items-center gap-5 py-5"
                  >
                    <span className="font-display text-xl text-burnished-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-medium text-charcoal">
                      {discipline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-emerald-noir text-warm-ivory">
          <div className="hosanna-container py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="eyebrow text-pale-gold">OUR APPROACH</p>

              <h2 className="editorial-heading mt-3 text-3xl text-warm-ivory sm:text-4xl">
                Three ideas behind the learning experience.
              </h2>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-palm-green bg-palm-green md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="bg-emerald-noir p-6 sm:p-8"
                >
                  <span className="font-display text-2xl text-pale-gold">
                    {value.number}
                  </span>

                  <h3 className="mt-8 font-display text-2xl text-warm-ivory">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-warm-ivory/75">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What the school represents */}
        <section className="hosanna-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">THE HOSANNA STANDARD</p>

              <h2 className="editorial-heading mt-3 text-3xl sm:text-4xl">
                Skill first. Craft always.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate">
                The website experience is designed around the same idea as the
                school’s positioning: learning should feel practical,
                purposeful and connected to the work learners want to create.
              </p>
            </div>

            <div className="atelier-card">
              <div className="space-y-5">
                {[
                  "Hands-on practical learning",
                  "Catering and culinary development",
                  "Fashion and garment-making skills",
                  "Creative confidence",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pale-gold text-emerald-noir">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>

                    <span className="text-sm leading-6 text-charcoal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo notice */}
        <section className="hosanna-container pb-16 sm:pb-20">
          <div className="border border-dashed border-burnished-gold bg-pale-gold/30 p-6 sm:p-8">
            <p className="eyebrow text-burnished-gold">
              CONTENT VERIFICATION
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-charcoal">
              This demo page intentionally avoids unverified claims about the
              school’s founding date, founder, accreditation, affiliations,
              certificates, faculty or specific institutional history. Those
              details should be added only after the school confirms them.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-linen bg-linen/40">
          <div className="hosanna-container py-16 sm:py-20">
            <p className="eyebrow">CONTINUE EXPLORING</p>

            <h2 className="editorial-heading mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
              See the spaces, people and learning experience.
            </h2>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about/facilities"
                className="primary-button inline-flex items-center justify-center gap-2"
              >
                Explore Facilities
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/about/student-life"
                className="secondary-button inline-flex items-center justify-center"
              >
                Student Life
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}