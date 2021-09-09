export enum PALETTE_MODE {
  LIGHT = 'light',
  DARK = 'dark'
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

export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial

// Note: Material-UI type of 'SimplePaletteColorOptions'
// export interface SimplePaletteColorOptions {
//   light?: string
//   main: string
//   dark?: string
//   contrastText?: string
// }

// Note: ui-library type of 'SimplePaletteColorOptions'
export type SimplePaletteColorOptions = string

export interface PaletteColor {
  light: string
  main: string
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
  warning?: PaletteColorOptions
  info?: PaletteColorOptions
  success?: PaletteColorOptions
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

export interface Palette {
  common: CommonColors
  mode: PALETTE_MODE
  primary: PaletteColor
  secondary: PaletteColor
  error: PaletteColor
  warning: PaletteColor
  info: PaletteColor
  success: PaletteColor
  grey: Color
  text: TypeText
  // contrastThreshold: number;
  // tonalOffset: PaletteTonalOffset;
  // divider: TypeDivider;
  // action: TypeAction;
  // background: TypeBackground;
  // getContrastText: (background: string) => string;
  // augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
}
