import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Facilities" };

const facilityAreas = [
  { n: "01", title: "Culinary Learning",       text: "A practical environment for developing catering, food preparation and culinary skills through hands-on learning." },
  { n: "02", title: "Fashion and Tailoring",   text: "A creative work environment where learners can practise fashion design, tailoring and garment construction." },
  { n: "03", title: "Practical Work Areas",    text: "Spaces designed around the principle that useful skills develop through repeated practice and making." },
];

const experiencePoints = [
  "Hands-on practical training",
  "Dedicated areas for different disciplines",
  "Learning through guided practice",
  "A creative environment for developing craft",
];

export default function FacilitiesPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="About / Facilities"
        heading="Spaces made for practical learning."
        subheading="A look at the kinds of practical learning environments that support catering, culinary and fashion training at Hosanna."
        backHref="/about"
        backLabel="Back to About"
      />

      {/* Feature image */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="relative aspect-[16/8] overflow-hidden rounded-xl">
              <Image
                src="/images/hero-catering.png"
                alt="Practical culinary training environment at Hosanna"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center rounded-full bg-black/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm">
                  Practical learning environment
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">The Environment</p>
                <h2 className="section-heading mt-3">The space should support the skill.</h2>
              </div>
              <div className="space-y-5 text-[17px] leading-[1.7] text-ink-600">
                <p>
                  Practical education works best when learners have an
                  environment where they can practise techniques, work with
                  appropriate materials and develop confidence through
                  repetition.
                </p>
                <p>
                  The facilities section of the finished website can become a
                  detailed visual tour once the school provides approved
                  photographs and confirms the exact facilities available.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Facility areas */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow">Learning Areas</p>
              <h2 className="section-heading mt-3">Built around practical disciplines.</h2>
            </div>
          </FadeUp>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {facilityAreas.map((area, i) => (
              <FadeUp key={area.n} delay={i * 70}>
                <article className="h-card h-full">
                  <span className="text-5xl font-bold leading-none tracking-tight text-ink-900/[0.07] select-none" aria-hidden="true">{area.n}</span>
                  <h3 className="card-heading mt-5 text-ink-900">{area.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-ink-600">{area.text}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion workspace */}
      <section className="section-pad bg-off-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-[4/3]">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion design and tailoring training at Hosanna"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div>
                <p className="eyebrow">Fashion Workspace</p>
                <h2 className="section-heading mt-3">A place to measure, cut and construct.</h2>
                <p className="mt-6 text-[17px] leading-[1.7] text-ink-600">
                  Fashion training requires space for careful measurement,
                  cutting, construction and finishing. The final site can
                  showcase the school's actual fashion workspaces once
                  approved photography is available.
                </p>
                <Link href="/fashion" className="link-arrow mt-8 inline-flex">
                  Explore Fashion
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Learning experience */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
              <div>
                <p className="eyebrow">Learning Experience</p>
                <h2 className="section-heading mt-3">More than a room. A place to practise.</h2>
                <p className="mt-6 text-[17px] leading-[1.7] text-ink-600">
                  The purpose of the facilities is not simply to provide space,
                  but to give learners an environment where practical work can
                  happen consistently.
                </p>
              </div>
              <div className="h-card">
                <ul className="space-y-4">
                  {experiencePoints.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                      <span className="text-[15px] text-ink-900">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content note */}
      <section className="pb-0 pt-0 bg-off-white">
        <div className="hosanna-container pb-20">
          <FadeUp>
            <div className="rounded-xl border border-line bg-brand-50 p-8">
              <p className="eyebrow">Content Verification</p>
              <p className="mt-3 max-w-[65ch] text-[15px] leading-[1.7] text-ink-600">
                The photographs on this page are temporary placeholders. Before launch, replace them with approved photographs of the school's actual facilities. Exact equipment, room names, capacities and other facility details should only be published after confirmation by Hosanna.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Continue Exploring"
        heading="See what learning at Hosanna is designed to feel like."
        primaryLabel="Student Life"
        primaryHref="/about/student-life"
        secondaryLabel="Meet the Faculty"
        secondaryHref="/about/faculty"
      />
    </div>
  );
}
