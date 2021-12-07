import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { addons } from '@storybook/addons'
import { isDark } from './utils'
import { createTheme } from '../src/themes/themeUtils'
import { PALETTE_MODE, Theme } from '../src/themes/themTypes'
/**
 * https://styled-components.com/docs/api#usage-with-typescript
 *
 * To prevent TypeScript errors on the css prop on arbitrary elements, install @types/styled-components and add the following import once in your project
 */
// import {} from 'styled-components/cssprop'

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    font-family: arial;
    color: ${({ theme }) => theme.palette.textt.primary};
  }
`

const channel = addons.getChannel()

/**
 * ToDo: `useTheme` works, only on `Canvas`, not for `Docs`.
 */
const useTheme = (): { paletteMode: PALETTE_MODE } => {
  const [paletteMode, setPaletteMode] = useState(PALETTE_MODE.LIGHT)

  const setTheme = useCallback(
    (e) => {
      console.log(
        'e?.globals?.backgrounds?.value -> ',
        e?.globals?.backgrounds?.value,
        isDark(e?.globals?.backgrounds?.value)
      )
      const mode = isDark(e?.globals?.backgrounds?.value)
        ? PALETTE_MODE.DARK
        : PALETTE_MODE.LIGHT
      setPaletteMode(mode)
    },
    [setPaletteMode, isDark]
  )

  useEffect(() => {
    channel.on('updateGlobals', setTheme)
    return () => channel.off('updateGlobals', setTheme)
  }, [setTheme, channel])
  // console.log('paletteMode -> ', paletteMode)
  // console.log('All available channel-event-names -> ', channel.eventNames())

  return {
    paletteMode,
  }
}

// ToDo: export this decorator to `src/decorator.tsx`
export const decorators = [
  (Story, context) => {
    // Note: Using context instead of `useTheme` hook, bcz `useTheme` work only for `Canvas`, not for `Docs`.
    const paletteMode = isDark(context?.globals?.backgrounds?.value)
      ? PALETTE_MODE.DARK
      : PALETTE_MODE.LIGHT

    return (
      <ThemeProvider theme={createTheme({ paletteMode })}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    )
  },
]
