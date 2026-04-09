import Link from 'next/link'
import type { Metadata } from 'next'
import { getBusiness, getFeaturedMenuItems } from '@/lib/supabase'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'A Taste of Italy | Family Italian Deli & Market in Clive, Iowa',
  description:
    "Family-owned Italian deli and market in Clive, Iowa since June 1996. Fresh sandwiches made to order — Chicago beef, meatball subs, Graziano's sausage, deli trays, and an Italian grocery counter you won't find anywhere else in Iowa.",
  alternates: { canonical: 'https://capital-sites.vercel.app' },
  openGraph: {
    title: 'A Taste of Italy | Family Italian Deli & Market in Clive, Iowa',
    description:
      "Clive, Iowa's Italian deli and market since 1996. Chicago beef, meatball subs, Graziano's sausage, deli trays, and an Italian grocery counter — made fresh daily.",
    url: 'https://capital-sites.vercel.app',
    type: 'website',
  },
}

export const dynamic = 'force-dynamic'

const PHONE_HREF = 'tel:5152210743'
const PHONE = '515-221-0743'
const MAPS_URL =
  'https://maps.google.com/?q=8421+University+Blvd+Suite+D,+Clive+IA+50325'

const DAYS_ORDER = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday',
]

const TESTIMONIALS = [
  {
    quote:
      'The Chicago beef is the real deal — juicy, perfectly seasoned, and the roll holds up to the dip. Best Italian beef in Des Moines, period.',
    author: 'Mike T.',
    stars: 5,
  },
  {
    quote:
      "We've ordered deli trays for every company event for ten years. Todd always delivers. The meatball sub tray is a crowd favorite every single time.",
    author: 'Sarah K.',
    stars: 5,
  },
  {
    quote:
      "There's nothing else like it in Iowa. The Italian hoagie with Graziano's sausage is something you have to try at least once. I go back every week.",
    author: 'Dave M.',
    stars: 5,
  },
]

const CATEGORY_CARDS = [
  {
    title: 'Hot Sandwiches',
    desc: "Chicago beef, meatball, Graziano's sausage — house specialties made fresh to order every day.",
    href: '/menu#hot-sandwiches',
    cta: 'See hot sandwiches →',
    icon: <HotSandwichIcon />,
  },
  {
    title: 'Cold Sandwiches',
    desc: 'Classic Italian hoagies and more, stacked with premium deli meats and imported provolone.',
    href: '/menu#cold-sandwiches',
    cta: 'See cold sandwiches →',
    icon: <ColdSandwichIcon />,
  },
  {
    title: 'Deli Trays & Catering',
    desc: '6-foot subs, box lunches, and antipasto trays for parties and corporate events of any size.',
    href: '/catering',
    cta: 'Get a catering quote →',
    icon: <CateringIcon />,
  },
  {
    title: 'Italian Market',
    desc: "Graziano's sausage, house marinara, imported pasta, and Italian specialty groceries to take home.",
    href: '/menu#grocery',
    cta: 'Browse the market →',
    icon: <GroceryIcon />,
  },
]

// AggregateRating schema — ties testimonials to the business entity
const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': 'https://capital-sites.vercel.app/#business',
  name: 'A Taste of Italy',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '3',
  },
  review: TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(t.stars),
      bestRating: '5',
    },
    reviewBody: t.quote,
  })),
}

