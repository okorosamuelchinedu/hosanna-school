import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "About Hosanna" };

const values = [
  { n: "01", title: "Practical Learning",   text: "Skills grow through practice, repetition and doing the work with your own hands." },
  { n: "02", title: "Creative Confidence",  text: "Training should help learners develop confidence in their ability to create and improve." },
  { n: "03", title: "Craft and Discipline", text: "Good craft requires attention to detail, consistency, patience and commitment." },
];

const learningAreas = [
  "Catering and culinary skills",
  "Fashion design and tailoring",
  "Event management and hospitality",
  "Hairdressing and millinery",
  "Industrial production skills",
  "Creative entrepreneurial development",
];

const disciplines = [
  { label: "Catering", title: "Create with flavour.",    text: "Explore practical culinary, pastry and events catering skills.", href: "/catering" },
  { label: "Fashion",  title: "Create with precision.",  text: "Develop fashion design, tailoring, millinery and garment-making skills.", href: "/fashion" },
];

export default function AboutPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="About Hosanna"
        heading="Learn the skill. Develop the craft."
        subheading="Hosanna School of Catering and Fashion Design is the home of amazing creativity and excellence, built around practical learning, creative development and useful skills that last."
      />

      {/* Our Story */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <p className="eyebrow">Our Story</p>
                <h2 className="section-heading mt-3">Where skill becomes craft.</h2>
                <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-ink-600">
                  <p>
                    Hosanna is designed as a practical learning environment where
                    students can develop useful skills through direct experience
                    and guided practice.
                  </p>
                  <p>
                    We bring together creative disciplines, catering, fashion,
                    event management, hairdressing and millinery, creating a
                    learning environment where creativity and technical skill meet.
                  </p>
                  <p>
                    From the kitchen to the workroom, the emphasis is on making,
                    practising and developing useful skills rather than learning
                    only through theory.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2.5 text-[13px] text-ink-400">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>No. 1 Njoku Street, Umungasi, Aba, Abia State, Nigeria</span>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/about/our-story" className="btn-primary inline-flex">
                    Our Full Story
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="btn-secondary inline-flex">Contact Us</Link>
                </div>
              </div>
              <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                <Image
                  src="/images/hero-catering.png"
                  alt="Practical catering training at Hosanna School"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm">
                  <p className="eyebrow-light">The Hosanna Approach</p>
                  <p className="mt-1 text-[15px] font-semibold text-white">Practical learning. Creative confidence.</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow">What Guides Us</p>
              <h2 className="section-heading mt-3">
                Three principles behind our learning experience.
              </h2>
            </div>
          </FadeUp>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeUp key={v.n} delay={i * 70}>
                <article className="h-card h-full">
                  <span className="text-5xl font-bold leading-none tracking-tight text-ink-900/[0.07] select-none" aria-hidden="true">{v.n}</span>
                  <h3 className="card-heading mt-5 text-ink-900">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-ink-600">{v.text}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
              <div>
                <p className="eyebrow">What You Can Learn</p>
                <h2 className="section-heading mt-3">Skills with room to grow.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Our programmes centre on practical development across catering,
                  fashion, events, hairdressing and creative enterprise.
                </p>
              </div>
              <div className="border-t-2 border-brand-700 pt-2">
                {learningAreas.map((area, i) => (
                  <div key={area} className="flex items-center gap-4 border-b border-line py-5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                    <span className="flex-1 text-[15px] font-medium text-ink-900">{area}</span>
                    <span className="text-[12px] font-semibold text-ink-400">0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Two disciplines */}
      <section className="section-pad bg-brand-900">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow-light">Two Disciplines</p>
              <h2 className="section-heading mt-3 text-white">One standard: learn by doing.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {disciplines.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="group block rounded-xl border border-white/15 bg-white/5 p-8 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                >
                  <p className="eyebrow-light">{d.label}</p>
                  <h3 className="mt-4 text-[22px] font-bold tracking-tight text-white">{d.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-white/65">{d.text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-white/80">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Start Your Journey"
        heading="Your next skill can start here."
        body="Explore the programmes available and learn more about the admissions process."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Explore Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
