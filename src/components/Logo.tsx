import Link from "next/link";

type Props = {
  tone?: "dark" | "light";
  className?: string;
  /** Hide the wordmark, show only the monogram (e.g. tight spaces). */
  markOnly?: boolean;
};

/**
 * Brand wordmark for Porter Finance & Operations.
 * A gold serif "P" monogram beside the PORTER wordmark with a
 * "FINANCE & OPERATIONS" line — themeable for light or dark backgrounds.
 */
export default function Logo({
  tone = "dark",
  className = "",
  markOnly = false,
}: Props) {
  const isLight = tone === "light";
  const textColor = isLight ? "text-white" : "text-navy";
  const subColor = isLight ? "text-white/70" : "text-muted";

  return (
    <Link
      href="/"
      aria-label="Porter Finance & Operations — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border-2 border-gold font-serif text-2xl font-bold leading-none text-gold"
        aria-hidden="true"
      >
        P
      </span>
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-xl font-bold tracking-[0.12em] ${textColor}`}
          >
            PORTER
          </span>
          <span
            className={`mt-1 text-[10px] font-medium uppercase tracking-[0.22em] ${subColor}`}
          >
            Finance &amp; Operations
          </span>
        </span>
      )}
    </Link>
  );
}
