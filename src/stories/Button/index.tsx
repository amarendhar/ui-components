import React from 'react'
import styled from 'styled-components'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariant } from 'types'

type ButtonProps = {
  color?: CommonColors
  size?: CommonSizes
  variant?: CommonVariant
  'data-testid'?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

export const Button = ({
  color = CommonColors.primary,
  size = CommonSizes.medium,
  variant = CommonVariant.contained,
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
      <span>{children}</span>
    </ButtonContainer>
  )
}

export default Button

const buttonVariants = getStyles<{
  color: CommonColors
  size: CommonSizes
  variant: CommonVariant
}>((props) => {
  const { theme, variant, size, color } = props
  const { palette, fontSize } = theme
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
      [CommonVariant.text]: {
        backgroundColor: 'transparent',
        color: main,
        '&:hover': {
          backgroundColor: light,
        },
        '&:active': {
          backgroundColor: dark,
        },
        '&:disabled': {
          cursor: 'not-allowed',
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
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
      },
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
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
      },
    },
  }
})

const ButtonContainer = styled.button<{
  color: string
  size: string
  variant: string
}>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border: 0;
  outline: none;
  user-select: none;
  transition: all 300ms ease 0s;
  border-radius: ${({ theme }) => theme.space.small}px;

  ${buttonVariants}
`
