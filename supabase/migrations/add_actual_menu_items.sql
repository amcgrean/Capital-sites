-- ============================================================
-- Migration: Add actual menu items from printed menu card
-- Run this in the Supabase Dashboard → SQL Editor
-- ============================================================

do $$
declare
  biz_id uuid;
begin
  select id into biz_id from businesses where slug = 'taste-of-italy';

  -- ============================================================
  -- CLASSIC SANDWICHES ($9.50)
  -- Served daily with your choice of cheese and sandwich toppings.
  -- Cheese: Provolone, Hot Pepper, Mozzarella, Swiss, American
  -- Toppings: Lettuce, Tomato, Onion, Mayo/Mustard, Italian Dressing
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, available, sort_order) values
  (biz_id, 'Classic Sandwiches', 'Honey Roasted Turkey', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 1),
  (biz_id, 'Classic Sandwiches', 'Chicken Salad', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 2),
  (biz_id, 'Classic Sandwiches', 'Tuna Salad', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 3),
  (biz_id, 'Classic Sandwiches', 'Corned Beef', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 4),
  (biz_id, 'Classic Sandwiches', 'Ham', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 5),
  (biz_id, 'Classic Sandwiches', 'Capicola', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 6),
  (biz_id, 'Classic Sandwiches', 'Roast Beef', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 7),
  (biz_id, 'Classic Sandwiches', 'Pastrami', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 8),
  (biz_id, 'Classic Sandwiches', 'Italian Roast Beef', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 9),
  (biz_id, 'Classic Sandwiches', 'Salami', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 10),
  (biz_id, 'Classic Sandwiches', 'Smoked Turkey', 'Served daily with your choice of cheese and sandwich toppings.', '9.50', false, true, 11);

  -- ============================================================
  -- PREMIUM SANDWICHES ($9.95)
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, available, sort_order) values
  (biz_id, 'Premium Sandwiches', 'Italian Hoagie', 'With your choice of cheese and toppings.', '9.95', false, true, 1),
  (biz_id, 'Premium Sandwiches', 'Meatball', 'With your choice of cheese and toppings.', '9.95', false, true, 2),
  (biz_id, 'Premium Sandwiches', 'Graziano Italian Sausage', 'Authentic Graziano Brothers Italian sausage with your choice of cheese and toppings.', '9.95', false, true, 3);

  -- ============================================================
  -- HOUSE SPECIAL ($10.50)
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, available, sort_order) values
  (biz_id, 'House Special', 'Chicago Style Italian Roast Beef Au Jus', 'Served daily.', '10.50', true, true, 1);

  -- ============================================================
  -- SPECIALTY SANDWICHES
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, available, sort_order) values
  (biz_id, 'Specialty Sandwiches', 'Whatever', 'Chef''s Choice.', 'Price Varies', false, true, 1),
  (biz_id, 'Specialty Sandwiches', 'Spicy Buffalo', 'Buffalo chicken, ranch dressing, pepper cheese, hot peppers, toasted.', '9.50', false, true, 2),
  (biz_id, 'Specialty Sandwiches', 'Wild Bill', 'Buffalo chicken, marinara, hot pepper cheese, hot peppers, toasted.', '9.50', false, true, 3),
  (biz_id, 'Specialty Sandwiches', 'The Flood', 'Smoked turkey, Italian dressing, lettuce, tomato, onion, hot peppers, toasted.', '9.50', false, true, 4),
  (biz_id, 'Specialty Sandwiches', 'The Hakenson', 'Turkey, roast beef, ham, sharp cheddar, mayo, mustard, onion.', '9.50', false, true, 5),
  (biz_id, 'Specialty Sandwiches', 'Midwesterner', 'Roast beef, cheddar cheese, horseradish.', '9.50', false, true, 6),
  (biz_id, 'Specialty Sandwiches', 'The Sonberg', 'Honey turkey, olive cheddar, lettuce, tomato, sweet peppers on wheat.', '9.50', false, true, 7),
  (biz_id, 'Specialty Sandwiches', 'New Englander', 'Seafood salad, hot peppers, hoagie bun.', '9.95', false, true, 8),
  (biz_id, 'Specialty Sandwiches', 'The Jack A**', 'Mortadella, aged provolone, toasted.', '9.95', false, true, 9),
  (biz_id, 'Specialty Sandwiches', 'Mock Rueben', 'Corned beef, swiss cheese, pickles, and mustard on marble rye.', '9.50', false, true, 10),
  (biz_id, 'Specialty Sandwiches', 'The Putz', 'Sausage, capicola, and sweet peppers, toasted.', '10.25', false, true, 11),
  (biz_id, 'Specialty Sandwiches', 'Gandolfini', 'Italian roast beef, Italian herb turkey, capicola, and provolone.', '9.50', false, true, 12),
  (biz_id, 'Specialty Sandwiches', 'The Guyer', 'Hot peppers, crushed red peppers, provolone, toasted.', '9.95', false, true, 13),
  (biz_id, 'Specialty Sandwiches', 'The Bob', 'Capicola smothered in marinara, spiced with ghost pepper powder, topped with pepper cheese and toasted on marble rye.', '9.95', false, true, 14),
  (biz_id, 'Specialty Sandwiches', 'The Godfather', 'Meatballs, capicola, sweet peppers, provolone, toasted.', '10.25', false, true, 15),
  (biz_id, 'Specialty Sandwiches', 'The Vogue', 'Chicago beef, mild giardiniera, sweet peppers, provolone, toasted.', '10.50', false, true, 16),
  (biz_id, 'Specialty Sandwiches', 'Combo', 'Chicago beef with link sausage, toasted.', '11.25', false, true, 17),
  (biz_id, 'Specialty Sandwiches', 'The P.I.T.A.', 'Sausage, meatball, capicola, Chicago beef, toasted.', '12.50', false, true, 18),
  (biz_id, 'Specialty Sandwiches', 'Non-Profit', 'Capicola, salami, turkey, roast beef, prosciutto, fontina, toasted.', '11.50', false, true, 19);

  -- ============================================================
  -- SOUP & SALADS
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, available, sort_order) values
  (biz_id, 'Soup & Salads', 'Soup of the Day', 'Seasonal.', 'Cup $4.25 / Bowl $5.25', false, true, 1),
  (biz_id, 'Soup & Salads', 'Potato Salad', null, 'SM $3.25 / MED $3.75 / LG $4.50', false, true, 2),
  (biz_id, 'Soup & Salads', 'Pasta Salad', null, 'SM $3.25 / MED $3.75 / LG $4.50', false, true, 3),
  (biz_id, 'Soup & Salads', 'Seafood Salad', null, 'SM $3.75 / MED $4.25 / LG $5.00', false, true, 4),
  (biz_id, 'Soup & Salads', 'Chicken Salad', null, 'SM $3.75 / MED $4.25 / LG $5.00', false, true, 5),
  (biz_id, 'Soup & Salads', 'Tuna Salad', null, 'SM $3.75 / MED $4.25 / LG $5.00', false, true, 6);

  -- ============================================================
  -- ADDITIONAL GOODIES
  -- ============================================================
  insert into menu_items (business_id, category, item_name, description, price, featured, available, sort_order) values
  (biz_id, 'Additional Goodies', 'Guantis Cookies', null, '$10.00 per bag', false, true, 1);

end $$;
