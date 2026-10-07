import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

const studentWork = [
  {
    src: "/images/hero-catering.png",
    title: "Practical Catering",
    category: "Culinary",
    description:
      "A demonstration image representing hands-on catering and culinary practice.",
  },
  {
    src: "/images/hero-fashion.png",
    title: "Fashion Practice",
    category: "Fashion",
    description:
      "A demonstration image representing practical fashion and tailoring work.",
  },
  {
    src: "/images/hero-catering.png",
    title: "Learning by Doing",
    category: "Practical Skills",
    description:
      "A temporary editorial image for the student-work showcase.",
  },
  {
    src: "/images/hero-fashion.png",
    title: "Making with Precision",
    category: "Garment Construction",
    description:
      "A temporary editorial image for the student-work showcase.",
  },
];

export default function StudentGalleryPage() {
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

            <p className="eyebrow mb-4">GALLERY / STUDENT WORK</p>

            <h1 className="editorial-heading max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
              Made by hand. Built through practice.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate sm:text-lg">
              A showcase space for practical work created through the learning
              journey at Hosanna School of Catering & Fashion Design.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="hosanna-container py-14 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">THE WORK</p>
            </div>

            <div className="max-w-3xl">
              <h2 className="editorial-heading text-3xl sm:text-4xl">
                Skill becomes visible through practice.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate">
                This section is designed to become a living showcase of
                approved student projects, finished garments, culinary work,
                practical exercises and creative outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Student work grid */}
        <section className="hosanna-container pb-16 sm:pb-20 lg:pb-24">
          <div className="grid gap-6 sm:grid-cols-2">
            {studentWork.map((work, index) => (
              <article
                key={`${work.title}-${index}`}
                className="group overflow-hidden border border-linen bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={work.src}
                    alt={work.title}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-burnished-gold">
                    {work.category}
                  </p>

                  <h2 className="font-display text-2xl text-emerald-noir">
                    {work.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Important demo notice */}
        <section className="border-y border-linen bg-linen/40">
          <div className="hosanna-container py-14 sm:py-16">
            <div className="border border-dashed border-burnished-gold bg-pale-gold/30 p-6 sm:p-8">
              <p className="eyebrow text-burnished-gold">
                DEMO / PLACEHOLDER CONTENT
              </p>

              <h2 className="editorial-heading mt-3 text-2xl sm:text-3xl">
                Replace with approved student work before launch.
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-charcoal">
                The photographs currently displayed on this demo page are
                temporary editorial placeholders. They must not be presented
                as verified photographs of Hosanna students or as documented
                student projects. Before production launch, replace them with
                approved school photography and identify the relevant work
                accurately.
              </p>
            </div>
          </div>
        </section>

        {/* What belongs here */}
        <section className="hosanna-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="eyebrow">CATERING</p>

              <h2 className="editorial-heading mt-3 text-2xl">
                Culinary work
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate">
                Finished dishes, pastry work, practical kitchen exercises and
                approved catering projects.
              </p>
            </div>

            <div>
              <p className="eyebrow">FASHION</p>

              <h2 className="editorial-heading mt-3 text-2xl">
                Garment work
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate">
                Garments, tailoring exercises, construction details and
                completed fashion projects.
              </p>
            </div>

            <div>
              <p className="eyebrow">PROCESS</p>

              <h2 className="editorial-heading mt-3 text-2xl">
                The journey
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate">
                Selected behind-the-scenes moments showing practical learning,
                making and creative development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-noir text-warm-ivory">
          <div className="hosanna-container py-16 sm:py-20">
            <p className="eyebrow text-pale-gold">KEEP EXPLORING</p>

            <h2 className="editorial-heading mt-4 max-w-3xl text-3xl text-warm-ivory sm:text-4xl lg:text-5xl">
              Explore the skills behind the work.
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
        </section>
      </main>
    </>
  );
}