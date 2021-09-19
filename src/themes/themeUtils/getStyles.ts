import {
  CSSObject,
  // CSSProp,
  // CSSKeyframes,
  // CSSProperties,
  // CSSPseudos
} from 'styled-components'
import { Theme } from 'themes/themTypes'
// import { CSSProperties } from 'react'

// type VariantStyle = {
//   // ToDo: this should be StyledProps
//   [key: string]: any
// }

type VariantStyle = {
  /**
   * ToDo: Actually `CSSObject | CSSProp` should be used instead of `CSSObject`,
   *  but type-error is coming for `variantStyle` in `styles = { ...styles, ...variantStyle }` in getStyles-method,
   *  so using `CSSObject` for now.
   * Go to type-definition of `CSSProp` & check notes in the comments-section in styled-components library for more information.
   */
  [key: string]: CSSObject
  // [key: string]: CSSObject | CSSProp
  // [key: string]: VariantStyle
}

type getStyleTypes = 'color' | 'variant' | 'size' | string

/**
 *  Case-1:
 *    type getStyleProps = {
 *      color?: VariantStyle
 *      variant?: VariantStyle
 *      size?: VariantStyle
 *    } & {
 *      [key in string]: VariantStyle
 *    }
 *
 *  Case-2:
 *    type getStyleProps = Record<getStyleTypes, VariantStyle>
 *
 * Here Case-1 & Case-2 both are valid,
 *  Case-1 is more basic way of declaration.
 *  Case-2 is more optimized way of declaration.
 */
type getStyleProps = Record<getStyleTypes, VariantStyle>

/**
 * Note: Use function instead of arrow-function,
 *  bcz generic-types `T`, such as `function <T>(props: T)`, won't work with arrow-function due to `Styled-Function` type-definition may expect function not arrow-function.
 *
 * Replace `(props: any)` with `function <T>(props: T)`, where `T` should be `Styled-Function` return-type.
 *  `Styled-Function` looks like this:
 *    const getColor = props => ({
 *      color: props.color,
 *    })
 *    const Box = styled.div`
 *      ${getColor}
 *    `
 *
 *  Here in the above example `getColor-Function` is `Styled-Function`.
 *  Here in `function <T>(props: T)`, the type `T` should be `Styled-Function` return-type.
 * --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * props ->
 *  {
 *    size: { small: {...}, medium: {...}, large: {...} },
 *    variant: { contained: {...}, outlined: {...}, text: {...} },
 *  }
 *
 *  Notes ->
 *    type -> `size | variant` (key-names)
 *      variants -> `props.size & props.variant` (object-values)
 *        variantName -> `small | medium | large | contained | outlined | text` (key-names)
 *          variantStyle -> `props.size.small | props.size.medium | props.size.large | props.variant.contained | props.variant.outlined | props.variant.text` (object-values)
 */
// ToDo: replace 'any' with styledObjectProps/reactProps
// Note: Here `cbProps` is nothing but `reactComponentProps`
const getStyles = <P>(
  cb: (cbProps: { theme: Theme } & P & { [key: string]: any }) => getStyleProps
) => {
  return (
    reactComponentProps: { theme: Theme } & P & { [key: string]: any }
  ) => {
    const props = cb(reactComponentProps)
    let styles = {}

    for (const type in props) {
      const variantName = reactComponentProps[type]

      if (variantName) {
        const variants = props[type]
        const variantStyle = variants[variantName]

        styles = { ...styles, ...variantStyle }
      }
    }

    return styles
  }
}

export default getStyles

/**
--------------------------------------------------------------------------------------------
Example-1:  Usage example
--------------------------------------------------------------------------------------------
  type ButtonProps = {
    color: string
  }

  const Button = ({ color = '#FF0000' }: ButtonProps) => {
    return (
      <button color={color}>Click Me</button>
    )
  }

  type ButtonContainerProps = {
    color: string
  }

  const buttonContainerVariants = getStyles<ButtonContainerProps>((props) => {
    const { color } = props
    
    return {
      // props
      size: { // type -> size
        // variants
        small: { // variantName -> 'small'
          // variantStyle
          width: 28,
          height: 14,
          border: `1px solid ${color}`,
        },
        medium: { // variantName -> 'medium'
          // variantStyle
          width: 33,
          height: 18,
          border: `1px solid ${color}`,
        },
        large: { // variantName -> 'large'
          // variantStyle
          width: 45,
          height: 21,
          border: `1px solid ${color}`,
        },
      },
      variant: { // type -> variant
        // variants
        contained: { // variantName -> 'contained'
          // variantStyle
          background-color: 'blue',
          border: '1px solid blue',
          color: white,
        },
        outlined: { // variantName -> 'outlined'
          // variantStyle
          background-color: 'transparent',
          border: '1px solid blue',
          color: blue,
        },
        text: { // variantName -> 'text'
          // variantStyle
          background-color: 'transparent',
          border: '1px solid transparent',
          color: blue,
        }
      }
    }
  })
  
  Button = styled.button<ButtonContainerProps>`
    display: flex;
    ${buttonContainerVariants}
  `

--------------------------------------------------------------------------------------------
Example-2:  Usage example
--------------------------------------------------------------------------------------------
  type SwitchBoxProps = {
    checked?: boolean
  }
  
  const SwitchBox = ({ checked = false }: SwitchBoxProps) => {
    return (
      <Switch checked={checked} />
    )
  }

  type SwitchProps = {
    checked: boolean
  }
  
  const switchVariants = getStyles<SwitchProps>((props) => {
    return {
      size: {
        small: {
          width: 10,
          height: 10,
          transform: checked ? 'translateX(15px)' : 'translateX(3px)',
        },
        medium: {
          width: 12,
          height: 12,
          transform: checked ? 'translateX(18px)' : 'translateX(3px)',
        },
        large: {
          width: 15,
          height: 15,
          transform: checked ? 'translateX(27px)' : 'translateX(3px)',
        },
      },
    }
  })

  Switch = styled.button<SwitchProps>`
    display: flex;
    ${switchVariants}
  `
 */
