-- ============================================================
-- A Taste of Italy — Multi-tenant Schema
-- All client data lives in one Supabase project, isolated by
-- business_id. To add a new client, insert a new businesses row.
-- ============================================================

-- businesses table
create table if not exists businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  phone text,
  address text,
  city_state_zip text,
  hours jsonb,
  facebook_url text,
  created_at timestamptz default now()
);

-- menu_items table
create table if not exists menu_items (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  category text not null,
  item_name text not null,
  description text,
  price text,
  featured boolean default false,
  available boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- catering_inquiries table
create table if not exists catering_inquiries (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  name text,
  email text,
  phone text,
  event_date date,
  headcount int,
  details text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table businesses enable row level security;
alter table menu_items enable row level security;
alter table catering_inquiries enable row level security;

-- Public read access for businesses and menu_items
create policy "Public can read businesses"
  on businesses for select using (true);

create policy "Public can read menu_items"
  on menu_items for select using (true);

-- Public can insert catering inquiries
create policy "Public can insert catering inquiries"
  on catering_inquiries for insert with check (true);

-- Indexes for performance
create index if not exists menu_items_business_id_idx on menu_items(business_id);
create index if not exists menu_items_category_idx on menu_items(business_id, category);
create index if not exists catering_inquiries_business_id_idx on catering_inquiries(business_id);
