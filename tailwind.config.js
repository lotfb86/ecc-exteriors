/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#032162',
          light: '#0a3a9e',
          dark: '#021847',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          light: '#464648',
        },
        copper: {
          DEFAULT: '#B87333',
          light: '#D4955A',
          dark: '#8B5A2B',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
