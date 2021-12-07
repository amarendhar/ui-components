import colors from '../colors'
import lightTheme from 'themes/lightTheme'
import darkTheme from 'themes/darkTheme'
import {
  decomposeColor,
  clamp,
  getContrastRatio,
  lighten,
  darken,
  alpha,
} from './colorManipulator'
import {
  PaletteColor,
  PaletteOptions,
  PALETTE_MODE,
  Palette,
  Color,
  CommonVariants,
} from 'themes/themTypes'

const tonalOffset = 0.2
const contrastThreshold = 3

/**
 * Refer `getContrastText` method from @material-ui/core/styles/createPalette.js
 */
const getContrastText = (background: string) => {
  const contrastText =
    getContrastRatio(background, darkTheme.palette.text.primary) >=
    contrastThreshold
      ? darkTheme.palette.text.primary
      : lightTheme.palette.text.primary

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
          main: darkTheme.palette.action.disabledBackground,
          contrastText: darkTheme.palette.action.disabled,
        }
      : {
          main: lightTheme.palette.action.disabledBackground,
          contrastText: lightTheme.palette.action.disabled,
        }

  const defaultMainColor =
    mode === PALETTE_MODE.DARK ? colors.common.white : colors.common.black

  /**
   * ToDo: Change `textt` to something else, `text` is conflicting with `CommonVariants.text`, both are same keys.
   *  may be better move all `CommonVariants` to variants-props.
   */
  const textt =
    mode === PALETTE_MODE.DARK
      ? darkTheme.palette.text
      : lightTheme.palette.text

  const paletteOutput = {
    // A collection of common colors.
    common: colors.common,
    // The palette mode, can be light or darkTheme.
    mode,
    // The colors used to represent primary interface elements for a user.
    default: getDefaultColorStates(colors.grey),
    primary: getColorStates(primary),
    secondary: getColorStates(secondary),
    error: getColorStates(error),
    warning: getColorStates(warning),
    info: getColorStates(info),
    success: getColorStates(success),
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
      default: getDefaultColorStatesForOutlined(defaultMainColor),
      primary: getColorStatesForOutlined(primary),
      secondary: getColorStatesForOutlined(secondary),
      error: getColorStatesForOutlined(error),
      info: getColorStatesForOutlined(info),
      success: getColorStatesForOutlined(success),
      warning: getColorStatesForOutlined(warning),
    },
    [CommonVariants.text]: {
      default: getDefaultColorStatesForText(defaultMainColor),
      primary: getColorStatesForText(primary),
      secondary: getColorStatesForText(secondary),
      error: getColorStatesForText(error),
      info: getColorStatesForText(info),
      success: getColorStatesForText(success),
      warning: getColorStatesForText(warning),
    },
    grey: colors.grey,
    textt,
  }

  return paletteOutput
}

export default createPalette
