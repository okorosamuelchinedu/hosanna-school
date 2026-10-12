import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "Apply" };

const steps = [
  { n: "01", title: "Choose a Programme",       text: "Browse our programmes, catering, fashion, hairdressing, millinery and more, and decide which area of training interests you." },
  { n: "02", title: "Review Requirements",      text: "Check the admissions requirements and prepare any information or documents you may need before applying." },
  { n: "03", title: "Get in Touch",             text: "Contact the school directly by phone, WhatsApp or email to express your interest and get further guidance." },
  { n: "04", title: "Complete Your Application",text: "Follow the school's application process, provide accurate information and submit your application for review." },
];

const programmes = [
  "Catering and Culinary",
  "Pastry and Baking",
  "Events and Catering Management",
  "Fashion Design and Training",
  "Tailoring",
  "Garment Construction",
  "Millinery",
  "Hairdressing",
];

export default function ApplyPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Admissions"
        heading="Begin your application."
        subheading="Take the first step toward developing a practical skill at Hosanna School of Catering and Fashion Design."
      />

      {/* Steps */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow">How to Apply</p>
              <h2 className="section-heading mt-3">Four steps to get started.</h2>
            </div>
          </FadeUp>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 70}>
                <article className="h-card h-full">
                  <span className="text-5xl font-bold leading-none tracking-tight text-ink-900/[0.07] select-none" aria-hidden="true">{step.n}</span>
                  <h3 className="card-heading mt-5 text-ink-900">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-ink-600">{step.text}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes list */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
              <div>
                <p className="eyebrow">Programmes Available</p>
                <h2 className="section-heading mt-3">Choose your area of training.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  We offer practical training across eight areas. Contact the school to confirm current availability.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {programmes.map((p, i) => (
                  <div key={p} className="flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                    <span className="flex-1 text-[15px] font-medium text-ink-900">{p}</span>
                    <span className="text-[12px] font-semibold text-ink-400">0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Direct contact */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow">Get in Touch</p>
              <h2 className="section-heading mt-3">The fastest way to apply.</h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                Call, WhatsApp or email us to express your interest and we will guide you through the next steps.
              </p>
            </div>
          </FadeUp>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FadeUp delay={0}>
              <div className="h-card h-full flex flex-col gap-4">
                <div className="icon-tile">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-[17px] font-semibold text-ink-900">Call Us</h3>
                <p className="text-[15px] leading-[1.7] text-ink-600">
                  The fastest way to apply is to call or send a WhatsApp message.
                </p>
                <a href="tel:+2348035513434" className="mt-auto text-[15px] font-semibold text-brand-700 transition-colors hover:text-brand-600">
                  0803 551 3434
                </a>
                <a href="https://wa.me/2348035513434" target="_blank" rel="noopener noreferrer" className="link-arrow inline-flex">
                  Open WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={70}>
              <div className="h-card h-full flex flex-col gap-4">
                <div className="icon-tile">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-[17px] font-semibold text-ink-900">Email Us</h3>
                <p className="text-[15px] leading-[1.7] text-ink-600">
                  Send your enquiry by email and the admissions team will respond.
                </p>
                <a href="mailto:nwabiabenny2017@gmail.com" className="mt-auto break-all text-[15px] font-semibold text-brand-700 transition-colors hover:text-brand-600">
                  nwabiabenny2017@gmail.com
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={140}>
              <div className="h-card h-full flex flex-col gap-4 bg-brand-50 border-brand-100">
                <p className="eyebrow">Admissions Info</p>
                <h3 className="text-[17px] font-semibold text-ink-900">Start the conversation.</h3>
                <p className="flex-1 text-[15px] leading-[1.7] text-ink-600">
                  Not sure where to start? Browse the admissions section for everything you need.
                </p>
                <Link href="/admissions" className="link-arrow inline-flex">
                  View Admissions Info
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready to Begin?"
        heading="Your next skill can start here."
        body="Explore our programmes and take the first step toward developing your craft."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="View Admissions"
        secondaryHref="/admissions"
      />
    </div>
  );
}
