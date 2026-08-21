/**
 * Central brand + contact constants for Cecilia's Home.
 * Single source of truth so pages, header, footer, and metadata stay in sync.
 * (Multi-tenant framework: swap these values to re-skin for another client.)
 */
export const BRAND = {
  name: "Cecilia's Home",
  tagline: 'A home. A family. A future.',
  motto: 'Where quality care has no boundary',
  promise: 'Supporting Individuals. Empowering Lives.',
  subhead: 'A Place of Care, Respect & Opportunity',

  phone: '816-217-2219',
  phoneHref: 'tel:8162172219',
  email: 'ceciliashomellc@gmail.com',

  street: '760 46th St.',
  cityStateZip: 'West Des Moines, IA 50265',
  mapsUrl:
    'https://maps.google.com/?q=760+46th+St,+West+Des+Moines,+IA+50265',

  url: 'https://capital-sites.vercel.app',
} as const
