/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nuan-yellow': '#F9E2A8',
        'nuan-white': '#FEFDF8',
        'bg-cream': '#ebe4d6',
        'panel': '#f8f3e7',
        'text': '#2f2c2a',
        'muted': '#8e8677',
        'gold-1': '#cfb57a',
        'gold-2': '#a8884f',
        'ring-yellow': '#edd67a',
        'ring-green': '#9fb67b',
        'ring-pink': '#efb7d4',
        'ring-blue': '#afc4e8',
        'primary': '#F9C74F',
        'primary-dark': '#C8A000',
      },
      boxShadow: {
        'nuan': '0 10px 20px rgba(77,58,29,.09)',
        'hero': '0 18px 48px rgba(72,58,34,.18), 0 6px 16px rgba(72,58,34,.1)',
        'card': '0 2px 10px rgba(80,60,0,.06)',
        'hover': '0 16px 26px rgba(77,58,29,.14)',
        'btn': '0 4px 14px rgba(200,160,0,.25)',
      },
      borderRadius: {
        '2xl': '1.375rem', /* 22px */
        '3xl': '1.5rem', /* 24px */
        '4xl': '1.875rem', /* 30px */
        'pill': '9999px',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
