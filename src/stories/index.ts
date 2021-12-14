import 'styled-components'
import { Theme } from 'themes/themTypes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
