import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <Container className="py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Biography" title="A public life shaped by discipline, institutional responsibility, and measured leadership." />
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
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-soft">
            <Image
              src="/images/gallery/formal-address.jpg"
              alt="Tadasha Mishra seated in office"
              width={900}
              height={650}
              quality={76}
              sizes="(max-width: 1024px) 92vw, 44vw"
              className="h-[24rem] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-[#fbf7f0] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-bronze">Values</p>
              <h3 className="mt-4 text-3xl font-semibold text-navy" style={{ fontFamily: "var(--font-serif)" }}>Integrity</h3>
              <p className="mt-3 text-base leading-7 text-ink/75">
                Leadership anchored in public duty, ethical responsibility, and institutional trust.
              </p>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-[#fbf7f0] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-bronze">Approach</p>
              <h3 className="mt-4 text-3xl font-semibold text-navy" style={{ fontFamily: "var(--font-serif)" }}>Clarity</h3>
              <p className="mt-3 text-base leading-7 text-ink/75">
                A calm and deliberate style that values proportion, precision, and continuity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
