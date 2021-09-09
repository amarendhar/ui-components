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
//   [key in string]: any
// }

type VariantObj = {
  [key in string]: CSSObject | CSSProp
  // [key in string]: VariantStyle
}

type VariantsObj = {
  [key in string]: VariantObj
}

const variants = (variantsObj: VariantsObj) => {
  // ToDo: replace any with styledObjectProps/reactProps
  return (props: any) => {
    for (const key in variantsObj) {
      const variantObj = variantsObj[key] // size: { small: {...}, medium: {...}, large: {...} }
      const variant = props[key] // small | medium | large

      if (variant) {
        const variantStyle = variantObj[variant] // small: {...} | medium: {...} | large: {...}

        return variantStyle
      }
    }
  }
}

export default variants

/**
  Example usage:
  --------------------------------------------------
  
  const sizeVariants = variants(
    // variantsObj
    {
      // variantObj
      size: {
        // variantStyle
        small: { // variant -> 'small'
          width: 28,
          height: 14,
        },
        // variantStyle
        medium: { // variant -> 'medium'
          width: 33,
          height: 18,
        },
        // variantStyle
        large: { // variant -> 'large'
          width: 45,
          height: 21,
        },
      },
    }
  )

  const transformVariants = variants({
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
