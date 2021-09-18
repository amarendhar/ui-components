import React from 'react'
import styled from 'styled-components'
import { createPalette, getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariant } from 'types'

console.log(createPalette())

type ButtonProps = {
  color?: CommonColors
  variant?: CommonVariant
  size?: CommonSizes
  'data-testid'?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

export const Button = ({
  color = CommonColors.primary,
  variant = CommonVariant.contained,
  size = CommonSizes.medium,
  className = '',
  onClick = () => {},
  disabled = false,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonContainer
      data-testid={restProps['data-testid']}
      className={className}
      onClick={onClick}
      disabled={disabled}
      color={color}
      size={size}
      variant={variant}
    >
      <Label>{children}</Label>
    </ButtonContainer>
  )
}

export default Button

export type ButtonStyledProps = {
  color: CommonColors
  size: CommonSizes
  variant: CommonVariant
}

const buttonVariants = getStyles<ButtonStyledProps>((props) => {
  const { theme, variant, size, color } = props
  const { palette, fontSize } = theme
  const { disabled } = palette
  const { main, dark, light, contrastText } =
    palette[variant]?.[color] || palette[color]

  return {
    size: {
      [CommonSizes.small]: {
        padding: '4px 10px',
        fontSize: fontSize[size],
      },
      [CommonSizes.medium]: {
        padding: '6px 16px',
        fontSize: fontSize[size],
      },
      [CommonSizes.large]: {
        padding: '8px 22px',
        fontSize: fontSize[size],
      },
    },
    variant: {
      [CommonVariant.contained]: {
        backgroundColor: main,
        border: `1px solid ${main}`,
        color: contrastText,
        '&:hover': {
          backgroundColor: dark,
          border: `1px solid ${dark}`,
        },
        '&:active': {
          backgroundColor: light,
          border: `1px solid ${light}`,
        },
        '&:disabled': {
          backgroundColor: disabled.main,
          border: '1px solid transparent',
          color: disabled.contrastText,
          pointerEvents: 'none',
        },
      },
      [CommonVariant.outlined]: {
        backgroundColor: 'transparent',
        border: `1px solid ${contrastText}`,
        color: main,
        '&:hover': {
          backgroundColor: light,
          border: `1px solid ${main}`,
        },
        '&:active': {
          backgroundColor: dark,
          border: `1px solid ${main}`,
        },
        '&:disabled': {
          border: `1px solid ${disabled.main}`,
          color: disabled.contrastText,
          pointerEvents: 'none',
        },
      },
      [CommonVariant.text]: {
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        color: main,
        '&:hover': {
          backgroundColor: light,
        },
        '&:active': {
          backgroundColor: dark,
        },
        '&:disabled': {
          color: disabled.contrastText,
          pointerEvents: 'none',
        },
      },
    },
  }
})

/**
 * ToDo: `line-height: 1.7` is suggested from Material-UI,
 *  but is it really required ??
 */
const ButtonContainer = styled.button<ButtonStyledProps>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border: 0;
  outline: none;
  user-select: none;
  transition: all 300ms ease 0s;
  border-radius: ${({ theme }) => theme.space.small}px;
  line-height: 1.7;

  ${buttonVariants}
`

const Label = styled.span``
