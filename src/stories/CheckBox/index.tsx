import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { createClassName } from 'utils/helpers'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'

type CheckBoxProps = {
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

/**
 * ToDo: Add test-cases.
 * ToDo: Add `indeterminate` type, refer `https://v4.mui.com/components/checkboxes/`.
 */
const CheckBox = ({
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
      data-testid={restProps['data-testid']}
      className={`container ${className}`}
      disabled={disabled}
    >
      <CheckTrack
        color={color}
        variant={variant}
        size={size}
        checked={checked}
        className={createClassName({
          disabled: disabled,
        })}
      >
        <CheckThumb size={size} checked={checked} />
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
      </CheckTrack>
      {children && <Label disabled={disabled}>{children}</Label>}
    </Container>
  )
}

export default CheckBox

const Container = styled.label<{ disabled: boolean }>`
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
      [CommonSizes.small]: {
        width: 12,
        height: 12,
      },
      [CommonSizes.medium]: {
        width: 16,
        height: 16,
      },
      [CommonSizes.large]: {
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

const CheckTrack = styled.span<CheckTrackProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: 0.2s;

  ${checkTrackVariants}
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
`

type CheckThumbProps = {
  size: CommonSizes
  checked: boolean
}

const checkThumbVariants = getStyles<CheckThumbProps>(({ checked }) => {
  return {
    size: {
      small: {
        width: 4,
        height: 8,
        marginTop: -2,
      },
      medium: {
        width: 5,
        height: 11,
        marginTop: -3,
      },
      large: {
        width: 6,
        height: 12,
        marginTop: -4,
      },
    },
  }
})

const CheckThumb = styled.span<CheckThumbProps>`
  border-bottom: 2px solid ${({ theme }) => theme.palette.common.white};
  border-right: 2px solid ${({ theme }) => theme.palette.common.white};
  transform: rotate(40deg);
  transition: 0.2s;
  opacity: ${({ checked }) => (checked ? 1 : 0)};

  ${checkThumbVariants}
`

const Label = styled.span<{ disabled: boolean }>`
  margin-left: 8px;
  user-select: none;

  color: ${(props) =>
    props.disabled ? props.theme.palette.disabled.contrastText : ''};
`
