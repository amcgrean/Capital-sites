-- ============================================================
-- A Taste of Italy — Full Setup (schema + seed)
-- Run this once in Supabase SQL Editor
-- ============================================================

-- SCHEMA -------------------------------------------------------

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

alter table businesses enable row level security;
alter table menu_items enable row level security;
alter table catering_inquiries enable row level security;

create policy "Public can read businesses"
  on businesses for select using (true);

create policy "Public can read menu_items"
  on menu_items for select using (true);

create policy "Public can insert catering inquiries"
  on catering_inquiries for insert with check (true);

create index if not exists menu_items_business_id_idx on menu_items(business_id);
create index if not exists menu_items_category_idx on menu_items(business_id, category);
create index if not exists catering_inquiries_business_id_idx on catering_inquiries(business_id);

-- SEED ---------------------------------------------------------

insert into businesses (name, slug, phone, address, city_state_zip, hours, facebook_url)
values (
  'A Taste of Italy',
  'taste-of-italy',
  '515-221-0743',
  '8421 University Blvd Suite D',
  'Clive, IA 50325',
  '{
    "Monday":    "10:30 AM – 6:00 PM",
    "Tuesday":   "10:30 AM – 6:00 PM",
    "Wednesday": "10:30 AM – 6:00 PM",
    "Thursday":  "10:30 AM – 6:00 PM",
    "Friday":    "10:30 AM – 6:00 PM",
    "Saturday":  "10:30 AM – 5:00 PM",
    "Sunday":    "Closed"
  }',
  'https://www.facebook.com/atasteofitalyclive'
);

do $$
declare
  biz_id uuid;
begin
  select id into biz_id from businesses where slug = 'taste-of-italy';

  -- HOT SANDWICHES
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Hot Sandwiches', 'Chicago Beef', 'Slow-roasted Italian beef, thinly sliced and piled high on a sturdy roll with au jus for dipping. A true Chicago classic.', '9.95', true, 1),
  (biz_id, 'Hot Sandwiches', 'Meatball Sub', 'House-made meatballs simmered in marinara, loaded onto a toasted hoagie roll with provolone.', '9.95', true, 2),
  (biz_id, 'Hot Sandwiches', 'Graziano''s Sausage', 'Authentic Iowa-Italian sausage from the legendary Graziano Brothers, grilled and served on a hearty roll.', '9.95', true, 3),
  (biz_id, 'Hot Sandwiches', 'Combo Beef & Sausage', 'Can''t decide? Get both — Chicago beef and Graziano''s sausage on one roll with au jus.', '11.95', false, 4),
  (biz_id, 'Hot Sandwiches', 'Sausage & Peppers', 'Graziano''s sausage grilled with sweet bell peppers and onions on a toasted hoagie roll.', '9.95', false, 5),
  (biz_id, 'Hot Sandwiches', 'Meatball & Sausage Combo', 'The best of both worlds — meatballs and sausage together on a toasted roll with provolone.', '11.95', false, 6);

  -- COLD SANDWICHES
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Cold Sandwiches', 'Italian Hoagie', 'Genoa salami, capicola, ham, and provolone layered with lettuce, tomato, onion, pepperoncini, and Italian dressing on a fresh-baked roll.', '9.95', true, 1),
  (biz_id, 'Cold Sandwiches', 'Turkey & Provolone', 'Sliced turkey breast with provolone, lettuce, tomato, and a touch of Italian dressing.', '8.95', false, 2),
  (biz_id, 'Cold Sandwiches', 'Ham & Swiss', 'Black Forest ham stacked with Swiss cheese, lettuce, tomato, and your choice of condiments.', '8.95', false, 3),
  (biz_id, 'Cold Sandwiches', 'Roast Beef & Cheddar', 'Thinly sliced roast beef with sharp cheddar, lettuce, tomato, and horseradish mayo.', '9.95', false, 4),
  (biz_id, 'Cold Sandwiches', 'Veggie Italian', 'Provolone, fresh mozzarella, roasted red peppers, artichoke hearts, and pesto on a toasted roll.', '8.95', false, 5);

  -- DELI TRAYS
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Deli Trays', 'Italian Cold Cut Tray', 'A generous spread of Genoa salami, capicola, ham, and provolone with olives and pepperoncini. Serves 8–12.', '$3.95/person', false, 1),
  (biz_id, 'Deli Trays', 'Meatball Tray', 'House-made meatballs in marinara, ready to serve as an appetizer or build-your-own slider bar. Serves 10–15.', 'Call for pricing', false, 2),
  (biz_id, 'Deli Trays', 'Antipasto Tray', 'Artisan cheeses, cured meats, marinated olives, roasted peppers, and artichoke hearts beautifully arranged. Serves 8–12.', '$4.50/person', false, 3),
  (biz_id, 'Deli Trays', '6-Foot Sub', 'Your choice of Italian meats and cheeses on a 6-foot roll — perfect for large gatherings and office parties.', 'from $15/ft', false, 4),
  (biz_id, 'Deli Trays', 'Box Lunches', 'Individual boxed lunches with a half sandwich, side, and cookie. Great for corporate events. 48-hour notice required.', '$10.95/person', false, 5);

  -- SIDES
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Sides', 'Italian Pasta Salad', 'Rotini tossed with salami, olives, bell peppers, and zesty Italian vinaigrette.', '3.50', false, 1),
  (biz_id, 'Sides', 'Chips', 'Classic or kettle chips.', '1.00', false, 2),
  (biz_id, 'Sides', 'Pickle', 'Whole dill pickle spear.', '0.75', false, 3),
  (biz_id, 'Sides', 'Cookie', 'Fresh-baked cookie — chocolate chip or snickerdoodle.', '1.50', false, 4),
  (biz_id, 'Sides', 'Fountain Drink', '32 oz. fountain drink.', '2.00', false, 5);

  -- GROCERY
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Grocery', 'Graziano''s Italian Sausage', 'Take home the legendary Des Moines–made Italian sausage from Graziano Brothers. Available by the link or in bulk.', 'Market price', false, 1),
  (biz_id, 'Grocery', 'House Marinara (Jar)', 'Todd''s house-made marinara sauce — rich, slow-simmered tomatoes with garlic and Italian herbs. 24 oz. jar.', '7.95', false, 2),
  (biz_id, 'Grocery', 'Imported Italian Pasta', 'Premium imported dried pasta — penne, rigatoni, and spaghetti in stock.', '3.50', false, 3),
  (biz_id, 'Grocery', 'Pepperoncini (Jar)', 'Mild pickled pepperoncini — perfect for sandwiches and charcuterie boards. 16 oz. jar.', '4.95', false, 4),
  (biz_id, 'Grocery', 'Imported Olive Oil', 'Cold-pressed extra virgin olive oil imported from Italy. 500 ml bottle.', '12.95', false, 5),
  (biz_id, 'Grocery', 'Provolone (By the Pound)', 'Sliced or whole — authentic sharp provolone from the deli case.', 'Market price', false, 6);

end $$;

-- VERIFY: run this to confirm everything looks right
-- select id, name, slug from businesses;
-- select count(*) from menu_items;
