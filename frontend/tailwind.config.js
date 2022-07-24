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
    fontSize: {
      'xs': ['0.75rem', '1rem'],
      'sm': ['0.875rem', '1.25rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.75rem', '2rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '3.25rem'],
      '6xl': ['3.75rem', '1.25'],
    },
    colors: {
      coral: '#FF6F5F',
      lime: '#5FFF6F',
      lapis: '#6F5FFF',
      slate: '#222',
    },
    extend: {},
  },
  plugins: [],
}
