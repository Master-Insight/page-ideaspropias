import typography from '@tailwindcss/typography'
import animations from '@midudev/tailwind-animations'
//import defaultTheme from 'tailwindcss/defaultTheme'
import {tailwindExtend} from './config'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: tailwindExtend,
  },
  plugins: [typography, animations],
}
