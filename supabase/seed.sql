-- ============================================================
-- Seed: A Taste of Italy
-- Run this AFTER schema.sql
-- ============================================================

-- Insert business
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

-- Capture business id for FK references
do $$
declare
  biz_id uuid;
begin
  select id into biz_id from businesses where slug = 'taste-of-italy';

  -- ============================================================
  -- HOT SANDWICHES
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Hot Sandwiches', 'Chicago Beef', 'Slow-roasted Italian beef, thinly sliced and piled high on a sturdy roll with au jus for dipping. A true Chicago classic.', '9.95', true, 1),
  (biz_id, 'Hot Sandwiches', 'Meatball Sub', 'House-made meatballs simmered in marinara, loaded onto a toasted hoagie roll with provolone.', '9.95', true, 2),
  (biz_id, 'Hot Sandwiches', 'Graziano''s Sausage', 'Authentic Iowa-Italian sausage from the legendary Graziano Brothers, grilled and served on a hearty roll.', '9.95', true, 3),
  (biz_id, 'Hot Sandwiches', 'Combo Beef & Sausage', 'Can''t decide? Get both — Chicago beef and Graziano''s sausage on one roll with au jus.', '11.95', false, 4),
  (biz_id, 'Hot Sandwiches', 'Sausage & Peppers', 'Graziano''s sausage grilled with sweet bell peppers and onions on a toasted hoagie roll.', '9.95', false, 5),
  (biz_id, 'Hot Sandwiches', 'Meatball & Sausage Combo', 'The best of both worlds — meatballs and sausage together on a toasted roll with provolone.', '11.95', false, 6);

  -- ============================================================
  -- COLD SANDWICHES
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Cold Sandwiches', 'Italian Hoagie', 'Genoa salami, capicola, ham, and provolone layered with lettuce, tomato, onion, pepperoncini, and Italian dressing on a fresh-baked roll.', '9.95', true, 1),
  (biz_id, 'Cold Sandwiches', 'Turkey & Provolone', 'Sliced turkey breast with provolone, lettuce, tomato, and a touch of Italian dressing.', '8.95', false, 2),
  (biz_id, 'Cold Sandwiches', 'Ham & Swiss', 'Black Forest ham stacked with Swiss cheese, lettuce, tomato, and your choice of condiments.', '8.95', false, 3),
  (biz_id, 'Cold Sandwiches', 'Roast Beef & Cheddar', 'Thinly sliced roast beef with sharp cheddar, lettuce, tomato, and horseradish mayo.', '9.95', false, 4),
  (biz_id, 'Cold Sandwiches', 'Veggie Italian', 'Provolone, fresh mozzarella, roasted red peppers, artichoke hearts, and pesto on a toasted roll.', '8.95', false, 5);

  -- ============================================================
  -- DELI TRAYS
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Deli Trays', 'Italian Cold Cut Tray', 'A generous spread of Genoa salami, capicola, ham, and provolone with olives and pepperoncini. Serves 8–12.', '$3.95/person', false, 1),
  (biz_id, 'Deli Trays', 'Meatball Tray', 'House-made meatballs in marinara, ready to serve as an appetizer or build-your-own slider bar. Serves 10–15.', 'Call for pricing', false, 2),
  (biz_id, 'Deli Trays', 'Antipasto Tray', 'Artisan cheeses, cured meats, marinated olives, roasted peppers, and artichoke hearts beautifully arranged. Serves 8–12.', '$4.50/person', false, 3),
  (biz_id, 'Deli Trays', '6-Foot Sub', 'Your choice of Italian meats and cheeses on a 6-foot roll — perfect for large gatherings and office parties.', 'from $15/ft', false, 4),
  (biz_id, 'Deli Trays', 'Box Lunches', 'Individual boxed lunches with a half sandwich, side, and cookie. Great for corporate events. 48-hour notice required.', '$10.95/person', false, 5);

  -- ============================================================
  -- SIDES
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Sides', 'Italian Pasta Salad', 'Rotini tossed with salami, olives, bell peppers, and zesty Italian vinaigrette.', '3.50', false, 1),
  (biz_id, 'Sides', 'Chips', 'Classic or kettle chips.', '1.00', false, 2),
  (biz_id, 'Sides', 'Pickle', 'Whole dill pickle spear.', '0.75', false, 3),
  (biz_id, 'Sides', 'Cookie', 'Fresh-baked cookie — chocolate chip or snickerdoodle.', '1.50', false, 4),
  (biz_id, 'Sides', 'Fountain Drink', '32 oz. fountain drink.', '2.00', false, 5);

  -- ============================================================
  -- GROCERY
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Grocery', 'Graziano''s Italian Sausage', 'Take home the legendary Des Moines–made Italian sausage from Graziano Brothers. Available by the link or in bulk.', 'Market price', false, 1),
  (biz_id, 'Grocery', 'House Marinara (Jar)', 'Todd''s house-made marinara sauce — rich, slow-simmered tomatoes with garlic and Italian herbs. 24 oz. jar.', '7.95', false, 2),
  (biz_id, 'Grocery', 'Imported Italian Pasta', 'Premium imported dried pasta — penne, rigatoni, and spaghetti in stock.', '3.50', false, 3),
  (biz_id, 'Grocery', 'Pepperoncini (Jar)', 'Mild pickled pepperoncini — perfect for sandwiches and charcuterie boards. 16 oz. jar.', '4.95', false, 4),
  (biz_id, 'Grocery', 'Imported Olive Oil', 'Cold-pressed extra virgin olive oil imported from Italy. 500 ml bottle.', '12.95', false, 5),
  (biz_id, 'Grocery', 'Provolone (By the Pound)', 'Sliced or whole — authentic sharp provolone from the deli case.', 'Market price', false, 6);

  -- ============================================================
  -- CLASSIC SANDWICHES
  -- Served daily with your choice of cheese and sandwich toppings.
  -- Cheese: Provolone, Hot Pepper, Mozzarella, Swiss, American
  -- Toppings: Lettuce, Tomato, Onion, Mayo/Mustard, Italian Dressing
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Classic Sandwiches', 'Honey Roasted Turkey', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 1),
  (biz_id, 'Classic Sandwiches', 'Chicken Salad', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 2),
  (biz_id, 'Classic Sandwiches', 'Tuna Salad', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 3),
  (biz_id, 'Classic Sandwiches', 'Corned Beef', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 4),
  (biz_id, 'Classic Sandwiches', 'Ham', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 5),
  (biz_id, 'Classic Sandwiches', 'Capicola', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 6),
  (biz_id, 'Classic Sandwiches', 'Roast Beef', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 7),
  (biz_id, 'Classic Sandwiches', 'Pastrami', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 8),
  (biz_id, 'Classic Sandwiches', 'Italian Roast Beef', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 9),
  (biz_id, 'Classic Sandwiches', 'Salami', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 10),
  (biz_id, 'Classic Sandwiches', 'Smoked Turkey', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, 11);

  -- ============================================================
  -- PREMIUM SANDWICHES
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Premium Sandwiches', 'Italian Hoagie', 'Classic Italian hoagie with your choice of cheese and toppings.', '9.95', false, 1),
  (biz_id, 'Premium Sandwiches', 'Meatball', 'House meatballs with your choice of cheese and toppings.', '9.95', false, 2),
  (biz_id, 'Premium Sandwiches', 'Graziano Italian Sausage', 'Authentic Graziano Brothers Italian sausage with your choice of cheese and toppings.', '9.95', false, 3);

  -- ============================================================
  -- HOUSE SPECIAL
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'House Special', 'Chicago Style Italian Roast Beef Au Jus', 'Served daily.', '10.50', true, 1);

  -- ============================================================
  -- SPECIALTY SANDWICHES
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Specialty Sandwiches', 'Whatever', 'Chef''s Choice. Price varies.', 'Price Varies', false, 1),
  (biz_id, 'Specialty Sandwiches', 'Spicy Buffalo', 'Buffalo chicken, ranch dressing, pepper cheese, hot peppers, toasted.', '9.50', false, 2),
  (biz_id, 'Specialty Sandwiches', 'Wild Bill', 'Buffalo chicken, marinara, hot pepper cheese, hot peppers, toasted.', '9.50', false, 3),
  (biz_id, 'Specialty Sandwiches', 'The Flood', 'Smoked turkey, Italian dressing, lettuce, tomato, onion, hot peppers, toasted.', '9.50', false, 4),
  (biz_id, 'Specialty Sandwiches', 'The Hakenson', 'Turkey, roast beef, ham, sharp cheddar, mayo, mustard, onion.', '9.50', false, 5),
  (biz_id, 'Specialty Sandwiches', 'Midwesterner', 'Roast beef, cheddar cheese, horseradish.', '9.50', false, 6),
  (biz_id, 'Specialty Sandwiches', 'The Sonberg', 'Honey turkey, olive cheddar, lettuce, tomato, sweet peppers on wheat.', '9.50', false, 7),
  (biz_id, 'Specialty Sandwiches', 'New Englander', 'Seafood salad, hot peppers, hoagie bun.', '9.95', false, 8),
  (biz_id, 'Specialty Sandwiches', 'The Jack A**', 'Mortadella, aged provolone, toasted.', '9.95', false, 9),
  (biz_id, 'Specialty Sandwiches', 'Mock Rueben', 'Corned beef, swiss cheese, pickles, and mustard on marble rye.', '9.50', false, 10),
  (biz_id, 'Specialty Sandwiches', 'The Putz', 'Sausage, capicola, and sweet peppers, toasted.', '10.25', false, 11),
  (biz_id, 'Specialty Sandwiches', 'Gandolfini', 'Italian roast beef, Italian herb turkey, capicola, and provolone.', '9.50', false, 12),
  (biz_id, 'Specialty Sandwiches', 'The Guyer', 'Hot peppers, crushed red peppers, provolone, toasted.', '9.95', false, 13),
  (biz_id, 'Specialty Sandwiches', 'The Bob', 'Capicola smothered in marinara, spiced with ghost pepper powder, topped with pepper cheese and toasted on marble rye.', '9.95', false, 14),
  (biz_id, 'Specialty Sandwiches', 'The Godfather', 'Meatballs, capicola, sweet peppers, provolone, toasted.', '10.25', false, 15),
  (biz_id, 'Specialty Sandwiches', 'The Vogue', 'Chicago beef, mild giardiniera, sweet peppers, provolone, toasted.', '10.50', false, 16),
  (biz_id, 'Specialty Sandwiches', 'Combo', 'Chicago beef with link sausage, toasted.', '11.25', false, 17),
  (biz_id, 'Specialty Sandwiches', 'The P.I.T.A.', 'Sausage, meatball, capicola, Chicago beef, toasted.', '12.50', false, 18),
  (biz_id, 'Specialty Sandwiches', 'Non-Profit', 'Capicola, salami, turkey, roast beef, prosciutto, fontina, toasted.', '11.50', false, 19);

  -- ============================================================
  -- SOUP & SALADS
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Soup & Salads', 'Soup of the Day', 'Seasonal. Cup or bowl available.', 'Cup $4.25 / Bowl $5.25', false, 1),
  (biz_id, 'Soup & Salads', 'Potato Salad', null, 'SM $3.25 / MED $3.75 / LG $4.50', false, 2),
  (biz_id, 'Soup & Salads', 'Pasta Salad', null, 'SM $3.25 / MED $3.75 / LG $4.50', false, 3),
  (biz_id, 'Soup & Salads', 'Seafood Salad', null, 'SM $3.75 / MED $4.25 / LG $5.00', false, 4),
  (biz_id, 'Soup & Salads', 'Chicken Salad', null, 'SM $3.75 / MED $4.25 / LG $5.00', false, 5),
  (biz_id, 'Soup & Salads', 'Tuna Salad', null, 'SM $3.75 / MED $4.25 / LG $5.00', false, 6);

  -- ============================================================
  -- ADDITIONAL GOODIES
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, sort_order) values
  (biz_id, 'Additional Goodies', 'Guantis Cookies', null, '$10.00 per bag', false, 1);

end $$;
