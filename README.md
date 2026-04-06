# A Taste of Italy — Website

Next.js 14 (App Router) website for A Taste of Italy, an authentic Italian deli in Clive, Iowa. Built as the first site in a multi-tenant local business web agency setup — all client data lives in a single Supabase project, isolated by `business_id`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Email | Resend |
| Hosting | Vercel |

---

## Local Development

### 1. Clone & install

```bash
git clone <repo-url>
cd Capital-sites
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_BUSINESS_ID=your-business-uuid
RESEND_API_KEY=re_your_api_key
CATERING_INQUIRY_EMAIL=owner@example.com
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Supabase Setup

### Create the schema

In your Supabase project, open **SQL Editor** and run:

```sql
-- paste the contents of supabase/schema.sql
```

### Seed the data

Then run:

```sql
-- paste the contents of supabase/seed.sql
```

This inserts the A Taste of Italy business record and all menu items.

### Get your `BUSINESS_ID`

After seeding, run:

```sql
select id from businesses where slug = 'taste-of-italy';
```

Copy that UUID and set it as `NEXT_PUBLIC_BUSINESS_ID` in your `.env.local` and in your Vercel project settings.

### Row Level Security

The schema enables RLS with policies that allow:
- **Public read** on `businesses` and `menu_items`
- **Public insert** on `catering_inquiries`

No authentication is required for the front-end.

---

## Resend Setup

1. Create an account at [resend.com](https://resend.com)
2. Verify your sending domain
3. Create an API key and set it as `RESEND_API_KEY`
4. Update the `from` field in `app/api/catering/route.ts` to use your verified domain:
   ```ts
   from: 'A Taste of Italy <noreply@yourdomain.com>',
   ```
5. Set `CATERING_INQUIRY_EMAIL` to where you want inquiries delivered

---

## Deploying to Vercel

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Add all environment variables in **Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_BUSINESS_ID`
   - `RESEND_API_KEY`
   - `CATERING_INQUIRY_EMAIL`
4. Deploy — Vercel auto-detects Next.js

---

## Updating Menu Items

Menu items are managed entirely through the **Supabase Table Editor** — no code changes needed.

1. Go to your Supabase project → **Table Editor** → `menu_items`
2. To **add** an item: click **Insert row**, fill in the fields
3. To **edit** an item: click the row, update values, save
4. To **hide** an item (without deleting): set `available = false`
5. To **feature** an item on the homepage: set `featured = true`
6. **Sort order**: adjust `sort_order` (lower = higher on the page)

### Key fields

| Field | Description |
|---|---|
| `business_id` | Must match your `NEXT_PUBLIC_BUSINESS_ID` — copy from the businesses table |
| `category` | Groups items on the menu page. Current categories: `Hot Sandwiches`, `Cold Sandwiches`, `Deli Trays`, `Sides`, `Grocery` |
| `item_name` | Displayed as the item heading |
| `description` | Short description shown under the name |
| `price` | Free-form text — e.g. `9.95`, `$3.95/person`, `Market price`, `Call for pricing` |
| `featured` | `true` = shown in the "House Favorites" section on the homepage |
| `available` | `false` = hidden from the menu (seasonal items, out of stock, etc.) |
| `sort_order` | Controls display order within each category |

---

## Adding a New Client (Multi-tenant)

This codebase supports multiple clients via the `NEXT_PUBLIC_BUSINESS_ID` env var.

1. Insert a new row in the `businesses` table with the new client's info
2. Seed their `menu_items` rows with the new `business_id`
3. Fork or redeploy the project with `NEXT_PUBLIC_BUSINESS_ID` set to the new business UUID
4. Update design tokens in `tailwind.config.ts` and copy as needed

All data is isolated — each deployment only sees its own business's data.

---

## Project Structure

```
app/
  layout.tsx          Root layout (Header + Footer)
  globals.css         Tailwind + global styles
  page.tsx            Homepage
  menu/
    page.tsx          Server component — fetches menu items
    MenuClient.tsx    Client component — tabbed category nav
  catering/
    page.tsx          Catering info + form layout
    CateringForm.tsx  Client form component
  about/
    page.tsx          About page
  contact/
    page.tsx          Contact + embedded map
  api/
    catering/
      route.ts        POST handler — saves inquiry + sends email
components/
  Header.tsx          Sticky header with mobile nav + tap-to-call
  Footer.tsx          Footer with address, hours, links
lib/
  supabase.ts         Supabase client + data fetcher functions
supabase/
  schema.sql          Database schema (run first)
  seed.sql            Seed data for A Taste of Italy
```

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon/public key |
| `NEXT_PUBLIC_BUSINESS_ID` | Yes | UUID of the business row in Supabase |
| `RESEND_API_KEY` | Yes (for email) | Resend API key for catering inquiry emails |
| `CATERING_INQUIRY_EMAIL` | Yes (for email) | Email address to receive catering inquiries |
