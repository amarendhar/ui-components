export const colors = {
  white: {
    '100': '#ffffff',
    '80': '#ecedef',
    '60': '#dadde0',
    '40': '#b6bbc1',
    '20': '#9198a3',
    '0': '#6d7684',
  },
  blue: {
    '100': '#1B3B62',
    '80': '#355d90',
    '60': '#3c70b3',
    '40': '#2a4465',
    '20': '#304763',
    '0': '#35475d',
  },
  green: {
    '100': '#038080',
    '80': '#1b8c8c',
    '60': '#35a0a0',
    '40': '#63b9b9',
    '20': '#91d2d2',
    '0': '#c2eaea',
  },
  orange: {
    '100': '#f0ad4e',
    '80': '#cc974b',
    '60': '#d2a463',
    '40': '#b79566',
    '20': '#bb9f77',
    '0': '#bba687',
  },
  red: {
    '100': '#A34249',
    '80': '#AF555C',
    '60': '#b5757a',
    '40': '#b98387',
    '20': '#b78e91',
    '0': '#b78e91',
  },
  grey: {
    '100': '#808080',
    '80': '#969494',
    '60': '#a9a7a7',
    '40': '#bdbbbb',
    '20': '#cabcbc',
    '0': '#ded6d6',
  },
  yellow: {
    '100': '#F8E831',
  },
}

export const space = {
  small: 5,
  medium: 10,
  large: 15,
}

export const breakpoints = {
  sm: 767, // Phones (767/75 i.e. 7.7 to 10.0 inch) -> "<=767 OR < 768"
  md: 768, // Tablets (>= 10 inch) -> ">= 768"
  lg: 992, // Laptops (>= 13 inch) -> ">= 992"
}

export const mediaQuery = {
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

export const defaultTheme = {
  breakpoints,
  mediaQuery,
  space,
  colors,
  default: {
    bg: colors.white,
    text: colors.grey,
  },
  primary: {
    bg: colors.blue,
    text: colors.white,
  },
  success: {
    bg: colors.green,
    text: colors.white,
  },
  warning: {
    bg: colors.orange,
    text: colors.white,
  },
  danger: {
    bg: colors.red,
    text: colors.white,
  },
}
