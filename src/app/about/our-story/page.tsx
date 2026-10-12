import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Our Story" };

const values = [
  { n: "01", title: "Practical Learning",   text: "Learning is centred on developing useful skills through guided practice and repeated hands-on work." },
  { n: "02", title: "Creative Craft",       text: "Students are encouraged to develop their own sense of creativity while building strong practical foundations." },
  { n: "03", title: "Confidence to Create", text: "The goal is to help learners move from learning a technique to applying their skills with confidence." },
];

const disciplines = [
  "Catering and Culinary Skills",
  "Fashion Design and Tailoring",
  "Practical Creative Skills",
  "Enterprise-minded Learning",
];

const storyPoints = [
  "Hands-on practical learning",
  "Catering and culinary development",
  "Fashion and garment-making skills",
  "Creative confidence",
];

export default function OurStoryPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="About / Our Story"
        heading="Where skill becomes craft."
        subheading="Hosanna School of Catering and Fashion Design is built as a practical learning environment where students can develop catering, culinary and fashion skills through hands-on practice."
        backHref="/about"
        backLabel="Back to About"
      />

      {/* The Idea */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">The Idea</p>
                <h2 className="section-heading mt-3">Learn the skill. Develop the craft.</h2>
              </div>
              <div className="space-y-5 text-[17px] leading-[1.7] text-ink-600">
                <p>
                  Hosanna is built around a simple idea: practical skills become
                  more valuable when learners have the opportunity to practise
                  them, refine them and eventually use them with confidence.
                </p>
                <p>
                  The school brings together two practical disciplines,
                  catering and fashion design, creating a learning environment
                  where creativity and technical skill meet.
                </p>
                <p>
                  From the kitchen to the workroom, the emphasis is on making,
                  practising and developing useful skills rather than learning
                  only through theory.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Visual story */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-[4/3]">
                <Image
                  src="/images/hero-catering.png"
                  alt="Culinary training at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div>
                <p className="eyebrow">A Practical Approach</p>
                <h2 className="section-heading mt-3">Learning happens through doing.</h2>
                <p className="mt-6 text-[17px] leading-[1.7] text-ink-600">
                  Practical training gives learners room to work with
                  techniques, tools and materials while developing the
                  discipline required to turn a skill into a dependable craft.
                </p>
                <div className="mt-8 grid gap-3">
                  {storyPoints.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                      <span className="text-[15px] text-ink-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Disciplines list */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
              <div>
                <p className="eyebrow">What We Develop</p>
                <h2 className="section-heading mt-3">Practical skills for creative work.</h2>
              </div>
              <div className="divide-y divide-line border-y border-line">
                {disciplines.map((d, i) => (
                  <div key={d} className="flex items-center gap-5 py-5">
                    <span className="min-w-[32px] text-[13px] font-semibold text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[16px] font-medium text-ink-900">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values — dark section */}
      <section className="section-pad bg-brand-900">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow-light">Our Approach</p>
              <h2 className="section-heading mt-3 text-white">
                Three ideas behind the learning experience.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((v, i) => (
                <FadeUp key={v.n} delay={i * 70}>
                  <article className="rounded-xl border border-white/10 bg-white/5 p-8 h-full">
                    <span className="text-5xl font-bold leading-none tracking-tight text-white/10 select-none" aria-hidden="true">{v.n}</span>
                    <h3 className="mt-6 text-[17px] font-semibold text-white">{v.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-white/60">{v.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content note */}
      <section className="section-pad bg-off-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="rounded-xl border border-line bg-brand-50 p-8">
              <p className="eyebrow">Content Verification</p>
              <p className="mt-3 max-w-[65ch] text-[15px] leading-[1.7] text-ink-600">
                This page intentionally avoids unverified claims about the school's founding date, founder, accreditation, affiliations, certificates, faculty or specific institutional history. Those details should be added only after the school confirms them.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Continue Exploring"
        heading="See the spaces, people and learning experience."
        primaryLabel="Explore Facilities"
        primaryHref="/about/facilities"
        secondaryLabel="Student Life"
        secondaryHref="/about/student-life"
      />
    </div>
  );
}
