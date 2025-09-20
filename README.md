# VitaVera Redesign

A fast, conversion-focused React + Vite site for VitaVera Wellness, replacing the legacy WordPress experience with a modern, accessible, and SEO-friendly build.

## Why this matters

- **Performance first:** Static export with Vite + Tailwind keeps the initial bundle lean (<200KB target) and serves optimized assets.
- **Conversion optimized:** Sticky booking CTA, hero proof points, and service cards with pricing/duration drive bookings and Stripe purchases.
- **Maintainable content:** Services/testimonials in JSON and blog content in Markdown make it easy to edit locally or swap in a CMS later.

## Getting started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app starts at [http://localhost:5173](http://localhost:5173).

### Type checking, linting, and tests

```bash
npm run typecheck
npm run lint
npm run test
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Deploy to Vercel

1. Ensure environment variables from `.env.example` are configured in Vercel.
2. Run `npm run build` locally to confirm success.
3. Connect the repo to Vercel; it will use `npm run build` automatically.
4. Add required webhooks (Stripe, Mailchimp, Zapier) once live credentials are in place.

## Environment variables

Copy `.env.example` to `.env.local` and update the placeholders:

- `VITE_GA_MEASUREMENT_ID` – GA4 Measurement ID. // TODO: REPLACE
- `VITE_STRIPE_PUBLISHABLE_KEY` – Stripe publishable test key for client. // TODO: REPLACE
- `STRIPE_TEST_KEY` – Stripe secret test key for serverless functions. // TODO: REPLACE
- `STRIPE_WEBHOOK_SECRET` – Stripe webhook signing secret. // TODO: REPLACE
- `MAILCHIMP_ENDPOINT` – Mailchimp list endpoint (see API docs). // TODO: REPLACE
- `ADMIN_PASSCODE` – Passcode for the mock admin route. // TODO: REPLACE

## Project structure highlights

- `src/pages` – Top-level routes with SEO meta via `react-helmet-async`.
- `src/components` – Layout, CTA, and content sections, all keyboard-accessible and optimized for conversions.
- `data/*.json` – Services, products, testimonials, and FAQs.
- `content/blog/*.md` – Markdown-powered blog posts parsed via `gray-matter` + `marked`.
- `api/*.ts` – Serverless mocks for bookings, Stripe checkout, webhooks, Mailchimp, and admin auth.

## Key features implemented

- Sticky mobile booking CTA, hero proof bar, and service cards with price, duration, and “who it’s for”.
- Mocked Calendly embed, Stripe checkout/session endpoint, Mailchimp newsletter handler, and Zapier-ready booking payloads.
- JSON-LD for LocalBusiness and Service schema, plus sitemap and robots for SEO.
- Accessible gallery with keyboard-friendly lightbox, WCAG-compliant forms, and focus outlines.
- Unit test coverage for service card component and GitHub Actions CI to lint, test, and build.

## Swapping the CMS later

Content is decoupled so you can migrate to Sanity, Notion, or another CMS by replacing loaders in `src/lib/*`. Provide a fetcher that returns the same TypeScript types, then hydrate the pages via static generation or incremental rebuilds.

## Stripe & payments

- The `/api/stripe-session` function returns a mock checkout URL when `STRIPE_TEST_KEY` isn’t configured. Once real keys are added, it creates live Checkout Sessions.
- The `/api/webhook` endpoint verifies Stripe signatures when credentials are present. Replace the mock console logs with fulfillment logic.
- Post-payment download URLs are defined per product in `data/products.json`.

## Newsletter & CRM automation

- `/api/newsletter` posts to Mailchimp once `MAILCHIMP_ENDPOINT` and API key are provided.
- `/api/book` validates payloads and is ready for Zapier/n8n forwarding (add `ZAPIER_WEBHOOK_URL` and uncomment the fetch call).

## Admin access (mock)

The `/admin` page is gated by a mock magic link flow. Update `/api/admin-auth.ts` to send actual emails or JWT tokens once a production auth provider is chosen.

## Migration from WordPress

1. Export existing WordPress posts/pages as Markdown using a tool like WP2Static or Simply Static.
2. Copy blog posts into `content/blog/` and update front matter (`title`, `description`, `slug`, `date`).
3. Download optimized hero and gallery images to `public/images/` and reference them in JSON/Markdown.
4. Map WordPress forms to the new booking/contact endpoints.
5. Decommission WP themes/plugins once DNS points to Vercel and QA is complete.

## Design & CRO checklist (implemented)

- Hero copy: “IV Hydration & Vitamin Infusions — Recover Faster. Book Online.”
- Sticky booking CTA on mobile.
- Proof elements above the fold: address + phone, reviews, starting price.
- Service cards highlight price, duration, and who it’s for.

## Security notes

- Never commit real API keys. Use Vercel environment variables and Secrets.
- Restrict Stripe keys to test mode until launch; rotate secrets after deployment.
- Consider enabling [Vercel password protection](https://vercel.com/docs/security/password-protection) for staging.
- Audit third-party scripts before enabling in production.

## Testing checklist after deploy

1. Submit the booking form with valid data and confirm mock success response.
2. Trigger Stripe Checkout from the Shop page and ensure redirect works.
3. Subscribe via the newsletter form and confirm success toast/logs.
4. Navigate with keyboard through header, hero CTA, and gallery lightbox.
5. Run Lighthouse (mobile + desktop) and confirm 90+ scores across Performance, Accessibility, Best Practices, and SEO.

## GitHub Actions CI

Located at `.github/workflows/ci.yml` and runs `npm install`, `npm run lint`, `npm run test`, and `npm run build` on every push/PR.

## Follow-up iteration ideas

1. Swap Markdown blog to Sanity with live preview.
2. Add automated appointment reminders via Twilio SMS.
3. Implement authenticated admin dashboard with Supabase and protected APIs.
4. Integrate Calendly’s real OAuth for nurse availability syncing.
5. Add loyalty rewards with referral tracking and coupon codes.
