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

function formatPrice(price: string) {
  const lower = price.toLowerCase()
  if (
    price.includes('$') ||
    lower.includes('price') ||
    lower.includes('call') ||
    lower.includes('from') ||
    lower.includes('market')
  ) {
    return price
  }
  return `$${price}`
}

export default function MenuClient({ grouped, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? '')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

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
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setActiveCategory(category)
  }

  return (
    <div className="bg-parchment min-h-screen">
      {/* ── Sticky category nav ──────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-espresso -mx-0 border-b border-gold/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex overflow-x-auto scrollbar-hide lg:overflow-visible lg:justify-between"
            aria-label="Menu categories"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollTo(cat)}
                className={`flex-shrink-0 font-sans text-xs lg:text-sm font-medium px-3 py-3.5 border-b-2 transition-colors duration-150 whitespace-nowrap focus:outline-none ${
                  activeCategory === cat
                    ? 'border-gold text-gold'
                    : 'border-transparent text-parchment/50 hover:text-parchment/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Category sections ────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-20">
          {categories.map((category) => {
            const items = grouped[category] ?? []
            const featured = items.filter((i) => i.featured)
            const regular = items.filter((i) => !i.featured)

            return (
              <section
                key={category}
                id={slugify(category)}
                data-category={category}
                ref={(el) => { sectionRefs.current[category] = el }}
              >
                {/* Section heading — display font, gold divider */}
                <div className="mb-8">
                  <h2 className="font-display text-3xl md:text-4xl italic text-espresso">
                    {category}
                  </h2>
                  <hr className="section-divider" />
                </div>

                {/* House Special items */}
                {featured.length > 0 && (
                  <div className="mb-8">
                    <p className="font-sans text-[10px] font-semibold text-gold uppercase tracking-[0.25em] mb-5">
                      ✦ &nbsp;House Special&nbsp; ✦
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {regular.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </section>
            )
          })}
        </div>

        {/* ── Catering callout ─────────────────────────────────────────── */}
        <div className="mt-24 bg-espresso text-parchment p-10 text-center relative">
          {/* Corner ornaments */}
          <span className="absolute top-3 left-4 text-gold/40 font-display italic text-2xl">✦</span>
          <span className="absolute top-3 right-4 text-gold/40 font-display italic text-2xl">✦</span>
          <span className="absolute bottom-3 left-4 text-gold/40 font-display italic text-2xl">✦</span>
          <span className="absolute bottom-3 right-4 text-gold/40 font-display italic text-2xl">✦</span>

          <p className="font-sans text-[10px] font-semibold text-gold/70 uppercase tracking-[0.25em] mb-3">
            Per grandi eventi
          </p>
          <h3 className="font-display text-3xl md:text-4xl italic text-parchment mb-1">
            Need to Feed a Crowd?
          </h3>
          <hr className="section-divider mx-auto mb-5" />
          <p className="font-sans text-parchment/60 max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Deli trays, 6-foot subs, box lunches, and more — made fresh for
            your event. Call ahead or send us an inquiry.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:5152210743"
              className="inline-flex items-center justify-center gap-2 bg-gold text-espresso font-sans font-semibold px-6 py-3 hover:bg-gold-light transition-colors"
            >
              Call 515-221-0743
            </a>
            <a
              href="/catering"
              className="inline-flex items-center justify-center gap-2 border border-gold/50 text-parchment font-sans font-semibold px-6 py-3 hover:border-gold hover:text-gold transition-colors"
            >
              Catering Inquiry →
            </a>
          </div>
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
      className={`p-5 flex flex-col justify-between ${
        highlight
          ? 'bg-parchment-dark border-l-4 border-gold'
          : 'bg-white border-l-4 border-parchment-dark'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="font-serif text-base text-espresso font-semibold leading-snug">
              {item.item_name}
            </h3>
            {highlight && (
              <span className="font-sans text-[10px] font-bold text-gold uppercase tracking-widest flex-shrink-0">
                ★ House Special
              </span>
            )}
          </div>
          {item.description && (
            <p className="font-sans text-sm text-charcoal/60 leading-relaxed mt-0.5">
              {item.description}
            </p>
          )}
        </div>
        {item.price && (
          <p className="font-sans font-bold text-gold flex-shrink-0 text-sm mt-0.5 ml-3">
            {formatPrice(item.price)}
          </p>
        )}
      </div>
    </div>
  )
}
