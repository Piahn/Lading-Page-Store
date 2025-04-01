/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,css,js}", "./*.{html,css,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

