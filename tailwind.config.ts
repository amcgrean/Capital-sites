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
        'italian-red': '#8B1A1A',
        'italian-red-dark': '#6B1212',
        'italian-red-light': '#A82020',
        'cream': '#FAF7F2',
        'cream-dark': '#F0EBE0',
        'olive': '#4A5240',
        'olive-light': '#5C6650',
        'charcoal': '#1C1C1C',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
