import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand — deep wine red (not bright chain-restaurant red)
        'italian-red':       '#6B1212',
        'italian-red-dark':  '#4A0C0C',
        'italian-red-light': '#8B2020',
        // Backgrounds — warm parchment / aged paper
        'cream':             '#F5EBD0',
        'cream-dark':        '#EDD8B0',
        'parchment':         '#F5EBD0',
        'parchment-dark':    '#EDD8B0',
        // Deep Italian green (think fresh herbs, Italian flag, vintage signage)
        'olive':             '#1C3D24',
        'olive-light':       '#2A5636',
        'basil':             '#1C3D24',
        'basil-dark':        '#112619',
        // Antique gold — for borders, accents, prices, ornaments
        'gold':              '#B8860B',
        'gold-light':        '#D4A520',
        // Very dark espresso — for header, footer, dark sections
        'espresso':          '#1A0804',
        // Text
        'charcoal':          '#1C1C1C',
      },
      fontFamily: {
        serif:   ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
