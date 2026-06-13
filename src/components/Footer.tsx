import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import {
  NAV_ITEMS,
  FOOTER_TAGLINE,
  CONTACT_EMAIL,
  SITE_NAME,
} from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Experienced financial leadership and operational guidance for
              nonprofits, associations, educational organizations, and
              mission-driven businesses.
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              {FOOTER_TAGLINE}
            </p>
          </div>

          <div>
            <h3 className="!text-white text-sm font-semibold uppercase tracking-[0.16em]">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="!text-white text-sm font-semibold uppercase tracking-[0.16em]">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-white/75 transition-colors hover:text-gold"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/75 transition-colors hover:text-gold"
                >
                  Schedule a Discovery Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p>Porter Finance &amp; Operations is a financial leadership partner — not an accounting firm.</p>
        </div>
      </Container>
    </footer>
  );
}
