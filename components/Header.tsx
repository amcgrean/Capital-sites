'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'
import { PhoneIcon } from './icons'
import { BRAND } from '@/lib/brand'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-cloud-dark shadow-sm">
      {/* Thin navy + gold accent strip */}
      <div className="flex h-1">
        <div className="w-2/3 bg-navy" />
        <div className="w-1/3 bg-gold" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo / Brand ─────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo className="w-9 h-9 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="wordmark text-navy text-2xl group-hover:text-sky transition-colors duration-150">
                Cecilia&rsquo;s Home
              </span>
              <span className="font-sans text-gold text-[8px] font-semibold tracking-[0.18em] uppercase mt-0.5">
                Care&nbsp;·&nbsp;Respect&nbsp;·&nbsp;Opportunity
              </span>
            </span>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm font-semibold transition-colors duration-150 ${
                  pathname === href
                    ? 'text-navy'
                    : 'text-ink/55 hover:text-navy'
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="block h-0.5 mt-1 rounded-full bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* ── Tap-to-call ────────────────────────────────────── */}
            <a
              href={BRAND.phoneHref}
              className="hidden sm:flex items-center gap-2 rounded-full bg-navy text-white font-sans font-semibold text-sm px-5 py-2.5 hover:bg-navy-dark transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href={BRAND.phoneHref}
              className="sm:hidden flex items-center justify-center rounded-full bg-navy text-white w-10 h-10"
              aria-label={`Call ${BRAND.phone}`}
            >
              <PhoneIcon className="w-4 h-4" />
            </a>

            {/* ── Mobile hamburger ───────────────────────────────── */}
            <button
              className="md:hidden p-2 text-navy/70 hover:text-navy focus:outline-none focus:ring-2 focus:ring-navy rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <XIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────── */}
      {menuOpen && (
        <nav
          className="md:hidden bg-white border-t border-cloud-dark"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3.5 font-sans text-sm font-semibold border-b border-cloud-dark transition-colors duration-150 ${
                pathname === href
                  ? 'text-navy bg-cloud'
                  : 'text-ink/60 hover:text-navy hover:bg-cloud'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
