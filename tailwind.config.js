/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./home.html'],
  theme: {
    extend: {fontFamily: {
        custom: ['"Great Vibes"', 'cursive'],
        Tangerine: ['Tangerine', 'cursive'],
         Play: ['Playball', 'cursive'],
         Galada: ['Galada', 'cursive'], // Use double quotes for font names with spaces
      },},
  },
  plugins: [],
}

