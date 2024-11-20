
export const config = {
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
  servicios: "Markdown",
  blog: "Markdown",
}

export const tailwindExtend = {
  fontFamily: {
    title: ['Francois One', ...defaultTheme.fontFamily.sans],
    subtitle: ['Poiret One', ...defaultTheme.fontFamily.sans],
  },
  colors: {
    primary: config.colors.primary,
    secondary: config.colors.secondary,
    tertiary: config.colors.tertiary,
    complementary: config.colors.complementary,
    white: config.colors.white,
    black: config.colors.black,
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