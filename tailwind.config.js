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
        // Primary brand colors - warm, vibrant palette
        'brand-primary': '#ef4444',     // Vibrant red
        'brand-secondary': '#dc2626',   // Darker red for hover states
        'brand-light': '#fef2f2',       // Light red background

        // Warm, modern color palette
        'accent-primary': '#f97316',    // Vibrant orange
        'accent-secondary': '#ea580c',  // Darker orange for hover states
        'accent-light': '#fff7ed',      // Light orange background

        'warm-bg': '#fef7f0',           // Warm light background
        'warm-card': '#ffffff',         // White cards
        'warm-text': '#1f2937',         // Dark text
        'medium-text': '#4b5563',       // Medium text
        'light-text': '#6b7280',        // Light text

        // Alternative brand colors
        'brand-purple': '#8b5cf6',      // Vibrant purple
        'brand-pink': '#ec4899',        // Vibrant pink
        'brand-blue': '#3b82f6',        // Vibrant blue
        'brand-teal': '#14b8a6',        // Vibrant teal

        // Gradients and highlights
        'gradient-start': '#f97316',
        'gradient-mid': '#ef4444',
        'gradient-end': '#ec4899',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Establece "Inter" como la fuente por defecto
      },
    },
  },
  plugins: [],
}