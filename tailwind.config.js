/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4043FF",
        red: '#FF6059',
        gold: "#FFD626",
        green: "#33FF7C",
      }
    },
  },
  plugins: [],
}
