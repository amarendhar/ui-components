import React from 'react'
import styled from 'styled-components'
import { getStyles } from 'themes/themeUtils'
import { CommonColors, CommonSizes, CommonVariant } from 'types'

type ButtonProps = {
  color?: CommonColors
  variant?: CommonVariant
  size?: CommonSizes
  'data-testid'?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

export const Button = ({
  color = CommonColors.primary,
  variant = CommonVariant.contained,
  size = CommonSizes.medium,
  className = '',
  onClick = () => {},
  disabled = false,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonContainer
      color={color}
      variant={variant}
      size={size}
      data-testid={restProps['data-testid']}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <Label>{children}</Label>
    </ButtonContainer>
  )
}

export default Button

type ButtonStyledProps = {
  color: CommonColors
  variant: CommonVariant
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
const buttonVariants = getStyles<ButtonStyledProps>((props) => {
  const {
    theme: { palette, fontSize },
    color,
    variant,
    size,
  } = props
  const { main, dark, light, contrastText } = palette[variant][color]

  return {
    size: {
      [CommonSizes.small]: {
        padding: '4px 10px',
        fontSize: fontSize[size],
      },
      [CommonSizes.medium]: {
        padding: '6px 16px',
        fontSize: fontSize[size],
      },
      [CommonSizes.large]: {
        padding: '8px 22px',
        fontSize: fontSize[size],
      },
    },
    variant: {
      [CommonVariant.contained]: {
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
      [CommonVariant.outlined]: {
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
      [CommonVariant.text]: {
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
 * ToDo: `line-height: 1.7` is suggested from Material-UI,
 *  but is it really required ??
 */
const ButtonContainer = styled.button<ButtonStyledProps>`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border: 0;
  outline: none;
  user-select: none;
  line-height: 1.7;
  border-radius: ${({ theme }) => theme.space.small}px;
  transition: all 300ms ease 0s;

  ${buttonVariants}
`

const Label = styled.span``
