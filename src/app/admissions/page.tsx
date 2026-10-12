import Link from "next/link";
import { ArrowRight, FileText, HelpCircle, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Admissions" };

const admissionLinks = [
  { Icon: FileText,      n: "01", title: "How to Apply",  text: "Follow the application process and understand the steps involved.",       href: "/admissions/how-to-apply" },
  { Icon: CheckCircle2,  n: "02", title: "Requirements",  text: "Review the information applicants should prepare before applying.",        href: "/admissions/requirements" },
  { Icon: FileText,      n: "03", title: "Fees",          text: "View available fee information and payment guidance.",                     href: "/admissions/fees" },
  { Icon: HelpCircle,    n: "04", title: "FAQs",          text: "Find answers to common questions about admissions at Hosanna School.",     href: "/admissions/faqs" },
];

const steps = [
  { n: "01", title: "Explore",    text: "Review the programmes and choose the area of practical training that interests you." },
  { n: "02", title: "Prepare",    text: "Gather the information and documents required for your application." },
  { n: "03", title: "Apply",      text: "Contact the school directly or complete the application form with accurate information." },
  { n: "04", title: "Follow Up",  text: "Keep your application details available so you can follow its progress." },
];

export default function AdmissionsPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Admissions"
        heading="Your next skill can start here."
        subheading="Learn more about the admissions process and take the next step toward practical training at Hosanna School of Catering and Fashion Design."
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">Start Here</p>
                <h2 className="section-heading mt-3">A simple path from interest to application.</h2>
              </div>
              <p className="text-[17px] leading-[1.7] text-ink-600 lg:pt-2">
                Whether you are interested in catering, fashion, hairdressing or millinery, start by exploring the available training areas, then review the admissions information before completing your application.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow">The Process</p>
              <h2 className="section-heading mt-3">Four steps to get started.</h2>
            </div>
          </FadeUp>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 70}>
                <article className="h-card h-full">
                  <span className="text-5xl font-bold leading-none tracking-tight text-ink-900/[0.07] select-none" aria-hidden="true">{s.n}</span>
                  <h3 className="card-heading mt-5 text-ink-900">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-ink-600">{s.text}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Admission info links */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
              <div>
                <p className="eyebrow">Admissions Information</p>
                <h2 className="section-heading mt-3">Everything you need before applying.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Use these sections to review admissions information before beginning your application.
                </p>
                <Link href="/apply" className="btn-primary mt-9 inline-flex">
                  Apply Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {admissionLinks.map((item, i) => (
                  <FadeUp key={item.n} delay={i * 60}>
                    <Link
                      href={item.href}
                      className="h-card group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="icon-tile">
                          <item.Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <span className="text-[12px] font-semibold text-ink-400">{item.n}</span>
                      </div>
                      <h3 className="card-heading mt-5 text-ink-900">{item.title}</h3>
                      <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-ink-600">{item.text}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-brand-700">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Before you apply note */}
      <section className="bg-off-white pb-0 pt-0">
        <div className="hosanna-container py-12">
          <FadeUp>
            <div className="rounded-xl border-l-4 border-brand-700 bg-brand-50 p-6 sm:p-8">
              <p className="eyebrow">Before You Apply</p>
              <p className="mt-3 max-w-[65ch] text-[15px] leading-[1.7] text-ink-600">
                Please review the admissions information carefully and provide accurate details in your application. Programme availability, requirements and payment information should be confirmed with the school before final submission.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready to Begin?"
        heading="Take the next step."
        body="When you are ready, begin your application and start your journey toward practical skill development."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Explore Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
