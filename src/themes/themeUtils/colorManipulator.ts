import { DecomposedColor } from 'themes/themTypes'

export const hexToRgb = (color: string): string => {
  color = color.substr(1)
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g')
  let colors = color.match(re)

  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n)
  }

  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
        .map((n, index) => {
          return index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1000) / 1000
        })
        .join(', ')})`
    : ''
}

export const decomposeColor = (color: string): DecomposedColor => {
  const rgbColor = color.charAt(0) === '#' ? hexToRgb(color) : color // rgb(r, g, b)
  const marker = rgbColor.indexOf('(')
  // Note: 'substring' is fastest than 'replace' because: It avoids compiling a regular expression.
  const type = rgbColor.substring(0, marker)

  if (
    process.env.NODE_ENV !== 'production' &&
    !['rgb', 'rgba'].includes(type)
  ) {
    throw new Error(
      `UI-Library: Unsupported \`${rgbColor}\` color. The following formats are supported: #nnn (eg: #888), #nnnnnn (eg: #FFFFFF), rgb(), rgba().`
    )
  }

  const rgbValues = rgbColor
    .substring(marker + 1, rgbColor.length - 1)
    .split(',')
    .map((value: string) => parseFloat(value))

  return {
    type, // rgb or rgba
    rgbValues, // [r, g, b] or [r, g, b, a]
  }
}

export const clamp = (
  value: number,
  min: number = 0,
  max: number = 1
): number => {
  return Math.min(Math.max(min, value), max)
}

export const recomposeColor = (color: DecomposedColor): string => {
  let { rgbValues } = color

  // Only convert the first 3 rgbValues to int (i.e. not alpha) from rgb(r, g, b, a)
  rgbValues = rgbValues.map((n, i) => (i < 3 ? parseInt(String(n), 10) : n))

  return `${color.type}(${rgbValues.join(', ')})`
}

export const lighten = ({
  color,
  coefficient,
}: {
  color: DecomposedColor
  coefficient: number
}) => {
  color.rgbValues = color.rgbValues.map(
    (val) => (val += (255 - val) * coefficient)
  )

  return recomposeColor(color)
}

export const alpha = (color: string, value: number): string => {
  const { type, rgbValues } = decomposeColor(color)

  value = clamp(value)
  rgbValues[3] = value

  return recomposeColor({
    type: type + 'a',
    rgbValues,
  })
}

export const darken = ({
  color,
  coefficient,
}: {
  color: DecomposedColor
  coefficient: number
}) => {
  color.rgbValues = color.rgbValues.map((val) => (val *= 1 - coefficient))

  return recomposeColor(color)
}

export const getLuminance = (color: string): number => {
  let { rgbValues } = decomposeColor(color)

  rgbValues = rgbValues.map((val) => {
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4
  }) // Truncate at 3 digits

  return Number(
    (
      0.2126 * rgbValues[0] +
      0.7152 * rgbValues[1] +
      0.0722 * rgbValues[2]
    ).toFixed(3)
  )
}

export const getContrastRatio = (
  foreground: string,
  background: string
): number => {
  const lumA = getLuminance(foreground)
  const lumB = getLuminance(background)

  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05)
}
