import Link from "next/link";
import { Container } from "@/components/container";
import { contactDetails } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#ece3d4]">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-navy/70">Tadasha Mishra</p>
          <h2 className="mt-3 max-w-md text-2xl font-semibold text-ink">
            Director General of Police, Jharkhand
          </h2>
        </div>
        <div className="space-y-3 text-sm text-ink/80">
          <p>{contactDetails.office}</p>
          <Link href={`mailto:${contactDetails.email}`} className="transition hover:text-navy">
            {contactDetails.email}
          </Link>
          <p>© {new Date().getFullYear()} Tadasha Mishra</p>
        </div>
      </Container>
    </footer>
  );
}
