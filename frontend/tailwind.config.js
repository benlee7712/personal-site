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
    colors: {
      coral: '#FF6F5F',
      lime: '#5FFF6F',
      lapis: '#6F5FFF',
    },
    extend: {},
  },
  plugins: [],
}
