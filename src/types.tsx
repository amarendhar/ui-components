export type ObjType = {
  [key: string]: string
}

export type CustomObjType<V> = {
  [key: string]: V
}

export type CreateClassName = {
  [key: string]: boolean
}

// ToDo: Change this real style-props type-checker
export type StyleObj = {
  [key: string]: string
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
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum CommonVariant {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
}
