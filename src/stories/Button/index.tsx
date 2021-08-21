import React from 'react'
import styled from 'styled-components'

/**
 * Variants referenced from react-bootstrap
 *  https://react-bootstrap.github.io/components/buttons/
 */
export enum ButtonVariants {
  default = 'default',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export enum ButtonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

type ButtonProps = {
  'data-testid'?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
  variant?: ButtonVariants
  size?: ButtonSizes
  outlined?: boolean
}

export const Button = ({
  className = '',
  onClick = () => {},
  disabled = false,
  children,
  variant = ButtonVariants.default,
  size = ButtonSizes.medium,
  outlined = false,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonContainer
      data-testid={restProps['data-testid']}
      className={className}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      outlined={outlined}
    >
      <span>{children}</span>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button<{ variant: string; size: string; outlined: boolean; }>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border: 0;
  outline: none;
  user-select: none;
  transition: all 300ms ease 0s;

  ${({ theme, variant, size,  outlined }) => `
    ${outlined ? `
      border-radius: ${theme.space.small}px;
      padding: ${theme.paddingFactor[size]}px ${theme.paddingFactor[size] * 3 - 2}px;
      font-size: ${theme.fontSize[size]}px;
      background-color: transparent;
      border: 1px solid ${theme[variant]['outlineBg'][80]};
      color: ${theme[variant]['outlineBg'][80]};
      
      &:hover {
        background-color: ${theme.colors.silver[60]};
        border: 1px solid ${theme[variant]['outlineBg'][100]};
        color: ${theme[variant]['outlineBg'][100]};
      }

      &:active {
        opacity: 0.6;
      }

      &:disabled {
        background-color: transparent;
        border: 1px solid ${theme.disabled.bg[80]};
        color: ${theme.disabled.text[100]};
        opacity: 0.6;
        box-shadow: none;
        cursor: not-allowed;
      }
    `:`
      border-radius: ${theme.space.small}px;
      padding: ${theme.paddingFactor[size]}px ${theme.paddingFactor[size] * 3 - 2}px;
      font-size: ${theme.fontSize[size]}px;
      background-color: ${theme[variant]['bg'][80]};
      border: 1px solid ${theme[variant]['bg'][80]};
      color: ${theme[variant]['text'][100]};
      
      &:hover {
        background-color: ${theme[variant]['bg'][100]};
        border: 1px solid ${theme[variant]['bg'][100]};
      }

      &:active {
        opacity: 0.6;
      }

      &:disabled {
        background-color: ${theme.disabled.bg[80]};
        border: 1px solid ${theme.disabled.bg[80]};
        color: ${theme.disabled.text[100]};
        opacity: 0.6;
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
  `}
`
