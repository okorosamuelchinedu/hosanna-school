import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, HelpCircle } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const admissionLinks = [
  {
    icon: FileText,
    number: "01",
    title: "How to Apply",
    text: "Follow the application process and understand the steps involved.",
    href: "/admissions/how-to-apply",
  },
  {
    icon: CheckCircle2,
    number: "02",
    title: "Requirements",
    text: "Review the information applicants should prepare before applying.",
    href: "/admissions/requirements",
  },
  {
    icon: FileText,
    number: "03",
    title: "Fees",
    text: "View available fee information and payment guidance.",
    href: "/admissions/fees",
  },
  {
    icon: HelpCircle,
    number: "04",
    title: "FAQs",
    text: "Find answers to common questions about admissions.",
    href: "/admissions/faqs",
  },
];

const steps = [
  {
    number: "01",
    title: "Explore",
    text: "Review the programmes and choose the area of practical training that interests you.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Gather the information and documents required for your application.",
  },
  {
    number: "03",
    title: "Apply",
    text: "Complete the application form with accurate information and submit it for review.",
  },
  {
    number: "04",
    title: "Follow Up",
    text: "Keep your application details available so you can follow its progress.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-warm-ivory">
        {/* Hero */}
        <section className="bg-emerald-noir text-warm-ivory">
          <div className="hosanna-container py-16 sm:py-20 lg:py-28">
            <div className="max-w-4xl">
              <p className="eyebrow text-pale-gold">
                ADMISSIONS
              </p>

              <h1 className="editorial-heading mt-5 text-4xl text-warm-ivory sm:text-5xl lg:text-6xl">
                Your next skill
                <br />
                can start here.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-warm-ivory/80 sm:text-lg">
                Learn more about the admissions process and take the next step
                toward practical training at Hosanna School of Catering &
                Fashion Design.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/apply"
                  className="primary-button bg-pale-gold text-emerald-noir hover:bg-champagne-gold"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/admissions/how-to-apply"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-6 py-3 text-sm font-semibold text-warm-ivory transition-colors hover:bg-white/10"
                >
                  How to Apply
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">START HERE</p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  A simple path from interest to application.
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="max-w-2xl text-[15px] leading-7 text-slate sm:text-base">
                  Whether you are interested in catering or fashion, start by
                  exploring the available training areas. Then review the
                  admissions information before completing your application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="border-y border-linen bg-white py-16 sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="max-w-2xl">
              <p className="eyebrow">THE PROCESS</p>

              <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                Four steps to get started.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="atelier-card bg-warm-ivory"
                >
                  <span className="font-serif text-3xl text-champagne-gold">
                    {step.number}
                  </span>

                  <div className="mt-6 gold-rule" />

                  <h3 className="mt-5 font-serif text-xl text-emerald-noir">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Information */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="hosanna-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="eyebrow">ADMISSIONS INFORMATION</p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  Everything you need before applying.
                </h2>

                <p className="mt-5 text-sm leading-6 text-slate">
                  Use these sections to review the admissions information
                  before beginning your application.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {admissionLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.number}
                        href={item.href}
                        className="group atelier-card bg-white transition-transform hover:-translate-y-0.5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <Icon
                            className="h-5 w-5 text-champagne-gold"
                            aria-hidden="true"
                          />

                          <span className="font-serif text-sm text-slate">
                            {item.number}
                          </span>
                        </div>

                        <h3 className="mt-7 font-serif text-xl text-emerald-noir">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate">
                          {item.text}
                        </p>

                        <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-noir">
                          Explore
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="border-y border-linen bg-linen/50 py-12 sm:py-16">
          <div className="hosanna-container">
            <div className="mx-auto max-w-3xl border-l-2 border-champagne-gold pl-5 sm:pl-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-noir">
                BEFORE YOU APPLY
              </p>

              <p className="mt-3 text-sm leading-6 text-slate sm:text-base">
                Please review the admissions information carefully and provide
                accurate details in your application. Programme availability,
                requirements and payment information should be confirmed with
                the school before final submission.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-noir py-16 text-warm-ivory sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-pale-gold">
                READY TO BEGIN?
              </p>

              <h2 className="editorial-heading mt-4 text-3xl text-warm-ivory sm:text-4xl lg:text-5xl">
                Take the next step.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-warm-ivory/70 sm:text-base">
                When you are ready, complete the application and begin your
                journey toward practical skill development.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/apply"
                  className="primary-button bg-pale-gold text-emerald-noir hover:bg-champagne-gold"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/programmes"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-warm-ivory transition-colors hover:bg-white/10"
                >
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}