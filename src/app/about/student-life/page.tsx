import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Student Life" };

const pillars = [
  { n: "01", title: "Learn by Doing",     text: "Every session is built around practical work. Students develop skills by making, not just listening." },
  { n: "02", title: "Build Confidence",   text: "Repetition and guided feedback help turn uncertainty into quiet confidence in your own hands." },
  { n: "03", title: "Develop Creativity", text: "Students are encouraged to develop their own creative voice alongside technical foundations." },
  { n: "04", title: "Grow Together",      text: "Learning in a shared environment means students encourage and inspire each other every session." },
];

export default function StudentLifePage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="About / Student Life"
        heading="Life at Hosanna School."
        subheading="A look at the day-to-day learning experience, what it feels like to develop practical skills and creative confidence at Hosanna."
        backHref="/about"
        backLabel="Back to About"
      />

      {/* The experience */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <p className="eyebrow">The Experience</p>
                <h2 className="section-heading mt-3">
                  Learning that sticks because you did it yourself.
                </h2>
                <p className="mt-6 text-[17px] leading-[1.7] text-ink-600">
                  At Hosanna, student life is centred on making. Whether you are in the kitchen or at a sewing machine, each session is designed to move you forward, building skills that grow with you.
                </p>
                <p className="mt-4 text-[17px] leading-[1.7] text-ink-600">
                  Students work alongside instructors who guide technique, encourage creativity and help build the discipline that separates a learner from a craftsperson.
                </p>
              </div>
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-[4/3]">
                <Image
                  src="/images/hero-catering.png"
                  alt="Students at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow">Four Pillars</p>
              <h2 className="section-heading mt-3">What shapes the Hosanna learning experience.</h2>
            </div>
          </FadeUp>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <FadeUp key={p.n} delay={i * 70}>
                <article className="h-card h-full">
                  <span className="text-5xl font-bold leading-none tracking-tight text-ink-900/[0.07] select-none" aria-hidden="true">{p.n}</span>
                  <h3 className="card-heading mt-5 text-ink-900">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-ink-600">{p.text}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the classroom */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-[4/3]">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion students at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div>
                <p className="eyebrow">Beyond the Classroom</p>
                <h2 className="section-heading mt-3">Skills that outlast the programme.</h2>
                <p className="mt-6 text-[17px] leading-[1.7] text-ink-600">
                  The goal at Hosanna is not just for students to pass through a programme. It is for them to leave with skills, confidence and a foundation they can keep building on for years.
                </p>
                <p className="mt-4 text-[17px] leading-[1.7] text-ink-600">
                  From catering to fashion to millinery, graduates of Hosanna carry practical ability and creative confidence into whatever they do next.
                </p>
                <Link href="/programmes" className="btn-primary mt-9 inline-flex">
                  Explore Programmes
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Join Us"
        heading="Become part of the Hosanna community."
        body="Apply for a place and start developing the skills that will shape your creative future."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}
