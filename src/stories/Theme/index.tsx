import React from 'react'
import styled, { keyframes } from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { isArray, isObject } from 'utils/helpers'

type ThemeProps = {
  'data-testid'?: string
  className?: string
  theme: object
}

export const Theme = ({ className = '', theme, ...restProps }: ThemeProps) => {
  // const counter = useRef(0)

  const getComponents = (key: any, value: any) => {
    if (value?.[0] === '#' || value?.indexOf?.('rgb') === 0) {
      return (
        <Color color={value}>
          <div />
          <span>{value}</span>
        </Color>
      )
    }

    if (value?.includes?.('px rgb')) {
      return (
        <BoxShadow boxShadow={value}>
          <span>{value}</span>
        </BoxShadow>
      )
    }

    if (key === 'borderRadius') {
      return (
        <BorderRadius borderRadius={value}>
          <span>{value}</span>
        </BorderRadius>
      )
    }

    if (key?.includes?.('fontSizes')) {
      return (
        <FontSize
          fontSize={
            value?.includes && value?.includes('rem') ? value : `${value}px`
          }
        >
          <span>{value}</span>
        </FontSize>
      )
    }

    if (key === 'fontFamily') {
      return (
        <FontFamily fontFamily={value}>
          <span>{value}</span>
        </FontFamily>
      )
    }

    if (key?.includes?.('fontWeight')) {
      return (
        <FontWeight fontWeight={value}>
          <span>{value}</span>
        </FontWeight>
      )
    }

    if (value?.includes?.('cubic-bezier')) {
      return (
        <Transitions
          animationTimingFunction={kebabCase(key)}
          transitionTimingFunction={value}
        >
          <span>{value}</span>
        </Transitions>
      )
    }

    return value
  }

  const getValues = (obj: any) => {
    return Object.keys(obj).map((key) => {
      const value = obj[key]
      const isIterable = isArray(value) || isObject(value)

      return (
        <Container
          key={key}
          data-testid={key}
          style={!isIterable ? { display: 'flex', alignItems: 'center' } : {}}
        >
          {key && (
            <div style={{ color: '#1ea7fd', margin: 2 }}>
              {key}&nbsp;:&nbsp;
            </div>
          )}
          {/* {key && <div style={{ color: '#1ea7fd' }}>{key}</div>} */}
          {/* {!isIterable && <div style={{ marginRight: '5px' }}>:&nbsp;</div>} */}
          <div>{isIterable ? getValues(value) : getComponents(key, value)}</div>
        </Container>
      )
    })
  }

  return (
    <ThemeContainer
      data-testid={restProps['data-testid']}
      className={className}
    >
      {getValues(theme)}
    </ThemeContainer>
  )
}

export default Theme

const ThemeContainer = styled.div``

const Container = styled.div`
  margin: 0 20px;
`

const Color = styled.div<{ color: string }>`
  display: flex;
  align-items: center;

  > div:first-child {
    width: 15px;
    height: 15px;

    border: 1px solid;
    margin: 5px 0;
    margin-right: 10px;

    background-color: ${(props) => props.color};
  }
`

const BoxShadow = styled.div<{ boxShadow: string }>`
  display: flex;
  align-items: center;

  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;

  box-shadow: ${(props) => props.boxShadow};
`

const BorderRadius = styled.div<{ borderRadius: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  padding: 3px;

  border: 1px solid;
  border-radius: ${(props) => props.borderRadius}px;
`

const FontSize = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
`

const FontFamily = styled.div<{ fontFamily: string }>`
  font-family: ${(props) => props.fontFamily};
`

const FontWeight = styled.div<{ fontWeight: string }>`
  font-weight: ${(props) => props.fontWeight};
`

const widthAnimation = keyframes`
  from { width: 0%}
  to { width: 100% }
`

const Transitions = styled.div<{
  animationTimingFunction: string
  transitionTimingFunction: string
}>`
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;

  white-space: nowrap;

  background-color: red;
  animation: ${widthAnimation} 5s infinite;
  animation-timing-function: ${(props) => props.animationTimingFunction};
  transition-timing-function: ${(props) => props.transitionTimingFunction};
`
