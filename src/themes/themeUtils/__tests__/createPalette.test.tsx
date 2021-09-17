import createPalette from '../createPalette'
import { PALETTE_MODE } from 'themes/themTypes'

describe('createPalette', () => {
  it('Should return palette for light-mode', () => {
    const palette = createPalette()

    expect(palette).toEqual({
      ...lightPalette,
      mode: PALETTE_MODE.LIGHT,
    })

    expect(palette).toMatchSnapshot()
  })

  it('Should return palette for dark-mode', () => {
    const palette = createPalette({
      mode: PALETTE_MODE.DARK,
    })

    expect(palette).toEqual({
      ...darkPalette,
      mode: PALETTE_MODE.DARK,
    })

    expect(palette).toMatchSnapshot()
  })

  /**
   * For Color codes refer
   *  https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FF9800&secondary.color=2196F3
   *
   * where '#e65100' is orange[500]
   * where '#2196f3' is blue[500]
   */
  it('Should return palette for primary-orange & secondary-blue', () => {
    const palette = createPalette({
      primary: '#e65100',
      secondary: '#2196f3',
    })

    expect(palette).toEqual({
      ...primaryOrangeAndSecondaryBluePalette,
      mode: PALETTE_MODE.LIGHT,
    })

    expect(palette).toMatchSnapshot()
  })

  const commonPalette = {
    common: {
      black: '#000',
      white: '#fff',
    },
  }

  const lightPalette = {
    ...commonPalette,
    error: {
      contrastText: '#fff',
      dark: 'rgb(147, 32, 32)',
      light: 'rgb(219, 88, 88)',
      main: '#d32f2f',
    },
    info: {
      contrastText: '#fff',
      dark: 'rgb(1, 95, 146)',
      light: 'rgb(52, 159, 218)',
      main: '#0288d1',
    },
    primary: {
      contrastText: '#fff',
      dark: 'rgb(17, 82, 147)',
      light: 'rgb(71, 145, 219)',
      main: '#1976d2',
    },
    secondary: {
      contrastText: '#fff',
      dark: 'rgb(109, 27, 123)',
      light: 'rgb(175, 82, 191)',
      main: '#9c27b0',
    },
    success: {
      contrastText: '#fff',
      dark: 'rgb(32, 87, 35)',
      light: 'rgb(87, 151, 91)',
      main: '#2e7d32',
    },
    warning: {
      contrastText: '#fff',
      dark: 'rgb(165, 75, 1)',
      light: 'rgb(240, 137, 52)',
      main: '#ED6C02',
    },
  }

  const darkPalette = {
    ...commonPalette,
    error: {
      contrastText: '#fff',
      dark: 'rgb(170, 46, 37)',
      light: 'rgb(246, 104, 94)',
      main: '#f44336',
    },
    info: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      dark: 'rgb(28, 127, 172)',
      light: 'rgb(83, 196, 247)',
      main: '#29b6f6',
    },
    primary: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      dark: 'rgb(100, 141, 174)',
      light: 'rgb(166, 212, 250)',
      main: '#90caf9',
    },
    secondary: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      dark: 'rgb(144, 102, 151)',
      light: 'rgb(215, 168, 223)',
      main: '#ce93d8',
    },
    success: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      dark: 'rgb(71, 130, 74)',
      light: 'rgb(132, 200, 135)',
      main: '#66bb6a',
    },
    warning: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      dark: 'rgb(178, 116, 26)',
      light: 'rgb(255, 184, 81)',
      main: '#ffa726',
    },
  }

  const primaryOrangeAndSecondaryBluePalette = {
    ...commonPalette,
    error: {
      contrastText: '#fff',
      dark: 'rgb(147, 32, 32)',
      light: 'rgb(219, 88, 88)',
      main: '#d32f2f',
    },
    info: {
      contrastText: '#fff',
      dark: 'rgb(1, 95, 146)',
      light: 'rgb(52, 159, 218)',
      main: '#0288d1',
    },
    primary: {
      contrastText: '#fff',
      dark: 'rgb(161, 56, 0)',
      light: 'rgb(235, 115, 51)',
      main: '#e65100',
    },
    secondary: {
      contrastText: '#fff',
      dark: 'rgb(23, 105, 170)',
      light: 'rgb(77, 171, 245)',
      main: '#2196f3',
    },
    success: {
      contrastText: '#fff',
      dark: 'rgb(32, 87, 35)',
      light: 'rgb(87, 151, 91)',
      main: '#2e7d32',
    },
    warning: {
      contrastText: '#fff',
      dark: 'rgb(165, 75, 1)',
      light: 'rgb(240, 137, 52)',
      main: '#ED6C02',
    },
  }
})
