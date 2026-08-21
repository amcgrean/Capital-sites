import Link from 'next/link'
import Logo from './Logo'
import { PhoneIcon, PinIcon, MailIcon, HeartIcon } from './icons'
import { BRAND } from '@/lib/brand'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* ── Brand ──────────────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo
                className="w-10 h-10"
                roof="#FFFFFF"
                figures={['#4A8AC9', '#5A9E5B', '#F4A94A']}
              />
              <span className="flex flex-col leading-none">
                <span className="wordmark text-white text-2xl">Cecilia&rsquo;s Home</span>
                <span className="font-sans text-gold text-[8px] font-semibold tracking-[0.18em] uppercase mt-0.5">
                  Where quality care has no boundary
                </span>
              </span>
            </div>
            <p className="font-sans text-sm text-white/45 leading-relaxed">
              A loving and supportive group home for all people — providing a
              safe, structured environment that promotes independence, dignity,
              and respect.
            </p>
          </div>

          {/* ── Contact ────────────────────────────────────────── */}
          <div>
            <h4 className="font-sans text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={BRAND.phoneHref} className="flex items-center gap-3 hover:text-white transition-colors">
                  <PhoneIcon className="w-4 h-4 text-sky-light shrink-0" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <PinIcon className="w-4 h-4 text-sky-light shrink-0 mt-0.5" />
                  <span>
                    {BRAND.street}
                    <br />
                    {BRAND.cityStateZip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors break-all"
                >
                  <MailIcon className="w-4 h-4 text-sky-light shrink-0" />
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          {/* ── Explore ────────────────────────────────────────── */}
          <div>
            <h4 className="font-sans text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/services', 'Our Services'],
                ['/contact', 'Contact & Referrals'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-serif italic text-white/55 text-sm">
            <HeartIcon className="w-3.5 h-3.5 text-gold" />
            {BRAND.tagline}
            <HeartIcon className="w-3.5 h-3.5 text-gold" />
          </p>
        </div>
      </div>
    </footer>
  )
}
