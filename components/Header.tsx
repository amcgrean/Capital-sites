'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const PHONE = '515-221-0743'
const PHONE_HREF = 'tel:5152210743'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/catering', label: 'Catering' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-espresso shadow-lg">
      {/* ── Italian flag accent strip ────────────────────────────── */}
      <div className="flex h-1">
        <div className="flex-1 bg-[#009246]" />
        <div className="flex-1 bg-[#F0EBE0]" />
        <div className="flex-1 bg-[#CE2B37]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo / Brand ─────────────────────────────────────── */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-cream text-xl italic leading-tight group-hover:text-gold transition-colors duration-150">
              A Taste of Italy
            </span>
            <span className="font-sans text-gold/60 text-[9px] tracking-[0.2em] uppercase mt-0.5">
              Family Deli &amp; Market &nbsp;·&nbsp; Est.&nbsp;1996
            </span>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm font-medium transition-colors duration-150 ${
                  pathname === href
                    ? 'text-gold underline underline-offset-4'
                    : 'text-cream/60 hover:text-cream'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* ── Tap-to-call ────────────────────────────────────── */}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 border border-gold/40 text-gold font-sans font-semibold text-sm px-4 py-2 hover:bg-gold hover:text-espresso transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <PhoneIcon />
              <span className="hidden sm:inline">{PHONE}</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* ── Mobile hamburger ───────────────────────────────── */}
            <button
              className="md:hidden p-2 text-cream/70 hover:text-cream focus:outline-none focus:ring-2 focus:ring-cream"
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
          className="md:hidden bg-espresso border-t border-gold/20"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 font-sans text-sm font-medium border-b border-gold/10 transition-colors duration-150 ${
                pathname === href
                  ? 'text-gold bg-black/20'
                  : 'text-cream/60 hover:text-cream hover:bg-black/20'
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

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
