import Link from 'next/link'
import { getBusiness, getFeaturedMenuItems } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const PHONE_HREF = 'tel:5152210743'
const PHONE = '515-221-0743'
const MAPS_URL =
  'https://maps.google.com/?q=8421+University+Blvd+Suite+D,+Clive+IA+50325'

const DAYS_ORDER = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
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
      "We've ordered deli trays for every company event for ten years. Todd and his team always deliver quality. The meatball sub tray is a crowd favorite.",
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
    desc: "Chicago beef, meatball, Graziano's sausage — our house specialties, made to order every day.",
    href: '/menu#hot-sandwiches',
    icon: <HotSandwichIcon />,
  },
  {
    title: 'Cold Sandwiches',
    desc: 'The classic Italian hoagie and more, stacked with premium deli meats and provolone.',
    href: '/menu#cold-sandwiches',
    icon: <ColdSandwichIcon />,
  },
  {
    title: 'Deli Trays & Catering',
    desc: '6-foot subs, box lunches, and antipasto trays for events of any size.',
    href: '/catering',
    icon: <CateringIcon />,
  },
  {
    title: 'Italian Grocery',
    desc: "Graziano's sausage, house marinara, imported pasta, and more to take home.",
    href: '/menu#grocery',
    icon: <GroceryIcon />,
  },
]

export default async function HomePage() {
  const [business, featuredItems] = await Promise.all([
    getBusiness(),
    getFeaturedMenuItems(),
  ])

  const hours = business?.hours ?? {}

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-italian-red text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="badge-fresh">
              <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
              Made to Order · Fresh Daily
            </span>
            <span className="font-sans text-red-300 text-xs font-semibold uppercase tracking-widest">
              Est. June 1, 1996
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-5 max-w-2xl">
            Your Neighborhood<br className="hidden sm:block" /> Italian Deli
          </h1>
          <p className="font-sans text-red-100 text-lg md:text-xl max-w-xl leading-relaxed mb-3">
            Todd Ferin has been behind the counter every day since 1996 —
            building Chicago beef, meatball subs, and Graziano&rsquo;s sausage
            sandwiches fresh to order for Clive and Des Moines.
          </p>
          <p className="font-sans text-red-300 text-sm mb-8">
            No chains. No heat lamps. Just a real neighborhood deli.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_HREF}
              className="btn-cream text-base px-7 py-4 text-lg"
            >
              <PhoneIcon />
              {PHONE}
            </a>
            <Link
              href="/menu"
              className="btn-outline border-white text-white hover:bg-white hover:text-italian-red text-base px-7 py-4 text-lg"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOURS ───────────────────────────────────────────────── */}
      <section className="bg-cream-dark border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="section-title text-2xl mb-1">Hours</h2>
              <div className="section-divider" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-x-8 gap-y-2 text-sm">
              {DAYS_ORDER.map((day) => {
                const time = hours[day] ?? 'Closed'
                const isClosed = time === 'Closed'
                const shortDay = day.slice(0, 3)
                return (
                  <div key={day} className="flex flex-col">
                    <span className="font-sans font-semibold text-charcoal text-xs uppercase tracking-wide">
                      {shortDay}
                    </span>
                    <span
                      className={`font-sans text-xs mt-0.5 ${
                        isClosed ? 'text-gray-400' : 'text-charcoal'
                      }`}
                    >
                      {isClosed ? 'Closed' : time.replace(' – ', '–')}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── DELI PILLARS ────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex items-start gap-4 py-6 md:py-0 md:pr-10">
              <div className="flex-shrink-0 w-10 h-10 bg-italian-red rounded-sm flex items-center justify-center text-white">
                <OwnerIcon />
              </div>
              <div>
                <h3 className="font-serif text-lg text-charcoal mb-1">
                  Owner Behind the Counter
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Todd Ferin makes every sandwich himself — same face, same
                  care, every single day since 1996.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 py-6 md:py-0 md:px-10">
              <div className="flex-shrink-0 w-10 h-10 bg-italian-red rounded-sm flex items-center justify-center text-white">
                <LocalIcon />
              </div>
              <div>
                <h3 className="font-serif text-lg text-charcoal mb-1">
                  Locally Sourced
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Graziano Brothers sausage from right here in Des Moines.
                  Fresh-baked rolls. No shortcuts on ingredients.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 py-6 md:py-0 md:pl-10">
              <div className="flex-shrink-0 w-10 h-10 bg-italian-red rounded-sm flex items-center justify-center text-white">
                <FreshIcon />
              </div>
              <div>
                <h3 className="font-serif text-lg text-charcoal mb-1">
                  Made to Order
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Every sandwich is built fresh when you order it. Nothing
                  pre-made, nothing sitting under a lamp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ITEMS ──────────────────────────────────────── */}
      {featuredItems.length > 0 && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title mb-2">House Favorites</h2>
            <div className="section-divider" />
            <p className="font-sans text-gray-600 mb-10 max-w-xl">
              The sandwiches that have kept Clive coming back for nearly three
              decades. Each one made fresh to order.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-sm p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-xs font-semibold text-italian-red uppercase tracking-widest">
                      {item.category}
                    </span>
                    <span className="badge-fresh text-[10px] px-2 py-0.5">
                      Fresh
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">
                    {item.item_name}
                  </h3>
                  {item.description && (
                    <p className="font-sans text-sm text-gray-600 leading-relaxed flex-1">
                      {item.description}
                    </p>
                  )}
                  {item.price && (
                    <p className="font-sans font-semibold text-italian-red mt-4">
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

      {/* ── CATEGORY CARDS ──────────────────────────────────────── */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-2">From the Deli Counter</h2>
          <div className="section-divider mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORY_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white border border-gray-200 rounded-sm p-6 flex flex-col hover:border-italian-red transition-colors duration-150"
              >
                <div className="w-8 h-8 text-italian-red mb-4 group-hover:text-italian-red-dark transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg text-charcoal group-hover:text-italian-red transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed flex-1">
                  {card.desc}
                </p>
                <span className="mt-4 font-sans text-xs font-semibold text-italian-red uppercase tracking-wider">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATERING CTA ────────────────────────────────────────── */}
      <section className="bg-olive text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl mb-2">Catering for Any Occasion</h2>
            <p className="font-sans text-green-100 max-w-lg leading-relaxed">
              Deli trays from $3.95/person, 6-foot subs from $15/ft, and custom
              box lunches. Perfect for office parties, family gatherings, and
              corporate events. 48-hour notice appreciated.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/catering"
              className="inline-flex items-center justify-center gap-2 bg-white text-olive font-sans font-semibold px-7 py-4 rounded-sm hover:bg-cream transition-colors duration-150"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-2">What the Regulars Say</h2>
          <div className="section-divider mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="bg-cream-dark border border-gray-200 rounded-sm p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="font-sans text-xs font-semibold text-charcoal uppercase tracking-wide">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION STRIP ──────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl mb-1">Come Find Us in Clive</p>
            <p className="font-sans text-gray-400 text-sm">
              8421 University Blvd Suite D · Clive, IA 50325
            </p>
          </div>
          <div className="flex gap-3">
            <a href={PHONE_HREF} className="btn-primary">
              <PhoneIcon />
              Call to Order
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-gray-500 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
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

// ── Deli Pillar Icons ────────────────────────────────────────────────────────

function OwnerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function LocalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function FreshIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ── Category Card Icons ──────────────────────────────────────────────────────

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
      <rect x="3" y="11" width="18" height="8" rx="2" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
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

// ── Utility Icons ────────────────────────────────────────────────────────────

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
    <svg className="w-4 h-4 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
