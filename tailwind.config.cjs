/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'raleway' : ['Raleway', 'sans-serif']
      },
      colors : {
        'primary' : '#38B000'
      }
    },
  },
  plugins: [],
}
