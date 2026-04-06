import type { Metadata } from 'next'
import { getBusiness } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact A Taste of Italy in Clive, Iowa — call us, find our location, or check our hours.',
}

const DAYS_ORDER = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4!2d-93.758!3d41.604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee99d5febc3101%3A0x1!2s8421+University+Blvd+Suite+D%2C+Clive%2C+IA+50325!5e0!3m2!1sen!2sus!4v1'

const MAPS_URL =
  'https://maps.google.com/?q=8421+University+Blvd+Suite+D,+Clive+IA+50325'

const FACEBOOK_URL = 'https://www.facebook.com/atasteofitalyclive'

export default async function ContactPage() {
  const business = await getBusiness()
  const hours = business?.hours ?? {}

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-italian-red text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Contact Us</h1>
          <p className="font-sans text-red-100 max-w-lg leading-relaxed">
            We&rsquo;re located in Clive, Iowa. Stop in, give us a call, or find us on
            Facebook.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tap to call */}
            <div className="bg-italian-red rounded-sm p-6 text-white text-center">
              <p className="font-sans text-red-200 text-xs uppercase tracking-widest mb-2">
                The fastest way to reach us
              </p>
              <a
                href="tel:5152210743"
                className="font-serif text-3xl text-white hover:text-red-200 transition-colors block mb-1"
              >
                515-221-0743
              </a>
              <p className="font-sans text-red-200 text-xs">Tap to call</p>
            </div>

            {/* Address */}
            <div>
              <h2 className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Location
              </h2>
              <address className="font-sans not-italic text-charcoal text-sm leading-relaxed mb-3">
                8421 University Blvd Suite D
                <br />
                Clive, IA 50325
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2.5"
              >
                <PinIcon />
                Get Directions
              </a>
            </div>

            {/* Hours */}
            <div>
              <h2 className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Hours
              </h2>
              <ul className="space-y-2">
                {DAYS_ORDER.map((day) => {
                  const time = hours[day] ?? 'Closed'
                  const isClosed = time === 'Closed'
                  const today = new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                  })
                  const isToday = today === day

                  return (
                    <li
                      key={day}
                      className={`flex justify-between font-sans text-sm py-1.5 ${
                        isToday ? 'font-semibold text-charcoal' : 'text-gray-600'
                      } ${isToday ? 'border-l-2 border-italian-red pl-2' : ''}`}
                    >
                      <span>{day}</span>
                      <span className={isClosed ? 'text-gray-400' : ''}>
                        {time}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h2 className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Follow Us
              </h2>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-charcoal hover:text-italian-red transition-colors"
              >
                <FacebookIcon />
                A Taste of Italy on Facebook
              </a>
            </div>
          </div>

          {/* Map column */}
          <div className="lg:col-span-3">
            <div className="rounded-sm overflow-hidden border border-gray-200 h-80 lg:h-full min-h-[320px]">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A Taste of Italy location map"
              />
            </div>
            <p className="font-sans text-xs text-gray-400 mt-2 text-center">
              8421 University Blvd Suite D · Clive, IA 50325
            </p>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="bg-cream-dark border-t border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl text-charcoal mb-2">
            Planning an Event?
          </h2>
          <p className="font-sans text-gray-600 text-sm mb-6">
            We offer full catering — deli trays, 6-foot subs, box lunches, and
            more. 48-hour notice required.
          </p>
          <a
            href="/catering"
            className="btn-primary"
          >
            Catering Inquiry
          </a>
        </div>
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  )
}
