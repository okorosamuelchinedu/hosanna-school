import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="bg-warm-ivory pb-20 lg:pb-0">
        {/* HERO */}
        <section className="relative overflow-hidden bg-emerald-noir text-warm-ivory">
          <div className="grid min-h-[calc(100svh-4rem)] lg:grid-cols-2">
            {/* Hero copy */}
            <div className="relative z-10 flex items-center px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
              <div className="max-w-2xl">
                <p className="eyebrow text-pale-gold">
                  Hosanna School of Catering & Fashion Design
                </p>

                <div className="gold-rule mt-5" />

                <h1 className="editorial-heading mt-6 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[80px]">
                  Where Skill
                  <br />
                  Becomes Craft.
                </h1>

                <p className="mt-7 max-w-xl text-base leading-7 text-warm-ivory/80 sm:text-lg">
                  Practical training in catering, culinary and fashion skills —
                  designed to help you learn with your hands, develop your craft
                  and build with confidence.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/programmes"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-warm-ivory px-6 py-3 text-sm font-semibold text-emerald-noir transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Explore Programmes
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/apply"
                    className="inline-flex min-h-12 items-center justify-center rounded-sm border border-champagne-gold px-6 py-3 text-sm font-semibold text-warm-ivory transition-colors duration-200 hover:bg-champagne-gold hover:text-emerald-noir"
                  >
                    Apply Now
                  </Link>
                </div>

                <div className="mt-10 flex items-center gap-2 text-xs text-warm-ivory/70">
                  <MapPin
                    className="h-4 w-4 text-champagne-gold"
                    aria-hidden="true"
                  />
                  <span>Aba, Abia State · Nigeria</span>
                </div>
              </div>
            </div>

            {/* Hero imagery */}
           <div className="relative min-h-[58svh] lg:min-h-full">
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/hero-catering.png"
                    alt="Culinary workshop training scene"
                    fill
                    priority
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative overflow-hidden">
                  <Image
                    src="/images/hero-fashion.png"
                    alt="Fashion design and tailoring workshop scene"
                    fill
                    priority
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Editorial overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-noir/30 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                <span className="eyebrow bg-emerald-noir/80 px-3 py-2 text-warm-ivory backdrop-blur-sm">
                  Learn · Practise · Create
                </span>

                <span className="font-heading text-3xl text-pale-gold">
                  01 / 02
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="hosanna-container py-20 sm:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="eyebrow text-royal-green">Welcome to Hosanna</p>
              <div className="gold-rule mt-4" />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="editorial-heading text-4xl font-semibold leading-tight text-emerald-noir sm:text-5xl">
                Learn the skill.
                <br />
                Develop the craft.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate">
                Hosanna School of Catering & Fashion Design is a practical
                learning environment for people who want to develop useful
                creative skills in catering and fashion.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate">
                From the kitchen to the sewing machine, our focus is on learning
                by doing — developing technique, discipline, creativity and
                confidence through practical work.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-noir underline decoration-champagne-gold decoration-2 underline-offset-4"
              >
                Discover Hosanna
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* TWO DISCIPLINES */}
        <section className="bg-white py-20 sm:py-24">
          <div className="hosanna-container">
            <div className="max-w-2xl">
              <p className="eyebrow text-royal-green">The disciplines</p>
              <h2 className="editorial-heading mt-3 text-4xl font-semibold text-emerald-noir sm:text-5xl">
                Two disciplines. One standard.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Link
                href="/catering"
                className="group relative min-h-[420px] overflow-hidden rounded-sm bg-terracotta"
              >
                <Image
                  src="/images/hero-catering.png"
                  alt="Catering training"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-noir/90 via-emerald-noir/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                  <p className="eyebrow text-pale-gold">Catering</p>
                  <h3 className="editorial-heading mt-2 text-4xl font-semibold">
                    Create with flavour.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                    Develop practical catering and culinary skills through
                    hands-on learning, preparation and presentation.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore Catering
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>

              <Link
                href="/fashion"
                className="group relative min-h-[420px] overflow-hidden rounded-sm bg-adire-indigo"
              >
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion design and tailoring training"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-noir/90 via-emerald-noir/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                  <p className="eyebrow text-pale-gold">Fashion</p>
                  <h3 className="editorial-heading mt-2 text-4xl font-semibold">
                    Create with precision.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                    Develop practical fashion and garment-making skills from
                    construction and finishing to creative expression.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore Fashion
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
                {/* PROGRAMMES */}
        <section className="bg-warm-ivory py-20 sm:py-24 lg:py-28">
          <div className="hosanna-container">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow text-royal-green">
                  Learning at Hosanna
                </p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight text-emerald-noir sm:text-5xl">
                  Practical skills.
                  <br />
                  Creative confidence.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-slate lg:col-span-5">
                Our learning approach is built around practical work, guided
                instruction, repetition and hands-on practice across catering
                and fashion.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {/* Catering */}
              <article className="atelier-card group overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/hero-catering.png"
                    alt="Catering and culinary practical training"
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute left-4 top-4 bg-terracotta px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Catering
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="eyebrow text-slate">01</p>

                  <h3 className="editorial-heading mt-2 text-2xl font-semibold text-emerald-noir">
                    Catering & Culinary
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate">
                    Practical learning in food preparation, presentation and
                    catering skills.
                  </p>

                  <Link
                    href="/catering"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-noir underline decoration-champagne-gold decoration-2 underline-offset-4"
                  >
                    Explore Catering
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>

              {/* Fashion */}
              <article className="atelier-card group overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/hero-fashion.png"
                    alt="Fashion design and garment construction training"
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute left-4 top-4 bg-adire-indigo px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Fashion
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="eyebrow text-slate">02</p>

                  <h3 className="editorial-heading mt-2 text-2xl font-semibold text-emerald-noir">
                    Fashion & Garment Skills
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate">
                    Practical learning around garment construction,
                    measurement, cutting, sewing and finishing.
                  </p>

                  <Link
                    href="/fashion"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-noir underline decoration-champagne-gold decoration-2 underline-offset-4"
                  >
                    Explore Fashion
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/programmes"
                className="secondary-button"
              >
                View All Programmes
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
                {/* WHY HOSANNA */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <div className="hosanna-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <p className="eyebrow text-royal-green">Why Hosanna</p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight text-emerald-noir sm:text-5xl">
                  Learning should leave you able to do.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-slate">
                  Practical learning is at the centre of the Hosanna approach —
                  building skills through guided work, repetition and creative
                  practice.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid border-t border-linen sm:grid-cols-2">
                  <article className="border-b border-linen py-7 sm:border-r sm:pr-7">
                    <span className="font-heading text-3xl text-champagne-gold">
                      01
                    </span>

                    <p className="eyebrow mt-5 text-royal-green">
                      Practical
                    </p>

                    <h3 className="editorial-heading mt-2 text-2xl font-semibold text-emerald-noir">
                      Learn by doing.
                    </h3>
                  </article>

                  <article className="border-b border-linen py-7 sm:pl-7">
                    <span className="font-heading text-3xl text-champagne-gold">
                      02
                    </span>

                    <p className="eyebrow mt-5 text-royal-green">
                      Creative
                    </p>

                    <h3 className="editorial-heading mt-2 text-2xl font-semibold text-emerald-noir">
                      Develop your own ideas and expression.
                    </h3>
                  </article>

                  <article className="border-b border-linen py-7 sm:border-b-0 sm:border-r sm:pr-7">
                    <span className="font-heading text-3xl text-champagne-gold">
                      03
                    </span>

                    <p className="eyebrow mt-5 text-royal-green">
                      Disciplined
                    </p>

                    <h3 className="editorial-heading mt-2 text-2xl font-semibold text-emerald-noir">
                      Build consistency through practice.
                    </h3>
                  </article>

                  <article className="py-7 sm:pl-7">
                    <span className="font-heading text-3xl text-champagne-gold">
                      04
                    </span>

                    <p className="eyebrow mt-5 text-royal-green">
                      Purposeful
                    </p>

                    <h3 className="editorial-heading mt-2 text-2xl font-semibold text-emerald-noir">
                      Develop skills you can take into the real world.
                    </h3>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
                {/* CATERING FEATURE */}
        <section className="overflow-hidden bg-emerald-noir text-warm-ivory">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <Image
                src="/images/hero-catering.png"
                alt="Catering and culinary practical training"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-noir/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <span className="eyebrow bg-emerald-noir/85 px-3 py-2 text-pale-gold backdrop-blur-sm">
                  Catering
                </span>
              </div>
            </div>

            <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
              <div className="max-w-xl">
                <p className="eyebrow text-pale-gold">Catering</p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                  From preparation
                  <br />
                  to presentation.
                </h2>

                <p className="mt-6 text-base leading-7 text-warm-ivory/75">
                  Build practical confidence in the kitchen — from preparation
                  and cooking to finishing, presentation and service.
                </p>

                <Link
                  href="/catering"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-warm-ivory px-6 py-3 text-sm font-semibold text-emerald-noir transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore Catering Training
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
                {/* FASHION FEATURE */}
        <section className="overflow-hidden bg-warm-ivory text-emerald-noir">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:order-first lg:px-14 xl:px-20">
              <div className="max-w-xl">
                <p className="eyebrow text-royal-green">Fashion</p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                  From pattern
                  <br />
                  to finished garment.
                </h2>

                <p className="mt-6 text-base leading-7 text-slate">
                  Learn the practical foundations of fashion and garment
                  construction through measurement, cutting, sewing, fitting
                  and finishing.
                </p>

                <Link
                  href="/fashion"
                  className="primary-button mt-8"
                >
                  Explore Fashion Training
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <Image
                src="/images/hero-fashion.png"
                alt="Fashion design and tailoring practical training"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-noir/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <span className="eyebrow bg-emerald-noir/85 px-3 py-2 text-pale-gold backdrop-blur-sm">
                  Fashion
                </span>
              </div>
            </div>
          </div>
        </section>
                {/* STUDENT EXPERIENCE */}
        <section className="bg-linen py-20 text-emerald-noir sm:py-24">
          <div className="hosanna-container">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow text-royal-green">Student Experience</p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                  Practical skills.
                  <br />
                  Creative confidence.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate">
                  At Hosanna, learning is built around practice. Students
                  develop their skills by working with real tools, materials
                  and techniques while building confidence through repetition.
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm leading-6 text-slate">
                  From the kitchen to the sewing studio, the focus is on
                  learning by doing — developing the discipline, creativity and
                  practical ability needed to keep growing beyond the
                  classroom.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="atelier-card bg-warm-ivory">
                <span className="font-display text-3xl text-champagne-gold">
                  01
                </span>

                <h3 className="mt-5 text-lg font-semibold text-emerald-noir">
                  Learn by doing
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate">
                  Practical sessions help turn lessons into usable skills.
                </p>
              </div>

              <div className="atelier-card bg-warm-ivory">
                <span className="font-display text-3xl text-champagne-gold">
                  02
                </span>

                <h3 className="mt-5 text-lg font-semibold text-emerald-noir">
                  Build confidence
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate">
                  Practice creates confidence in both technique and execution.
                </p>
              </div>

              <div className="atelier-card bg-warm-ivory">
                <span className="font-display text-3xl text-champagne-gold">
                  03
                </span>

                <h3 className="mt-5 text-lg font-semibold text-emerald-noir">
                  Develop creativity
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate">
                  Students learn to develop ideas and express them through
                  their craft.
                </p>
              </div>

              <div className="atelier-card bg-warm-ivory">
                <span className="font-display text-3xl text-champagne-gold">
                  04
                </span>

                <h3 className="mt-5 text-lg font-semibold text-emerald-noir">
                  Keep improving
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate">
                  Consistent practice helps turn individual skills into lasting
                  craft.
                </p>
              </div>
            </div>
          </div>
        </section>
                {/* STUDENT WORK / GALLERY */}
        <section className="bg-warm-ivory py-20 text-emerald-noir sm:py-24">
          <div className="hosanna-container">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-royal-green">Student Work</p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                  Made by hand.
                  <br />
                  Built through practice.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate">
                  A glimpse into the practical work, creative process and
                  developing craft behind learning at Hosanna.
                </p>
              </div>

              <Link
                href="/gallery"
                className="secondary-button shrink-0"
              >
                View Full Gallery
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-12">
              <div className="group relative min-h-[420px] overflow-hidden rounded-sm md:col-span-7">
                <Image
                  src="/images/hero-catering.png"
                  alt="Catering practical training"
                  fill
                  sizes="(max-width: 767px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-noir/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-warm-ivory">
                  <p className="eyebrow text-pale-gold">01 · Catering</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Practical kitchen work
                  </h3>
                </div>
              </div>

              <div className="group relative min-h-[420px] overflow-hidden rounded-sm md:col-span-5">
                <Image
                  src="/images/hero-fashion.png"
                  alt="Fashion design and tailoring practical training"
                  fill
                  sizes="(max-width: 767px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-noir/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-warm-ivory">
                  <p className="eyebrow text-pale-gold">02 · Fashion</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Craft through making
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-linen pt-5">
              <p className="text-xs leading-5 text-slate">
                Demonstration imagery for the website concept. Replace with
                verified Hosanna student work before production publication.
              </p>
            </div>
          </div>
        </section>
                {/* ABOUT / OUR STORY */}
        <section className="bg-emerald-noir py-20 text-warm-ivory sm:py-24">
          <div className="hosanna-container">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <p className="eyebrow text-pale-gold">About Hosanna</p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                  Where skill
                  <br />
                  becomes craft.
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="text-lg leading-8 text-warm-ivory/90">
                  Hosanna School of Catering & Fashion Design is a practical
                  learning environment focused on developing useful skills in
                  catering, culinary work, fashion and garment construction.
                </p>

                <p className="mt-6 text-base leading-7 text-warm-ivory/65">
                  Our approach centres on practice — giving learners space to
                  develop technique, creativity and confidence through
                  hands-on work.
                </p>

                <Link
                  href="/about"
                  className="mt-8 inline-flex min-h-12 items-center gap-2 border-b border-champagne-gold pb-2 text-sm font-semibold text-warm-ivory transition-colors hover:text-pale-gold"
                >
                  Discover Our Story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="mt-16 border-t border-warm-ivory/15 pt-8">
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-display text-3xl text-pale-gold">01</p>
                  <p className="mt-3 text-sm font-semibold">
                    Practical learning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-warm-ivory/60">
                    Skills developed through hands-on practice.
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl text-pale-gold">02</p>
                  <p className="mt-3 text-sm font-semibold">
                    Creative development
                  </p>
                  <p className="mt-2 text-sm leading-6 text-warm-ivory/60">
                    Space to develop ideas through making.
                  </p>
                </div>

                <div>
                  <p className="font-display text-3xl text-pale-gold">03</p>
                  <p className="mt-3 text-sm font-semibold">
                    Craft and confidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-warm-ivory/60">
                    Building consistency through continued practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

              {/* ADMISSIONS CTA */}
        <section className="relative overflow-hidden bg-emerald-noir py-20 text-warm-ivory sm:py-24 lg:py-28">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-royal-green/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-champagne-gold/10 blur-3xl" />

          <div className="hosanna-container relative">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="eyebrow text-pale-gold">Admissions</p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Your next skill
                  <br />
                  can start here.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-warm-ivory/70 sm:text-lg sm:leading-8">
                  Explore our programmes, review the admission information and
                  take the next step toward developing your craft.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                <Link
                  href="/admissions"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm bg-warm-ivory px-6 py-3 text-sm font-semibold text-emerald-noir transition-colors hover:bg-pale-gold"
                >
                  View Admissions
                </Link>

                <Link
                  href="/apply"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-champagne-gold px-6 py-3 text-sm font-semibold text-warm-ivory transition-colors hover:bg-champagne-gold hover:text-emerald-noir"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="mt-14 border-t border-warm-ivory/15 pt-6">
              <div className="flex flex-col gap-3 text-sm text-warm-ivory/60 sm:flex-row sm:items-center sm:justify-between">
                <span>Aba, Abia State · Nigeria</span>

                <span className="hidden sm:block">•</span>

                <span>Practical learning. Creative confidence.</span>
              </div>
            </div>
          </div>
        </section>
                {/* CONTACT */}
        <section className="bg-warm-ivory py-20 text-emerald-noir sm:py-24">
          <div className="hosanna-container">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow text-royal-green">Contact</p>

                <div className="gold-rule mt-4" />

                <h2 className="editorial-heading mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                  Come and see
                  <br />
                  Hosanna.
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-slate">
                  Have a question about our programmes or admissions? Get in
                  touch with the school and take the next step.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
                <div className="border-t border-linen pt-5">
                  <p className="eyebrow text-royal-green">Visit</p>

                  <p className="mt-4 text-base font-semibold text-charcoal">
                    Aba, Abia State
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate">
                    12 Nicholas Street,
                    <br />
                    opposite Brass Junction,
                    <br />
                    Aba, Abia State, Nigeria
                  </p>
                </div>

                <div className="border-t border-linen pt-5">
                  <p className="eyebrow text-royal-green">Call</p>

                  <a
                    href="tel:+2348035513434"
                    className="mt-4 inline-block text-base font-semibold text-charcoal underline decoration-champagne-gold underline-offset-4"
                  >
                    +234 803 551 3434
                  </a>

                  <p className="mt-2 text-sm leading-6 text-slate">
                    Contact the school for programme and admissions enquiries.
                  </p>
                </div>

                <div className="border-t border-linen pt-5 sm:col-span-2">
                  <p className="eyebrow text-royal-green">Start here</p>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="primary-button"
                    >
                      Contact Us
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/apply"
                      className="secondary-button"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-linen pt-5">
              <p className="text-xs leading-5 text-slate">
                Address shown here is provisional and should be confirmed with
                the school before the website is published.
              </p>
            </div>
          </div>
        </section>
                {/* FOOTER */}
        <footer className="bg-charcoal text-warm-ivory">
          <div className="hosanna-container py-14 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Link
                  href="/"
                  className="inline-flex"
                  aria-label="Hosanna School of Catering & Fashion Design"
                >
                  <img
                    src="/logo/hosanna-logo.svg"
                    alt="Hosanna School of Catering & Fashion Design"
                    className="h-12 w-auto brightness-0 invert"
                  />
                </Link>

                <p className="mt-5 max-w-md font-display text-xl leading-8 text-warm-ivory/90">
                  Where skill becomes craft.
                </p>

                <p className="mt-4 max-w-md text-sm leading-6 text-warm-ivory/55">
                  Practical training in catering, culinary and fashion skills
                  in Aba, Abia State, Nigeria.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
                <div>
                  <p className="eyebrow text-pale-gold">Explore</p>

                  <nav className="mt-4 flex flex-col gap-3 text-sm">
                    <Link
                      href="/about"
                      className="text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      About
                    </Link>

                    <Link
                      href="/programmes"
                      className="text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      Programmes
                    </Link>

                    <Link
                      href="/catering"
                      className="text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      Catering
                    </Link>

                    <Link
                      href="/fashion"
                      className="text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      Fashion
                    </Link>
                  </nav>
                </div>

                <div>
                  <p className="eyebrow text-pale-gold">Admissions</p>

                  <nav className="mt-4 flex flex-col gap-3 text-sm">
                    <Link
                      href="/admissions"
                      className="text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      Admissions
                    </Link>

                    <Link
                      href="/admissions/how-to-apply"
                      className="text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      How to Apply
                    </Link>

                    <Link
                      href="/admissions/requirements"
                      className="text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      Requirements
                    </Link>

                    <Link
                      href="/apply"
                      className="text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      Apply Now
                    </Link>
                  </nav>
                </div>

                <div>
                  <p className="eyebrow text-pale-gold">Contact</p>

                  <div className="mt-4 space-y-3 text-sm">
                    <a
                      href="tel:+2348035513434"
                      className="block text-warm-ivory/65 transition-colors hover:text-warm-ivory"
                    >
                      +234 803 551 3434
                    </a>

                    <p className="leading-6 text-warm-ivory/55">
                      Aba, Abia State
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-3 border-t border-warm-ivory/10 pt-6 text-xs text-warm-ivory/40 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Hosanna School of Catering &
                Fashion Design.
              </p>

              <p>Where Skill Becomes Craft.</p>
            </div>
          </div>
        </footer>
                {/* MOBILE ACTION BAR */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-linen bg-warm-ivory/95 p-2 shadow-[0_-4px_20px_rgba(14,14,14,0.08)] backdrop-blur-xl lg:hidden">
          <div className="grid grid-cols-3 gap-2">
            <a
              href="tel:+2348035513434"
              className="flex min-h-12 items-center justify-center rounded-sm border border-linen bg-white text-xs font-semibold text-emerald-noir"
            >
              Call
            </a>

            <a
              href="https://wa.me/2348035513434"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-sm border border-linen bg-white text-xs font-semibold text-emerald-noir"
            >
              WhatsApp
            </a>

            <Link
              href="/apply"
              className="flex min-h-12 items-center justify-center rounded-sm bg-emerald-noir text-xs font-semibold text-warm-ivory"
            >
              Apply
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}