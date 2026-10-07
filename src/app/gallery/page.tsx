import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const gallerySections = [
  {
    number: "01",
    title: "Catering",
    description:
      "Explore the practical side of culinary and catering training.",
    href: "/gallery/catering",
    image: "/images/hero-catering.png",
    alt: "Editorial image representing catering training",
  },
  {
    number: "02",
    title: "Fashion",
    description:
      "Discover fashion design, tailoring and garment construction.",
    href: "/gallery/fashion",
    image: "/images/hero-fashion.png",
    alt: "Editorial image representing fashion training",
  },
];

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-warm-ivory">
        {/* Hero */}
        <section className="bg-emerald-noir text-warm-ivory">
          <div className="hosanna-container py-16 sm:py-20 lg:py-28">
            <p className="eyebrow text-pale-gold">
              GALLERY
            </p>

            <h1 className="editorial-heading mt-5 max-w-4xl text-4xl text-warm-ivory sm:text-5xl lg:text-6xl">
              Made by hand.
              <br />
              Built through practice.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-warm-ivory/80 sm:text-lg">
              A visual look at the disciplines, learning environment and
              creative work represented by Hosanna School.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">VISUAL JOURNAL</p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  See the craft from different angles.
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="max-w-2xl text-[15px] leading-7 text-slate sm:text-base">
                  From catering practice to fashion construction, the gallery
                  is designed to showcase the hands-on nature of learning and
                  the creativity behind the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Gallery */}
        <section className="border-y border-linen bg-white">
          <div className="grid lg:grid-cols-2">
            {gallerySections.map((section) => (
              <Link
                key={section.number}
                href={section.href}
                className="group border-b border-linen last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="p-7 sm:p-9 lg:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="font-serif text-sm text-champagne-gold">
                        {section.number}
                      </span>

                      <h2 className="mt-3 font-serif text-2xl text-emerald-noir sm:text-3xl">
                        {section.title}
                      </h2>

                      <p className="mt-3 max-w-md text-sm leading-6 text-slate">
                        {section.description}
                      </p>
                    </div>

                    <ArrowRight
                      className="mt-1 h-5 w-5 shrink-0 text-emerald-noir transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Student Work */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="hosanna-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">STUDENT WORK</p>

                <h2 className="editorial-heading mt-4 text-3xl sm:text-4xl">
                  The work should tell the story.
                </h2>

                <p className="mt-5 text-sm leading-6 text-slate sm:text-base">
                  Future gallery updates can showcase real student projects,
                  practical sessions, finished garments, culinary work and
                  school activities.
                </p>

                <Link
                  href="/gallery/students"
                  className="secondary-button mt-7"
                >
                  Student Gallery
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] overflow-hidden border-4 border-white shadow-sm">
                    <Image
                      src="/images/hero-fashion.png"
                      alt="Editorial fashion training image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                  </div>

                  <div className="relative mt-8 aspect-[3/4] overflow-hidden border-4 border-white shadow-sm sm:mt-12">
                    <Image
                      src="/images/hero-catering.png"
                      alt="Editorial catering training image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Replacement Photography Note */}
        <section className="border-y border-linen bg-linen/50 py-12 sm:py-16">
          <div className="hosanna-container">
            <div className="mx-auto max-w-3xl border-l-2 border-champagne-gold pl-5 sm:pl-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-noir">
                DEMO PHOTOGRAPHY
              </p>

              <p className="mt-3 text-sm leading-6 text-slate sm:text-base">
                These images are temporary editorial placeholders for the
                website demo. Before public launch, they should be replaced
                with approved Hosanna photography and clearly identified
                student work.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-noir py-16 text-warm-ivory sm:py-20 lg:py-24">
          <div className="hosanna-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-pale-gold">
                SEE MORE
              </p>

              <h2 className="editorial-heading mt-4 text-3xl text-warm-ivory sm:text-4xl lg:text-5xl">
                Explore the work behind the craft.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-warm-ivory/70 sm:text-base">
                Browse the discipline-specific galleries or explore the
                programmes behind the work.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/programmes"
                  className="primary-button bg-pale-gold text-emerald-noir hover:bg-champagne-gold"
                >
                  Explore Programmes
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/apply"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-warm-ivory transition-colors hover:bg-white/10"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}