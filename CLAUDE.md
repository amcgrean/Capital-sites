# Capital Sites — A Taste of Italy

Agent context for Claude Code. Read this before touching anything.

---

## What this project is

A Next.js 14 (App Router) website for **A Taste of Italy**, a family-owned Italian deli and small Italian market in Clive, Iowa. Owner: Todd Ferin. Open since June 1, 1996.

Multi-tenant framework — designed so the same codebase can serve other local business clients. Tenant isolation is via `business_id` in Supabase.

**Live site:** `capital-sites.vercel.app`
**Branch for active work:** `claude/redesign-italian-deli-theme-XExbx`

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router, SSR) |
| Styling | Tailwind CSS 3.3 + custom tokens |
| Database | Supabase (PostgreSQL + RLS) |
| Email | Resend (catering inquiry notifications) |
| Hosting | Vercel |
| Fonts | Inter (sans), Playfair Display (serif), Cormorant Garamond (display) |

---

## Design system — vintage Italian deli theme

The visual language is **aged parchment paper, deep wine red, antique gold, espresso dark wood** — like a 1950s Italian neighborhood deli sign. Not modern, not slick.

### Color tokens (`tailwind.config.ts`)
| Token | Hex | Usage |
|---|---|---|
| `italian-red` | `#6B1212` | Deep wine red — buttons, page headers, CTAs |
| `italian-red-dark` | `#4A0C0C` | Hover states |
| `cream` / `parchment` | `#F5EBD0` | Body background (warm aged paper) |
| `cream-dark` / `parchment-dark` | `#EDD8B0` | Card/section backgrounds |
| `olive` | `#1C3D24` | Deep Italian green — "Deli Pillars" section |
| `gold` | `#B8860B` | Antique gold — ornaments, borders, prices, dividers |
| `espresso` | `#1A0804` | Very dark — header, footer, dark sections |
| `charcoal` | `#1C1C1C` | Body text |

### Font classes
- `font-display` → Cormorant Garamond italic — hero titles, page h1s, pull quotes
- `font-serif` → Playfair Display — section headings, card titles
- `font-sans` → Inter — body copy, labels, prices, nav

### Key rules
- **No `rounded-sm` anywhere** — sharp edges only (vintage print aesthetic)
- Section dividers are tapered gold gradient lines (`.section-divider`)
- Page hero headers use `font-display` italic h1, gold subtitle, parchment body text
- `.scrollbar-hide` is defined in `globals.css` (plugin not installed)

---

## Supabase configuration

**IMPORTANT:** `lib/supabase.ts` and `app/api/catering/route.ts` are server-only. They use **private env var names** (no `NEXT_PUBLIC_` prefix) so Vercel dashboard placeholder values can't override the fallbacks.

```
SUPABASE_URL       → falls back to https://vyatosniqboeqzadyqmr.supabase.co
SUPABASE_ANON_KEY  → falls back to hardcoded JWT in lib/supabase.ts
BUSINESS_ID        → falls back to ad17c740-7d6e-4884-b948-cab4a9cc8ffd
```

The `utils/supabase/` helpers (middleware, client, server) still use `NEXT_PUBLIC_*` names but have the same fallback values for the session-refresh middleware.

**Do not change `NEXT_PUBLIC_SUPABASE_URL` in Vercel** — it gets set to placeholder values by Vercel templates and breaks the menu. The private `SUPABASE_URL` var is what matters for data fetching.

### Database tables
- `businesses` — one row per client; hours stored as JSONB
- `menu_items` — `featured` bool surfaces items on homepage; `available` bool hides seasonal/OOS items
- `catering_inquiries` — form submissions, email sent via Resend on insert

### Seeded data
52 menu items under business ID `ad17c740-7d6e-4884-b948-cab4a9cc8ffd`. Categories:
Classic Sandwiches, Premium Sandwiches, House Special, Specialty Sandwiches, Soup & Salads, Deli Trays, Additional Goodies, Grocery.

---

## File map

```
app/
  layout.tsx          — Root layout; loads Inter + Playfair + Cormorant fonts
  globals.css         — Tailwind directives + .btn-* .section-* .badge-* .scrollbar-hide
  page.tsx            — Homepage (hero, hours, pillars, favorites, categories, testimonials)
  menu/
    page.tsx          — Server component; fetches items, groups by category
    MenuClient.tsx    — Client component; sticky tab nav + item cards
  about/page.tsx
  catering/
    page.tsx
    CateringForm.tsx  — Client form component
  contact/page.tsx
  api/catering/route.ts — POST handler → Supabase insert + Resend email

components/
  Header.tsx          — Sticky espresso header with Italian flag strip + gold phone CTA
  Footer.tsx          — Espresso footer with "Grazie per la vostra visita."

lib/
  supabase.ts         — Lazy singleton client; getBusiness / getMenuItems / getFeaturedMenuItems

utils/supabase/
  client.ts / server.ts / middleware.ts — SSR helpers (session refresh; not used for data fetching)

middleware.ts         — Runs on all routes; refreshes Supabase auth session (no-op for this site)

supabase/
  schema.sql          — Table definitions + RLS policies
  seed.sql            — Initial business + menu item data
  migrations/add_actual_menu_items.sql — Actual menu from printed card (what's in production)

tailwind.config.ts    — Color tokens + font families
```

---

## Common tasks

### Add / edit menu items
Go to Supabase dashboard → Table Editor → `menu_items`. Set `available=false` to hide an item. Set `featured=true` to surface it in the homepage "House Favorites" section.

### Change business hours
Supabase → `businesses` table → edit the `hours` JSONB column. Keys are full day names (`"Monday"`, `"Tuesday"`, etc.). Value `"Closed"` hides the row.

### Add a new page
Follow the existing pattern: wine-red page header section with `font-display` italic h1 and gold subtitle label. Use `bg-parchment` body, `bg-parchment-dark` for card backgrounds.

### Catering form emails
Set `RESEND_API_KEY` and `CATERING_INQUIRY_EMAIL` in Vercel env vars. Without them the inquiry is still saved to Supabase but no email is sent.

---

## Known history / gotchas

- `NEXT_PUBLIC_SUPABASE_URL` was set to a placeholder in Vercel → caused 7s timeouts and empty menu. Fixed by switching `lib/supabase.ts` to private env var names.
- `utils/supabase/middleware.ts` had no fallbacks → crashed middleware on every request. Fixed by adding same `??` fallback pattern as `lib/supabase.ts`.
- `app/api/catering/route.ts` had a top-level `createClient()` call → crashed `next build` page data collection. Fixed by wrapping in a lazy `getSupabase()` function.
- `scrollbar-hide` Tailwind class requires the `tailwind-scrollbar-hide` plugin which is not installed. The utility is defined directly in `globals.css` instead.
