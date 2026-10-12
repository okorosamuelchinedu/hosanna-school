import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";

export const metadata = { title: "Fees" };

export default function FeesPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Admissions / Fees"
        heading="Programme Fees"
        subheading="Information about training fees at Hosanna School of Catering and Fashion Design."
        backHref="/admissions"
        backLabel="Back to Admissions"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
              <div>
                <p className="eyebrow">Fee Information</p>
                <h2 className="section-heading mt-3">Affordable, accessible training.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  Hosanna School is committed to making practical skills training accessible. Fee structures vary by programme and duration.
                </p>
                <p className="mt-4 text-[17px] leading-[1.7] text-ink-600">
                  Contact the school directly to receive the most current fee information for your chosen programme.
                </p>
              </div>

              <div className="space-y-5">
                <div className="h-card flex gap-5">
                  <div className="icon-tile shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-ink-900">Get fee details directly</h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-ink-600">
                      For the most accurate and up-to-date fee information, please contact the school directly. Our admissions team is happy to walk you through the costs and any available payment options.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a href="tel:+2348035513434" className="btn-primary inline-flex">
                        Call Us
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <a href="https://wa.me/2348035513434" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border-l-4 border-brand-700 bg-brand-50 p-6">
                  <p className="text-[15px] leading-[1.7] text-ink-600">
                    Please confirm all fee details with the school before submitting your application. Fees are subject to change.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready?"
        heading="Take the next step."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}