export default async function HomePage() {
  const [business, featuredItems] = await Promise.all([
    getBusiness(),
    getFeaturedMenuItems(),
  ])

  const hours = business?.hours ?? {}

  return (
    <>
      <JsonLd schema={aggregateRatingSchema} />
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-espresso text-parchment">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-14 md:py-20">
          {/* Ornamental double-border frame */}
          <div className="border border-gold/35 px-8 py-12 md:px-16 md:py-16 relative">
            {/* Inner border inset */}
            <div className="absolute inset-3 border border-gold/15 pointer-events-none" />
            {/* Corner ornaments */}
            <span className="absolute top-2 left-2 text-gold/40 text-[10px] leading-none select-none">✦</span>
            <span className="absolute top-2 right-2 text-gold/40 text-[10px] leading-none select-none">✦</span>
            <span className="absolute bottom-2 left-2 text-gold/40 text-[10px] leading-none select-none">✦</span>
            <span className="absolute bottom-2 right-2 text-gold/40 text-[10px] leading-none select-none">✦</span>

            {/* Provenance line */}
            <p className="font-sans text-gold/70 text-[9px] font-semibold uppercase tracking-[0.35em] text-center mb-3">
              Famiglia Ferin &nbsp;&middot;&nbsp; Clive, Iowa &nbsp;&middot;&nbsp; Dal&nbsp;1996
            </p>

            {/* Decorative rule */}
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="w-16 h-px bg-gold/25" />
              <span className="text-gold/50 text-[10px]">✦</span>
              <div className="w-16 h-px bg-gold/25" />
            </div>

            {/* Main title */}
            <h1 className="font-display text-6xl md:text-8xl italic text-cream text-center leading-none mb-4">
              A Taste of Italy
            </h1>

            {/* Subtitle pill */}
            <p className="font-sans text-gold/60 text-center uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-3">
              Family Deli &amp; Italian Market &nbsp;&middot;&nbsp; Fresh Sandwiches Daily
            </p>

            {/* Second decorative rule */}
            <div className="flex items-center justify-center gap-3 mb-9">
              <div className="w-16 h-px bg-gold/25" />
              <span className="text-gold/50 text-[10px]">✦</span>
              <div className="w-16 h-px bg-gold/25" />
            </div>

            <p className="font-serif text-cream/75 text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed mb-10">
              Todd Ferin&rsquo;s neighborhood deli and Italian market has kept Clive
              and greater Des Moines fed since June 1996 — Chicago beef, hand-rolled
              meatballs, Graziano&rsquo;s sausage, and an Italian grocery counter
              you won&rsquo;t find anywhere else in Iowa.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PHONE_HREF} className="btn-cream px-8 py-4 text-base">
                <PhoneIcon />
                {PHONE}
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 border border-parchment/25 text-cream font-sans font-semibold px-8 py-4 hover:bg-white/8 hover:border-parchment/40 transition-colors duration-150"
              >
                View the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOURS ────────────────────────────────────────────────────────── */}
      <section className="bg-parchment-dark border-y-2 border-gold/25">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-shrink-0">
              <p className="font-sans text-[9px] font-semibold text-gold uppercase tracking-[0.25em] mb-0.5">
                We&rsquo;re Open
              </p>
              <h2 className="font-display text-3xl italic text-charcoal leading-tight">
                Store Hours
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-x-6 gap-y-3">
              {DAYS_ORDER.map((day) => {
                const time = hours[day] ?? 'Closed'
                const isClosed = time === 'Closed'
                return (
                  <div key={day} className="flex flex-col">
                    <span className="font-sans font-semibold text-charcoal text-[9px] uppercase tracking-wider">
                      {day.slice(0, 3)}
                    </span>
                    <span className={`font-sans text-xs mt-0.5 ${isClosed ? 'text-charcoal/30' : 'text-charcoal/70'}`}>
                      {isClosed ? 'Closed' : time.replace(' – ', '–')}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOUSE FAVORITES ──────────────────────────────────────────────── */}
      {featuredItems.length > 0 && (
        <section className="py-16 bg-parchment">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-gold text-[9px] font-semibold uppercase tracking-[0.3em] mb-2">
              From Todd&rsquo;s Kitchen
            </p>
            <h2 className="section-title mb-2">House Favorites</h2>
            <div className="section-divider" />
            <p className="font-sans text-charcoal/55 mb-10 max-w-xl">
              The sandwiches that have kept Clive coming back for nearly three
              decades — every one made fresh to order.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-parchment-dark p-6 flex flex-col relative"
                >
                  {/* Inset border accent */}
                  <div className="absolute inset-2.5 border border-parchment-dark/40 pointer-events-none" />

                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="font-sans text-[9px] font-semibold text-gold uppercase tracking-[0.2em]">
                      {item.category}
                    </span>
                    <span className="badge-fresh text-[9px] px-2 py-0.5">
                      Fresh
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-2 relative z-10">
                    {item.item_name}
                  </h3>
                  {item.description && (
                    <p className="font-sans text-sm text-charcoal/55 leading-relaxed flex-1 relative z-10">
                      {item.description}
                    </p>
                  )}
                  {item.price && (
                    <p className="font-display text-2xl italic text-italian-red mt-4 relative z-10">
                      ${item.price}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/menu" className="btn-primary">
                View Full Menu
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FROM THE DELI COUNTER ─────────────────────────────────────────── */}
      <section className="bg-espresso py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-gold/60 text-[9px] uppercase tracking-[0.35em] mb-3">
              What We Carry
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-cream leading-tight">
              From the Deli Counter
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-14 h-px bg-gold/25" />
              <span className="text-gold/45 text-[10px]">✦</span>
              <div className="w-14 h-px bg-gold/25" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORY_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group border border-gold/20 p-6 flex flex-col hover:border-gold/45 hover:bg-white/5 transition-colors duration-150"
              >
                <div className="w-8 h-8 text-gold mb-5 group-hover:text-gold-light transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg text-cream group-hover:text-gold transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-cream/45 leading-relaxed flex-1">
                  {card.desc}
                </p>
                <span className="mt-5 font-sans text-[9px] font-semibold text-gold/55 uppercase tracking-[0.2em] group-hover:text-gold transition-colors">
                  {card.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATERING CTA ─────────────────────────────────────────────────── */}
      <section className="bg-italian-red text-parchment py-16 relative overflow-hidden">
        {/* Inset decorative border */}
        <div className="absolute inset-5 border border-parchment/10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative">
          <div>
            <p className="font-sans text-parchment/45 text-[9px] uppercase tracking-[0.3em] mb-2">
              Private Events &amp; Corporate
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-cream mb-4">
              Catering for Any Occasion
            </h2>
            <p className="font-sans text-parchment/65 max-w-lg leading-relaxed">
              Deli trays from $3.95/person, 6-foot subs, custom box lunches,
              and antipasto spreads. Todd brings the same quality to your event
              that he brings every day behind the counter. 48-hour notice
              appreciated.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/catering"
              className="inline-flex items-center justify-center gap-2 border border-parchment/35 bg-parchment/10 text-cream font-sans font-semibold px-8 py-4 hover:bg-parchment hover:text-italian-red transition-colors duration-150"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-parchment-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-gold text-[9px] font-semibold uppercase tracking-[0.3em] mb-2">
            Our Regulars
          </p>
          <h2 className="section-title mb-2">What People Are Saying</h2>
          <div className="section-divider mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="bg-parchment border border-parchment-dark p-6 relative overflow-hidden"
              >
                {/* Oversized decorative quotation mark */}
                <span
                  className="font-display text-9xl italic text-gold/12 leading-none absolute -top-2 left-2 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div className="flex gap-0.5 mb-4 relative z-10">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="font-serif text-sm italic text-charcoal/75 leading-relaxed mb-4 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="font-sans text-[9px] font-semibold text-charcoal/45 uppercase tracking-widest relative z-10">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION STRIP ────────────────────────────────────────────────── */}
      <section className="bg-espresso text-parchment py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-sans text-gold/50 text-[9px] uppercase tracking-[0.25em] mb-1">
              Trovaci in Iowa
            </p>
            <p className="font-display text-3xl italic text-cream mb-1">
              Come Find Us in Clive
            </p>
            <p className="font-sans text-parchment/35 text-sm">
              8421 University Blvd Suite D &nbsp;&middot;&nbsp; Clive, IA 50325
            </p>
          </div>
          <div className="flex gap-3">
            <a href={PHONE_HREF} className="btn-cream">
              <PhoneIcon />
              Call to Order
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold font-sans font-semibold px-6 py-3 hover:bg-gold/10 transition-colors"
            >
              <PinIcon />
              Directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Category Card Icons ───────────────────────────────────────────────────

function HotSandwichIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8C8 10 5.9 16.17 3.82 19h16.36C18.1 16.17 16 10 7 8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19h14M5 21h14" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c0 2-2 3-2 5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 4c0 2-2 3-2 5" />
    </svg>
  )
}

function ColdSandwichIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="11" width="18" height="8" rx="1" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 11c0-2 1.5-4 9-4s9 2 9 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 15h10" />
    </svg>
  )
}

function CateringIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13V7a7 7 0 0114 0v6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h18v2H3z" />
    </svg>
  )
}

function GroceryIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  )
}

// ── Utility Icons ─────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
