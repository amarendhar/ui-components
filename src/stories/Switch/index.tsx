import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes } from 'types'
import { createClassName } from 'utils/helpers'

type SwitchBoxProps = {
  'data-testid'?: string
  className?: string
  onChange?: (checked: boolean) => void
  defaultValue?: boolean
  value?: boolean
  disabled?: boolean
  children: React.ReactNode
  variant?: CommonColors
  size?: CommonSizes
}

export const SwitchBox = ({
  className = '',
  onChange = () => {},
  defaultValue = false,
  value = false,
  disabled = false,
  children,
  variant = CommonColors.default,
  size = CommonSizes.medium,
  ...restProps
}: SwitchBoxProps) => {
  const [checked, toggleChecked] = useState(defaultValue)

  useEffect(() => {
    toggleChecked(value)
  }, [value])

  return (
    <Container
      data-testid={restProps['data-testid']}
      className={`container ${className}`}
      onClick={() => {
        if (disabled) {
          return
        }

        toggleChecked((v) => {
          onChange(!v)
          return !v
        })
      }}
      disabled={disabled}
    >
      <SwitchContainer
        className={createClassName({
          disabled: disabled,
        })}
        variant={variant}
        size={size}
        checked={checked}
      >
        <Switch
          className={createClassName({
            checked: checked,
          })}
          checked={checked}
          size={size}
        />
      </SwitchContainer>
      {children && <Label disabled={disabled}>{children}</Label>}
    </Container>
  )
}

export default SwitchBox

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  * {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`

const sizeVariants = getStyles({
  size: {
    small: {
      width: 28,
      height: 14,
    },
    medium: {
      width: 33,
      height: 18,
    },
    large: {
      width: 45,
      height: 21,
    },
  },
})

const SwitchContainer = styled.span<{
  variant: string
  size: string
  checked: boolean
}>`
  display: flex;
  align-items: center;

  ${sizeVariants}

  border-radius: 34px;
  transition: 0.4s;

  ${({ theme, variant, size, checked }) => {
    const bg = checked
      ? variant === CommonColors.default
        ? theme.colors.grey
        : theme[variant]['bg']
      : theme.colors.grey
    const border = checked
      ? variant === CommonColors.default
        ? theme.colors.grey
        : theme[variant]['border']
      : theme.colors.grey

    return `
      background-color: ${bg[80]};
      border: 1px solid ${border[80]};

      &:hover {
        background-color: ${bg[100]};
        border: 1px solid ${border[100]};
      }

      &:active {
        opacity: 0.6;
      }

      &.disabled {
        background-color: ${theme.colors.silver[100]};
        border: 1px solid ${theme.colors.silver[100]};
        color: 1px solid ${theme.colors.silver[100]};
      }
    `
  }}
`

const transformVariants = getStyles({
  size: {
    small: {
      width: 10,
      height: 10,
      transform: 'translateX(3px)',
      '&.checked': {
        transform: 'translateX(15px)',
      },
    },
    medium: {
      width: 12,
      height: 12,
      transform: 'translateX(3px)',
      '&.checked': {
        transform: 'translateX(18px)',
      },
    },
    large: {
      width: 15,
      height: 15,
      transform: 'translateX(3px)',
      '&.checked': {
        transform: 'translateX(27px)',
      },
    },
  },
})

const Switch = styled.span<{ checked: boolean; size: CommonSizes }>`
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;

  ${transformVariants}
`

const Label = styled.span<{ disabled: boolean }>`
  margin-left: 8px;
  user-select: none;
  color: ${(props) =>
    props.disabled ? props.theme.colors.silver[100] : 'initial'};
`
