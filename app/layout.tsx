import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
})

export const metadata: Metadata = {
  title: {
    default: 'A Taste of Italy | Authentic Italian Deli in Clive, Iowa',
    template: '%s | A Taste of Italy',
  },
  description:
    'Authentic Italian deli in Clive, Iowa serving Chicago beef, meatball subs, Graziano\'s sausage, Italian hoagies, and deli trays since 1996.',
  keywords: [
    'Italian deli',
    'Clive Iowa',
    'Chicago beef',
    'meatball sub',
    'Italian catering',
    'deli trays',
    'Graziano sausage',
    'Des Moines Italian food',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
