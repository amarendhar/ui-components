import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Focus } from 'styles'
import { createClassName } from 'utils/helpers'
import { getStyles } from 'themes/themeUtils'
import {
  CommonColors,
  CommonSizes,
  CommonVariants,
  PALETTE_MODE,
} from 'themes/themTypes'

type SwitchBoxProps = {
  color?: CommonColors
  variant?: CommonVariants
  size?: CommonSizes
  'data-testid'?: string
  className?: string
  defaultValue?: boolean
  value?: boolean
  disabled?: boolean
  children: React.ReactNode
  onChange?: (checked: boolean) => void
}

/**
 * Add below css to input element
 * 
    user-select: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
 */
const SwitchBox = ({
  color = CommonColors.primary,
  variant = CommonVariants.contained,
  size = CommonSizes.md,
  className = '',
  defaultValue = false,
  value = false,
  disabled = false,
  children,
  onChange = () => {},
  ...restProps
}: SwitchBoxProps) => {
  const [checked, toggleChecked] = useState(defaultValue)
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else if (isMounted.current) {
      toggleChecked(value)
    }
  }, [value, toggleChecked])

  return (
    <Container
      data-testid={restProps['data-testid'] || 'switchBox'}
      className={`container ${className}`}
      disabled={disabled}
    >
      <Input
        type="checkbox"
        checked={checked}
        onChange={() => {
          if (disabled) {
            return
          }

          toggleChecked(!checked)
          onChange(!checked)
        }}
      />
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
      </SwitchTrack>
      {children && <Label disabled={disabled}>{children}</Label>}
    </Container>
  )
}

export default SwitchBox

const Container = styled.label<{ disabled: boolean }>`
  position: relative;

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
      [CommonSizes.sm]: {
        width: 28,
        height: 14,
      },
      [CommonSizes.md]: {
        width: 33,
        height: 18,
      },
      [CommonSizes.lg]: {
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

/**
 * Note: `CheckTrack` `hover/active/disabled` css works only on hover/active/disabled of `CheckThumb` if `z-index: 1` is not provided for `CheckTrack`.
 */
const SwitchTrack = styled.span<SwitchTrackProps>`
  display: flex;
  align-items: center;

  border-radius: 34px;
  z-index: 1;

  transition: background-color 0.4s, border 0.4s;

  ${switchTrackVariants};
`

const Input = styled.input<{ checked: boolean }>`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;

  &:focus-visible + span {
    ${Focus}
  }
`

type SwitchThumbProps = {
  size: CommonSizes
  checked: boolean
}

const switchThumbVariants = getStyles<SwitchThumbProps>(({ checked }) => {
  return {
    size: {
      sm: {
        width: 10,
        height: 10,
        transform: checked ? 'translateX(15px)' : 'translateX(3px)',
      },
      md: {
        width: 12,
        height: 12,
        transform: checked ? 'translateX(18px)' : 'translateX(3px)',
      },
      lg: {
        width: 15,
        height: 15,
        transform: checked ? 'translateX(27px)' : 'translateX(3px)',
      },
    },
  }
})

const SwitchThumb = styled.span<SwitchThumbProps>`
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid
    ${({ theme, checked }) =>
      theme.palette.mode === PALETTE_MODE.DARK
        ? theme.palette.grey[500]
        : theme.palette.common.white};

  background-color: white;

  transition: 0.4s;

  ${switchThumbVariants};
`

const Label = styled.span<{ disabled: boolean }>`
  margin-left: 8px;

  color: ${(props) =>
    props.disabled ? props.theme.palette.disabled.contrastText : ''};

  user-select: none;
`
