import {
  PaletteColor,
  PaletteOptions,
  PALETTE_MODE,
  Palette,
  Color,
} from 'themes/themTypes'
import { CommonVariants } from 'themes/themTypes'
import colors from '../colors'
import {
  decomposeColor,
  clamp,
  getContrastRatio,
  lighten,
  darken,
  alpha,
} from './colorManipulator'

const tonalOffset = 0.2
const contrastThreshold = 3

/**
 * ToDo: Do not use type 'any'
 */
/**
 * Refer https://bareynol.github.io/mui-theme-creator
 */
/**
 * Refer `light` method from @material-ui/core/styles/createPalette.js
 */
export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: colors.common.white,
    default: colors.grey[50],
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

/**
 * Refer `dark` method from @material-ui/core/styles/createPalette.js
 */
export const dark = {
  text: {
    primary: colors.common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: colors.grey[800],
    default: '#303030',
  },
  action: {
    active: colors.common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
}

/**
 * Refer `getContrastText` method from @material-ui/core/styles/createPalette.js
 */
const getContrastText = (background: string) => {
  const contrastText =
    getContrastRatio(background, dark.text.primary) >= contrastThreshold
      ? dark.text.primary
      : light.text.primary

  if (process.env.NODE_ENV !== 'production') {
    const contrast = getContrastRatio(background, contrastText)

    if (contrast < 3) {
      console.error(
        [
          `UI-Library: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
          'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
          'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
        ].join('\n')
      )
    }
  }

  return contrastText
}

/**
 * Refer `augmentColor` method from @material-ui/core/styles/createPalette.js
 */
const getColorStates = (color: string): PaletteColor => {
  // Note: Do not use common variable like below, it's not giving correct 'dark' value, when used common variable like that.
  // const decomposedColor = decomposeColor(color)

  return {
    main: color,
    light: lighten({
      color: decomposeColor(color),
      coefficient: clamp(tonalOffset),
    }),
    dark: darken({
      color: decomposeColor(color),
      coefficient: clamp(tonalOffset * 1.5),
    }),
    contrastText: getContrastText(color),
  }
}

const getDefaultColorStates = (color: Color): PaletteColor => {
  return {
    main: color[300],
    light: color[500],
    dark: color.A100,
    contrastText: getContrastText(color[300]),
  }
}

const getDefaultColorStatesForOutlined = (color: string): PaletteColor => {
  return {
    main: color,
    light: alpha(color, 0.04),
    dark: alpha(color, 0.28),
    contrastText: alpha(color, 0.23),
  }
}

const getColorStatesForOutlined = (color: string): PaletteColor => {
  return {
    main: color,
    light: alpha(color, 0.04),
    dark: alpha(color, 0.32),
    contrastText: alpha(color, 0.5),
  }
}

const getDefaultColorStatesForText = (color: string): PaletteColor => {
  return {
    main: color,
    light: alpha(color, 0.04),
    dark: alpha(color, 0.28),
    contrastText: alpha(color, 0.23),
  }
}

const getColorStatesForText = (color: string): PaletteColor => {
  return {
    main: color,
    light: alpha(color, 0.04),
    dark: alpha(color, 0.32),
    contrastText: alpha(color, 0.5),
  }
}

/**
 * Refer `paletteOutput` object from @material-ui/core/styles/createPalette.js
 */
const createPalette = (palette: PaletteOptions = {}): Palette => {
  const mode = palette?.mode || PALETTE_MODE.LIGHT
  const {
    primary = mode === PALETTE_MODE.DARK ? colors.blue[200] : colors.blue[700],
    // ToDo: using key-name `default` is giving TypeScript-Error, may be it's reserved-key not to use.
    // default = colors.grey[300],
    secondary = mode === PALETTE_MODE.DARK
      ? colors.purple[200]
      : colors.purple[500],
    error = mode === PALETTE_MODE.DARK ? colors.red[500] : colors.red[700],
    info = mode === PALETTE_MODE.DARK
      ? colors.lightBlue[400]
      : colors.lightBlue[700],
    success = mode === PALETTE_MODE.DARK
      ? colors.green[400]
      : colors.green[800],
    warning = mode === PALETTE_MODE.DARK ? colors.orange[400] : '#ED6C02',
  } = palette

  const disabled =
    mode === PALETTE_MODE.DARK
      ? {
          main: dark.action.disabledBackground,
          contrastText: dark.action.disabled,
        }
      : {
          main: light.action.disabledBackground,
          contrastText: light.action.disabled,
        }

  const paletteOutput = {
    // A collection of common colors.
    common: colors.common,
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    default: getDefaultColorStates(colors.grey),
    primary: getColorStates(primary),
    secondary: getColorStates(secondary),
    error: getColorStates(error),
    info: getColorStates(info),
    success: getColorStates(success),
    warning: getColorStates(warning),
    disabled,
    // ToDo: CommonVariants.contained is required ?
    [CommonVariants.contained]: {
      default: getDefaultColorStates(colors.grey),
      primary: getColorStates(primary),
      secondary: getColorStates(secondary),
      error: getColorStates(error),
      info: getColorStates(info),
      success: getColorStates(success),
      warning: getColorStates(warning),
    },
    [CommonVariants.outlined]: {
      default: getDefaultColorStatesForOutlined('#000000'),
      primary: getColorStatesForOutlined(primary),
      secondary: getColorStatesForOutlined(secondary),
      error: getColorStatesForOutlined(error),
      info: getColorStatesForOutlined(info),
      success: getColorStatesForOutlined(success),
      warning: getColorStatesForOutlined(warning),
    },
    [CommonVariants.text]: {
      default: getDefaultColorStatesForText('#000000'),
      primary: getColorStatesForText(primary),
      secondary: getColorStatesForText(secondary),
      error: getColorStatesForText(error),
      info: getColorStatesForText(info),
      success: getColorStatesForText(success),
      warning: getColorStatesForText(warning),
    },
  }

  return paletteOutput
}

export default createPalette
