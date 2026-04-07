import Link from 'next/link'

const PHONE = '515-221-0743'
const PHONE_HREF = 'tel:5152210743'
const ADDRESS = '8421 University Blvd Suite D'
const CITY_STATE_ZIP = 'Clive, IA 50325'
const MAPS_URL =
  'https://maps.google.com/?q=8421+University+Blvd+Suite+D,+Clive+IA+50325'
const FACEBOOK_URL = 'https://www.facebook.com/atasteofitalyclive'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/60 pt-12 pb-6">
      {/* Italian flag accent strip */}
      <div className="flex h-0.5 mb-10">
        <div className="flex-1 bg-[#009246]/60" />
        <div className="flex-1 bg-cream/20" />
        <div className="flex-1 bg-[#CE2B37]/60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gold/15">

          {/* ── Brand ──────────────────────────────────────────── */}
          <div>
            <h3 className="font-display text-cream text-2xl italic leading-tight mb-1">
              A Taste of Italy
            </h3>
            <p className="font-sans text-gold/60 text-[9px] tracking-[0.2em] uppercase mb-5">
              Family Deli &amp; Market &nbsp;·&nbsp; Est. 1996
            </p>
            <p className="font-sans text-sm text-cream/40 leading-relaxed">
              Todd Ferin&rsquo;s neighborhood Italian deli and small market,
              serving Clive and greater Des Moines with honest, handmade food
              since June 1, 1996.
            </p>
          </div>

          {/* ── Contact ────────────────────────────────────────── */}
          <div>
            <h4 className="font-sans text-[9px] font-semibold text-gold/60 uppercase tracking-[0.2em] mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="hover:text-cream transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  {ADDRESS}
                  <br />
                  {CITY_STATE_ZIP}
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* ── Hours ──────────────────────────────────────────── */}
          <div>
            <h4 className="font-sans text-[9px] font-semibold text-gold/60 uppercase tracking-[0.2em] mb-4">
              Hours
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                ['Mon – Fri', '10:30 AM – 6:00 PM'],
                ['Saturday', '10:30 AM – 5:00 PM'],
                ['Sunday', 'Closed'],
              ].map(([day, hrs]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-cream/35">{day}</span>
                  <span className={hrs === 'Closed' ? 'text-cream/25' : 'text-cream/60'}>
                    {hrs}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-xs text-cream/25">
              &copy; {new Date().getFullYear()} A Taste of Italy. All rights
              reserved.
            </p>
            <p className="font-display italic text-gold/35 text-sm mt-0.5">
              Grazie per la vostra visita.
            </p>
          </div>
          <nav className="flex gap-5 text-xs text-cream/25">
            <Link href="/menu" className="hover:text-cream/50 transition-colors">
              Menu
            </Link>
            <Link href="/catering" className="hover:text-cream/50 transition-colors">
              Catering
            </Link>
            <Link href="/contact" className="hover:text-cream/50 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
