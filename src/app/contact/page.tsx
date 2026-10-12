import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeUp } from "@/components/ui/fade-up";
import { PageCTA } from "@/components/ui/page-cta";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Contact Us"
        heading="Come and see Hosanna."
        subheading="Have a question about our programmes, admissions or anything else? We would love to hear from you."
      />

      {/* ── Contact details + Form ── */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">

              {/* Left: contact details */}
              <div className="space-y-5">
                <div className="h-card flex gap-4">
                  <div className="icon-tile shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-[15px] font-semibold text-ink-900">Visit Us</h2>
                    <address className="mt-2 not-italic text-[14px] leading-[1.7] text-ink-600">
                      No. 1 Njoku Street,<br />
                      Opp Keystone Bank, Umungasi,<br />
                      Aba, Abia State, Nigeria
                    </address>
                    <a
                      href="https://maps.google.com/?q=No+1+Njoku+Street+Umungasi+Aba+Abia+State"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow mt-4 inline-flex text-[13px]"
                    >
                      Get Directions
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="h-card flex gap-4">
                  <div className="icon-tile shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-[15px] font-semibold text-ink-900">Call Us</h2>
                    <a
                      href="tel:+2348035513434"
                      className="mt-2 block text-[14px] font-semibold text-ink-900 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded"
                    >
                      0803 551 3434
                    </a>
                    <p className="mt-1 text-[14px] leading-[1.6] text-ink-600">
                      Available during school hours.
                    </p>
                    <a
                      href="https://wa.me/2348035513434"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow mt-4 inline-flex text-[13px]"
                    >
                      WhatsApp Us
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="h-card flex gap-4">
                  <div className="icon-tile shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-[15px] font-semibold text-ink-900">Email Us</h2>
                    <a
                      href="mailto:nwabiabenny2017@gmail.com"
                      className="mt-2 block break-all text-[14px] font-semibold text-ink-900 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded"
                    >
                      nwabiabenny2017@gmail.com
                    </a>
                    <p className="mt-1 text-[14px] leading-[1.6] text-ink-600">
                      We reply within one business day.
                    </p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="flex items-center justify-center rounded-xl border border-line bg-warm-50 px-6 py-8 text-center">
                  <div>
                    <p className="text-[14px] font-semibold text-ink-900">Hosanna School</p>
                    <p className="mt-1 text-[13px] leading-[1.6] text-ink-600">
                      No. 1 Njoku Street, Opp Keystone Bank,<br />
                      Umungasi, Aba, Abia State, Nigeria
                    </p>
                    <a
                      href="https://maps.google.com/?q=No+1+Njoku+Street+Umungasi+Aba+Abia+State"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow mt-4 inline-flex justify-center text-[13px]"
                    >
                      Open in Google Maps
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: contact form */}
              <div>
                <p className="eyebrow">Send a Message</p>
                <h2 className="section-heading mt-3">Get in touch directly.</h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-ink-600">
                  Fill in the form below and we will get back to you as soon as possible.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready to Begin?"
        heading="Start your journey today."
        body="Explore our programmes and take the first step toward developing your craft at Hosanna School."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Explore Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
