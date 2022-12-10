/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCond: ['Barlow Condensed', 'sans-serif'],
        belleFair: ['Bellefair', 'serif']
      },
      colors: {
        blue_900: '#0B0D17',
        violet_100: '#D0D6F9'
      },
      screens:{
        lg:'1440px'
      }
    }
  },
  plugins: []
}
