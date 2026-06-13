"use client";

import { useState } from "react";
import {
  CONTACT_EMAIL,
  SITE_NAME,
} from "@/lib/config";
import { ORGANIZATION_TYPES, TEAM_SIZES } from "@/lib/content";

const FIELD =
  "w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-muted/60 focus:border-blue focus:ring-2 focus:ring-blue/20";
const LABEL = "mb-1.5 block text-sm font-medium text-navy";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string) || "";

    const subject = `Discovery Call Request — ${get("organization") || get("name")}`;
    const body = [
      `Full Name: ${get("name")}`,
      `Organization: ${get("organization")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Organization Type: ${get("orgType")}`,
      `Team Size: ${get("teamSize")}`,
      `Primary Challenge: ${get("challenge")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="name">
            Full Name
          </label>
          <input id="name" name="name" required className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="organization">
            Organization Name
          </label>
          <input id="organization" name="organization" className={FIELD} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={FIELD}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={FIELD} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="orgType">
            Organization Type
          </label>
          <select id="orgType" name="orgType" className={FIELD} defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {ORGANIZATION_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor="teamSize">
            Team Size
          </label>
          <select
            id="teamSize"
            name="teamSize"
            className={FIELD}
            defaultValue=""
          >
            <option value="" disabled>
              Select one…
            </option>
            {TEAM_SIZES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="challenge">
          Primary Challenge
        </label>
        <input
          id="challenge"
          name="challenge"
          placeholder="e.g. Audit readiness, grant compliance, reporting cleanup…"
          className={FIELD}
        />
      </div>

      <div>
        <label className={LABEL} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={FIELD} />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-base font-semibold tracking-wide text-navy shadow-sm transition-colors hover:bg-gold-600 sm:w-auto"
      >
        Schedule Discovery Call
      </button>

      {submitted && (
        <p className="text-sm text-blue">
          Thanks! Your email app should open with your details. If it
          doesn&apos;t, email us directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}

      <p className="text-xs text-muted">
        Prefer to pick a time now? Use the scheduler to book a call with{" "}
        {SITE_NAME} directly.
      </p>
    </form>
  );
}
