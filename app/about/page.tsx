import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of A Taste of Italy — opened June 1, 1996 by Todd Ferin in Clive, Iowa. A Des Moines institution for authentic Italian deli food.',
}

const SIGNATURES = [
  {
    name: 'Chicago Beef',
    desc: 'Slow-roasted Italian beef, thinly sliced and served with au jus for dipping — the signature sandwich Todd built his reputation on.',
  },
  {
    name: 'House Meatball Sub',
    desc: 'Made-from-scratch meatballs in rich marinara, loaded onto a toasted hoagie roll with provolone. A regulars\' favorite for 28 years.',
  },
  {
    name: "Graziano's Sausage",
    desc: 'Iowa\'s own legendary Italian sausage from Graziano Brothers, sourced locally and grilled to perfection. A true Des Moines original.',
  },
  {
    name: 'Italian Hoagie',
    desc: 'Genoa salami, capicola, ham, and provolone on a fresh-baked roll with all the trimmings. Simple. Authentic. Perfect.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-italian-red text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-red-300 text-xs font-semibold uppercase tracking-widest mb-2">
            Since June 1, 1996
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Our Story</h1>
          <p className="font-sans text-red-100 max-w-lg leading-relaxed">
            Nearly three decades of authentic Italian deli, one sandwich at a time.
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
                On June 1, 1996, Todd Ferin opened the doors of A Taste of Italy
                in Clive, Iowa with a simple mission: bring the honest, hearty
                flavors of an authentic Italian deli to the Des Moines area.
                Nearly three decades later, that mission hasn&rsquo;t changed.
              </p>
              <p>
                What started as a neighborhood spot quickly became a destination.
                Word spread about the Chicago beef — slow-roasted to perfection,
                sliced thin, and served with au jus that&rsquo;s been refined over
                hundreds of batches. Then about the meatballs. Then about the
                Graziano&rsquo;s sausage sourced right here in Iowa. The Italian
                hoagie. The deli trays.
              </p>
              <p>
                Todd has been behind the counter for all of it. He knows his
                regulars by name. He knows what they order before they say a word.
                That kind of relationship — between a cook who cares and a
                community that shows up — is what makes A Taste of Italy different
                from everywhere else.
              </p>
              <p>
                We source the best ingredients we can find. Graziano&rsquo;s Brothers
                sausage from Des Moines. Fresh-baked rolls. Quality imported meats
                and cheeses from the deli case. Nothing fancy — just good food
                made right.
              </p>
            </div>
          </div>

          {/* Aside: quick facts */}
          <div className="lg:col-span-2">
            <div className="bg-cream-dark border border-gray-200 rounded-sm p-7 space-y-6">
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
                className="bg-white border border-gray-200 rounded-sm p-6"
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
        <div className="bg-italian-red text-white rounded-sm p-10 md:p-14">
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
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-sans font-semibold px-6 py-3 rounded-sm hover:bg-italian-red-dark transition-colors text-sm"
              >
                Catering Inquiries
              </Link>
            </div>
          </div>
        </div>

        {/* Community roots */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { stat: '28+', label: 'Years Serving Clive & Des Moines' },
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
