/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // <-- Añade esta línea
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
