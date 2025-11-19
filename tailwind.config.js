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
        // Primary brand colors - Professional
        'brand-primary': '#3B82F6', // Blue 500
        'brand-secondary': '#0EA5E9', // Sky 500
        'brand-light': '#EFF6FF', // Blue 50
        'neutral-dark': '#0F172A', // Slate 900
        'neutral-medium': '#334155', // Slate 700
        'neutral-light': '#64748B', // Slate 500
        'neutral-bg': '#F8FAFC', // Slate 50
        'success': '#10B981', // Emerald 500
        'warning': '#F59E0B', // Amber 500
        'error': '#EF4444', // Red 500
        'gradient-start': '#3B82F6',
        'gradient-mid': '#0EA5E9',
        'gradient-end': '#6366F1', // Indigo 500
        'warm-bg': '#F1F5F9', // Slate 100
        'warm-text': '#1E293B', // Slate 800
        'medium-text': '#475569', // Slate 600
        'light-text': '#94A3B8', // Slate 400
        'dark-bg': '#020617', // Slate 950
        'warm-card': '#FFFFFF',
        'brand-pink': '#8B5CF6', // Violet 500 (Accent)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'], // For Headings if needed
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      }
    },
  },
  plugins: [],
}