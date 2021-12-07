import defaultTheme from 'themes/defaultTheme'
import { createPalette } from '../themeUtils'
import { PALETTE_MODE, Palette, Theme } from '../themTypes'

type createThemeProps = {
  paletteMode?: PALETTE_MODE
}

const createTheme = ({
  paletteMode = PALETTE_MODE.LIGHT,
}: createThemeProps = {}): Theme => {
  const palette: Palette = createPalette({ mode: paletteMode })

  return {
    ...defaultTheme,
    palette,
  }
}

export default createTheme
