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
    <footer className="bg-charcoal text-gray-300 pt-12 pb-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-white text-xl mb-3">
              A Taste of Italy
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Authentic Italian deli serving Clive and the greater Des Moines
              area since June 1996.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="hover:text-white transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
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
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Hours
            </h4>
            <ul className="space-y-1 text-sm">
              {[
                ['Mon – Fri', '10:30 AM – 6:00 PM'],
                ['Saturday', '10:30 AM – 5:00 PM'],
                ['Sunday', 'Closed'],
              ].map(([day, hours]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-gray-400">{day}</span>
                  <span
                    className={
                      hours === 'Closed' ? 'text-gray-500' : 'text-gray-300'
                    }
                  >
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} A Taste of Italy. All rights
            reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/menu" className="hover:text-gray-300 transition-colors">
              Menu
            </Link>
            <Link
              href="/catering"
              className="hover:text-gray-300 transition-colors"
            >
              Catering
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
