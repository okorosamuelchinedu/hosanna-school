import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "Gallery / Student Work" };

const studentWork = [
  { src: "/images/hero-catering.png", title: "Practical Catering",     category: "Culinary",             description: "Hands-on catering and culinary practice." },
  { src: "/images/hero-fashion.png",  title: "Fashion Practice",       category: "Fashion Design",       description: "Practical fashion and tailoring work." },
  { src: "/images/hero-catering.png", title: "Learning by Doing",      category: "Practical Skills",     description: "The Hosanna hands-on learning approach." },
  { src: "/images/hero-fashion.png",  title: "Making with Precision",  category: "Garment Construction", description: "Student garment construction exercises." },
];

export default function StudentGalleryPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Gallery / Student Work"
        heading="Made by hand. Built through practice."
        subheading="A showcase of practical work created through the learning journey at Hosanna School."
        backHref="/gallery"
        backLabel="Back to Gallery"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <div className="grid gap-5 sm:grid-cols-2">
            {studentWork.map((work, i) => (
              <FadeUp key={i} delay={i * 70}>
                <article className="group overflow-hidden rounded-xl">
                  <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                    <Image
                      src={work.src}
                      alt={work.title}
                      fill
                      priority={i < 2}
                      sizes="(max-width:639px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="eyebrow-light">{work.category}</p>
                      <p className="mt-1 text-[17px] font-semibold">{work.title}</p>
                      <p className="mt-1 text-[13px] text-white/75">{work.description}</p>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Keep Exploring"
        heading="Explore the skills behind the work."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Explore Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
