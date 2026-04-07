import type { Metadata } from 'next'
import CateringForm from './CateringForm'

export const metadata: Metadata = {
  title: 'Catering',
  description:
    'A Taste of Italy catering in Clive, Iowa — deli trays from $3.95/person, 6-foot subs, box lunches, and more for your next event.',
}

const OFFERINGS = [
  {
    title: 'Italian Cold Cut Trays',
    desc: 'Genoa salami, capicola, ham, and provolone with olives and pepperoncini.',
    price: 'From $3.95/person',
  },
  {
    title: '6-Foot Sub',
    desc: 'Your choice of Italian meats and cheeses on a 6-foot roll — feeds a crowd.',
    price: 'From $15/ft',
  },
  {
    title: 'Box Lunches',
    desc: 'Individual boxed lunches with a half sandwich, side, and cookie. Great for corporate events.',
    price: '$10.95/person',
  },
  {
    title: 'Meatball Tray',
    desc: 'House-made meatballs in marinara — perfect as an appetizer or slider bar.',
    price: 'Call for pricing',
  },
  {
    title: 'Antipasto Tray',
    desc: 'Artisan cheeses, cured meats, marinated olives, roasted peppers, and artichokes.',
    price: 'From $4.50/person',
  },
  {
    title: 'Custom Orders',
    desc: 'Have something specific in mind? We\'ll work with you to create the perfect spread.',
    price: 'Call to discuss',
  },
]

export default function CateringPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-italian-red text-parchment py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-gold/70 text-[9px] font-semibold uppercase tracking-[0.3em] mb-2">
            Events &nbsp;·&nbsp; Office Lunches &nbsp;·&nbsp; Family Gatherings
          </p>
          <h1 className="font-display text-5xl md:text-6xl italic mb-3">Catering</h1>
          <p className="font-sans text-parchment/70 max-w-lg leading-relaxed">
            From deli trays and box lunches to 6-foot subs, we bring authentic
            Italian flavor to your event. Call us or fill out the form below.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* 48-hour notice callout */}
        <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-sm p-5 mb-14">
          <ClockIcon />
          <div>
            <p className="font-sans font-semibold text-amber-900 text-sm">
              48-Hour Notice Required
            </p>
            <p className="font-sans text-amber-800 text-sm mt-0.5">
              Please place your catering order at least 48 hours in advance.
              For large or complex orders, earlier notice is always appreciated.
              Call us at{' '}
              <a
                href="tel:5152210743"
                className="font-semibold underline hover:no-underline"
              >
                515-221-0743
              </a>{' '}
              to confirm availability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Left: offerings */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-charcoal mb-2">
              What We Offer
            </h2>
            <div className="w-10 h-0.5 bg-italian-red mb-8" />
            <div className="space-y-6">
              {OFFERINGS.map((o) => (
                <div key={o.title} className="border-l-2 border-italian-red pl-4">
                  <h3 className="font-sans font-semibold text-charcoal text-sm">
                    {o.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 mt-0.5 leading-relaxed">
                    {o.desc}
                  </p>
                  <p className="font-sans text-sm font-semibold text-italian-red mt-1">
                    {o.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-cream-dark border border-gray-200 rounded-sm">
              <p className="font-sans text-sm font-semibold text-charcoal mb-1">
                Prefer to call?
              </p>
              <a
                href="tel:5152210743"
                className="font-sans text-italian-red font-semibold text-lg hover:text-italian-red-dark"
              >
                515-221-0743
              </a>
              <p className="font-sans text-xs text-gray-500 mt-1">
                Mon–Fri 10:30 AM – 6:00 PM · Sat 10:30 AM – 5:00 PM
              </p>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-charcoal mb-2">
              Request a Quote
            </h2>
            <div className="w-10 h-0.5 bg-italian-red mb-8" />
            <CateringForm />
          </div>
        </div>
      </div>
    </div>
  )
}

function ClockIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
