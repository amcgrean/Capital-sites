import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export const BUSINESS_ID = process.env.NEXT_PUBLIC_BUSINESS_ID!

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
  const { data, error } = await supabase
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
  const { data, error } = await supabase
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
  const { data, error } = await supabase
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
