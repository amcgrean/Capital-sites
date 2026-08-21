# Capital Sites — Cecilia's Home

Agent context for Claude Code. Read this before touching anything.

---

## What this project is

A Next.js 14 (App Router) marketing website for **Cecilia's Home**, a loving and
supportive group home in **West Des Moines, Iowa**. It provides a safe,
structured environment that promotes independence, dignity, and respect, with
24/7 person-centered care.

Built on the **Capital Sites** multi-tenant framework — the same codebase can be
re-skinned to serve other local business/nonprofit clients. Client-specific
content and contact details live in `lib/brand.ts` and `lib/content.tsx`.

**Live site:** `capital-sites.vercel.app`
**Branch for active work:** `claude/nonprofit-site-mockup-v03561`

### Brand facts
- **Name:** Cecilia's Home
- **Tagline:** *A home. A family. A future.*
- **Motto:** *Where quality care has no boundary*
- **Promise:** *Supporting Individuals. Empowering Lives.*
- **Phone:** 816-217-2219
- **Email:** ceciliashomellc@gmail.com
- **Address:** 760 46th St., West Des Moines, IA 50265

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router, SSR) |
| Styling | Tailwind CSS 3.3 + custom tokens |
| Email | Resend (contact-form notifications, optional) |
| Hosting | Vercel |
| Fonts | Inter (sans), Playfair Display (serif), Dancing Script (script wordmark) |

There is **no database** — all content is static (in code). The only backend is
`app/api/contact/route.ts`, which emails inquiries via Resend when configured.

---

## Design system — warm, trustworthy care brand

Clean, airy, and modern with rounded/pill shapes — navy + amber gold over soft
blue-white backgrounds, echoing the printed Cecilia's Home brand.

### Color tokens (`tailwind.config.ts`)
| Token | Hex | Usage |
|---|---|---|
| `navy` | `#1B2E63` | Primary brand — headers, buttons, dark sections |
| `navy-dark` | `#122048` | Button hover |
| `navy-deep` | `#0D1836` | Footer / darkest sections |
| `sky` / `sky-light` | `#2E6FB0` / `#4A8AC9` | Light-blue accent |
| `gold` / `gold-dark` | `#E58A2E` / `#C9721C` | Amber accent — tagline, dividers, CTAs |
| `sage` / `sage-light` | `#3E7C3F` / `#5A9E5B` | Calm green accent |
| `cloud` / `cloud-dark` | `#F4F7FB` / `#E7EEF6` | Body + card backgrounds |
| `ink` | `#1F2A44` | Body text |

### Font classes
- `font-serif` → Playfair Display — headings (h1–h6 default to serif)
- `font-sans` → Inter — body copy, labels, nav
- `font-script` → Dancing Script — the "Cecilia's Home" wordmark (`.wordmark`)

### Key rules
- Rounded shapes: pill buttons (`rounded-full`), `rounded-2xl` cards (`.card`)
- `.eyebrow` = gold uppercase tracked label above section headings
- `.rule-gold` = short amber divider line (often paired with an inline heart)
- Interior pages use `<PageHeader>` (navy hero band); body sections alternate
  `bg-cloud` / `bg-white`, with `bg-navy` for emphasis bands

---

## File map

```
app/
  layout.tsx          — Root layout; loads fonts + Organization/WebSite JSON-LD
  globals.css         — Tailwind directives + .btn-* .card .eyebrow .rule-gold .field-input
  page.tsx            — Homepage (hero, values, mission, we-provide, methodology, CTA)
  about/page.tsx      — Mission, values, who we serve
  services/page.tsx   — Services detail + methodology
  contact/
    page.tsx          — Contact info cards + form
    ContactForm.tsx   — Client form component → POST /api/contact
  api/contact/route.ts— POST handler → Resend email (optional; degrades gracefully)
  sitemap.ts / robots.ts

components/
  Header.tsx          — Sticky white header, logo + nav + phone CTA
  Footer.tsx          — Navy footer with contact + tagline
  Logo.tsx            — Inline SVG house-with-heart brand mark
  PageHeader.tsx      — Navy hero band for interior pages
  icons.tsx           — Shared inline SVG icons (+ IconComponent type)
  JsonLd.tsx          — JSON-LD <script> injector

lib/
  brand.ts            — Brand + contact constants (single source of truth)
  content.tsx         — VALUES, SERVICES, METHODOLOGY shared content

tailwind.config.ts    — Color tokens + font families
```

---

## Common tasks

### Change contact info / brand copy
Edit `lib/brand.ts`. Every page, the header, footer, and metadata read from it.

### Edit values / services / methodology
Edit `lib/content.tsx` (`VALUES`, `SERVICES`, `METHODOLOGY`). Home, About, and
Services all render from these arrays.

### Contact form emails
Set `RESEND_API_KEY` (and optionally `CONTACT_INQUIRY_EMAIL`,
`CONTACT_FROM_EMAIL`) in Vercel env vars. Without them the form still succeeds —
the inquiry is logged server-side and no email is sent.

### Add a new page
Use `<PageHeader>` for the top band, then alternate `bg-cloud` / `bg-white`
sections. Reuse tokens and `.card` / `.btn-*` classes for consistency.

---

## Notes / gotchas

- Tailwind purges unseen class strings — keep dynamic color classes written out
  in full (see `lib/content.tsx`, where icon tints are literal strings).
- The `<Logo>` mark takes `roof` / `figures` color props so it works on both
  light and navy backgrounds.
- Legacy `supabase/*.sql` files from the previous tenant may remain in history;
  nothing in the app imports Supabase anymore.
