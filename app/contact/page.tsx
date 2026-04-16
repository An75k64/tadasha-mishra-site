import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <Container className="py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="For official communication, media reference, and speaking enquiries." description="Messages are routed through a simple protected form with validation and a honeypot field for basic spam resistance." />
          <div className="mt-8 rounded-[2rem] border border-black/10 bg-[#f7f1e7] p-8">
            <p className="text-xs uppercase tracking-[0.26em] text-bronze">Office</p>
            <p className="mt-3 text-lg text-ink/80">{contactDetails.office}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.26em] text-bronze">Email</p>
            <p className="mt-3 text-lg text-ink/80">{contactDetails.email}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
