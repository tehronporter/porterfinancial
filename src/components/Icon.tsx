import type { IconName } from "@/lib/content";

type Props = {
  name: IconName;
  className?: string;
};

/**
 * Lightweight inline icon set (no icon library dependency).
 * 24x24 viewBox, 1.5 stroke, currentColor.
 */
const PATHS: Record<IconName, React.ReactNode> = {
  clarity: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  reporting: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 3-4 4 3 4-6" />
    </>
  ),
  decisions: (
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M16 7h5v5" />
    </>
  ),
  audit: (
    <>
      <path d="M12 3 4 6v6c0 5 3.4 7.6 8 9 4.6-1.4 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  operations: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  controller: (
    <>
      <path d="M12 3v18" />
      <path d="M5 7h14M5 7c0 2 1.5 3.5 3.5 3.5S12 9 12 7M12 7c0 2 1.5 3.5 3.5 3.5S19 9 19 7" />
      <path d="M4 20h16" />
    </>
  ),
  cleanup: (
    <>
      <path d="m3 21 6-6" />
      <path d="M14 4 20 10l-8 8H6v-6l8-8Z" />
      <path d="m12.5 5.5 6 6" />
    </>
  ),
  budgeting: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 4v16" />
      <path d="m12 14 2 2 3-4" />
    </>
  ),
  compliance: (
    <>
      <path d="M9 3h6l2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5l2-2Z" />
      <path d="m9 13 2 2 4-4" />
      <path d="M9 7h6" />
    </>
  ),
  discovery: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  assessment: (
    <>
      <path d="M9 4h6v3H9z" />
      <path d="M9 5H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  implementation: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </>
  ),
  partnership: (
    <>
      <path d="m11 17-3 3-5-5 3-3" />
      <path d="m13 7 3-3 5 5-3 3" />
      <path d="m8.5 12.5 7-7M9 15l6-6" />
    </>
  ),
};

export default function Icon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
