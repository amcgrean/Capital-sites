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
        // Primary brand — deep, trustworthy navy (logo + wordmark)
        'navy':        '#1B2E63',
        'navy-dark':   '#122048',
        'navy-deep':   '#0D1836', // footer / darkest sections
        'navy-light':  '#2A4184',
        // Light-blue accent — "Supporting Individuals. Empowering Lives."
        'sky':         '#2E6FB0',
        'sky-light':   '#4A8AC9',
        // Warm amber/gold accent — tagline, dividers, highlights
        'gold':        '#E58A2E',
        'gold-dark':   '#C9721C',
        'gold-light':  '#F4A94A',
        // Calm sage green — nature, "Respect", subtle accents
        'sage':        '#3E7C3F',
        'sage-light':  '#5A9E5B',
        // Soft, airy backgrounds
        'cloud':       '#F4F7FB',
        'cloud-dark':  '#E7EEF6',
        // Body text
        'ink':         '#1F2A44',
      },
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:   ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
