import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

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

const BASE_URL = 'https://capital-sites.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'A Taste of Italy | Family Italian Deli & Market in Clive, Iowa',
    template: '%s | A Taste of Italy — Clive, Iowa',
  },
  description:
    "Todd Ferin's family-owned Italian deli and market in Clive, Iowa. Fresh sandwiches made to order, Chicago beef, meatball subs, Graziano's sausage, and an Italian grocery counter since June 1996.",
  keywords: [
    'Italian deli Clive Iowa',
    'Italian deli Des Moines',
    'Chicago beef sandwich Iowa',
    'meatball sub Clive Iowa',
    'Italian catering Des Moines',
    'deli trays Clive Iowa',
    'Graziano sausage sandwich',
    'family owned Italian deli Iowa',
    'Italian market Des Moines',
    'best Italian food Des Moines',
    'A Taste of Italy Clive',
    'Todd Ferin deli',
  ],
  openGraph: {
    siteName: 'A Taste of Italy',
    locale: 'en_US',
    type: 'website',
    title: 'A Taste of Italy | Family Italian Deli & Market in Clive, Iowa',
    description:
      "Todd Ferin's family-owned Italian deli and market in Clive, Iowa. Fresh sandwiches, Chicago beef, meatball subs, Graziano's sausage, and an Italian grocery counter since 1996.",
    url: BASE_URL,
  },
  twitter: {
    card: 'summary',
    title: 'A Taste of Italy | Italian Deli & Market — Clive, Iowa',
    description:
      "Family-owned Italian deli in Clive, Iowa since 1996. Chicago beef, meatball subs, Graziano's sausage, deli trays, and an Italian grocery counter.",
  },
  alternates: {
    canonical: BASE_URL,
  },
}

// LocalBusiness + Restaurant structured data — site-wide
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'FoodEstablishment', 'LocalBusiness'],
  '@id': `${BASE_URL}/#business`,
  name: 'A Taste of Italy',
  description:
    "Family-owned Italian deli and market in Clive, Iowa. Fresh sandwiches made to order — Chicago beef, hand-rolled meatballs, Graziano's sausage, and an Italian grocery counter since June 1, 1996.",
  url: BASE_URL,
  telephone: '+1-515-221-0743',
  priceRange: '$$',
  servesCuisine: ['Italian', 'Sandwiches', 'Deli'],
  image: `${BASE_URL}/og-image.jpg`,
  founder: {
    '@type': 'Person',
    name: 'Todd Ferin',
  },
  foundingDate: '1996-06-01',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8421 University Blvd Suite D',
    addressLocality: 'Clive',
    addressRegion: 'IA',
    postalCode: '50325',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.604,
    longitude: -93.758,
  },
  hasMap: 'https://maps.google.com/?q=8421+University+Blvd+Suite+D,+Clive+IA+50325',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:30',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:30',
      closes: '17:00',
    },
  ],
  sameAs: ['https://www.facebook.com/atasteofitalyclive'],
  areaServed: [
    { '@type': 'City', name: 'Clive', containedInPlace: { '@type': 'State', name: 'Iowa' } },
    { '@type': 'City', name: 'Des Moines', containedInPlace: { '@type': 'State', name: 'Iowa' } },
    { '@type': 'City', name: 'West Des Moines', containedInPlace: { '@type': 'State', name: 'Iowa' } },
    { '@type': 'City', name: 'Urbandale', containedInPlace: { '@type': 'State', name: 'Iowa' } },
    { '@type': 'City', name: 'Waukee', containedInPlace: { '@type': 'State', name: 'Iowa' } },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'A Taste of Italy',
  url: BASE_URL,
  publisher: {
    '@id': `${BASE_URL}/#business`,
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
        <JsonLd schema={localBusinessSchema} />
        <JsonLd schema={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
