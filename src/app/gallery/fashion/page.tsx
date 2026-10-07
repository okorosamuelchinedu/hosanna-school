import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const fashionImages = [
  {
    src: "/images/hero-fashion.png",
    alt: "Fashion design and tailoring training",
    title: "Fashion Practice",
    category: "Fashion Design",
  },
  {
    src: "/images/hero-fashion.png",
    alt: "Practical garment construction training",
    title: "Garment Construction",
    category: "Tailoring",
  },
  {
    src: "/images/hero-fashion.png",
    alt: "Hands-on fashion and creative training",
    title: "Create with Precision",
    category: "Practical Skills",
  },
];

export default function FashionGalleryPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-warm-ivory">
        {/* Hero */}
        <section className="border-b border-linen">
          <div className="hosanna-container py-16 sm:py-20 lg:py-28">
            <Link
              href="/gallery"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-noir transition-colors hover:text-burnished-gold"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Gallery
            </Link>

            <p className="eyebrow mb-4">GALLERY / FASHION</p>

            <h1 className="editorial-heading max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
              Create with precision.
            </h1>

            <div className="mt-6 max-w-2xl">
              <p className="text-base leading-7 text-slate sm:text-lg">
                A visual look at the practical discipline behind fashion
                design, tailoring and garment construction at Hosanna School
                of Catering & Fashion Design.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="hosanna-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {fashionImages.map((image, index) => (
              <article
                key={`${image.title}-${index}`}
                className={`group overflow-hidden border border-linen bg-white ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? "aspect-[16/8]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-burnished-gold">
                    {image.category}
                  </p>

                  <h2 className="font-display text-2xl text-emerald-noir">
                    {image.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Editorial section */}
        <section className="border-y border-linen bg-linen/40">
          <div className="hosanna-container py-14 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
              <div>
                <p className="eyebrow">EDITORIAL NOTE</p>
              </div>

              <div className="max-w-3xl">
                <h2 className="editorial-heading text-3xl sm:text-4xl">
                  From measurement to making.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate">
                  Fashion training brings together measurement, cutting,
                  construction, finishing and creative decision-making. The
                  emphasis is on developing practical skills through repeated
                  work with the hands.
                </p>

                <div className="mt-8 h-px w-24 bg-burnished-gold" />
              </div>
            </div>
          </div>
        </section>

        {/* Demo notice */}
        <section className="hosanna-container py-12 sm:py-16">
          <div className="border border-dashed border-burnished-gold bg-pale-gold/30 p-6 sm:p-8">
            <p className="eyebrow text-burnished-gold">
              DEMO PHOTOGRAPHY
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-charcoal">
              These images are temporary editorial placeholders for the
              website demonstration. Before production launch, they should be
              replaced with approved Hosanna School photography and clearly
              identified student work.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-noir text-warm-ivory">
          <div className="hosanna-container py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow text-pale-gold">
                CONTINUE EXPLORING
              </p>

              <h2 className="editorial-heading mt-4 text-3xl text-warm-ivory sm:text-4xl lg:text-5xl">
                Your next skill can start here.
              </h2>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/programmes"
                  className="primary-button inline-flex items-center justify-center gap-2"
                >
                  Explore Programmes
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/apply"
                  className="secondary-button inline-flex items-center justify-center border-pale-gold text-warm-ivory hover:bg-warm-ivory hover:text-emerald-noir"
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