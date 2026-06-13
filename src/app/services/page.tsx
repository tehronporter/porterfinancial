import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { SERVICES, TARGET_CLIENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fractional Controller services, financial cleanup & reporting optimization, budgeting & forecasting, and audit readiness & compliance review for mission-driven organizations.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy text-white">
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Services
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl !text-white sm:text-5xl">
            Tailored Financial Leadership &amp; Operational Support
          </h1>
          <span className="mt-5 block h-px w-16 bg-gold" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            Porter Accounting Services provides tailored financial
            leadership and operational support to help your organization thrive —
            at the right time, for the right challenges, and at the right level of
            engagement.
          </p>
        </Container>
      </section>

      {/* Service cards */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Who we serve */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for Mission-Driven Organizations"
            description="We provide experienced financial leadership and operational guidance to organizations that need strategic support, stronger systems, and greater financial confidence."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TARGET_CLIENTS.map((client) => (
              <div
                key={client.title}
                className="rounded-xl border border-line bg-cream p-7"
              >
                <h3 className="text-lg">{client.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Not Sure Which Service Is Right For You?"
        title="Let's Find the Right Fit Together"
        description="Tell us about your organization's goals and challenges. We'll recommend the best path forward for your needs."
      />
    </>
  );
}
