import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { createClassName } from 'utils/helpers'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariant } from 'types'

type SwitchBoxProps = {
  color?: CommonColors
  variant?: CommonVariant.contained
  size?: CommonSizes
  'data-testid'?: string
  className?: string
  onChange?: (checked: boolean) => void
  defaultValue?: boolean
  value?: boolean
  disabled?: boolean
  children: React.ReactNode
}

export const SwitchBox = ({
  color = CommonColors.default,
  variant = CommonVariant.contained,
  size = CommonSizes.medium,
  className = '',
  onChange = () => {},
  defaultValue = false,
  value = false,
  disabled = false,
  children,
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
        color={color}
        variant={variant}
        size={size}
        checked={checked}
        className={createClassName({
          disabled: disabled,
        })}
      >
        <Switch size={size} checked={checked} />
      </SwitchContainer>
      {children && <Label disabled={disabled}>{children}</Label>}
    </Container>
  )
}

export default SwitchBox

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${(props) => (props.disabled ? 'pointer-events: none' : '')};

  * {
    cursor: pointer;
  }
`

type SwitchContainerProps = {
  color: CommonColors
  variant: CommonVariant
  size: CommonSizes
  checked: boolean
}

const switchContainerVariants = getStyles<SwitchContainerProps>((props) => {
  const {
    theme: { palette },
    color,
    variant,
    checked,
  } = props
  const { main, dark, light } = !checked
    ? palette[variant][CommonColors.default]
    : palette[variant][color]

  return {
    size: {
      [CommonSizes.small]: {
        width: 28,
        height: 14,
      },
      [CommonSizes.medium]: {
        width: 33,
        height: 18,
      },
      [CommonSizes.large]: {
        width: 45,
        height: 21,
      },
    },
    variant: {
      [CommonVariant.contained]: {
        backgroundColor: main,
        border: `1px solid ${main}`,
        '&:hover': {
          backgroundColor: dark,
          border: `1px solid ${dark}`,
        },
        '&:active': {
          backgroundColor: light,
          border: `1px solid ${light}`,
        },
        '&.disabled': {
          backgroundColor: palette.disabled.main,
          border: '1px solid transparent',
        },
      },
    },
  }
})

const SwitchContainer = styled.span<SwitchContainerProps>`
  display: flex;
  align-items: center;
  border-radius: 34px;
  transition: 0.4s;

  ${switchContainerVariants}
`

type SwitchProps = {
  size: CommonSizes
  checked: boolean
}

const switchVariants = getStyles<SwitchProps>(({ checked }) => {
  return {
    size: {
      small: {
        width: 10,
        height: 10,
        transform: checked ? 'translateX(15px)' : 'translateX(3px)',
      },
      medium: {
        width: 12,
        height: 12,
        transform: checked ? 'translateX(18px)' : 'translateX(3px)',
      },
      large: {
        width: 15,
        height: 15,
        transform: checked ? 'translateX(27px)' : 'translateX(3px)',
      },
    },
  }
})

const Switch = styled.span<SwitchProps>`
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;

  ${switchVariants}
`

const Label = styled.span<{ disabled: boolean }>`
  margin-left: 8px;
  user-select: none;
  color: ${(props) =>
    props.disabled ? props.theme.palette.disabled.contrastText : ''};
`
