import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Focus } from 'styles'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'

type HamburgerProps = {
  color?: CommonColors
  variant?: CommonVariants
  size?: CommonSizes
  'data-testid'?: string
  className?: string
  defaultValue?: boolean
  value?: boolean
  onChange?: (isOpen: boolean) => void
  disabled?: boolean
}

const Hamburger = ({
  color = CommonColors.primary,
  variant = CommonVariants.contained,
  size = CommonSizes.md,
  className = '',
  defaultValue = false,
  value = false,
  onChange = () => {},
  disabled = false,
  ...restProps
}: HamburgerProps) => {
  const [isOpen, setOpen] = useState(defaultValue)
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else if (isMounted.current) {
      setOpen(value)
    }
  }, [value, setOpen])

  return (
    <ButtonContainer
      data-testid={
        restProps['data-testid'] || `hamburger-${isOpen ? 'opened' : 'closed'}`
      }
      className={className}
      onClick={() => {
        setOpen(!isOpen)
        onChange(!isOpen)
      }}
      disabled={disabled}
      color={color}
      variant={variant}
      size={size}
    >
      <Bar
        color={color}
        variant={variant}
        isOpen={isOpen}
        size={size}
        disabled={disabled}
      />
      <Bar
        color={color}
        variant={variant}
        size={size}
        isOpen={isOpen}
        disabled={disabled}
      />
      <Bar
        color={color}
        variant={variant}
        size={size}
        isOpen={isOpen}
        disabled={disabled}
      />
    </ButtonContainer>
  )
}

export default Hamburger

type ButtonContainerProps = {
  color: CommonColors
  variant: CommonVariants
  size: CommonSizes
}

const buttonContainerVariants = getStyles<ButtonContainerProps>((props) => {
  const {
    theme: { palette },
    color,
    variant,
  } = props
  const { main, dark, light, contrastText } = palette[variant][color]

  return {
    size: {
      [CommonSizes.sm]: {
        width: 40,
        gridGap: 5,
        padding: 8,
      },
      [CommonSizes.md]: {
        width: 50,
        gridGap: 5,
        padding: 10,
      },
      [CommonSizes.lg]: {
        width: 60,
        gridGap: 8,
        padding: 10,
      },
    },
    variant: {
      [CommonVariants.contained]: {
        backgroundColor: main,
        border: `1px solid ${main}`,
        color: contrastText,
        '&:hover': {
          backgroundColor: dark,
          border: `1px solid ${dark}`,
        },
        '&:active': {
          backgroundColor: light,
          border: `1px solid ${light}`,
        },
        '&:disabled': {
          backgroundColor: palette.disabled.main,
          border: '1px solid transparent',
          color: palette.disabled.contrastText,
          pointerEvents: 'none',
        },
      },
      [CommonVariants.outlined]: {
        backgroundColor: 'transparent',
        border: `1px solid ${contrastText}`,
        color: main,
        '&:hover': {
          backgroundColor: light,
          border: `1px solid ${main}`,
        },
        '&:active': {
          backgroundColor: dark,
          border: `1px solid ${main}`,
        },
        '&:disabled': {
          border: `1px solid ${palette.disabled.main}`,
          color: palette.disabled.contrastText,
          pointerEvents: 'none',
        },
      },
      [CommonVariants.text]: {
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        color: main,
        '&:hover': {
          backgroundColor: light,
        },
        '&:active': {
          backgroundColor: dark,
        },
        '&:disabled': {
          color: palette.disabled.contrastText,
          pointerEvents: 'none',
        },
      },
    },
  }
})

const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 0;
  border-radius: ${({ theme }) => theme.space.sm}px;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 999;
  cursor: pointer;

  transition: all 300ms;

  &:focus-visible {
    ${Focus}
  }

  ${buttonContainerVariants};
`

type BarProps = {
  color: CommonColors
  variant: CommonVariants
  isOpen: boolean
  size: CommonSizes
  disabled: boolean
}

const barVariants = getStyles<BarProps>((props) => {
  const {
    theme: { palette },
    color,
    variant,
    isOpen,
    disabled,
  } = props
  const { main, contrastText } = palette[variant][color]

  return {
    size: {
      [CommonSizes.sm]: {
        '&:nth-child(1)': {
          transform: isOpen ? 'rotate(-36deg) translate(-4px, 6px)' : 'none',
        },
        '&:nth-child(2)': {
          width: '75%',
          opacity: isOpen ? 0 : 1,
        },
        '&:nth-child(3)': {
          transform: isOpen ? 'rotate(36deg) translate(-4px, -6px)' : 'none',
        },
      },
      [CommonSizes.md]: {
        '&:nth-child(1)': {
          transform: isOpen ? 'rotate(-36deg) translate(-4px, 6px)' : 'none',
        },
        '&:nth-child(2)': {
          width: '75%',
          opacity: isOpen ? 0 : 1,
        },
        '&:nth-child(3)': {
          transform: isOpen ? 'rotate(36deg) translate(-4px, -6px)' : 'none',
        },
      },
      [CommonSizes.lg]: {
        '&:nth-child(1)': {
          transform: isOpen ? 'rotate(-36deg) translate(-6px, 8px)' : 'none',
        },
        '&:nth-child(2)': {
          width: '75%',
          opacity: isOpen ? 0 : 1,
        },
        '&:nth-child(3)': {
          transform: isOpen ? 'rotate(36deg) translate(-6px, -8px)' : 'none',
        },
      },
    },
    variant: {
      [CommonVariants.contained]: {
        backgroundColor: disabled
          ? palette.disabled.contrastText
          : contrastText,
      },
      [CommonVariants.outlined]: {
        backgroundColor: disabled ? palette.disabled.contrastText : main,
      },
      [CommonVariants.text]: {
        backgroundColor: disabled ? palette.disabled.contrastText : main,
      },
    },
  }
})

const Bar = styled.span<BarProps>`
  width: 100%;
  height: 2px;
  border-radius: ${({ theme }) => theme.radii.md}px;

  transition: all 300ms;

  ${barVariants};
`
