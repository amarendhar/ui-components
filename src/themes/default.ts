import { ObjType } from 'types'
import { createPalette } from './themeUtils'

export const colors = {
  white: {
    100: '#ffffff',
    80: '#ecedef',
  },
  blue: {
    100: '#115293',
    80: '#1976d2',
  },
  green: {
    100: '#367f39',
    80: '#4caf50',
  },
  orange: {
    100: '#cb7d09',
    80: '#ff9800',
  },
  red: {
    100: '#9a0036',
    80: '#dc004e',
  },
  grey: {
    100: '#808080',
    80: '#969494',
  },
  silver: {
    100: '#c5c2c2',
    80: '#e0e0e0',
    60: '#efefef',
  },
  black: {
    100: '#000000',
    80: '#484848',
  },
  yellow: {
    100: '#F8E831',
  },
  outline: {
    100: '#e0e0e0',
    80: 'transparent',
  },
}

export const space = {
  small: 5,
  medium: 10,
  large: 15,
}

export const fontSize = {
  small: 13,
  medium: 14,
  large: 15,
}

export const paddingFactor = {
  small: 4,
  medium: 6,
  large: 8,
}

export const breakpoints = {
  sm: 767, // Phones (767/75 i.e. 7.7 to 10.0 inch) -> "<=767 OR < 768"
  md: 768, // Tablets (>= 10 inch) -> ">= 768"
  lg: 992, // Laptops (>= 13 inch) -> ">= 992"
}

export const mediaQuery: ObjType = {
  sm: `@media (max-width: ${breakpoints.sm}px)`, // Phones "<=767 OR < 768"
  md: `@media (min-width: ${breakpoints.md}px)`, // Tablets ">= 768"
  lg: `@media (min-width: ${breakpoints.lg}px)`, // Laptops ">= 992"
  // ">=" i.e. for min-width's
  '>sm': `@media (min-width: 576px)`, // ">= 576"
  '>md': `@media (min-width: 768px)`, // ">= 768"
  '>lg': `@media (min-width: 992px)`, // ">= 992"
  // "<=" i.e. for max-width's
  '<sm': `@media (max-width: 767px)`, // "< 768"
  '<md': `@media (max-width: 991px)`, // "< 991"
  '<lg': `@media (max-width: 1199px)`, // "< 1200"
}

const palette = createPalette()

export const defaultTheme = {
  /**
   * Do not include custom-breakpoints like below,
   *  to avoid conflicts against breakpoints from styled-system npm,
   *  otherwise styled-system will throw error, and will not render UI in storybook.
   */
  // breakpoints,
  mediaQuery,
  space,
  fontSize,
  paddingFactor,
  colors,
  palette,
  default: {
    bg: colors.silver,
    border: colors.silver,
    text: colors.black,
    outline: {
      bg: colors.outline,
      border: colors.black,
      text: colors.black,
    },
  },
  primary: {
    bg: colors.blue,
    border: colors.blue,
    text: colors.white,
    outline: {
      bg: colors.outline,
      border: colors.blue,
      text: colors.blue,
    },
  },
  success: {
    bg: colors.green,
    border: colors.green,
    text: colors.white,
    outline: {
      bg: colors.outline,
      border: colors.green,
      text: colors.green,
    },
  },
  warning: {
    bg: colors.orange,
    border: colors.orange,
    text: colors.white,
    outline: {
      bg: colors.outline,
      border: colors.orange,
      text: colors.orange,
    },
  },
  danger: {
    bg: colors.red,
    border: colors.red,
    text: colors.white,
    outline: {
      bg: colors.outline,
      border: colors.red,
      text: colors.red,
    },
  },
  disabled: {
    bg: colors.silver,
    border: colors.silver,
    text: colors.black,
    outline: {
      bg: colors.outline,
      border: colors.silver,
      text: colors.black,
    },
  },
}
