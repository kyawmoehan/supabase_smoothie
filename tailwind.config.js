/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      red: colors.red,
      primary: '#12bca2',
      secondary: '#6d15df',
      background: '#f2f2f2',
    },
    extend: {},
  },
  plugins: [],
}

