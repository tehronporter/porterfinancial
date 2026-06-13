import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CalendlyButton from "@/components/CalendlyButton";
import CTABand from "@/components/CTABand";
import ServiceCard from "@/components/ServiceCard";
import Icon from "@/components/Icon";
import {
  CORE_EXPERTISE,
  LEADERSHIP_ORGS,
  RESULTS,
  SERVICES,
  WHY_CHOOSE_US,
  APPROACH,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-blue/5" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Fractional Controller &amp; Finance Consulting
            </p>
            <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Financial Leadership
              <span className="block text-blue">Without the Full-Time Cost</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Get experienced financial leadership, stronger reporting, better
              budgeting, and improved operational systems — without hiring a
              full-time finance executive.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Porter Finance &amp; Operations helps organizations strengthen
              financial management, improve decision-making, and build long-term
              sustainability.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CalendlyButton size="lg">Schedule a Discovery Call</CalendlyButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/25 px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl border border-line shadow-xl">
              <Image
                src="/images/moniqueheadshot.png"
                alt="Monique Porter, finance and operations executive"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-line bg-white px-5 py-4 shadow-lg sm:block">
              <p className="font-serif text-3xl font-bold text-navy">15+</p>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                Years of Leadership
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Trust */}
      <section className="border-y border-line bg-white">
        <Container className="py-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Trusted Financial Leadership Experience
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-ink">
            Monique Porter brings over{" "}
            <span className="font-semibold text-navy">15 years</span> of
            leadership experience across nonprofit, education, association, and
            community development organizations.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {LEADERSHIP_ORGS.map((org) => (
              <div
                key={org}
                className="flex items-center justify-center rounded-lg border border-line bg-cream px-4 py-5 text-center text-sm font-semibold text-navy"
              >
                {org}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Core expertise */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Core Expertise"
            title="Depth Across Finance & Operations"
            description="Executive-level financial expertise with a practical, hands-on approach focused on results."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {CORE_EXPERTISE.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Results */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The Outcomes Organizations Need"
            title="Results That Build Confidence"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESULTS.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-line bg-cream p-7 transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Services preview */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="How We Help Organizations Thrive"
            description="Experienced leadership at the right time, for the right challenges, and at the right level of engagement."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-navy"
            >
              View all services
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Why choose us */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Clients Choose Us"
              title="Experience Beyond Accounting"
              align="left"
              tone="dark"
              description="Financial leadership is more than managing numbers. It requires understanding operations, people, systems, compliance requirements, and organizational strategy."
            />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Clients work with Porter Finance &amp; Operations because they need
              a trusted advisor who can connect financial insight with
              operational success.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8.5 13.6 4.9 10l-1.2 1.2 4.8 4.8 9-9L16.3 6z" />
                </svg>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Approach */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How We Partner With You"
            title="Our Approach"
            description="A clear path from understanding your goals to strengthening long-term organizational success."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex h-full flex-col rounded-xl border border-line bg-white p-7 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cream text-blue">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-serif text-3xl font-bold text-line">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
                {i < APPROACH.length - 1 && (
                  <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-gold lg:flex">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M4 10h12M11 5l5 5-5 5" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Let's Discuss Your Organization's Goals"
        description="Schedule a complimentary discovery call to explore your challenges, priorities, and opportunities."
      />
    </>
  );
}
