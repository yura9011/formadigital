/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4f46e5',   // Un violeta vibrante (clase: bg-brand-primary)
        'brand-secondary': '#4338ca', // Un violeta más oscuro para hovers (clase: hover:bg-brand-secondary)
        'brand-light': '#e0e7ff',     // Un violeta muy claro para fondos (clase: bg-brand-light)
        'neutral-dark': '#111827',    // Gris oscuro para títulos (clase: text-neutral-dark)
        'neutral-medium': '#6b7280',  // Gris medio para párrafos (clase: text-neutral-medium)
        'neutral-light': '#f9fafb',   // Gris muy claro para el fondo del body (clase: bg-neutral-light)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Establece "Inter" como la fuente por defecto
      },
    },
  },
  plugins: [],
}