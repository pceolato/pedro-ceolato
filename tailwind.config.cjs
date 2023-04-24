/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        body: 'var(--color-bg-body)',
        card: 'var(--color-bg-card)',
      },
      textColor: {
        title: 'var(--color-text-title)',
      },
      colors: {
        background: '#0D1117',
        bgOpacity: '#000000BF',
        link: '#00B2FF',
        gray: {
          400: '#878787',
          900: '#010409',
        },
      },
    },
  },
  plugins: [],
}
