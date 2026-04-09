import type { Metadata } from 'next'
import Link from 'next/link'
import CateringForm from './CateringForm'
import JsonLd from '@/components/JsonLd'

const BASE_URL = 'https://capital-sites.vercel.app'

export const metadata: Metadata = {
  title: 'Catering — Deli Trays, 6-Foot Subs & Box Lunches',
  description:
    'A Taste of Italy catering in Clive, Iowa — Italian cold cut trays from $3.95/person, 6-foot subs, meatball trays, antipasto spreads, and box lunches. Serving Des Moines metro events since 1996.',
  alternates: { canonical: `${BASE_URL}/catering` },
  openGraph: {
    title: 'Catering | A Taste of Italy — Clive, Iowa',
    description:
      'Italian deli catering for events across the Des Moines metro. Deli trays from $3.95/person, 6-foot subs, box lunches, and more. 48-hour notice appreciated.',
    url: `${BASE_URL}/catering`,
    type: 'website',
  },
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
    desc: "Have something specific in mind? We'll work with you to create the perfect spread.",
    price: 'Call to discuss',
  },
]

const FAQS = [
  {
    q: 'How much notice do you need for a catering order?',
    a: 'We ask for at least 48 hours notice for most catering orders. For large events (50+ people) or complex custom orders, the earlier the better — call us as soon as your event is confirmed.',
  },
  {
    q: 'What is your minimum order for catering?',
    a: 'There is no strict minimum, but our deli trays are priced per person with most starting from $3.95/person. For smaller gatherings, our 6-foot subs and individual box lunches are great options.',
  },
  {
    q: 'Do you deliver catering orders?',
    a: 'Currently, catering orders are available for pickup at our Clive location — 8421 University Blvd Suite D. Call us at 515-221-0743 to discuss your order and pickup timing.',
  },
  {
    q: 'Can you accommodate dietary restrictions or custom orders?',
    a: 'Yes. We are happy to work with you on custom spreads and can accommodate many requests. Call us directly at 515-221-0743 to discuss specific needs.',
  },
  {
    q: 'How do I place a catering order?',
    a: 'You can fill out the request form on this page and we will follow up, or call us directly at 515-221-0743 during business hours (Mon–Fri 10:30 AM–6:00 PM, Sat 10:30 AM–5:00 PM) for the fastest response.',
  },
  {
    q: 'Do you cater corporate events and office lunches?',
    a: 'Absolutely. Box lunches at $10.95/person are popular for office events. We also do large cold cut trays, 6-foot subs, and antipasto spreads for corporate gatherings throughout the Des Moines metro area.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Catering', item: `${BASE_URL}/catering` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

export default function CateringPage() {
  return (
    <div className="min-h-screen">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />

      {/* Header */}
      <div className="bg-italian-red text-parchment py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-gold/70 text-[9px] font-semibold uppercase tracking-[0.3em] mb-2">
            Events &nbsp;·&nbsp; Office Lunches &nbsp;·&nbsp; Family Gatherings
          </p>
          <h1 className="font-display text-5xl md:text-6xl italic mb-3">Catering</h1>
          <p className="font-sans text-parchment/70 max-w-lg leading-relaxed">
            From deli trays and box lunches to 6-foot subs, we bring authentic
            Italian flavor to your event. Serving the Des Moines metro since 1996.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* 48-hour notice callout */}
        <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 p-5 mb-14">
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

            <div className="mt-10 p-5 bg-cream-dark border border-gray-200">
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

      {/* FAQ Section */}
      <section className="bg-parchment-dark border-t border-parchment-dark py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-gold text-[9px] font-semibold uppercase tracking-[0.3em] mb-2">
            Common Questions
          </p>
          <h2 className="section-title mb-2">Catering FAQ</h2>
          <div className="section-divider mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-parchment border border-parchment-dark p-6">
                <h3 className="font-serif text-lg text-charcoal mb-3">{q}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="font-sans text-sm text-gray-600 mb-4">
              Still have questions? We&rsquo;re happy to help.
            </p>
            <a href="tel:5152210743" className="btn-primary">
              Call 515-221-0743
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-espresso text-parchment py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: '29+', label: 'Years catering Clive & Des Moines events' },
              { stat: '$3.95', label: 'Per person — deli trays from' },
              { stat: '48hrs', label: 'Notice needed — book your date early' },
            ].map(({ stat, label }) => (
              <div key={stat} className="border-t border-gold/20 pt-6">
                <p className="font-display text-4xl italic text-gold mb-2">{stat}</p>
                <p className="font-sans text-xs text-parchment/55 uppercase tracking-wider leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
