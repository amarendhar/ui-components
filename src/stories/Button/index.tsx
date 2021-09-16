import React from 'react'
import styled from 'styled-components'
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
  color = CommonColors.default,
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
  ${({ theme, variant, size, color }) => {
    const { palette, space, fontSize, paddingFactor } = theme
    const { main, dark, light, contrastText } =
      palette[variant]?.[color] || palette[color]

    // ToDo: use getStyles-util instead of using nested-ternary operator.
    const css =
      variant === CommonVariant.text
        ? `
        background-color: transparent;
        color: ${main};

        &:hover {
          background-color: ${light};
        }
        
        &:active {
          background-color: ${dark};
        }

        &:disabled {
          cursor: not-allowed;
          pointer-events: none;
        }
      `
        : variant === CommonVariant.outlined
        ? `
        background-color: transparent;
        border: 1px solid ${contrastText};
        color: ${main};

        &:hover {
          background-color: ${light};
          border: 1px solid ${main};
        }
        
        &:active {
          background-color: ${dark};
          border: 1px solid ${main};
        }

        &:disabled {
          cursor: not-allowed;
          pointer-events: none;
        }
      `
        : `
      background-color: ${main};
      border: 1px solid ${main};
      color: ${contrastText};

      &:hover {
        background-color: ${dark};
        border: 1px solid ${dark};
      }

      &:active {
        background-color: ${light};
        border: 1px solid ${light};
      }

      &:disabled {
        cursor: not-allowed;
        pointer-events: none;
      }
    `

    return `
      padding: ${paddingFactor[size]}px ${theme.paddingFactor[size] * 3 - 2}px;
      border-radius: ${space.small}px;
      font-size: ${fontSize[size]}px;
      ${css};
    `
  }}
`
