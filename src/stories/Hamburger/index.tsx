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
  disabled?: boolean
  onChange?: (isOpen: boolean) => void
}

const Hamburger = ({
  color = CommonColors.primary,
  variant = CommonVariants.contained,
  size = CommonSizes.md,
  className = '',
  defaultValue = false,
  value = false,
  disabled = false,
  onChange = () => {},
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
      <Track size={size}>
        <Bar
          color={color}
          variant={variant}
          disabled={disabled}
          isOpen={isOpen}
        />
        <Bar
          color={color}
          variant={variant}
          disabled={disabled}
          isOpen={isOpen}
        />
        <Bar
          color={color}
          variant={variant}
          disabled={disabled}
          isOpen={isOpen}
        />
      </Track>
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
  position: relative;

  border: 0;
  padding: 0;
  border-radius: ${({ theme }) => theme.space.sm}px;

  background-color: transparent;

  z-index: 999;
  cursor: pointer;

  transition: all 300ms;

  &:focus-visible {
    ${Focus}
  }

  ${buttonContainerVariants};
`

type TrackProps = {
  size: CommonSizes
}

const TrackVariants = getStyles<TrackProps>((props) => {
  return {
    size: {
      [CommonSizes.sm]: {
        margin: '4px 8px',
        width: 25,
        height: 25,
      },
      [CommonSizes.md]: {
        margin: '4px 8px',
        width: 30,
        height: 30,
      },
      [CommonSizes.lg]: {
        margin: '4px 8px',
        width: 35,
        height: 35,
      },
    },
  }
})

const Track = styled.span<TrackProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${TrackVariants};
`

type BarProps = {
  color: CommonColors
  variant: CommonVariants
  disabled: boolean
  isOpen: boolean
}

const barVariants = getStyles<BarProps>((props) => {
  const {
    theme: { palette },
    color,
    variant,
    disabled,
  } = props
  const { main, contrastText } = palette[variant][color]

  return {
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
  position: absolute;
  display: inline-block;

  width: 100%;
  height: 2px;

  border-radius: ${({ theme }) => theme.radii.md}px;

  transition: all 300ms;

  &:nth-child(1) {
    top: ${({ isOpen }) => (isOpen ? 'calc(50% - 1px)' : 'calc(20% - 1px)')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-36deg)' : 'rotate(0deg)')};
  }

  &:nth-child(2) {
    top: calc(50% - 1px);
    width: 75%;
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    top: ${({ isOpen }) => (isOpen ? 'calc(50% - 1px)' : 'calc(80% - 1px)')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(36deg)' : 'rotate(0deg)')};
  }

  ${barVariants};
`
