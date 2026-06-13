type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: Props) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-gold" : "text-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl ${isDark ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      <span
        className={`mt-4 block h-px w-16 bg-gold ${isCenter ? "mx-auto" : ""}`}
      />
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            isDark ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
