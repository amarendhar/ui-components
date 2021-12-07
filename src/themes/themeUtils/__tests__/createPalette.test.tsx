import createPalette from '../createPalette'
import { PALETTE_MODE } from 'themes/themTypes'

describe('createPalette', () => {
  it('Should return palette with default light-mode', () => {
    const palette = createPalette()

    expect(palette).toEqual({
      ...lightPalette,
      mode: PALETTE_MODE.LIGHT,
    })

    expect(palette).toMatchSnapshot()
  })

  it('Should return palette with default dark-mode', () => {
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
    default: {
      main: '#e0e0e0',
      light: '#9e9e9e',
      dark: '#d5d5d5',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
      main: '#1976d2',
      light: 'rgb(71, 145, 219)',
      dark: 'rgb(17, 82, 147)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0',
      light: 'rgb(175, 82, 191)',
      dark: 'rgb(109, 27, 123)',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      light: 'rgb(219, 88, 88)',
      dark: 'rgb(147, 32, 32)',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: 'rgb(52, 159, 218)',
      dark: 'rgb(1, 95, 146)',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: 'rgb(87, 151, 91)',
      dark: 'rgb(32, 87, 35)',
      contrastText: '#fff',
    },
    warning: {
      main: '#ED6C02',
      light: 'rgb(240, 137, 52)',
      dark: 'rgb(165, 75, 1)',
      contrastText: '#fff',
    },
    disabled: {
      main: 'rgba(0, 0, 0, 0.12)',
      contrastText: 'rgba(0, 0, 0, 0.26)',
    },
    contained: {
      default: {
        main: '#e0e0e0',
        light: '#9e9e9e',
        dark: '#d5d5d5',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      primary: {
        main: '#1976d2',
        light: 'rgb(71, 145, 219)',
        dark: 'rgb(17, 82, 147)',
        contrastText: '#fff',
      },
      secondary: {
        main: '#9c27b0',
        light: 'rgb(175, 82, 191)',
        dark: 'rgb(109, 27, 123)',
        contrastText: '#fff',
      },
      error: {
        main: '#d32f2f',
        light: 'rgb(219, 88, 88)',
        dark: 'rgb(147, 32, 32)',
        contrastText: '#fff',
      },
      info: {
        main: '#0288d1',
        light: 'rgb(52, 159, 218)',
        dark: 'rgb(1, 95, 146)',
        contrastText: '#fff',
      },
      success: {
        main: '#2e7d32',
        light: 'rgb(87, 151, 91)',
        dark: 'rgb(32, 87, 35)',
        contrastText: '#fff',
      },
      warning: {
        main: '#ED6C02',
        light: 'rgb(240, 137, 52)',
        dark: 'rgb(165, 75, 1)',
        contrastText: '#fff',
      },
    },
    outlined: {
      default: {
        main: '#000',
        light: 'rgba(0, 0, 0, 0.04)',
        dark: 'rgba(0, 0, 0, 0.28)',
        contrastText: 'rgba(0, 0, 0, 0.23)',
      },
      primary: {
        main: '#1976d2',
        light: 'rgba(25, 118, 210, 0.04)',
        dark: 'rgba(25, 118, 210, 0.32)',
        contrastText: 'rgba(25, 118, 210, 0.5)',
      },
      secondary: {
        main: '#9c27b0',
        light: 'rgba(156, 39, 176, 0.04)',
        dark: 'rgba(156, 39, 176, 0.32)',
        contrastText: 'rgba(156, 39, 176, 0.5)',
      },
      error: {
        main: '#d32f2f',
        light: 'rgba(211, 47, 47, 0.04)',
        dark: 'rgba(211, 47, 47, 0.32)',
        contrastText: 'rgba(211, 47, 47, 0.5)',
      },
      info: {
        main: '#0288d1',
        light: 'rgba(2, 136, 209, 0.04)',
        dark: 'rgba(2, 136, 209, 0.32)',
        contrastText: 'rgba(2, 136, 209, 0.5)',
      },
      success: {
        main: '#2e7d32',
        light: 'rgba(46, 125, 50, 0.04)',
        dark: 'rgba(46, 125, 50, 0.32)',
        contrastText: 'rgba(46, 125, 50, 0.5)',
      },
      warning: {
        main: '#ED6C02',
        light: 'rgba(237, 108, 2, 0.04)',
        dark: 'rgba(237, 108, 2, 0.32)',
        contrastText: 'rgba(237, 108, 2, 0.5)',
      },
    },
    text: {
      default: {
        main: '#000',
        light: 'rgba(0, 0, 0, 0.04)',
        dark: 'rgba(0, 0, 0, 0.28)',
        contrastText: 'rgba(0, 0, 0, 0.23)',
      },
      primary: {
        main: '#1976d2',
        light: 'rgba(25, 118, 210, 0.04)',
        dark: 'rgba(25, 118, 210, 0.32)',
        contrastText: 'rgba(25, 118, 210, 0.5)',
      },
      secondary: {
        main: '#9c27b0',
        light: 'rgba(156, 39, 176, 0.04)',
        dark: 'rgba(156, 39, 176, 0.32)',
        contrastText: 'rgba(156, 39, 176, 0.5)',
      },
      error: {
        main: '#d32f2f',
        light: 'rgba(211, 47, 47, 0.04)',
        dark: 'rgba(211, 47, 47, 0.32)',
        contrastText: 'rgba(211, 47, 47, 0.5)',
      },
      info: {
        main: '#0288d1',
        light: 'rgba(2, 136, 209, 0.04)',
        dark: 'rgba(2, 136, 209, 0.32)',
        contrastText: 'rgba(2, 136, 209, 0.5)',
      },
      success: {
        main: '#2e7d32',
        light: 'rgba(46, 125, 50, 0.04)',
        dark: 'rgba(46, 125, 50, 0.32)',
        contrastText: 'rgba(46, 125, 50, 0.5)',
      },
      warning: {
        main: '#ED6C02',
        light: 'rgba(237, 108, 2, 0.04)',
        dark: 'rgba(237, 108, 2, 0.32)',
        contrastText: 'rgba(237, 108, 2, 0.5)',
      },
    },
    textt: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    grey: {
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '50': '#fafafa',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
  }

  const darkPalette = {
    ...commonPalette,
    default: {
      main: '#e0e0e0',
      light: '#9e9e9e',
      dark: '#d5d5d5',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
      main: '#90caf9',
      light: 'rgb(166, 212, 250)',
      dark: 'rgb(100, 141, 174)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: '#ce93d8',
      light: 'rgb(215, 168, 223)',
      dark: 'rgb(144, 102, 151)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    error: {
      main: '#f44336',
      light: 'rgb(246, 104, 94)',
      dark: 'rgb(170, 46, 37)',
      contrastText: '#fff',
    },
    info: {
      main: '#29b6f6',
      light: 'rgb(83, 196, 247)',
      dark: 'rgb(28, 127, 172)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    success: {
      main: '#66bb6a',
      light: 'rgb(132, 200, 135)',
      dark: 'rgb(71, 130, 74)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    warning: {
      main: '#ffa726',
      light: 'rgb(255, 184, 81)',
      dark: 'rgb(178, 116, 26)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    disabled: {
      main: 'rgba(255, 255, 255, 0.12)',
      contrastText: 'rgba(255, 255, 255, 0.3)',
    },
    contained: {
      default: {
        main: '#e0e0e0',
        light: '#9e9e9e',
        dark: '#d5d5d5',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      primary: {
        main: '#90caf9',
        light: 'rgb(166, 212, 250)',
        dark: 'rgb(100, 141, 174)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      secondary: {
        main: '#ce93d8',
        light: 'rgb(215, 168, 223)',
        dark: 'rgb(144, 102, 151)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      error: {
        main: '#f44336',
        light: 'rgb(246, 104, 94)',
        dark: 'rgb(170, 46, 37)',
        contrastText: '#fff',
      },
      info: {
        main: '#29b6f6',
        light: 'rgb(83, 196, 247)',
        dark: 'rgb(28, 127, 172)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      success: {
        main: '#66bb6a',
        light: 'rgb(132, 200, 135)',
        dark: 'rgb(71, 130, 74)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      warning: {
        main: '#ffa726',
        light: 'rgb(255, 184, 81)',
        dark: 'rgb(178, 116, 26)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
    },
    outlined: {
      default: {
        main: '#fff',
        light: 'rgba(255, 255, 255, 0.04)',
        dark: 'rgba(255, 255, 255, 0.28)',
        contrastText: 'rgba(255, 255, 255, 0.23)',
      },
      primary: {
        main: '#90caf9',
        light: 'rgba(144, 202, 249, 0.04)',
        dark: 'rgba(144, 202, 249, 0.32)',
        contrastText: 'rgba(144, 202, 249, 0.5)',
      },
      secondary: {
        main: '#ce93d8',
        light: 'rgba(206, 147, 216, 0.04)',
        dark: 'rgba(206, 147, 216, 0.32)',
        contrastText: 'rgba(206, 147, 216, 0.5)',
      },
      error: {
        main: '#f44336',
        light: 'rgba(244, 67, 54, 0.04)',
        dark: 'rgba(244, 67, 54, 0.32)',
        contrastText: 'rgba(244, 67, 54, 0.5)',
      },
      info: {
        main: '#29b6f6',
        light: 'rgba(41, 182, 246, 0.04)',
        dark: 'rgba(41, 182, 246, 0.32)',
        contrastText: 'rgba(41, 182, 246, 0.5)',
      },
      success: {
        main: '#66bb6a',
        light: 'rgba(102, 187, 106, 0.04)',
        dark: 'rgba(102, 187, 106, 0.32)',
        contrastText: 'rgba(102, 187, 106, 0.5)',
      },
      warning: {
        main: '#ffa726',
        light: 'rgba(255, 167, 38, 0.04)',
        dark: 'rgba(255, 167, 38, 0.32)',
        contrastText: 'rgba(255, 167, 38, 0.5)',
      },
    },
    text: {
      default: {
        main: '#fff',
        light: 'rgba(255, 255, 255, 0.04)',
        dark: 'rgba(255, 255, 255, 0.28)',
        contrastText: 'rgba(255, 255, 255, 0.23)',
      },
      primary: {
        main: '#90caf9',
        light: 'rgba(144, 202, 249, 0.04)',
        dark: 'rgba(144, 202, 249, 0.32)',
        contrastText: 'rgba(144, 202, 249, 0.5)',
      },
      secondary: {
        main: '#ce93d8',
        light: 'rgba(206, 147, 216, 0.04)',
        dark: 'rgba(206, 147, 216, 0.32)',
        contrastText: 'rgba(206, 147, 216, 0.5)',
      },
      error: {
        main: '#f44336',
        light: 'rgba(244, 67, 54, 0.04)',
        dark: 'rgba(244, 67, 54, 0.32)',
        contrastText: 'rgba(244, 67, 54, 0.5)',
      },
      info: {
        main: '#29b6f6',
        light: 'rgba(41, 182, 246, 0.04)',
        dark: 'rgba(41, 182, 246, 0.32)',
        contrastText: 'rgba(41, 182, 246, 0.5)',
      },
      success: {
        main: '#66bb6a',
        light: 'rgba(102, 187, 106, 0.04)',
        dark: 'rgba(102, 187, 106, 0.32)',
        contrastText: 'rgba(102, 187, 106, 0.5)',
      },
      warning: {
        main: '#ffa726',
        light: 'rgba(255, 167, 38, 0.04)',
        dark: 'rgba(255, 167, 38, 0.32)',
        contrastText: 'rgba(255, 167, 38, 0.5)',
      },
    },
    textt: {
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    grey: {
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '50': '#fafafa',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
  }

  const primaryOrangeAndSecondaryBluePalette = {
    ...commonPalette,
    default: {
      main: '#e0e0e0',
      light: '#9e9e9e',
      dark: '#d5d5d5',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
      main: '#e65100',
      light: 'rgb(235, 115, 51)',
      dark: 'rgb(161, 56, 0)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2196f3',
      light: 'rgb(77, 171, 245)',
      dark: 'rgb(23, 105, 170)',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      light: 'rgb(219, 88, 88)',
      dark: 'rgb(147, 32, 32)',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: 'rgb(52, 159, 218)',
      dark: 'rgb(1, 95, 146)',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: 'rgb(87, 151, 91)',
      dark: 'rgb(32, 87, 35)',
      contrastText: '#fff',
    },
    warning: {
      main: '#ED6C02',
      light: 'rgb(240, 137, 52)',
      dark: 'rgb(165, 75, 1)',
      contrastText: '#fff',
    },
    disabled: {
      main: 'rgba(0, 0, 0, 0.12)',
      contrastText: 'rgba(0, 0, 0, 0.26)',
    },
    contained: {
      default: {
        main: '#e0e0e0',
        light: '#9e9e9e',
        dark: '#d5d5d5',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      primary: {
        main: '#e65100',
        light: 'rgb(235, 115, 51)',
        dark: 'rgb(161, 56, 0)',
        contrastText: '#fff',
      },
      secondary: {
        main: '#2196f3',
        light: 'rgb(77, 171, 245)',
        dark: 'rgb(23, 105, 170)',
        contrastText: '#fff',
      },
      error: {
        main: '#d32f2f',
        light: 'rgb(219, 88, 88)',
        dark: 'rgb(147, 32, 32)',
        contrastText: '#fff',
      },
      info: {
        main: '#0288d1',
        light: 'rgb(52, 159, 218)',
        dark: 'rgb(1, 95, 146)',
        contrastText: '#fff',
      },
      success: {
        main: '#2e7d32',
        light: 'rgb(87, 151, 91)',
        dark: 'rgb(32, 87, 35)',
        contrastText: '#fff',
      },
      warning: {
        main: '#ED6C02',
        light: 'rgb(240, 137, 52)',
        dark: 'rgb(165, 75, 1)',
        contrastText: '#fff',
      },
    },
    outlined: {
      default: {
        main: '#000',
        light: 'rgba(0, 0, 0, 0.04)',
        dark: 'rgba(0, 0, 0, 0.28)',
        contrastText: 'rgba(0, 0, 0, 0.23)',
      },
      primary: {
        main: '#e65100',
        light: 'rgba(230, 81, 0, 0.04)',
        dark: 'rgba(230, 81, 0, 0.32)',
        contrastText: 'rgba(230, 81, 0, 0.5)',
      },
      secondary: {
        main: '#2196f3',
        light: 'rgba(33, 150, 243, 0.04)',
        dark: 'rgba(33, 150, 243, 0.32)',
        contrastText: 'rgba(33, 150, 243, 0.5)',
      },
      error: {
        main: '#d32f2f',
        light: 'rgba(211, 47, 47, 0.04)',
        dark: 'rgba(211, 47, 47, 0.32)',
        contrastText: 'rgba(211, 47, 47, 0.5)',
      },
      info: {
        main: '#0288d1',
        light: 'rgba(2, 136, 209, 0.04)',
        dark: 'rgba(2, 136, 209, 0.32)',
        contrastText: 'rgba(2, 136, 209, 0.5)',
      },
      success: {
        main: '#2e7d32',
        light: 'rgba(46, 125, 50, 0.04)',
        dark: 'rgba(46, 125, 50, 0.32)',
        contrastText: 'rgba(46, 125, 50, 0.5)',
      },
      warning: {
        main: '#ED6C02',
        light: 'rgba(237, 108, 2, 0.04)',
        dark: 'rgba(237, 108, 2, 0.32)',
        contrastText: 'rgba(237, 108, 2, 0.5)',
      },
    },
    text: {
      default: {
        main: '#000',
        light: 'rgba(0, 0, 0, 0.04)',
        dark: 'rgba(0, 0, 0, 0.28)',
        contrastText: 'rgba(0, 0, 0, 0.23)',
      },
      primary: {
        main: '#e65100',
        light: 'rgba(230, 81, 0, 0.04)',
        dark: 'rgba(230, 81, 0, 0.32)',
        contrastText: 'rgba(230, 81, 0, 0.5)',
      },
      secondary: {
        main: '#2196f3',
        light: 'rgba(33, 150, 243, 0.04)',
        dark: 'rgba(33, 150, 243, 0.32)',
        contrastText: 'rgba(33, 150, 243, 0.5)',
      },
      error: {
        main: '#d32f2f',
        light: 'rgba(211, 47, 47, 0.04)',
        dark: 'rgba(211, 47, 47, 0.32)',
        contrastText: 'rgba(211, 47, 47, 0.5)',
      },
      info: {
        main: '#0288d1',
        light: 'rgba(2, 136, 209, 0.04)',
        dark: 'rgba(2, 136, 209, 0.32)',
        contrastText: 'rgba(2, 136, 209, 0.5)',
      },
      success: {
        main: '#2e7d32',
        light: 'rgba(46, 125, 50, 0.04)',
        dark: 'rgba(46, 125, 50, 0.32)',
        contrastText: 'rgba(46, 125, 50, 0.5)',
      },
      warning: {
        main: '#ED6C02',
        light: 'rgba(237, 108, 2, 0.04)',
        dark: 'rgba(237, 108, 2, 0.32)',
        contrastText: 'rgba(237, 108, 2, 0.5)',
      },
    },
    textt: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    grey: {
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '50': '#fafafa',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
  }
})
