import defaultTheme from 'tailwindcss/defaultTheme'

export const config = {
  colors: [
    // https://paletton.com/#uid=43p0u0kmaGWbLTAhwNgqFAFwxuh
    { // 0 - Color complementary
      lighter: '#FFD1A1',
      light: '#FFBB73',
      DEFAULT: '#FFA94E',
      dark: '#FF972A',
      darker: '#F17C00',
    },
    { // 1 - Color principal
      lighter: '#97D5E9',
      light: '#65BAD6',
      DEFAULT: '#41A3C3',
      dark: '#238DB0',
      darker: '#238DB0',
    },
    { // 2 - Color secondary
      lighter: '#FFE3A1',
      light: '#FFD673',
      DEFAULT: '#FFCB4E',
      dark: '#FFC02A',
      darker: '#F1AA00',
    },
    { // 3 -Color tertiary
      lighter: '#FFB0A1',
      light: '#FF8973',
      DEFAULT: '#FF694E',
      dark: '#FF4B2A',
      darker: '#F12500',
    },
  ],
  simpleColors: {
    white: '#ffffff',      // Blanco
    black: '#111111',       // Negro
  },
  empresa: {
    name: "Ideas Propias",
    direccion: "",
    email: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
  },
  images: {
    logo: [],
    index: [],
  },
  servicios: [ // TODO pasar a "Markdown"
    {
      title: "Disertación",
      subtitle: "Detalles",
      img: "/Icono.svg",
      url: "#",
    },
    {
      title: "Asistencia",
      subtitle: "Detalles",
      img: "/Icono.svg",
      url: "#",
    },
    {
      title: "Rescate",
      subtitle: "Detalles",
      img: "/Icono.svg",
      url: "#",
    },
  ],
  blog: "Markdown",
}

export const tailwindExtend = {
  fontFamily: {
    title: ['Francois One', ...defaultTheme.fontFamily.sans],
    subtitle: ['Poiret One', ...defaultTheme.fontFamily.sans],
  },
  colors: {
    primary: config.colors[1],
    secondary: config.colors[2],
    tertiary: config.colors[3],
    complementary: config.colors[0],
    white: config.simpleColors.white,
    black: config.simpleColors.black,
  },
  boxShadow: {
    // Resplandor
    'glow': '0 0 15px rgba(0, 0, 0, 0.7)',
    // Sombra abajo a la derecha
    'bottom': '4px 4px 10px rgba(0, 0, 0, 0.3)',
    // Sombra combinada (abajo a la derecha negra y arriba a la izquierda blanca)
    'double': '4px 4px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(255, 255, 255, 0.5)',
  },
  height: {
    "104": "26rem",
    "112": "28rem",
    "120": "30rem",
    "128": "32rem",
    "136": "34rem",
    "144": "36rem",
  }
}