import React from 'react'
import styled from 'styled-components'

export enum ButtonStatus {
  default = 'default',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

type ButtonProps = {
  'data-testid'?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  status?: ButtonStatus
  children: React.ReactNode
}

const Button = ({
  className = '',
  status = ButtonStatus.default,
  onClick = () => {},
  disabled = false,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonContainer
      data-testid={restProps['data-testid']}
      className={className}
      status={status}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.button<{ status: string }>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border: 0;
  outline: none;
  user-select: none;
  border-radius: ${props => props.theme.space.medium}px;
  padding: ${props => props.theme.space.medium}px;
  transition: all 300ms ease 0s;

  ${({ status, theme }) => `
    color: ${theme[status]['text'][100]};
    background-color: ${theme[status]['bg'][60]};
    border: 1px solid ${theme[status]['bg'][60]};
    
    &:hover {
      background-color: ${theme[status]['bg'][80]};
      border: 1px solid ${theme[status]['bg'][100]};
    }

    &:active {
      background-color: ${theme[status]['bg'][100]};
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
