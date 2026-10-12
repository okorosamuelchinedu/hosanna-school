import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Faculty" };

const instructors = [
  { area: "Catering and Culinary",        desc: "Experienced culinary instructor with practical industry knowledge." },
  { area: "Pastry and Baking",            desc: "Specialist in pastry techniques, baking methods and confectionery." },
  { area: "Fashion Design and Tailoring", desc: "Fashion and garment construction specialist with studio experience." },
  { area: "Millinery and Hairdressing",   desc: "Creative specialist in headwear design and professional hair skills." },
];

export default function FacultyPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="About / Faculty"
        heading="Our Faculty"
        subheading="The people who guide, teach and inspire learning at Hosanna School of Catering and Fashion Design."
        backHref="/about"
        backLabel="Back to About"
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">Who Teaches Here</p>
                <h2 className="section-heading mt-3">Guided by experience.</h2>
              </div>
              <div className="space-y-5 text-[17px] leading-[1.7] text-ink-600">
                <p>
                  Hosanna's instructors bring hands-on practical experience to every session. Their role is not just to demonstrate technique, it is to guide learners until they can do it themselves.
                </p>
                <p>
                  Detailed faculty profiles and credentials will be published on this page once confirmed by the school.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Instructor cards */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <div className="grid gap-5 sm:grid-cols-2">
            {instructors.map((f, i) => (
              <FadeUp key={f.area} delay={i * 70}>
                <div className="h-card h-full">
                  <div className="icon-tile">
                    <span className="text-[13px] font-bold tracking-tight">HS</span>
                  </div>
                  <h3 className="card-heading mt-5 text-brand-700">{f.area}</h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-ink-600">{f.desc}</p>
                  <p className="mt-4 text-[12px] font-semibold uppercase tracking-widest text-ink-400">
                    Profile coming soon
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={100}>
            <div className="mt-10 rounded-xl border border-line bg-brand-50 p-6">
              <p className="text-[15px] leading-[1.7] text-ink-600">
                Faculty names, photographs and detailed credentials will be added to this page after confirmation and approval by Hosanna School.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Learn From the Best"
        heading="Ready to start learning?"
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Explore Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
