import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "FAQs" };

const faqs = [
  { q: "What programmes does Hosanna School offer?",   a: "We offer training in Catering and Culinary, Pastry and Baking, Events and Catering, Fashion Design, Tailoring, Garment Construction, Millinery and Hairdressing." },
  { q: "How long are the programmes?",                 a: "Programme duration varies. Contact the school directly to get specific information about the length of your chosen programme." },
  { q: "Do I need prior experience to apply?",         a: "No prior experience is required for most programmes. We welcome motivated learners who are ready to develop practical skills." },
  { q: "Where is the school located?",                 a: "Hosanna School is located at No. 1 Njoku Street, Opp Keystone Bank, Umungasi, Aba, Abia State, Nigeria." },
  { q: "How do I apply?",                              a: "The easiest way to apply is to call or WhatsApp us on 0803 551 3434, or send an email to nwabiabenny2017@gmail.com. Our admissions team will guide you through the process." },
  { q: "What are the school hours?",                   a: "Please contact the school directly to confirm current operating hours and session schedules." },
  { q: "Are certificates awarded?",                    a: "Please contact the school directly for information about certifications and qualifications offered upon completion." },
  { q: "Can I visit the school before applying?",      a: "Yes, we encourage prospective students to visit. Contact us to arrange a visit and see the learning environment first-hand." },
];

export default function FAQsPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Admissions / FAQs"
        heading="Frequently Asked Questions"
        subheading="Answers to common questions about admissions, programmes and life at Hosanna School."
        backHref="/admissions"
        backLabel="Back to Admissions"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:items-start">
              {/* Left sticky label */}
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">Admissions FAQs</p>
                <h2 className="section-heading mt-3">Have a question not listed here?</h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-ink-600">
                  Get in touch directly and we will be happy to help.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a href="tel:+2348035513434" className="btn-primary inline-flex">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Us
                  </a>
                  <Link href="/contact" className="btn-secondary inline-flex">Contact Page</Link>
                </div>
              </div>

              {/* FAQ list */}
              <div className="divide-y divide-line border-t border-line">
                {faqs.map((faq, i) => (
                  <FadeUp key={i} delay={i * 40}>
                    <div className="py-7">
                      <h3 className="text-[16px] font-semibold text-ink-900">{faq.q}</h3>
                      <p className="mt-3 text-[15px] leading-[1.7] text-ink-600">{faq.a}</p>
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
        secondaryLabel="Explore Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
