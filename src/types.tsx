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
 * Variants referenced from react-bootstrap
 *  https://react-bootstrap.github.io/components/buttons/
 */

export enum CommonVariants {
  default = 'default',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export enum CommonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
