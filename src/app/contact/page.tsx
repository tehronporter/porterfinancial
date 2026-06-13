import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import CalendlyInline from "@/components/CalendlyInline";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Schedule a Discovery Call",
  description:
    "Let's discuss your organization's goals, challenges, and opportunities. Schedule a complimentary discovery call with Porter Finance & Operations.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white">
        <Container className="py-16 text-center sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl !text-white sm:text-5xl">
            Schedule a Discovery Call
          </h1>
          <span className="mx-auto mt-5 block h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            Let&apos;s discuss your organization&apos;s goals, challenges, and
            opportunities.
          </p>
        </Container>
      </section>

      {/* Form + scheduler */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Tell Us About Your Organization</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Share a few details and we&apos;ll follow up to find the best time
              to connect. Prefer email? Reach us anytime at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-blue underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Book a Time Now</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Pick a slot that works for you — the call is complimentary, with no
              obligation.
            </p>
            <div className="mt-8">
              <CalendlyInline />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
