import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Focus } from 'styles'
import { createClassName } from 'utils/helpers'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'

type CheckBoxProps = {
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
 * ToDo: Add test-cases.
 * ToDo: focus is not working, as input-field has opacity:0 suggested by mui-documentation,
 *  need show focus on container manually by javascript when focused on input-field.
 * ToDo: Add `indeterminate` type, refer `https://v4.mui.com/components/checkboxes/`.
 */
const CheckBox = ({
  color = CommonColors.primary,
  variant = CommonVariants.contained,
  size = CommonSizes.md,
  className = '',
  defaultValue = false,
  value = false,
  disabled = false,
  children,
  onChange,
  ...restProps
}: CheckBoxProps) => {
  const [checked, toggleChecked] = useState(defaultValue)
  const isMounted = useRef(false)

  // useEffect(() => {
  //   // componentDidMount & componentDidUpdate
  //
  //   if (!isMounted.current) {
  //     // componentDidMount
  //     isMounted.current = true
  //   } else {
  //     // componentDidUpdate
  //   }
  // })

  // useEffect(() => {
  //   // componentDidMount
  //   isMounted.current = true

  //   return () => {
  //     // componentWillUnmount
  //     isMounted.current = false
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isMounted.current) {
  //     toggleChecked(value)
  //   }
  // }, [value])

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else if (isMounted.current) {
      toggleChecked(value)
    }
  }, [value, toggleChecked])

  return (
    <Container
      data-testid={restProps['data-testid'] || 'checkBox'}
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
          onChange?.(!checked)
        }}
      />
      <CheckTrack
        color={color}
        variant={variant}
        size={size}
        checked={checked}
        className={createClassName({
          disabled: disabled,
        })}
      >
        <CheckThumb
          color={color}
          variant={variant}
          size={size}
          checked={checked}
        />
      </CheckTrack>
      {children && <Label disabled={disabled}>{children}</Label>}
    </Container>
  )
}

export default CheckBox

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

type CheckTrackProps = {
  color: CommonColors
  variant: CommonVariants
  size: CommonSizes
  checked: boolean
}

const checkTrackVariants = getStyles<CheckTrackProps>((props) => {
  const {
    theme: { palette },
    color,
    variant,
    checked,
  } = props
  const { main, dark, light } = palette[variant][color]

  return {
    size: {
      [CommonSizes.sm]: {
        width: 12,
        height: 12,
      },
      [CommonSizes.md]: {
        width: 16,
        height: 16,
      },
      [CommonSizes.lg]: {
        width: 20,
        height: 20,
      },
    },
    variant: {
      [CommonVariants.contained]: {
        backgroundColor: checked ? main : 'transparent',
        border: `2px solid ${main}`,
        '&:hover': {
          backgroundColor: checked ? dark : 'transparent',
          border: `2px solid ${dark}`,
        },
        '&:active': {
          backgroundColor: checked ? light : 'transparent',
          border: `2px solid ${light}`,
        },
        '&.disabled': {
          backgroundColor: palette.disabled.main,
          border: `2px solid transparent`,
        },
      },
    },
  }
})

/**
 * Note: `CheckTrack` `hover/active/disabled` css works only on hover/active/disabled of `CheckThumb` if `z-index: 1` is not provided for `CheckTrack`.
 */
const CheckTrack = styled.span<CheckTrackProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  z-index: 1;

  transition: background-color 0.4s, border 0.4s;

  ${checkTrackVariants};
`

const Input = styled.input`
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

type CheckThumbProps = {
  color: CommonColors
  variant: CommonVariants
  size: CommonSizes
  checked: boolean
}

const checkThumbVariants = getStyles<CheckThumbProps>((props) => {
  const {
    theme: { palette },
    color,
    variant,
  } = props
  const { contrastText } = palette[variant][color]

  return {
    size: {
      sm: {
        width: 4,
        height: 8,
        marginTop: -2,
      },
      md: {
        width: 5,
        height: 11,
        marginTop: -3,
      },
      lg: {
        width: 6,
        height: 12,
        marginTop: -4,
      },
    },
    variant: {
      [CommonVariants.contained]: {
        borderColor: contrastText,
      },
    },
  }
})

const CheckThumb = styled.span<CheckThumbProps>`
  border-bottom: 2px solid;
  border-right: 2px solid;

  opacity: ${({ checked }) => (checked ? 1 : 0)};

  transform: rotate(40deg);
  transition: 0.2s;

  ${checkThumbVariants};
`

const Label = styled.span<{ disabled: boolean }>`
  margin-left: 8px;

  color: ${(props) =>
    props.disabled ? props.theme.palette.disabled.contrastText : ''};

  user-select: none;
`
