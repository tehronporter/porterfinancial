# Porter Finance & Operations — Website

Marketing website for **Porter Finance & Operations**, a fractional
Controller / finance consultancy for nonprofits, associations, educational
organizations, and mission-driven businesses.

**Tagline:** _Financial Leadership Without the Full-Time Cost._
**Primary goal:** schedule discovery calls (via Calendly).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Pages

- `/` — Home (hero, trust, expertise, outcomes, services, why-us, approach, CTA)
- `/services` — Detailed service offerings + who we serve
- `/about` — Meet Monique Porter + areas of specialization
- `/contact` — Contact form + inline Calendly scheduler

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (what Vercel runs)
npm start        # serve the production build
```

## Configuration — edit `src/lib/config.ts`

Two values must be set before launch:

| Constant        | What it is                                        |
| --------------- | ------------------------------------------------- |
| `CALENDLY_URL`  | Monique's Calendly scheduling link                |
| `CONTACT_EMAIL` | Where the contact form composes its `mailto:`     |

`SITE_URL` should be set to the final production domain (used for SEO,
sitemap, and OpenGraph). All site copy lives in `src/lib/content.ts`.

> The contact form is intentionally backend-free: on submit it opens the
> visitor's email client pre-filled. Calendly is the primary conversion path.

## Replacing images

Drop real photos into `public/images/`, keeping the same filenames — no code
changes needed. Current files are branded placeholders:

| File                          | Used on        | Suggested        |
| ----------------------------- | -------------- | ---------------- |
| `public/images/hero-monique.jpg`     | Home hero      | Portrait (6:7)   |
| `public/images/monique-portrait.jpg` | About page     | Portrait (5:6)   |
| `public/images/about-secondary.jpg`  | (spare)        | Boardroom/16:10  |

The brand logo lockups supplied in the brief are kept at
`public/images/logo-on-white.png` and `public/images/logo-on-navy.png` for
social/print use. The header and footer render a crisp CSS wordmark
(`src/components/Logo.tsx`) for sharpness at every size.

## Brand system

- Navy `#0F2744` · Blue `#2D5DA8` · Gold `#D4A437` · Background `#F8FAFC`
- Headings: Playfair Display · Body: Inter (loaded via `next/font`)
- Theme tokens live in `src/app/globals.css` (`@theme`)

## Deploy to Vercel

1. Push to GitHub (already wired to
   `https://github.com/tehronporter/porterfinancial.git`).
2. In Vercel, **Import Project** → select this repo. Framework auto-detects as
   Next.js; no build settings or environment variables required.
3. Add the custom domain in Vercel and update `SITE_URL` in
   `src/lib/config.ts`.
