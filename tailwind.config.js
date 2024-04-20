/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'opensans':['Open Sans', 'sans-serif'],
        'manrope':['Manrope', 'sans-serif'],
      },

      colors:{
        'green':'#65E4A3'

      }

    },
  },
  plugins: [],
}