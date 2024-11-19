import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // https://paletton.com/#uid=43p0u0kmaGWbLTAhwNgqFAFwxuh
        primary: {
          lighter: '#97D5E9',
          light: '#65BAD6',
          DEFAULT: '#41A3C3', // Color principal
          dark: '#238DB0',
          darker: '#238DB0',
        },
        complementary: {
          lighter: '#FFD1A1',
          light: '#FFBB73',
          DEFAULT: '#FFA94E', // Color complementary
          dark: '#FF972A',
          darker: '#F17C00',
        },
        secondary: {
          lighter: '#FFE3A1',
          light: '#FFD673',
          DEFAULT: '#FFCB4E', // Color secondary
          dark: '#FFC02A',
          darker: '#F1AA00',
        },
        tertiary: {
          lighter: '#FFB0A1',
          light: '#FF8973',
          DEFAULT: '#FF694E', // Color tertiary
          dark: '#FF4B2A',
          darker: '#F12500',
        },
        white: '#ffffff',      // Blanco
        black: '#111111',      // Negro
      },
      fontFamily: {
        title: ['Francois One', ...defaultTheme.fontFamily.sans],
        subtitle: ['Poiret One', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
}