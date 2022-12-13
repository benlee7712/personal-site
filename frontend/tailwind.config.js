/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
      'cormorant': ['Cormorant Garamond', 'serif'],
      'outfit': ['Outfit', 'sans-serif'],
    },
    fontSize: {
      '2xs': ['0.6rem', '0.75rem'],
      'xs': ['0.75rem', '1rem'],
      'sm': ['0.875rem', '1.25rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.5rem'],
      'xl': ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '1.75rem'],
      '3xl': ['2rem', '2rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '3.25rem'],
      '6xl': ['3.75rem', '4rem'],
      '7xl': ['5rem', '5rem'],
      '8xl': ['6rem', '6.5rem'],
      '10xl': ['10rem', '11rem'],
    },
    colors: {
      coral: '#FF6F5F',
      dusty_red: '#E13F3F',
      lime: '#5FFF6F',
      lapis: '#6F5FFF',
      slate: '#222',
      white: '#FFF',
    },
    extend: {},
  },
  plugins: [],
}
