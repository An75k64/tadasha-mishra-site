import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceShowcase } from "@/components/service-showcase";

export default function ServicePage() {
  return (
    <Container className="py-20">
      <SectionHeading eyebrow="Service & Achievements" title="A service record built through sustained leadership and institutional stewardship." description="Selected milestones from a long public career, presented in a clean archival format." />
      <ServiceShowcase />
    </Container>
  );
}
