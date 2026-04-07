import { createClient as _createClient } from '@supabase/supabase-js'

// Lazy singleton — only instantiated at request time, not at module load,
// so a missing env var during `next build` won't crash static page collection.
let _supabase: ReturnType<typeof _createClient> | null = null

// Server-side only — intentionally use private (non-NEXT_PUBLIC_) var names so
// that placeholder NEXT_PUBLIC_* values in Vercel's dashboard don't override
// the hardcoded defaults below.  If you configure this project for a new
// Supabase instance, set SUPABASE_URL / SUPABASE_ANON_KEY in Vercel instead.
const SUPABASE_URL = process.env.SUPABASE_URL ?? 'https://vyatosniqboeqzadyqmr.supabase.co'
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
  ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YXRvc25pcWJvZXF6YWR5cW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3Nzk0NTcsImV4cCI6MjA4OTM1NTQ1N30.suASHLVzV_UCsWjXc1qV_E298kLzKu7lb6h4efpgdAQ'

function getSupabase() {
  if (!_supabase) {
    _supabase = _createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  }
  return _supabase
}

export const BUSINESS_ID = process.env.BUSINESS_ID ?? 'ad17c740-7d6e-4884-b948-cab4a9cc8ffd'

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
