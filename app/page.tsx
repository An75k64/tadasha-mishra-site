import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { articles, galleryImages, stats, timeline } from "@/lib/site-data";

const featuredArticle = articles[0];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-grain opacity-80" />
        <Container className="relative grid min-h-[86vh] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-bronze">Public Service Archive</p>
            <h1 className="mt-6 text-6xl font-semibold leading-none text-ink sm:text-7xl lg:text-[5.75rem]" style={{ fontFamily: "var(--font-serif)" }}>
              A life in public service guided by discipline, integrity, and inner clarity.
            </h1>
            <div className="mt-8 h-px w-24 bg-bronze" />
            <p className="mt-8 text-3xl font-semibold text-navy" style={{ fontFamily: "var(--font-serif)" }}>
              Tadasha Mishra
            </p>
            <p className="mt-3 max-w-xl text-lg leading-8 text-ink/75">
              Director General of Police, Jharkhand. A digital archive and public reference platform shaped by institutional credibility, editorial calm, and service-first clarity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about" className="rounded-full bg-navy px-6 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-[#173754]">
                View Biography
              </Link>
              <Link href="/gallery" className="rounded-full border border-navy/20 px-6 py-3 text-sm uppercase tracking-[0.24em] text-navy transition hover:border-navy hover:bg-white/80">
                Explore Gallery
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-bronze/10 blur-3xl md:block" />
            <div className="absolute -right-6 bottom-10 hidden h-56 w-56 rounded-full bg-navy/10 blur-3xl md:block" />
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 p-4 shadow-soft backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-white/30 opacity-0 transition duration-700 group-hover:opacity-100" />
              <Image
                src="/images/portraits/tadasha-portrait.png"
                alt="Tadasha Mishra formal portrait"
                width={900}
                height={1100}
                priority
                quality={82}
                sizes="(max-width: 1024px) 92vw, 40vw"
                className="h-[620px] w-full rounded-[2rem] object-cover object-top transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2ece2] py-20">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#fbf8f3] p-8 transition hover:bg-white">
                <p className="text-xs uppercase tracking-[0.28em] text-bronze">{stat.label}</p>
                <p className="mt-4 text-3xl font-semibold text-navy" style={{ fontFamily: "var(--font-serif)" }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="deferred-section py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Latest Writing" title={featuredArticle.title} description={featuredArticle.excerpt} />
          <div className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-bronze">
              {new Date(featuredArticle.date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}
            </p>
            {featuredArticle.content.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="mt-5 text-lg leading-8 text-ink/75">
                {paragraph}
              </p>
            ))}
            <Link href={`/writings/${featuredArticle.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-navy">
              Read Article <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="deferred-section border-y border-black/10 bg-[#f7f2ea] py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Service Journey" title="A public career defined by continuity, composure, and responsibility." />
          <div className="space-y-8">
            {timeline.slice(0, 3).map((entry) => (
              <div key={entry.year} className="grid gap-3 border-l border-bronze/50 pl-6 md:grid-cols-[120px_1fr]">
                <p className="text-sm uppercase tracking-[0.22em] text-bronze">{entry.year}</p>
                <div>
                  <h3 className="text-2xl font-semibold text-ink" style={{ fontFamily: "var(--font-serif)" }}>
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-lg leading-8 text-ink/75">{entry.description}</p>
                </div>
              </div>
            ))}
            <Link href="/service" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-navy">
              View Full Journey <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="deferred-section bg-navy py-24 text-center text-white">
        <Container className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.36em] text-white/60">Philosophy</p>
          <blockquote className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            “In a world driven by action, inner stillness remains the source of clarity.”
          </blockquote>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Inspired by the teachings of Ramakrishna and Vivekananda, this perspective informs a life of duty rooted in restraint, balance, and clear judgment.
          </p>
        </Container>
      </section>

      <section className="deferred-section py-24">
        <Container>
          <div className="flex items-end justify-between gap-8">
            <SectionHeading eyebrow="Gallery Preview" title="Moments from office, service, ceremony, and public leadership." />
            <Link href="/gallery" className="hidden text-sm uppercase tracking-[0.22em] text-navy md:inline-flex">
              View Gallery →
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.slice(1, 7).map((image) => (
              <div key={image.src} className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-soft">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                  quality={68}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:rotate-[0.5deg]"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 translate-y-4 p-5 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm uppercase tracking-[0.22em]">Official Archive</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/gallery" className="mt-8 inline-flex text-sm uppercase tracking-[0.22em] text-navy md:hidden">
            View Gallery →
          </Link>
        </Container>
      </section>
    </>
  );
}
