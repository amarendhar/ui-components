import { Theme } from './themTypes'

export const space: Theme['space'] = {
  sm: 5,
  md: 10,
  lg: 15,
}

export const fontSizes: Theme['fontSizes'] = {
  sm: 13,
  md: 14,
  lg: 15,
}

export const fontWeights: Record<'regular' | 'bold', number> = {
  regular: 400,
  bold: 600,
}

export const radii: Theme['radii'] = {
  sm: 3,
  md: 6,
  lg: 10,
}

const shadows: Record<'header' | 'box', string> = {
  header: '-5px 5px 5px -5px rgb(0 0 0)',
  box: '0px 3px 5px 0px rgb(0 0 0 / 20%)',
}

// ToDo: Remove this, this is old code
export const breakpoints: Theme['breakpoints'] = {
  xs: 600, // <= 600, Extra small devices (phones, 600px and down)
  sm: 600, // >= 600, Small devices (portrait tablets and large phones, 600px and up)
  md: 768, // >= 768, Medium devices (landscape tablets, 768px and up)
  lg: 992, // >= 1024, Large devices (laptops/desktops, 992px and up)
  xl: 1200, // >= 1200, Extra large devices (large laptops and desktops, 1200px and up)
}

export const mediaQuery: Theme['mediaQuery'] = {
  xs: `@media (min-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  '<xs': `@media (max-width: ${breakpoints.xs}px)`,
  '<sm': `@media (max-width: ${breakpoints.sm}px)`,
  '<md': `@media (max-width: ${breakpoints.md}px)`,
  '<lg': `@media (max-width: ${breakpoints.lg}px)`,
  '<xl': `@media (max-width: ${breakpoints.xl}px)`,
  get xsQuery() {
    return this.xs.replace('@media', '')
  },
  get smQuery() {
    return this.sm.replace('@media', '')
  },
  get mdQuery() {
    return this.md.replace('@media', '')
  },
  get lgQuery() {
    return this.lg.replace('@media', '')
  },
  get xlQuery() {
    return this.xl.replace('@media', '')
  },
  get '<xsQuery'() {
    return this['<xs'].replace('@media', '')
  },
  get '<smQuery'() {
    return this['<sm'].replace('@media', '')
  },
  get '<mdQuery'() {
    return this['<md'].replace('@media', '')
  },
  get '<lgQuery'() {
    return this['<lg'].replace('@media', '')
  },
  get '<xlQuery'() {
    return this['<xl'].replace('@media', '')
  },
}

const defaultTheme: Omit<Theme, 'palette'> = {
  space,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  /**
   * Do not include custom-breakpoints like below, when using styled-system library
   *  to avoid conflicts against breakpoints from styled-system npm,
   *  otherwise styled-system will throw error, and will not render UI in storybook.
   */
  // breakpoints,
  breakpoints,
  mediaQuery,
}

export default defaultTheme
