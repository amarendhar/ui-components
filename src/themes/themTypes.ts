import { CommonVariant, CustomObjType, ObjType } from 'types'

// ToDo: Remove this, this is old type
export type oldColorPalette = {
  bg: ObjType
  border: ObjType
  text: ObjType
}

export type oldColors = {
  white: ObjType
  blue: ObjType
  green: ObjType
  orange: ObjType
  red: ObjType
  grey: ObjType
  silver: ObjType
  black: ObjType
  yellow: ObjType
  outline: ObjType
}

export type Theme = {
  breakpoints: CustomObjType<number>
  mediaQuery: CustomObjType<string>
  space: CustomObjType<number>
  fontSize: CustomObjType<number>
  palette: Palette
  // ToDo: Remove all below types, these are old types
  colors?: oldColors
  default?: oldColorPalette & {
    outline: oldColorPalette
  }
  primary?: oldColorPalette & {
    outline: oldColorPalette
  }
  success?: oldColorPalette & {
    outline: oldColorPalette
  }
  warning?: oldColorPalette & {
    outline: oldColorPalette
  }
  danger?: oldColorPalette & {
    outline: oldColorPalette
  }
  disabled?: oldColorPalette & {
    outline: oldColorPalette
  }
}

/**
 * Types Referred from material-ui
 */
export enum PALETTE_MODE {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface Color {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  A100: string
  A200: string
  A400: string
  A700: string
}

// use standalone interface over typeof colors/commons
// to enable module augmentation
export interface CommonColors {
  black: string
  white: string
}

export type ColorPartial = Partial<Color>

// Note: Material-UI type of 'PaletteColorOptions'
// export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial

// Note: Material-UI type of 'SimplePaletteColorOptions'
// export interface SimplePaletteColorOptions {
//   light?: string
//   main: string
//   dark?: string
//   contrastText?: string
// }

export type PaletteColorOptions = string

export interface PaletteColor {
  main: string
  light: string
  dark: string
  contrastText: string
}

export type PaletteTonalOffset =
  | number
  | {
      light: number
      dark: number
    }

export interface TypeText {
  primary: string
  secondary: string
  disabled: string
}

export interface TypeAction {
  active: string
  hover: string
  hoverOpacity: number
  selected: string
  selectedOpacity: number
  disabled: string
  disabledOpacity: number
  disabledBackground: string
  focus: string
  focusOpacity: number
  activatedOpacity: number
}

export interface TypeBackground {
  default: string
  paper: string
}

export type TypeDivider = string

export interface PaletteOptions {
  common?: Partial<CommonColors>
  mode?: PALETTE_MODE
  primary?: PaletteColorOptions
  secondary?: PaletteColorOptions
  error?: PaletteColorOptions
  info?: PaletteColorOptions
  success?: PaletteColorOptions
  warning?: PaletteColorOptions
  grey?: ColorPartial
  text?: Partial<TypeText>
  // contrastThreshold?: number
  // tonalOffset?: PaletteTonalOffset
  // divider?: string
  // action?: Partial<TypeAction>
  // background?: Partial<TypeBackground>
  // getContrastText?: (background: string) => string
  // augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
}

export type CommonPalette = {
  primary: PaletteColor
  secondary: PaletteColor
  error: PaletteColor
  info: PaletteColor
  success: PaletteColor
  warning: PaletteColor
}

export interface Palette extends CommonPalette {
  common?: CommonColors
  mode?: PALETTE_MODE
  grey?: Color
  // text?: TypeText
  // ToDo: CommonVariant.contained is required ?
  [CommonVariant.contained]: CommonPalette
  [CommonVariant.outlined]: CommonPalette
  [CommonVariant.text]: CommonPalette
  // contrastThreshold: number;
  // tonalOffset: PaletteTonalOffset;
  // divider: TypeDivider;
  // action: TypeAction;
  // background: TypeBackground;
  // getContrastText: (background: string) => string;
  // augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
}

export type DecomposedColor = {
  type: string
  rgbValues: number[]
}
