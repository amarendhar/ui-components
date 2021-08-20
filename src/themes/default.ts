export const space = {
  small: 5,
  medium: 10,
  large: 15,
}

export const breakpoints = {
  sm: 767, // Phones (767/75 i.e. 7.7 to 10.0 inch) -> "<=767 OR < 768"
  md: 768, // Tablets (>= 10 inch) -> ">= 768"
  lg: 992, // Laptops (>= 13 inch) -> ">= 992"
}

export const mediaQuery = {
  sm: `@media (max-width: ${breakpoints.sm}px)`, // Phones "<=767 OR < 768"
  md: `@media (min-width: ${breakpoints.md}px)`, // Tablets ">= 768"
  lg: `@media (min-width: ${breakpoints.lg}px)`, // Laptops ">= 992"
  // ">=" i.e. for min-width's
  '>sm': `@media (min-width: 576px)`, // ">= 576"
  '>md': `@media (min-width: 768px)`, // ">= 768"
  '>lg': `@media (min-width: 992px)`, // ">= 992"
  // "<=" i.e. for max-width's
  '<sm': `@media (max-width: 767px)`, // "< 768"
  '<md': `@media (max-width: 991px)`, // "< 991"
  '<lg': `@media (max-width: 1199px)`, // "< 1200"
}


export const defaultTheme = {
  breakpoints,
  mediaQuery,
  space,
}
