/**
 * ToDo: Do not use type 'any'
 */
export const hexToRgb = (color: any) => {
  color = color.substr(1)
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g')
  let colors = color.match(re)

  if (colors && colors[0].length === 1) {
    colors = colors.map((n: any) => n + n)
  }

  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
        .map((n: any, index: any) => {
          return index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1000) / 1000
        })
        .join(', ')})`
    : ''
}

export const decomposeColor = (color: any): any => {
  // Idempotent
  if (color.type) {
    return color
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color))
  }

  const marker = color.indexOf('(')
  const type = color.substring(0, marker)

  let values = color.substring(marker + 1, color.length - 1)
  let colorSpace

  if (type === 'color') {
    values = values.split(' ')
    colorSpace = values.shift()

    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].substr(1)
    }
  } else {
    values = values.split(',')
  }

  values = values.map((value: any) => parseFloat(value))

  return {
    type,
    values,
    colorSpace,
  }
}

export const clamp = (value: any, min = 0, max = 1) => {
  return Math.min(Math.max(min, value), max)
}

export const recomposeColor = (color: any) => {
  const { type, colorSpace } = color
  let { values } = color

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n: any, i: any) => (i < 3 ? parseInt(n, 10) : n))
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`
    values[2] = `${values[2]}%`
  }

  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`
  } else {
    values = `${values.join(', ')}`
  }

  return `${type}(${values})`
}

export const lighten = ({ color, coefficient }: { color: any; coefficient: any }) => {
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient
    }
  }

  return recomposeColor(color)
}

export const darken = ({ color, coefficient }: { color: any; coefficient: any }) => {
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient
  } else if (
    color.type.indexOf('rgb') !== -1 ||
    color.type.indexOf('color') !== -1
  ) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient
    }
  }

  return recomposeColor(color)
}

export const getLuminance = (color: any) => {
  color = decomposeColor(color)
  let rgb = color.values
  rgb = rgb.map((val: any) => {
    if (color.type !== 'color') {
      val /= 255 // normalized
    }

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4
  }) // Truncate at 3 digits

  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
  )
}

export const getContrastRatio = (foreground: any, background: any) => {
  const lumA = getLuminance(foreground)
  const lumB = getLuminance(background)
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05)
}
