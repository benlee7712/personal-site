/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'humane': ['Humane'],
      'open': ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
