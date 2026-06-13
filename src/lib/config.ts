/**
 * Central site configuration.
 *
 * Update CALENDLY_URL and CONTACT_EMAIL with the real values when ready —
 * these placeholders are the only things needed to go live.
 */

export const SITE_NAME = "Porter Accounting Services";
export const SITE_TAGLINE = "Financial Leadership Without the Full-Time Cost";
export const SITE_URL = "https://porterfinancial.vercel.app";

/** Calendly scheduling link (drives the popup CTA + Contact page embed). */
export const CALENDLY_URL = "https://calendly.com/porterfinancial/discovery-call";

/** Where the Contact form composes its mailto: message. */
export const CONTACT_EMAIL = "hello@porterfinanceops.com";

export const CONTACT_PHONE = "";

export const FOOTER_TAGLINE =
  "Financial Clarity  ·  Operational Excellence  ·  Sustainable Growth";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
