/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html","./src/input.css"
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FDD835',
          500: '#FBC02D',
          600: '#F9A825',
          700: '#F57F17',
          800: '#F57F17',
          900: '#FF6F00',
        },
      },
    },
  },
  plugins: [],
}
