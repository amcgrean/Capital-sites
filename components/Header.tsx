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
    <header className="sticky top-0 z-50 bg-italian-red shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-white text-lg leading-5">
              A Taste of Italy
            </span>
            <span className="font-sans text-red-200 text-xs tracking-wide uppercase">
              Fresh Sandwiches · Clive, Iowa
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm font-medium transition-colors duration-150 ${
                  pathname === href
                    ? 'text-white underline underline-offset-4'
                    : 'text-red-100 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Tap-to-call — always visible */}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-white text-italian-red font-sans font-semibold text-sm px-4 py-2 rounded-sm hover:bg-cream-dark transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-2 p-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-italian-red-dark border-t border-red-800">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 font-sans text-sm font-medium border-b border-red-800 transition-colors duration-150 ${
                pathname === href
                  ? 'text-white bg-italian-red'
                  : 'text-red-100 hover:text-white hover:bg-italian-red'
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
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
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
