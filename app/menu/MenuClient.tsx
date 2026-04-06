'use client'

import { useState, useRef, useEffect } from 'react'
import type { MenuItem } from '@/lib/supabase'

interface Props {
  grouped: Record<string, MenuItem[]>
  categories: string[]
}

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-')
}

export default function MenuClient({ grouped, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? '')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  // Highlight tab based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-category')
            if (id) setActiveCategory(id)
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    for (const el of Object.values(sectionRefs.current)) {
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  function scrollTo(category: string) {
    const el = sectionRefs.current[category]
    if (el) {
      const headerOffset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setActiveCategory(category)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Sticky category tabs */}
      <div className="sticky top-16 z-40 bg-cream -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-0 border-b border-gray-200 mb-10">
        <nav
          className="flex gap-1 overflow-x-auto scrollbar-hide"
          aria-label="Menu categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollTo(cat)}
              className={`flex-shrink-0 font-sans text-sm font-medium px-4 py-3 border-b-2 transition-colors duration-150 whitespace-nowrap focus:outline-none ${
                activeCategory === cat
                  ? 'border-italian-red text-italian-red'
                  : 'border-transparent text-gray-500 hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Category sections */}
      <div className="space-y-16">
        {categories.map((category) => {
          const items = grouped[category] ?? []
          const featured = items.filter((i) => i.featured)
          const regular = items.filter((i) => !i.featured)

          return (
            <section
              key={category}
              id={slugify(category)}
              data-category={category}
              ref={(el) => {
                sectionRefs.current[category] = el
              }}
            >
              <div className="mb-6">
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
                  {category}
                </h2>
                <div className="w-12 h-0.5 bg-italian-red mt-3" />
              </div>

              {/* Featured items */}
              {featured.length > 0 && (
                <div className="mb-8">
                  <p className="font-sans text-xs font-semibold text-italian-red uppercase tracking-widest mb-4">
                    House Favorites
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {featured.map((item) => (
                      <MenuItemCard key={item.id} item={item} highlight />
                    ))}
                  </div>
                </div>
              )}

              {/* Regular items */}
              {regular.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {regular.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>

      {/* Catering callout */}
      <div className="mt-20 bg-italian-red text-white rounded-sm p-8 text-center">
        <h3 className="font-serif text-2xl mb-2">Need to Feed a Crowd?</h3>
        <p className="font-sans text-red-100 mb-6">
          We offer full catering — deli trays, 6-foot subs, box lunches, and
          more. Call ahead or submit a catering inquiry.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:5152210743"
            className="inline-flex items-center justify-center gap-2 bg-white text-italian-red font-sans font-semibold px-6 py-3 rounded-sm hover:bg-cream-dark transition-colors"
          >
            Call 515-221-0743
          </a>
          <a
            href="/catering"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-sans font-semibold px-6 py-3 rounded-sm hover:bg-italian-red-dark transition-colors"
          >
            Catering Inquiry
          </a>
        </div>
      </div>
    </div>
  )
}

function MenuItemCard({
  item,
  highlight = false,
}: {
  item: MenuItem
  highlight?: boolean
}) {
  return (
    <div
      className={`p-5 rounded-sm flex flex-col ${
        highlight
          ? 'bg-white border-2 border-italian-red'
          : 'bg-white border border-gray-200'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-serif text-lg text-charcoal">
              {item.item_name}
            </h3>
            {highlight && (
              <span className="font-sans text-xs font-semibold text-italian-red bg-red-50 px-2 py-0.5 rounded-full flex-shrink-0">
                ★ Favorite
              </span>
            )}
          </div>
          {item.description && (
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
        {item.price && (
          <p className="font-sans font-semibold text-italian-red flex-shrink-0 text-sm mt-0.5">
            {item.price.includes('$') || item.price.toLowerCase().includes('price') || item.price.toLowerCase().includes('call') || item.price.toLowerCase().includes('from') || item.price.toLowerCase().includes('market')
              ? item.price
              : `$${item.price}`}
          </p>
        )}
      </div>
    </div>
  )
}
