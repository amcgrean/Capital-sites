import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { BRAND } from '@/lib/brand'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  weight: ['500', '600', '700'],
})

const BASE_URL = BRAND.url

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Cecilia's Home | Supportive Group Home in West Des Moines, Iowa",
    template: "%s | Cecilia's Home — West Des Moines, Iowa",
  },
  description:
    "Cecilia's Home is a loving, supportive group home in West Des Moines, Iowa, providing a safe, structured environment that promotes independence, dignity, and respect. 24/7 person-centered care from professional, compassionate staff.",
  keywords: [
    'group home West Des Moines Iowa',
    'supportive living Iowa',
    'residential care Des Moines',
    '24/7 supportive care Iowa',
    'person-centered support',
    'disability support home Iowa',
    'assisted living West Des Moines',
    "Cecilia's Home",
    'compassionate care Iowa',
    'independent living support',
  ],
  openGraph: {
    siteName: "Cecilia's Home",
    locale: 'en_US',
    type: 'website',
    title: "Cecilia's Home | Supportive Group Home in West Des Moines, Iowa",
    description:
      'A loving and supportive group home for all people. We provide a safe, structured environment that promotes independence, dignity, and respect.',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cecilia's Home | Supportive Group Home — West Des Moines, Iowa",
    description:
      'Supporting individuals, empowering lives. Safe, comfortable living with 24/7 person-centered care in West Des Moines, Iowa.',
  },
  alternates: {
    canonical: BASE_URL,
  },
}

// Organization / LocalBusiness structured data — site-wide
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Organization'],
  '@id': `${BASE_URL}/#organization`,
  name: "Cecilia's Home",
  alternateName: "Cecilia's Home LLC",
  description:
    "A loving and supportive group home for all people, providing a safe, structured environment that promotes independence, dignity, and respect in West Des Moines, Iowa.",
  url: BASE_URL,
  telephone: BRAND.phoneHref.replace('tel:', '+1-'),
  email: BRAND.email,
  slogan: 'A home. A family. A future.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND.street,
    addressLocality: 'West Des Moines',
    addressRegion: 'IA',
    postalCode: '50265',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'West Des Moines', containedInPlace: { '@type': 'State', name: 'Iowa' } },
    { '@type': 'City', name: 'Des Moines', containedInPlace: { '@type': 'State', name: 'Iowa' } },
    { '@type': 'City', name: 'Clive', containedInPlace: { '@type': 'State', name: 'Iowa' } },
    { '@type': 'City', name: 'Urbandale', containedInPlace: { '@type': 'State', name: 'Iowa' } },
  ],
  knowsAbout: [
    'Supportive living',
    'Residential care',
    'Person-centered support',
    '24/7 supervised care',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: "Cecilia's Home",
  url: BASE_URL,
  publisher: { '@id': `${BASE_URL}/#organization` },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
