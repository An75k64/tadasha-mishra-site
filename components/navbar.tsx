import Link from "next/link";
import { Container } from "@/components/container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/writings", label: "Writings" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper/85 backdrop-blur-xl">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bronze/50 to-transparent" />
      <Container className="flex flex-col gap-5 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="group relative max-w-[14rem] rounded-xl border border-navy/10 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-navy shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:bg-white"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-bronze/0 via-bronze/10 to-bronze/0 opacity-0 transition duration-500 group-hover:opacity-100" />
          <span className="relative">Tadasha Mishra</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2 rounded-full border border-black/10 bg-white/60 p-2 shadow-sm backdrop-blur-sm md:gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative overflow-hidden rounded-full px-4 py-2 text-sm uppercase tracking-[0.2em] text-ink/75 transition duration-300 hover:-translate-y-0.5 hover:text-navy"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#f7f0e3] via-white to-[#efe3d0] opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-navy/70 transition duration-300 group-hover:scale-x-100" />
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
