/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0D1117',
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
