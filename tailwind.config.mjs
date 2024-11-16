import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'primary-blue': '#41a4c3',
      'light-blue': '#60b7cf',
      'dark-blue': '#32859f',
      'details-gold': '#c7ae6a',
      'secondary-gray': '#e6e6e6',
    },
    extend: {},
  },
  plugins: [
    typography,
    require('@tailwindcss/typography'),
  ],
}
