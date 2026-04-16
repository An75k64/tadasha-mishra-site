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
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="max-w-[14rem] text-sm font-semibold uppercase tracking-[0.28em] text-navy">
          Tadasha Mishra
        </Link>
        <nav className="flex flex-wrap gap-4 md:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.22em] text-ink/75 transition hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
