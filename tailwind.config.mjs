import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // colors: {
    //   'primary-blue': '#41a4c3',
    //   'light-blue': '#60b7cf',
    //   'dark-blue': '#32859f',
    //   'details-gold': '#c7ae6a',
    //   'secondary-gray': '#e6e6e6',
    // },
    // fontFamily: {
    //   title: ['Francois One', ...defaultTheme.fontFamily.sans],
    //   subtitle: ['Poiret One', ...defaultTheme.fontFamily.sans],
    // },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#41a4c3',
          light: '#60b7cf',
          dark: '#32859f',
        },
        'details': '#c7ae6a',
        'gray': '#e6e6e6',
        'white': '#ffffff',
        'black': '#111111'
      },
      fontFamily: {
        title: ['Francois One', ...defaultTheme.fontFamily.sans],
        subtitle: ['Poiret One', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
}
/*
  bg-primary para el color principal.
  bg-primary-light o text-primary-dark para variaciones.
*/