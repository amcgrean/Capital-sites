import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

const BASE_URL = 'https://capital-sites.vercel.app'

export const metadata: Metadata = {
  title: 'Our Story — Family Italian Deli Since 1996',
  description:
    'Todd Ferin opened A Taste of Italy on June 1, 1996 in Clive, Iowa. Nearly 30 years behind the counter — authentic Italian deli food, real ingredients, no shortcuts. A Des Moines institution.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'Our Story | A Taste of Italy — Clive, Iowa Since 1996',
    description:
      'Todd Ferin opened A Taste of Italy in Clive, Iowa in 1996. Authentic Italian deli — Chicago beef, meatball subs, Graziano\'s sausage. Nearly 30 years and still going strong.',
    url: `${BASE_URL}/about`,
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Our Story', item: `${BASE_URL}/about` },
  ],
}

const SIGNATURES = [
  {
    name: 'Chicago Beef',
    desc: 'Slow-roasted Italian beef, sliced thin, served wet with au jus for dipping. The sandwich people drive across the metro for.',
  },
  {
    name: 'House Meatball Sub',
    desc: 'Made-from-scratch meatballs in house marinara on a toasted hoagie with provolone. A staple since day one.',
  },
  {
    name: "Graziano's Sausage",
    desc: "Iowa's own Italian sausage from Graziano Brothers in Des Moines, grilled and served on a fresh roll. Local through and through.",
  },
  {
    name: 'Italian Hoagie',
    desc: 'Genoa salami, capicola, ham, and provolone on a fresh-baked roll. Simple and right.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <JsonLd schema={breadcrumbSchema} />
      {/* Header */}
      <div className="bg-italian-red text-parchment py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-gold/70 text-[9px] font-semibold uppercase tracking-[0.3em] mb-2">
            Famiglia Ferin &nbsp;·&nbsp; Since June 1, 1996
          </p>
          <h1 className="font-display text-5xl md:text-6xl italic mb-3">Our Story</h1>
          <p className="font-sans text-parchment/70 max-w-lg leading-relaxed">
            Nearly three decades of authentic Italian deli, one sandwich at a
            time.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main story */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start mb-20">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl text-charcoal mb-3">
              A Family Deli. A Community Institution.
            </h2>
            <div className="w-12 h-0.5 bg-italian-red mb-6" />
            <div className="font-sans text-gray-700 leading-relaxed space-y-4 text-[15px]">
              <p>
                A Taste of Italy opened June 1, 1996 in Clive, Iowa. Todd Ferin
                started it with one idea: make the kind of food you&rsquo;d find
                at a real Italian deli — nothing watered down, nothing pre-made,
                nothing handed off to someone who doesn&rsquo;t care.
              </p>
              <p>
                Word got out fast. The Chicago beef drew people in first — slow-roasted,
                sliced thin, served wet. Then the meatballs. Then the
                Graziano&rsquo;s sausage, sourced right here in Des Moines.
                People started driving in from across the metro just for lunch,
                and they kept coming back.
              </p>
              <p>
                He&rsquo;s been behind the counter every day since. Knows the
                regulars by name, knows what they order. That&rsquo;s the whole
                deal — a place where the person making your food is the same
                person who opened the doors nearly thirty years ago.
              </p>
              <p>
                The ingredients haven&rsquo;t changed. Graziano Brothers sausage
                from Des Moines. Fresh-baked rolls. Good imported meats and
                cheeses. Nothing complicated — just food made right.
              </p>
            </div>
          </div>

          {/* Aside: quick facts */}
          <div className="lg:col-span-2">
            <div className="bg-cream-dark border border-gray-200 rounded-none p-7 space-y-6">
              <div>
                <p className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Opened
                </p>
                <p className="font-serif text-xl text-charcoal">June 1, 1996</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Owner
                </p>
                <p className="font-serif text-xl text-charcoal">Todd Ferin</p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Location
                </p>
                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  8421 University Blvd Suite D
                  <br />
                  Clive, IA 50325
                </p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:5152210743"
                  className="font-sans font-semibold text-italian-red hover:text-italian-red-dark"
                >
                  515-221-0743
                </a>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <Link href="/menu" className="btn-primary w-full justify-center text-sm py-3">
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Signature items */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl text-charcoal mb-2">
            The Sandwiches That Started It All
          </h2>
          <div className="w-12 h-0.5 bg-italian-red mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SIGNATURES.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-200 rounded-none p-6"
              >
                <h3 className="font-serif text-xl text-charcoal mb-2">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy section */}
        <div className="bg-italian-red text-parchment p-10 md:p-14">
          <div className="max-w-2xl">
            <p className="font-sans text-red-300 text-xs font-semibold uppercase tracking-widest mb-3">
              Our Philosophy
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl leading-snug mb-6">
              &ldquo;Good food doesn&rsquo;t need a gimmick. It just needs
              good ingredients and someone who gives a damn.&rdquo;
            </blockquote>
            <p className="font-sans text-red-200 text-sm">— Todd Ferin, Owner</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:5152210743" className="btn-cream text-sm">
                Call 515-221-0743
              </a>
              <Link
                href="/catering"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-sans font-semibold px-6 py-3 rounded-none hover:bg-italian-red-dark transition-colors text-sm"
              >
                Catering Inquiries
              </Link>
            </div>
          </div>
        </div>

        {/* Community roots */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { stat: '29+', label: 'Years Serving Clive & Des Moines' },
            { stat: '5', label: 'Menu Categories, Hundreds of Loyal Regulars' },
            { stat: '1', label: 'Owner. One Standard. Excellence.' },
          ].map(({ stat, label }) => (
            <div key={stat} className="py-8 border-t border-gray-200">
              <p className="font-serif text-5xl text-italian-red mb-2">{stat}</p>
              <p className="font-sans text-sm text-gray-600 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
