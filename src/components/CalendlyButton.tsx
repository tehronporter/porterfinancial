"use client";

import { useCallback } from "react";
import { CALENDLY_URL } from "@/lib/config";

const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";
const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyWindow = Window & {
  Calendly?: { initPopupWidget: (opts: { url: string }) => void };
};

function ensureAsset(
  tag: "link" | "script",
  attr: "href" | "src",
  url: string
): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector(`${tag}[${attr}="${url}"]`)) {
      resolve();
      return;
    }
    const el = document.createElement(tag);
    if (tag === "link") {
      (el as HTMLLinkElement).rel = "stylesheet";
      (el as HTMLLinkElement).href = url;
    } else {
      (el as HTMLScriptElement).src = url;
      (el as HTMLScriptElement).async = true;
    }
    el.addEventListener("load", () => resolve());
    el.addEventListener("error", () => resolve());
    document.head.appendChild(el);
  });
}

type Variant = "gold" | "outline" | "outline-light";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  gold: "bg-gold text-navy hover:bg-gold-600 shadow-sm",
  outline:
    "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
  "outline-light":
    "border border-white/40 text-white hover:bg-white hover:text-navy",
};

const SIZES: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export default function CalendlyButton({
  children = "Schedule a Discovery Call",
  variant = "gold",
  size = "md",
  className = "",
}: Props) {
  const open = useCallback(async () => {
    await Promise.all([
      ensureAsset("link", "href", WIDGET_CSS),
      ensureAsset("script", "src", WIDGET_JS),
    ]);
    const w = window as CalendlyWindow;
    if (w.Calendly) {
      w.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open scheduling page directly if the widget fails to load.
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
    </button>
  );
}
