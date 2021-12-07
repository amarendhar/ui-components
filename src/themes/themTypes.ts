export type Theme = {
  space: Record<'sm' | 'md' | 'lg', number>
  fontSizes: Record<'sm' | 'md' | 'lg', number>
  radii: Record<'sm' | 'md' | 'lg', number>
  palette: Palette
  breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>
  mediaQuery: Record<
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '<xs'
    | '<sm'
    | '<md'
    | '<lg'
    | '<xl'
    | 'xsQuery'
    | 'smQuery'
    | 'mdQuery'
    | 'lgQuery'
    | 'xlQuery'
    | '<xsQuery'
    | '<smQuery'
    | '<mdQuery'
    | '<lgQuery'
    | '<xlQuery',
    string
  >
}

export type DisabledPaletteColor = {
  main: string
  contrastText: string
}

/**
 * Variants referred from react-bootstrap
 *  https://react-bootstrap.github.io/components/buttons/
 */

export enum CommonColors {
  // ToDo: is default-type required ?
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning',
  // ToDo: is disable-type required ?
  // disabled = 'disabled',
}

export enum CommonSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum CommonVariants {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
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
export interface CommonPaletteColors {
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
  hint?: string
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
  common?: Partial<CommonPaletteColors>
  mode?: PALETTE_MODE
  default?: PaletteColorOptions
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
  default: PaletteColor
  primary: PaletteColor
  secondary: PaletteColor
  error: PaletteColor
  info: PaletteColor
  success: PaletteColor
  warning: PaletteColor
}

export interface Palette extends CommonPalette {
  common: CommonPaletteColors
  mode: PALETTE_MODE
  disabled: DisabledPaletteColor
  // ToDo: CommonVariants.contained is required ?
  [CommonVariants.contained]: CommonPalette
  [CommonVariants.outlined]: CommonPalette
  [CommonVariants.text]: CommonPalette
  textt?: TypeText
  grey: Color
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
