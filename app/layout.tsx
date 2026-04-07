import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'A Taste of Italy | Family Italian Deli & Market in Clive, Iowa',
    template: '%s | A Taste of Italy',
  },
  description:
    "Todd Ferin's family-owned Italian deli and market in Clive, Iowa. Fresh sandwiches made to order, Chicago beef, meatball subs, Graziano's sausage, and an Italian grocery counter since June 1996.",
  keywords: [
    'Italian deli',
    'Clive Iowa',
    'Chicago beef',
    'meatball sub',
    'Italian catering',
    'deli trays',
    'Graziano sausage',
    'Des Moines Italian food',
    'family owned deli Iowa',
    'Italian market Des Moines',
  ],
  openGraph: {
    siteName: 'A Taste of Italy',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
