# Cecilia's Home — Website

Next.js 14 (App Router) marketing website for **Cecilia's Home**, a loving and
supportive group home in West Des Moines, Iowa. Built on the **Capital Sites**
multi-tenant framework, so the same codebase can be re-skinned for other local
clients by editing a few content files.

- **Tagline:** *A home. A family. A future.*
- **Motto:** *Where quality care has no boundary*
- **Promise:** *Supporting Individuals. Empowering Lives.*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Email | Resend (optional — contact-form notifications) |
| Hosting | Vercel |
| Fonts | Inter, Playfair Display, Dancing Script |

There is **no database** — all site content is static (in code). The only
backend is the contact-form handler at `app/api/contact/route.ts`.

---

## Local Development

```bash
git clone <repo-url>
cd Capital-sites
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Environment variables are **optional** — the site (including the contact form)
runs fully without any. To enable contact-form emails, copy the example file and
fill in your Resend key:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | No (enables email) | Resend API key for contact-form emails |
| `CONTACT_INQUIRY_EMAIL` | No | Where inquiries are delivered (defaults to the address in `lib/brand.ts`) |
| `CONTACT_FROM_EMAIL` | No | Verified Resend "from" address (defaults to Resend's onboarding sender) |

Without `RESEND_API_KEY`, the form still succeeds: the inquiry is logged
server-side and no email is sent.

---

## Editing Content

Everything client-specific lives in two files:

- **`lib/brand.ts`** — name, tagline, phone, email, address, map URL. Read by
  every page, the header, footer, and page metadata.
- **`lib/content.tsx`** — the `VALUES`, `SERVICES`, and `METHODOLOGY` arrays that
  the Home, About, and Services pages render from.

Design tokens (colors, fonts) live in `tailwind.config.ts`, and shared utility
classes (`.btn-*`, `.card`, `.eyebrow`, `.rule-gold`, `.field-input`) in
`app/globals.css`.

---

## Resend Setup (optional)

1. Create an account at [resend.com](https://resend.com)
2. Verify your sending domain
3. Create an API key → set it as `RESEND_API_KEY`
4. Set `CONTACT_FROM_EMAIL` to an address on your verified domain
5. Set `CONTACT_INQUIRY_EMAIL` to where you want inquiries delivered

---

## Deploying to Vercel

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. (Optional) Add the Resend env vars in **Project Settings → Environment Variables**
4. Deploy — Vercel auto-detects Next.js

---

## Project Structure

```
app/
  layout.tsx           Root layout (Header + Footer + JSON-LD)
  globals.css          Tailwind + global component styles
  page.tsx             Homepage
  about/page.tsx       Mission, values, who we serve
  services/page.tsx    Services detail + methodology
  contact/
    page.tsx           Contact info + form
    ContactForm.tsx    Client form component
  api/contact/route.ts POST handler — emails inquiries via Resend (optional)
  sitemap.ts / robots.ts
components/
  Header.tsx           Sticky header, logo + nav + tap-to-call
  Footer.tsx           Navy footer with contact + tagline
  Logo.tsx             Inline SVG house-with-heart mark
  PageHeader.tsx       Navy hero band for interior pages
  icons.tsx            Shared inline SVG icons
  JsonLd.tsx           JSON-LD <script> injector
lib/
  brand.ts             Brand + contact constants
  content.tsx          Shared VALUES / SERVICES / METHODOLOGY content
tailwind.config.ts     Color tokens + font families
```

---

## Re-skinning for Another Client (Multi-tenant)

1. Update `lib/brand.ts` with the new client's name and contact details
2. Update `lib/content.tsx` with their values / services / approach
3. Adjust color tokens and fonts in `tailwind.config.ts` + `app/layout.tsx`
4. Swap the `<Logo>` mark and page copy as needed
