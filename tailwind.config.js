/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#059669',
        'primary-hover': '#10b981',
        bg: '#ecfdf5',
        text: '#064e3b',
      },
    },
  },
  plugins: [],
}