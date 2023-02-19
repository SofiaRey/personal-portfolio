/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violeta: "#4228AC",
        violetaDarker: "#39219A",
        amarillo: "#DDD518",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans'],
        'loved': ['Loved by the King', 'cursive'],
      }, 
    },
  },
  plugins: [],
}
