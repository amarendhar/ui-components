import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { createClassName } from 'utils/helpers'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'

type SwitchBoxProps = {
  color?: CommonColors
  variant?: CommonVariants.contained
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
  color = CommonColors.primary,
  variant = CommonVariants.contained,
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
      disabled={disabled}
    >
      <SwitchTrack
        color={color}
        variant={variant}
        size={size}
        checked={checked}
        className={createClassName({
          disabled: disabled,
        })}
      >
        <SwitchThumb size={size} checked={checked} />
        <Input
          type="checkbox"
          checked={checked}
          onChange={() => {
            if (disabled) {
              return
            }

            toggleChecked((v) => {
              onChange(!v)
              return !v
            })
          }}
        />
      </SwitchTrack>
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

type SwitchTrackProps = {
  color: CommonColors
  variant: CommonVariants
  size: CommonSizes
  checked: boolean
}

const switchTrackVariants = getStyles<SwitchTrackProps>((props) => {
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
      [CommonVariants.contained]: {
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

const SwitchTrack = styled.span<SwitchTrackProps>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 34px;
  transition: 0.4s;

  ${switchTrackVariants}
`

const Input = styled.input<{ checked: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
`

type SwitchThumbProps = {
  size: CommonSizes
  checked: boolean
}

const switchThumbVariants = getStyles<SwitchThumbProps>(({ checked }) => {
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

const SwitchThumb = styled.span<SwitchThumbProps>`
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;

  ${switchThumbVariants}
`

const Label = styled.span<{ disabled: boolean }>`
  margin-left: 8px;
  user-select: none;
  color: ${(props) =>
    props.disabled ? props.theme.palette.disabled.contrastText : ''};
`
