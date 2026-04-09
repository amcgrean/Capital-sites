import type { Metadata } from 'next'
import { getMenuItems } from '@/lib/supabase'
import MenuClient from './MenuClient'
import JsonLd from '@/components/JsonLd'

const BASE_URL = 'https://capital-sites.vercel.app'

export const metadata: Metadata = {
  title: 'Full Menu — Sandwiches, Deli Trays & Italian Groceries',
  description:
    'Full menu for A Taste of Italy in Clive, Iowa — Chicago beef, meatball subs, Graziano\'s sausage, Italian hoagies, cold cut trays, soup, salads, and imported Italian grocery items. Made fresh daily since 1996.',
  alternates: { canonical: `${BASE_URL}/menu` },
  openGraph: {
    title: 'Full Menu | A Taste of Italy — Clive, Iowa',
    description:
      'Chicago beef, meatball subs, Graziano\'s sausage, Italian hoagies, deli trays, and an Italian grocery counter. Fresh daily at A Taste of Italy in Clive, Iowa.',
    url: `${BASE_URL}/menu`,
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Menu', item: `${BASE_URL}/menu` },
  ],
}

export const dynamic = 'force-dynamic'

export default async function MenuPage() {
  const items = await getMenuItems()

  // Group by category preserving a logical order
  const CATEGORY_ORDER = [
    'Classic Sandwiches',
    'Premium Sandwiches',
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

  // Merge "House Special" into "Specialty Sandwiches", marking those items as featured
  // so they render with the gold "★ House Special" card treatment.
  if (grouped['House Special']) {
    const houseItems = grouped['House Special'].map((item) => ({ ...item, featured: true }))
    grouped['Specialty Sandwiches'] = [
      ...houseItems,
      ...(grouped['Specialty Sandwiches'] ?? []),
    ]
    delete grouped['House Special']
  }

  // Sort categories by preferred order, then alphabetically
  const categories = [
    ...CATEGORY_ORDER.filter((c) => grouped[c]),
    ...Object.keys(grouped).filter((c) => !CATEGORY_ORDER.includes(c)).sort(),
  ]

  return (
    <div className="min-h-screen">
      <JsonLd schema={breadcrumbSchema} />
      {/* Page header */}
      <div className="bg-italian-red text-parchment py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-gold/70 text-[9px] font-semibold uppercase tracking-[0.3em] mb-2">
            Made Fresh Daily &nbsp;·&nbsp; Family Owned Since 1996
          </p>
          <h1 className="font-display text-5xl md:text-6xl italic mb-3">Our Menu</h1>
          <p className="font-sans text-parchment/70 max-w-lg leading-relaxed">
            Everything made with the care and quality that&rsquo;s defined
            A Taste of Italy since 1996.
          </p>
        </div>
      </div>

      {/* Menu content — client component handles tab nav */}
      <MenuClient grouped={grouped} categories={categories} />
    </div>
  )
}
