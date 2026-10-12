import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Hammer,
  Lightbulb,
  RefreshCw,
  Trophy,
} from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { Accordion } from "@/components/ui/accordion";

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question: "How do I apply to Hosanna School?",
    answer:
      "TODO: confirm with school. You can apply by visiting the school in person at No. 1 Njoku Street, Umungasi, Aba, or by clicking Apply Now on our website and following the steps provided.",
  },
  {
    question: "What are the entry requirements for your programmes?",
    answer:
      "TODO: confirm with school. Most practical programmes are open to anyone with a genuine interest in the craft. No prior experience is required for foundation courses. Specific requirements will be confirmed at application.",
  },
  {
    question: "How long do the programmes run?",
    answer:
      "TODO: confirm with school. Programme durations vary. Short practical courses typically run a few weeks; full certificate programmes may run several months. Contact the school or visit Admissions for a current schedule.",
  },
  {
    question: "What do I need to bring to practical sessions?",
    answer:
      "TODO: confirm with school. For catering, appropriate kitchen clothing is required. For fashion and tailoring, students may need basic tools and materials. A full list is provided on enrolment.",
  },
  {
    question: "What are the fees for each programme?",
    answer:
      "TODO: confirm with school. Fees vary by programme. Please call 0803 551 3434 or visit the Fees section in Admissions for current pricing.",
  },
  {
    question: "Do you offer certificates on completion?",
    answer:
      "TODO: confirm with school. Students who complete their programme receive a certificate from Hosanna School. Details of accreditation will be confirmed by the school.",
  },
];

const whyCards = [
  {
    n: "01",
    Icon: Hammer,
    title: "Practical",
    body: "You learn by doing ,  guided work, repetition, and real kitchen and studio time.",
  },
  {
    n: "02",
    Icon: Lightbulb,
    title: "Creative",
    body: "Develop your ideas and expression through structured creative practice.",
  },
  {
    n: "03",
    Icon: RefreshCw,
    title: "Disciplined",
    body: "Build consistency and technique through practice, not just theory.",
  },
  {
    n: "04",
    Icon: Trophy,
    title: "Purposeful",
    body: "Skills you can take directly into the real world and build a livelihood with.",
  },
];

const programmes = [
  { n: "01", title: "Catering & Culinary",    text: "Food preparation, technique, presentation and kitchen skills.",                href: "/programmes/catering-culinary" },
  { n: "02", title: "Pastry & Baking",         text: "Pastry preparation, baking techniques and creative presentation.",             href: "/programmes/pastry-baking" },
  { n: "03", title: "Events & Catering",       text: "Practical skills for organising and presenting food at events.",               href: "/programmes/events-catering" },
  { n: "04", title: "Fashion Design",          text: "Garment design, construction, fitting and finishing.",                         href: "/programmes/fashion-design" },
  { n: "05", title: "Tailoring",               text: "Practical tailoring ,  measurements, construction and finishing.",              href: "/programmes/tailoring" },
  { n: "06", title: "Millinery & Hairdressing",text: "Creative headwear and hair skills for the modern professional.",               href: "/programmes/millinery" },
];

