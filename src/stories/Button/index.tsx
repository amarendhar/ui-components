import React from 'react'
import styled from 'styled-components'
import { Focus } from 'styles'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'

type ButtonProps = {
  color?: CommonColors
  variant?: CommonVariants
  size?: CommonSizes
  'data-testid'?: string
  className?: string
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({
  color = CommonColors.primary,
  variant = CommonVariants.contained,
  size = CommonSizes.md,
  className = '',
  disabled = false,
  children,
  onClick = () => {},
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonContainer
      color={color}
      variant={variant}
      size={size}
      data-testid={restProps['data-testid'] || 'button'}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <Label>{children}</Label>
    </ButtonContainer>
  )
}

export default Button

type ButtonContainerProps = {
  color: CommonColors
  variant: CommonVariants
  size: CommonSizes
}

/**
 * Note: Use function instead of arrow-function,
 *  bcz generic-types `T`, such as `function <T>(props: T)`, won't work with arrow-function due to `Styled-Function` type-definition may expect function not arrow-function.
 *
 * Replace `(props: any)` with `function <T>(props: T)`, where `T` should be `Styled-Function` return-type.
 *  `Styled-Function` looks like this:
 *    const getColor = props => ({
 *      color: props.color,
 *    })
 *    const Box = styled.div`
 *      ${getColor}
 *    `
 *
 *  Here in the above example `getColor-Function` is `Styled-Function`.
 *  Here in `function <T>(props: T)`, the type `T` should be `Styled-Function` return-type.
 */
const buttonContainerVariants = getStyles<ButtonContainerProps>((props) => {
  const {
    theme: { palette, fontSizes },
    color,
    variant,
    size,
  } = props
  const { main, dark, light, contrastText } = palette[variant][color]

  return {
    size: {
      [CommonSizes.sm]: {
        padding: '4px 10px',
        fontSize: fontSizes[size],
      },
      [CommonSizes.md]: {
        padding: '6px 16px',
        fontSize: fontSizes[size],
      },
      [CommonSizes.lg]: {
        padding: '8px 22px',
        fontSize: fontSizes[size],
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

/**
 * ToDo: `line-height: 1.7` is suggested by Material-UI,
 *  but is it really required ??
 */
const ButtonContainer = styled.button<ButtonContainerProps>`
  position: relative;
  box-sizing: border-box;

  border: 0;
  border-radius: ${({ theme }) => theme.space.sm}px;

  line-height: 1.7;

  user-select: none;
  cursor: pointer;

  transition: background-color 0.3s ease, border 0.3s ease;

  &:focus-visible {
    ${Focus}
  }

  ${buttonContainerVariants};
`

const Label = styled.span``
