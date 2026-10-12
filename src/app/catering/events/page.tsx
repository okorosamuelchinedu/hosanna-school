import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Events & Catering" };

const skills = [
  "Event food planning and logistics",
  "Large-batch food preparation",
  "Buffet setup and management",
  "Food transportation and safety",
  "Client briefing and service",
  "Post-event cleanup procedures",
];

export default function CateringEventsPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Catering / Events"
        heading="Events & Catering"
        subheading="Develop the practical skills to plan, prepare and deliver food services for events, celebrations and hospitality settings."
        backHref="/catering"
        backLabel="Back to Catering"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-145">
                <Image
                  src="/images/hero-catering.png"
                  alt="Events catering training at Hosanna"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div>
                <p className="eyebrow">What You Will Learn</p>
                <h2 className="section-heading mt-3">Feed any crowd with confidence.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Events catering requires organisation, planning and the ability to execute under pressure. This training gives you the practical tools to deliver.
                </p>
                <ul className="mt-8 space-y-3">
                  {skills.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                      <span className="text-[15px] text-ink-900">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/apply" className="btn-primary inline-flex">
                    Apply Now
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="btn-secondary inline-flex">Ask a Question</Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready?"
        heading="Start your events catering journey."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="All Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
