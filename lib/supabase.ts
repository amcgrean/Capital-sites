import { createClient as _createClient } from '@supabase/supabase-js'

// Lazy singleton — only instantiated at request time, not at module load,
// so a missing env var during `next build` won't crash static page collection.
let _supabase: ReturnType<typeof _createClient> | null = null

function getSupabase() {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
    if (!url || !key) {
      throw new Error(
        'Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY must be set.'
      )
    }
    _supabase = _createClient(url, key)
  }
  return _supabase
}

export const BUSINESS_ID = process.env.NEXT_PUBLIC_BUSINESS_ID ?? 'ad17c740-7d6e-4884-b948-cab4a9cc8ffd'

// Types

export interface Business {
  id: string
  name: string
  slug: string
  phone: string
  address: string
  city_state_zip: string
  hours: Record<string, string>
  facebook_url: string
  created_at: string
}

export interface MenuItem {
  id: string
  business_id: string
  category: string
  item_name: string
  description: string | null
  price: string | null
  featured: boolean
  available: boolean
  sort_order: number
  created_at: string
}

export interface CateringInquiry {
  business_id: string
  name: string
  email: string
  phone: string
  event_date: string
  headcount: number
  details: string
}

// Data fetchers

export async function getBusiness(): Promise<Business | null> {
  const { data, error } = await getSupabase()
    .from('businesses')
    .select('*')
    .eq('id', BUSINESS_ID)
    .single()

  if (error) {
    console.error('Error fetching business:', error)
    return null
  }
  return data
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const { data, error } = await getSupabase()
    .from('menu_items')
    .select('*')
    .eq('business_id', BUSINESS_ID)
    .eq('available', true)
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Error fetching menu items:', error)
    return []
  }
  return data ?? []
}

export async function getFeaturedMenuItems(): Promise<MenuItem[]> {
  const { data, error } = await getSupabase()
    .from('menu_items')
    .select('*')
    .eq('business_id', BUSINESS_ID)
    .eq('available', true)
    .eq('featured', true)
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Error fetching featured menu items:', error)
    return []
  }
  return data ?? []
}
