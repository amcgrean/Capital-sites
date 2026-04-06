import type { Metadata } from 'next'
import { getMenuItems } from '@/lib/supabase'
import MenuClient from './MenuClient'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Browse the full menu at A Taste of Italy — classic and specialty deli sandwiches, soup, salads, deli trays, and Italian grocery items in Clive, Iowa.',
}

export const dynamic = 'force-dynamic'

export default async function MenuPage() {
  const items = await getMenuItems()

  // Group by category preserving a logical order
  const CATEGORY_ORDER = [
    'Classic Sandwiches',
    'Premium Sandwiches',
    'House Special',
    'Specialty Sandwiches',
    'Soup & Salads',
    'Hot Sandwiches',
    'Cold Sandwiches',
    'Deli Trays',
    'Sides',
    'Additional Goodies',
    'Grocery',
  ]

  const grouped: Record<string, typeof items> = {}
  for (const item of items) {
    if (!grouped[item.category]) {
      grouped[item.category] = []
    }
    grouped[item.category].push(item)
  }

  // Sort categories by preferred order, then alphabetically
  const categories = [
    ...CATEGORY_ORDER.filter((c) => grouped[c]),
    ...Object.keys(grouped).filter((c) => !CATEGORY_ORDER.includes(c)).sort(),
  ]

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-italian-red text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-red-300 text-xs font-semibold uppercase tracking-widest mb-2">
            Fresh Daily
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Our Menu</h1>
          <p className="font-sans text-red-100 max-w-lg leading-relaxed">
            Everything made with the care and quality that&rsquo;s defined A Taste
            of Italy since 1996.
          </p>
        </div>
      </div>

      {/* Menu content — client component handles tab nav */}
      <MenuClient grouped={grouped} categories={categories} />
    </div>
  )
}
