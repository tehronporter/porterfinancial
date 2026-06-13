"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import CalendlyButton from "./CalendlyButton";
import { NAV_ITEMS } from "@/lib/config";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile drawer on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll while drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      {/* Navy utility strip */}
      <div className="hidden bg-navy text-white md:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <span className="tracking-wide text-white/80">
            Financial Leadership Without the Full-Time Cost
          </span>
          <span className="font-medium tracking-[0.18em] text-gold">
            FINANCIAL CLARITY · OPERATIONAL EXCELLENCE · SUSTAINABLE GROWTH
          </span>
        </Container>
      </div>

      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-blue ${
                isActive(item.href) ? "text-navy" : "text-muted"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-[27px] left-0 h-[3px] w-full bg-gold" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CalendlyButton size="md">Schedule a Discovery Call</CalendlyButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <Container className="flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-line/70 py-3 text-base font-medium ${
                  isActive(item.href) ? "text-navy" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <CalendlyButton size="lg" className="w-full">
                Schedule a Discovery Call
              </CalendlyButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