const disciplines = [
  "Catering", "Pastry", "Events", "Fashion", "Tailoring", "Millinery & Hairdressing",
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="bg-off-white">

      {/* ============================================================
          HERO ,  two-column, brand-900 bg, diptych images right
          ============================================================ */}
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-brand-900 text-white"
        style={{ minHeight: "100svh" }}
      >
        <div className="hosanna-container">
          <div className="grid min-h-svh items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Copy */}
            <div className="flex flex-col justify-center py-28 lg:py-32 lg:pr-16 xl:pr-24">
              <p className="eyebrow-light">
                Hosanna School of Catering and Fashion Design
              </p>
              <h1 className="display-heading mt-5 text-white">
                Where Skill<br />Becomes Craft.
              </h1>
              <p className="mt-7 max-w-[50ch] text-[17px] leading-[1.7] text-white/65">
                Practical training in catering, culinary, fashion design,
                hairdressing, millinery and event management ,  designed to
                help you learn with your hands and build with confidence.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/apply" className="btn-primary">
                  Apply Now
                </Link>
                <Link href="/programmes" className="btn-ghost">
                  Explore Programmes
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-2.5 text-[13px] text-white/40">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>No. 1 Njoku Street, Umungasi, Aba &middot; Abia State, Nigeria</span>
              </div>
            </div>

            {/* Diptych ,  desktop */}
            <div
              className="absolute right-0 top-0 hidden h-full w-[44%] lg:block xl:w-[42%]"
              aria-hidden="true"
            >
              <div className="flex h-full gap-3 py-10 xl:py-14 pr-0">
                {/* Catering */}
                <div className="relative flex-1 overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero-catering.png"
                    alt="Culinary training at Hosanna School"
                    fill
                    priority
                    loading="eager"
                    sizes="22vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                {/* Fashion ,  offset down */}
                <div className="relative mt-12 flex-1 overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero-fashion.png"
                    alt="Fashion design training at Hosanna School"
                    fill
                    priority
                    sizes="22vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex items-center rounded-full bg-black/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
                      Learn &middot; Practise &middot; Create
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile image strip */}
            <div className="relative h-64 w-full overflow-hidden lg:hidden" aria-hidden="true">
              <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <Image src="/images/hero-catering.png" alt="" fill sizes="50vw" priority className="object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative mt-6 overflow-hidden rounded-xl">
                  <Image src="/images/hero-fashion.png" alt="" fill sizes="50vw" priority className="object-cover" />
                  <div className="absolute inset-0 bg-black/25" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST STRIP ,  disciplines text
          ============================================================ */}
      <div aria-label="Disciplines at Hosanna" className="border-y border-line bg-white">
        <div className="hosanna-container">
          <div className="flex flex-wrap items-center justify-center">
            {disciplines.map((d, i) => (
              <span key={d} className="flex items-center">
                <span className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                  {d}
                </span>
                {i < disciplines.length - 1 && (
                  <span className="h-3 w-px bg-line" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          WELCOME ,  split layout, brand-50 bg
          ============================================================ */}
      <section aria-label="Welcome to Hosanna" className="section-pad bg-brand-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              {/* Image */}
              <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                <Image
                  src="/images/hero-catering.png"
                  alt="Students working in the Hosanna catering kitchen"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              {/* Copy */}
              <div>
                <p className="eyebrow">Welcome to Hosanna</p>
                <h2 className="section-heading mt-3">
                  Learn the skill.<br />Develop the craft.
                </h2>
                <p className="mt-6 max-w-[55ch] text-[17px] leading-[1.7] text-ink-600">
                  Hosanna School of Catering and Fashion Design is the home of
                  amazing creativity and excellence. We teach practical skills in
                  catering, fashion, event management, hairdressing, millinery
                  and industrial production.
                </p>
                <p className="mt-4 max-w-[55ch] text-[17px] leading-[1.7] text-ink-600">
                  From the kitchen to the sewing machine, our focus is on learning
                  by doing ,  developing technique, discipline, creativity and
                  confidence through practical work.
                </p>
                <Link href="/about" className="link-arrow mt-8 inline-flex">
                  Discover Hosanna
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================
          TWO DISCIPLINES ,  asymmetric 7/5 bento, flat-black overlays
          ============================================================ */}
      <section aria-label="Two disciplines" className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="max-w-xl">
              <p className="eyebrow">The Disciplines</p>
              <h2 className="section-heading mt-3">
                Two disciplines.<br />One standard.
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-12">
            {/* Catering ,  7 cols */}
            <FadeUp delay={0} className="md:col-span-7">
              <Link
                href="/catering"
                className="group relative block aspect-4/5 overflow-hidden rounded-xl md:aspect-auto md:h-145 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-4"
              >
                <Image
                  src="/images/hero-catering.png"
                  alt="Catering and culinary training at Hosanna"
                  fill
                  sizes="(max-width:767px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
                  <p className="eyebrow-light">Catering</p>
                  <h3 className="card-heading mt-2 text-white">Create with flavour.</h3>
                  <p className="mt-3 max-w-[42ch] text-sm leading-[1.6] text-white/75">
                    Develop practical catering, culinary, pastry and events skills.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3.5">
                    Explore Catering
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </FadeUp>

            {/* Fashion ,  5 cols */}
            <FadeUp delay={70} className="md:col-span-5">
              <Link
                href="/fashion"
                className="group relative block aspect-4/5 overflow-hidden rounded-xl md:aspect-auto md:h-145 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-4"
              >
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion design and tailoring training at Hosanna"
                  fill
                  sizes="(max-width:767px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
                  <p className="eyebrow-light">Fashion</p>
                  <h3 className="card-heading mt-2 text-white">Create with precision.</h3>
                  <p className="mt-3 max-w-[38ch] text-sm leading-[1.6] text-white/75">
                    Develop fashion design, tailoring, millinery and garment construction skills.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3.5">
                    Explore Fashion
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY HOSANNA ,  icon-tile cards, hover border brand-700
          ============================================================ */}
      <section aria-label="Why choose Hosanna" className="section-pad bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-20">
              <div>
                <p className="eyebrow">Why Hosanna</p>
                <h2 className="section-heading mt-3">
                  Learning should leave you able to do.
                </h2>
              </div>
              <p className="text-[17px] leading-[1.7] text-ink-600 lg:pt-2">
                Practical learning is at the centre of the Hosanna approach , 
                building skills through guided work, repetition and creative
                practice.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map(({ n, Icon, title, body }, i) => (
              <FadeUp key={n} delay={i * 70}>
                <article className="h-card group flex h-full flex-col">
                  <div className="icon-tile">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                 
                  <h3 className="card-heading mt-3 text-ink-900">{title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-ink-600">{body}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CATERING FEATURE ,  editorial row, image left, dark section
          ============================================================ */}
      <section aria-label="Catering and culinary training" className="section-pad overflow-hidden bg-brand-900 text-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              {/* Image */}
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:aspect-auto lg:h-155">
                <Image
                  src="/images/hero-catering.png"
                  alt="Students in the Hosanna catering kitchen"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center rounded-full bg-black/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                    Catering
                  </span>
                </div>
              </div>
              {/* Copy */}
              <div>
                <p className="eyebrow-light">Catering &amp; Culinary</p>
                <h2 className="section-heading mt-3 text-white">
                  From preparation<br />to presentation.
                </h2>
                <p className="mt-6 max-w-[50ch] text-[17px] leading-[1.7] text-white/65">
                  Build practical confidence in the kitchen ,  from preparation
                  and cooking to pastry, events catering and food service.
                </p>
                <Link href="/catering" className="btn-white mt-9 inline-flex">
                  Explore Catering Training
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================
          FASHION FEATURE ,  editorial row, image right, white section
          ============================================================ */}
      <section aria-label="Fashion and design training" className="section-pad overflow-hidden bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
              {/* Copy ,  col-2 desktop */}
              <div className="lg:order-2">
                <p className="eyebrow">Fashion &amp; Design</p>
                <h2 className="section-heading mt-3">
                  From pattern<br />to finished garment.
                </h2>
                <p className="mt-6 max-w-[50ch] text-[17px] leading-[1.7] text-ink-600">
                  Learn fashion design, tailoring, millinery and garment
                  construction through measurement, cutting, sewing, fitting
                  and finishing.
                </p>
                <Link href="/fashion" className="btn-primary mt-9 inline-flex">
                  Explore Fashion Training
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              {/* Image ,  col-1 desktop */}
              <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:order-1 lg:aspect-auto lg:h-155">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion design student at Hosanna"
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center rounded-full bg-black/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                    Fashion
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================
          PROGRAMMES ,  typographic grid, numbered, no photos
          ============================================================ */}
      <section aria-label="All programmes" className="section-pad bg-off-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">All Programmes</p>
                <h2 className="section-heading mt-3">Find your direction.</h2>
              </div>
              <p className="max-w-[42ch] text-[16px] leading-[1.7] text-ink-600 sm:text-right">
                Six areas of practical creative training ,  each one designed
                to give you skills you can use.
              </p>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map(({ n, title, text, href }, i) => (
              <FadeUp key={n} delay={i * 60}>
                <Link
                  href={href}
                  className="h-card group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                >
                  <span
                    className="font-display text-6xl font-bold leading-none tracking-tight text-ink-900/[0.07] transition-colors duration-200 group-hover:text-brand-700/15 select-none"
                    aria-hidden="true"
                  >
                    {n}
                  </span>
                  <h3 className="card-heading mt-3 text-ink-900">{title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-ink-600">{text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-brand-700">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={100}>
            <div className="mt-12 text-center">
              <Link href="/programmes" className="btn-secondary inline-flex">
                View All Programmes
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================
          STUDENT WORK ,  scroll-snap gallery row
          ============================================================ */}
      <section aria-label="Student work gallery" className="section-pad overflow-hidden bg-warm-50">
        <div className="hosanna-container">
          <FadeUp>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Student Work</p>
                <h2 className="section-heading mt-3">
                  Made by hand.<br />Built through practice.
                </h2>
              </div>
              <Link href="/gallery" className="btn-secondary shrink-0 self-start sm:self-end">
                View Gallery
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Scroll row */}
        <FadeUp delay={80}>
          <div className="hosanna-container mt-10">
            <div
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none" }}
              role="list"
              aria-label="Student gallery images"
            >
              {[
                { src: "/images/hero-catering.png", alt: "Catering practical kitchen work at Hosanna", label: "01 \u00b7 Catering", caption: "Practical kitchen work" },
                { src: "/images/hero-fashion.png",  alt: "Fashion craft through making at Hosanna",    label: "02 \u00b7 Fashion",  caption: "Craft through making" },
                { src: "/images/hero-catering.png", alt: "Pastry and baking at Hosanna",               label: "03 \u00b7 Pastry",   caption: "Technique and presentation" },
              ].map((item) => (
                <div
                  key={item.label}
                  role="listitem"
                  className="group relative shrink-0 snap-start overflow-hidden rounded-xl"
                  style={{ width: "min(72vw, 360px)", aspectRatio: "4/5" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="360px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="eyebrow-light">{item.label}</p>
                    <p className="mt-1 text-base font-semibold">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ============================================================
          ADMISSIONS CTA ,  brand-900 solid, offset image
          ============================================================ */}
      <section aria-label="Admissions" className="section-pad bg-off-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl bg-brand-900">
              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                {/* Text */}
                <div className="relative z-10 flex flex-col justify-center px-8 py-14 sm:px-12 sm:py-16 lg:px-14 lg:py-20">
                  <p className="eyebrow-light">Admissions</p>
                  <h2 className="section-heading mt-3 text-white">
                    Your next skill<br />can start here.
                  </h2>
                  <p className="mt-6 max-w-[48ch] text-[17px] leading-[1.7] text-white/65">
                    Explore our programmes, review admissions information and take
                    the next step toward developing your craft.
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link href="/apply" className="btn-white inline-flex">
                      Apply Now
                    </Link>
                    <Link href="/admissions" className="btn-ghost inline-flex">
                      View Admissions
                    </Link>
                  </div>
                </div>
                {/* Offset image */}
                <div className="relative hidden overflow-hidden lg:block">
                  <div className="absolute inset-0 translate-x-8 translate-y-8">
                    <Image
                      src="/images/hero-fashion.png"
                      alt=""
                      fill
                      sizes="40vw"
                      loading="lazy"
                      className="rounded-xl object-cover"
                    />
                    <div className="absolute inset-0 rounded-xl bg-black/30" />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================
          FAQ ,  split layout, accordion with placeholder copy
          NOTE: All answers are placeholder ,  TODO: confirm with school
          ============================================================ */}
      <section aria-label="Frequently asked questions" className="section-pad bg-white">
        <div className="hosanna-container">
          <FadeUp>
            <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:items-start">
              {/* Left */}
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">FAQ</p>
                <h2 className="section-heading mt-3">
                  Common questions,<br />answered.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-ink-600">
                  Can&rsquo;t find what you&rsquo;re looking for? Get in touch directly.
                </p>
                <Link href="/contact" className="link-arrow mt-6 inline-flex">
                  Contact us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              {/* Right */}
              <Accordion items={faqItems} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact section removed — see /contact page */}

      {/*
       * TESTIMONIALS ,  hidden until real quotes are supplied
       * TODO: Drop in <TestimonialsSection /> here when school provides quotes.
       */}

      {/* Mobile floating action buttons — icon only, stacked right side */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 lg:hidden">
        {/* Call */}
        <a
          href="tel:+2348035513434"
          aria-label="Call Hosanna School"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-line shadow-[0_2px_12px_rgba(0,0,0,0.12)] text-ink-900 transition-all hover:border-brand-700 hover:text-brand-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348035513434"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Hosanna School"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-line shadow-[0_2px_12px_rgba(0,0,0,0.12)] text-ink-900 transition-all hover:border-brand-700 hover:text-brand-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
        >
          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
