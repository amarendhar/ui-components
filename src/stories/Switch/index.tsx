import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Focus } from 'styles'
import { createClassName } from 'utils/helpers'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'

type SwitchBoxProps = {
  color?: CommonColors
  variant?: CommonVariants.contained
  size?: CommonSizes
  'data-testid'?: string
  className?: string
  defaultValue?: boolean
  value?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  children: React.ReactNode
}

const SwitchBox = ({
  color = CommonColors.primary,
  variant = CommonVariants.contained,
  size = CommonSizes.md,
  className = '',
  defaultValue = false,
  value = false,
  onChange = () => {},
  disabled = false,
  children,
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
      data-testid={restProps['data-testid']}
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

const SwitchTrack = styled.span<SwitchTrackProps>`
  display: flex;
  align-items: center;
  border-radius: 34px;
  transition: background-color 0.4s, border 0.4s;

  ${switchTrackVariants}
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
