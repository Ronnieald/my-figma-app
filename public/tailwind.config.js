/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        zenkaku: ["Zen Kaku Gothic Antique", "sans-serif"],
      },
    },
  },
  plugins: [],
}
