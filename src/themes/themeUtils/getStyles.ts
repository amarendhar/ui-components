import {
  CSSObject,
  CSSProp,
  // CSSKeyframes,
  // CSSProperties,
  // CSSPseudos
} from 'styled-components'
// import { CSSProperties } from 'react'

// type VariantStyle = {
//   // ToDo: this should be StyledProps
//   [type in string]: any
// }

type VariantStyle = {
  [type in string]: CSSObject | CSSProp
  // [type in string]: VariantStyle
}

type getStyleProps = {
  [type in string]: VariantStyle
}

/**
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
const getStyles = (props: getStyleProps) => {
  return (reactComponentProps: any) => {
    for (const type in props) {
      const variantName = reactComponentProps[type]

      if (variantName) {
        const variants = props[type]
        const variantStyle = variants[variantName]

        return variantStyle
      }
    }
  }
}

export default getStyles

/**
  Example usage:
  --------------------------------------------------
  
  const sizeVariants = getStyles(
    {
      // props
      size: { // type -> size
        // variants
        small: { // variantName -> 'small'
          // variantStyle
          width: 28,
          height: 14,
        },
        medium: { // variantName -> 'medium'
          // variantStyle
          width: 33,
          height: 18,
        },
        large: { // variantName -> 'large'
          // variantStyle
          width: 45,
          height: 21,
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
  )

  const transformVariants = getStyles({
    size: {
      small: {
        width: 10,
        height: 10,
        transform: 'translateX(3px)',
        '&.checked': {
          transform: 'translateX(15px)',
        },
      },
      medium: {
        width: 12,
        height: 12,
        transform: 'translateX(3px)',
        '&.checked': {
          transform: 'translateX(18px)',
        },
      },
      large: {
        width: 15,
        height: 15,
        transform: 'translateX(3px)',
        '&.checked': {
          transform: 'translateX(27px)',
        },
      },
    },
  })

  Button = styled.button`
    ${sizeVariants}
    ${transformVariants}
  `
 */
