import defaultTheme from 'tailwindcss/defaultTheme'


export const config = {
  // Gama de colores
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
  // Colroes fijos
  simpleColors: {
    white: '#ffffff',      // Blanco
    black: '#111111',       // Negro
  },
  gradient: {
    primary: "linear-gradient(317deg, rgba(35,141,176,1) 0%, rgba(65,163,195,1) 35%, rgba(65,163,195,1) 68%, rgba(151,213,233,1) 100%)",
    complementary: "linear-gradient(317deg, rgba(241,124,0,1) 0%, rgba(255,169,78,1) 35%, rgba(255,169,78,1) 68%, rgba(151,213,233,1) 100%)"
  },
  // Información de la empresa (se autocompleta en footer y enlace redes sociales)
  empresa: {
    name: "Ideas Propias",
    descripcion: "Consultora integral de negocios que brinda asesoramiento a empresas, empresarios y emprendedores con la visión y el deseo de impulsar el crecimiento de sus negocios.",
    direccion: "dirección",
    email: "email@email.com",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/plan.x5/",
    facebook: "https://www.facebook.com/PlanX5/",
    youtube: "https://www.youtube.com/channel/UCV4sFnwo1RnMLCIT8xPZ7Yg",
    whatsapp: "351-1234567",
  },
  // Imagenes. se clasifica segun la pagina 
  images: {
    logo: [
      "/images/logo/ideas-propias-figura-logo.png",       // 0- figura                PNG
      "/images/logo/ideas-propias-figura-logo.svg",       // 1- figura                SVG *
      "/images/logo/ideas-propias-logo-plano.png",        // 2- Logo horizontal       PNG
      "/images/logo/ideas-propias-logo-plano.svg",        // 3- Logo horizontal       SVG
      "/images/logo/ideas-propias-logo-plano-negro.svg",  // 4- Logo horizontal Negro SVG
      "/images/logo/ideas-propias-logo.png",              // 5- Logo vertical         PNG
      "/images/logo/ideas-propias-logo.svg",              // 6- Logo vertical         SVG
      "/images/logo/ideas-propias-logo-negro.svg",        // 7- Logo vertical Negro   SVG
    ],
    index: [
      "/images/hero_inicio.jpeg", // pos 0 Hero
    ],
    about: [
      "/images/Diego-presentando.jpg", // pos 0 Hero
      "/images/Escuchando.jpg", // pos 1 fondo historia
      "/images/Exponiendo2.jpg", // pos 2 historia
    ],
    services: [
      "/images/capacitacion.jpeg", // pos 0 Hero
    ],
    contact: [
      "/images/Conversacion.jpeg", // pos 0 Hero
    ],
  },
  // Objeto que detalle servicios prestados
  servicios: "Markdown",
  // Equipo
  team: "Markdown",
  // blog
  blog: "Markdown",
}

// Coniguracion de extensión de Tailwind
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

/*
export const tailwindSizes = {
  sm: 'w-16 h-16',      // Small (64px)
  md: 'w-32 h-32',      // Medium (128px)
  lg: 'w-48 h-48',      // Large (192px)
  xl: 'w-64 h-64',      // Extra Large (256px)
  '2xl': 'w-80 h-80',   // 2X Large (320px)
  '3xl': 'w-96 h-96',   // 3X Large (384px)
  full: 'w-full h-full', // Full Size (100%)
};
*/