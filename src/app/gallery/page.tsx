import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "Gallery" };

const sections = [
  { n: "01", title: "Catering", desc: "Culinary training, kitchen practice and food presentation.", href: "/gallery/catering", img: "/images/hero-catering.png", alt: "Catering gallery" },
  { n: "02", title: "Fashion",  desc: "Fashion design, tailoring, garment construction and more.", href: "/gallery/fashion",  img: "/images/hero-fashion.png",  alt: "Fashion gallery" },
];

export default function GalleryPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Gallery"
        heading="Made by hand. Built through practice."
        subheading="A visual look at the disciplines, learning environment and creative work at Hosanna School."
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="eyebrow">Visual Journal</p>
                <h2 className="section-heading mt-3">See the craft from different angles.</h2>
              </div>
              <p className="text-[17px] leading-[1.7] text-ink-600 lg:pt-2">
                From catering practice to fashion construction, the gallery showcases the hands-on nature of learning and the creativity behind the work at Hosanna.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Gallery sections */}
      <section className="section-pad bg-off-white">
        <div className="hosanna-container">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((s, i) => (
              <FadeUp key={s.n} delay={i * 70}>
                <Link
                  href={s.href}
                  className="group block overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-4"
                >
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.alt}
                      fill
                      sizes="(max-width:767px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                      <p className="eyebrow-light">{s.n}</p>
                      <h2 className="mt-2 text-[22px] font-bold tracking-tight text-white">{s.title}</h2>
                      <p className="mt-2 text-[14px] leading-[1.6] text-white/75">{s.desc}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-all group-hover:gap-3.5">
                        View Gallery
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Student Work */}
      <section className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <p className="eyebrow">Student Work</p>
                <h2 className="section-heading mt-3">The work should tell the story.</h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-ink-600">
                  This section will grow to feature real student projects, practical sessions, finished garments, culinary work and school activities.
                </p>
                <Link href="/gallery/students" className="btn-primary mt-9 inline-flex">
                  Student Gallery
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                  <Image src="/images/hero-fashion.png" alt="Fashion student work" fill className="object-cover" sizes="(max-width:1023px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-black/25" />
                </div>
                <div className="relative mt-10 aspect-4/5 overflow-hidden rounded-xl">
                  <Image src="/images/hero-catering.png" alt="Catering student work" fill className="object-cover" sizes="(max-width:1023px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-black/25" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Demo notice */}
      <section className="bg-off-white pb-0 pt-0">
        <div className="hosanna-container py-10">
          <FadeUp>
            <div className="rounded-xl border border-line bg-brand-50 p-6">
              <p className="eyebrow">Demo Photography</p>
              <p className="mt-2 max-w-[65ch] text-[15px] leading-[1.7] text-ink-600">
                These images are temporary editorial placeholders. Before public launch, replace them with approved Hosanna photography and clearly identified student work.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageCTA
        eyebrow="See More"
        heading="Explore the work behind the craft."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Explore Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
