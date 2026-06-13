import Container from "./Container";
import CalendlyButton from "./CalendlyButton";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function CTABand({
  eyebrow = "Schedule a Discovery Call",
  title,
  description,
}: Props) {
  return (
    <section className="bg-navy">
      <Container className="py-16 text-center sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl !text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CalendlyButton size="lg">Schedule a Discovery Call</CalendlyButton>
          <span className="text-sm text-white/60">
            Complimentary · No obligation · 30 minutes
          </span>
        </div>
      </Container>
    </section>
  );
}
