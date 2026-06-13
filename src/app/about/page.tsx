import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import {
  ABOUT_BIO,
  LEADERSHIP_ORGS,
  SPECIALIZATIONS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About Monique Porter",
  description:
    "Monique Porter is a finance and operations executive with 15+ years helping nonprofits, associations, and educational organizations strengthen financial management and operational performance.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative">
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl border border-line shadow-xl">
              <Image
                src="/images/monique-portrait.jpg"
                alt="Portrait of Monique Porter"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">
              About
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl">Meet Monique Porter</h1>
            <span className="mt-5 block h-px w-16 bg-gold" />
            <div className="mt-6 space-y-5">
              {ABOUT_BIO.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                Leadership Experience Includes
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {LEADERSHIP_ORGS.map((org) => (
                  <span
                    key={org}
                    className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-sm"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specializations */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Expertise"
            title="Areas of Specialization"
            description="Combining strategic insight with practical execution to build stronger financial foundations while improving operational effectiveness."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALIZATIONS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-line bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-cream text-blue">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8.5 13.6 4.9 10l-1.2 1.2 4.8 4.8 9-9L16.3 6z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Positioning statement */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <span className="font-serif text-5xl leading-none text-gold">“</span>
          <p className="mt-2 font-serif text-2xl leading-relaxed text-navy sm:text-3xl">
            Porter Accounting Services is more than a traditional accounting firm. We are a
            trusted financial leadership partner that helps organizations make
            better decisions, strengthen operations, and achieve their mission
            through sound financial management.
          </p>
        </Container>
      </section>

      <CTABand
        title="Ready to Strengthen Your Financial Foundation?"
        description="Schedule a discovery call to discuss your organization's goals, challenges, and opportunities."
      />
    </>
  );
}
