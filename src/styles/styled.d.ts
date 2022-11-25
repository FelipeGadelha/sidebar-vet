import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      text: string,
      bg: string,
      panel: string,
      white: string,
      black: string,
      "gray-50": string,
      "gray-100": string,
      "gray-200": string,
      "gray-300": string,
      "gray-400": string,
      "gray-500": string,
      "gray-600": string,
      "gray-700": string,
      "gray-800": string,
      "gray-900": string,
      "green-50": string,  
      "green-100": string,
      "green-200": string,
      "green-300": string,
      "green-400": string,
      "green-500": string,
      "green-600": string,
      "green-700": string,
      "green-800": string,
      "green-900": string,
      "red-50": string,
      "red-100": string,
      "red-200": string,
      "red-300": string,
      "red-400": string,
      "red-500": string,
      "red-600": string,
      "red-700": string,
      "red-800": string,
      "red-900": string
    },
    space: {
      px: string,
      1: string,
      2: string,
      3: string,
      4: string,
      5: string,
      6: string,
      7: string,
      8: string,
      10: string,
      12: string,
      16: string,
      20: string,
      40: string,
      64: string,
      80: string
    }
    fontSize: {
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
      '6xl': string
      '7xl': string
      '8xl': string
      '9xl': string
    },
    media: {
      "mobile-s": string,
      "mobile-m": string,
      "mobile-l": string,
      tablet: string,
      laptop: string,
      "laptop-l": string,
      desktop: string
    },
    layout: {
      "sidebar-width": string,
      "sidebar-compact-width": string,
      "sidebar-close-width": string
    }
  }
}
