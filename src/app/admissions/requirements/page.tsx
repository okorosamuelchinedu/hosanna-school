import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "Admissions Requirements" };

const requirements = [
  "Genuine interest in your chosen discipline",
  "Willingness to learn through hands-on practical work",
  "Commitment to attending sessions consistently",
  "Basic literacy and numeracy skills",
  "Age requirement, confirm with the school directly",
  "Completed application form with accurate details",
];

export default function RequirementsPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Admissions / Requirements"
        heading="Requirements"
        subheading="What you need to know before applying to Hosanna School."
        backHref="/admissions"
        backLabel="Back to Admissions"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
              <div>
                <p className="eyebrow">What We Look For</p>
                <h2 className="section-heading mt-3">Open to motivated learners.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Hosanna School welcomes applicants who are committed to developing practical skills. The most important requirement is a genuine desire to learn and grow.
                </p>
                <p className="mt-4 text-[17px] leading-[1.7] text-ink-600">
                  Please contact the school directly to confirm current entry requirements for your chosen programme.
                </p>
                <Link href="/apply" className="btn-primary mt-9 inline-flex">
                  Apply Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="border-t-2 border-brand-700 pt-2">
                {requirements.map((req, i) => (
                  <FadeUp key={req} delay={i * 50}>
                    <div className="flex items-start gap-4 border-b border-line py-5">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                      <span className="flex-1 text-[15px] leading-[1.7] text-ink-900">{req}</span>
                      <span className="shrink-0 text-[12px] font-semibold text-ink-400">0{i + 1}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready to Apply?"
        heading="Take the next step."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}
