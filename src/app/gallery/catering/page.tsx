import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { PageCTA } from "@/components/ui/page-cta";
import { FadeUp } from "@/components/ui/fade-up";

export const metadata = { title: "Gallery / Catering" };

const images = [
  { src: "/images/hero-catering.png", alt: "Culinary training and catering practice at Hosanna", title: "Kitchen Practice",      category: "Culinary Training" },
  { src: "/images/hero-catering.png", alt: "Catering workshop at Hosanna School",                title: "Hands-On Learning",    category: "Catering" },
  { src: "/images/hero-catering.png", alt: "Practical food preparation training at Hosanna",     title: "Built Through Practice",category: "Practical Skills" },
];

export default function CateringGalleryPage() {
  return (
    <div className="bg-off-white">
      <PageHero
        eyebrow="Gallery / Catering"
        heading="Create with flavour."
        subheading="A visual look at catering, culinary, pastry and events training at Hosanna School."
        backHref="/gallery"
        backLabel="Back to Gallery"
      />

      <section className="section-pad bg-white">
        <div className="hosanna-container">
          <div className="grid gap-5 md:grid-cols-2">
            {images.map((image, i) => (
              <FadeUp key={i} delay={i * 60}>
                <article className={`group overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2" : ""}`}>
                  <div className={`relative overflow-hidden rounded-xl ${i === 0 ? "aspect-[16/8]" : "aspect-4/5"}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={i === 0}
                      sizes={i === 0 ? "100vw" : "(max-width:767px) 100vw, 50vw"}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="eyebrow-light">{image.category}</p>
                      <p className="mt-1 text-[17px] font-semibold">{image.title}</p>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Continue Exploring"
        heading="Your next skill can start here."
        primaryLabel="Apply Now"
        primaryHref="/apply"
        secondaryLabel="Explore Programmes"
        secondaryHref="/programmes"
      />
    </div>
  );
}
