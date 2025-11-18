/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
    "./src/components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#22c55e',   // Un verde vibrante
        'brand-secondary': '#16a34a', // Un verde más oscuro para hovers
        'brand-light': '#dcfce7',     // Un verde muy claro para fondos
        'neutral-dark': '#111827',    // Gris oscuro para títulos (clase: text-neutral-dark)
        'neutral-medium': '#6b7280',  // Gris medio para párrafos (clase: text-neutral-medium)
        'neutral-light': '#f9fafb',   // Gris muy claro para el fondo del body (clase: bg-neutral-light)

        'dark-bg': '#0d0c22',
        'dark-card': '#1a1936',
        'light-text': '#f0f0f0',
        'medium-text': '#a0a0a0',
        'neon-green': '#39FF14',
        'neon-cyan': '#22d3ee',
        'neon-magenta': '#d946ef',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Establece "Inter" como la fuente por defecto
      },
    },
  },
  plugins: [],
}