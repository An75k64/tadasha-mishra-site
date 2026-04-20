import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-bronze/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Biography"
              title="A public life shaped by discipline, institutional responsibility, and measured leadership."
            />
            <div className="prose-copy mt-8 max-w-2xl text-lg leading-8 text-ink/78">
              <p>
                Tadasha Mishra serves as Director General of Police, Jharkhand. Her career reflects decades of public service defined by administrative steadiness, law-and-order leadership, and a deep regard for institutional credibility.
              </p>
              <p>
                Across senior roles in policing and governance, her work has carried a consistent emphasis on restraint, clarity, and responsibility. Whether in office, in field administration, or in public-facing leadership, her service record reflects calm authority rather than spectacle.
              </p>
              <p>
                This website functions as a public reference archive for biography, writings, service milestones, and official imagery.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(16,34,53,0.18)]">
              <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/15 via-transparent to-bronze/20" />
                <div className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/35 blur-md transition duration-700 group-hover:left-[120%]" />
              </div>
              <Image
                src="/images/gallery/formal-address.jpg"
                alt="Tadasha Mishra seated in office"
                width={900}
                height={650}
                quality={76}
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="h-[24rem] w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-[1.06] group-hover:rotate-[0.6deg]"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#fbf7f0] p-6 transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:bg-white hover:shadow-soft">
                <span className="pointer-events-none absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-bronze/70 via-navy/80 to-sky-400/70 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="pointer-events-none absolute inset-x-10 top-0 h-4 bg-gradient-to-b from-navy/15 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
                <p className="text-xs uppercase tracking-[0.28em] text-bronze">Values</p>
                <h3 className="mt-4 text-3xl font-semibold text-navy" style={{ fontFamily: "var(--font-serif)" }}>
                  Integrity
                </h3>
                <p className="mt-3 text-base leading-7 text-ink/75">
                  Leadership anchored in public duty, ethical responsibility, and institutional trust.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#fbf7f0] p-6 transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:bg-white hover:shadow-soft">
                <span className="pointer-events-none absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-bronze/70 via-navy/80 to-sky-400/70 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="pointer-events-none absolute inset-x-10 top-0 h-4 bg-gradient-to-b from-navy/15 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
                <p className="text-xs uppercase tracking-[0.28em] text-bronze">Approach</p>
                <h3 className="mt-4 text-3xl font-semibold text-navy" style={{ fontFamily: "var(--font-serif)" }}>
                  Clarity
                </h3>
                <p className="mt-3 text-base leading-7 text-ink/75">
                  A calm and deliberate style that values proportion, precision, and continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
