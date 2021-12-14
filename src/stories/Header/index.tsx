import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Hamburger from '../Hamburger'
import logoImg from '../assets/logo.png'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'
import { getStyles } from 'themes/themeUtils'
import { getColorStates } from 'themes/themeUtils/createPalette'

export const HEADER_LINKS: { name: string; path: string }[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
]

type HeaderProps = {
  /**
   * ToDo: Add color-type as HEX-string-pattern such as `#XXXXXX` along with `CommonColors`,
   *  so Header-Background color can be also be changed with custom HEX-color-code with the use of `createPalette > getColorStates` along with existing `CommonColors`.
   */
  color?: string | CommonColors
  size: CommonSizes
  variant?: CommonVariants
  'data-testid'?: string
  className?: string
  navLinks: { name: string; path: string }[]
  logoTitle?: string
}

const Header = ({
  color = CommonColors.primary,
  variant = CommonVariants.contained,
  size = CommonSizes.md,
  className = '',
  navLinks = HEADER_LINKS,
  logoTitle = '',
  ...restProps
}: HeaderProps) => {
  const [isOpen, setOpen] = useState(true)

  return (
    <>
      <HamburgerContainer
        defaultValue={isOpen}
        value={isOpen}
        onChange={(v) => {
          setOpen(v)
        }}
        color={CommonColors.default}
        size={CommonSizes.md}
        variant={CommonVariants.text}
      />
      {isOpen && (
        <Helmet>
          <body className="h-overflow-hidden" />
        </Helmet>
      )}
      <Container
        data-testid={restProps['data-testid'] || 'header'}
        className={className}
        isOpen={isOpen}
        color={color}
        size={size}
        variant={variant}
      >
        <NavLinkContainer
          to={'/'}
          exact
          className="logo-container"
          onClick={() => setOpen(false)}
          color={color}
          size={size}
          variant={variant}
        >
          <img src={logoImg} alt="logo" />
          {logoTitle && <span>{logoTitle}</span>}
        </NavLinkContainer>
        <LinksContainer>
          {navLinks.map(({ name, path }) => (
            <NavLinkContainer
              key={name}
              to={path}
              exact
              activeClassName="selected"
              onClick={() => {
                setOpen(false)
              }}
              color={color}
              size={size}
              variant={variant}
            >
              {name}
            </NavLinkContainer>
          ))}
        </LinksContainer>
      </Container>
      {isOpen && (
        <Overlay
          data-testid="overlay"
          onClick={() => {
            setOpen(false)
          }}
        />
      )}
    </>
  )
}

export default Header

const HamburgerContainer = styled(Hamburger)`
  position: absolute;
  top: ${({ theme }) => theme.space.md}px;
  right: ${({ theme }) => theme.space.lg}px;

  ${({ theme }) => theme.mediaQuery['md']} {
    display: none;
  }
`

type ContainerProps = {
  color: string | CommonColors
  size: CommonSizes
  variant: CommonVariants
  isOpen: boolean
}

const containerVariants = getStyles<ContainerProps>((props) => {
  const {
    theme: { palette },
    color,
    // size,
    variant,
  } = props

  const { main } = color.includes('#')
    ? getColorStates(color)
    : palette[variant][color as CommonColors]

  return {
    variant: {
      [CommonVariants.contained]: {
        backgroundColor: main,
      },
    },
  }
})

const Container = styled.header<ContainerProps>`
  position: sticky;

  z-index: 998;
  transition: width 300ms;

  ${({ theme }) => theme.mediaQuery['md']} {
    width: 100%;

    display: flex;
    justify-content: space-around;

    box-shadow: ${({ theme }) => theme.shadows.header};
  }

  ${({ theme }) => theme.mediaQuery['<md']} {
    position: fixed;
    height: 100vh;

    ${({ isOpen }) =>
      isOpen
        ? `
          width: 50%;
        `
        : `
          width: 0;
          overflow: hidden;
    `}
  }

  ${containerVariants};
`

const LinksContainer = styled.div`
  display: flex;

  ${({ theme }) => theme.mediaQuery['<md']} {
    flex-direction: column;
  }
`

type NavLinkContainerProps = {
  color: string | CommonColors
  variant: CommonVariants
  size: CommonSizes
}

const navLinkContainerVariants = getStyles<NavLinkContainerProps>((props) => {
  const {
    theme: { palette, space },
    color,
    // size,
    variant,
  } = props

  const { main, dark, light, contrastText } = color.includes('#')
    ? getColorStates(color)
    : palette[variant][color as CommonColors]

  return {
    size: {
      [CommonSizes.sm]: {
        padding: space.sm,
      },
      [CommonSizes.md]: {
        padding: space.md,
      },
      [CommonSizes.lg]: {
        padding: space.lg,
      },
    },
    variant: {
      [CommonVariants.contained]: {
        backgroundColor: main,
        color: contrastText,
        '&:hover': {
          backgroundColor: dark,
        },
        '&:active': {
          backgroundColor: light,
        },
      },
    },
  }
})

const NavLinkContainer = styled(NavLink)<NavLinkContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.space.lg}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
  white-space: nowrap;

  border: 2px solid transparent;

  transition: all 300ms;

  &.selected {
    ${({ theme }) => theme.mediaQuery['md']} {
      border-bottom: 2px solid;
    }

    ${({ theme }) => theme.mediaQuery['<md']} {
      border-right: 2px solid;
    }
  }

  &.logo-container {
    grid-gap: ${({ theme }) => theme.space.md}px;

    img {
      width: 20px;
    }

    ${({ theme }) => theme.mediaQuery['<md']} {
      justify-content: center;
      border-bottom: 1px solid;
    }
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  ${navLinkContainerVariants};
`

const OverlayAnimation = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 997;
  animation: ${OverlayAnimation} 300ms forwards;

  ${({ theme }) => theme.mediaQuery['md']} {
    display: none;
  }
`
