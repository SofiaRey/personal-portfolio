/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violetaLight: "#5232D3",
        violeta: "#4228AC",
        violetaDarker: "#39219A",
        amarillo: "#DDD518",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans'],
        'patrick-hand': ['Patrick Hand', 'cursive'],
      }, 
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
