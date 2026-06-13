"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "@/lib/config";

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

/** Inline Calendly scheduling embed for the Contact page. */
export default function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_JS}"]`)) return;
    const script = document.createElement("script");
    script.src = WIDGET_JS;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget min-h-[700px] w-full overflow-hidden rounded-xl border border-line bg-white"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=d4a437`}
    />
  );
}
