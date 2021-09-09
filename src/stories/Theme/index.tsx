import React from 'react'
// import React, { useRef } from 'react'
import styled from 'styled-components'
import { isArray, isObject } from 'utils/helpers'

type ThemeProps = {
  'data-testid'?: string
  className?: string
  theme: object
}

export const Theme = ({ className = '', theme, ...restProps }: ThemeProps) => {
  // const counter = useRef(0)

  const getComponents = (key: any, value: any) => {
    if (value?.[0] === '#' || (value?.indexOf && value?.indexOf('rgb') === 0)) {
      return (
        <Color color={value}>
          <div />
          <span>{value}</span>
        </Color>
      )
    }

    if (value?.includes && value?.includes('px rgb')) {
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

    if (key?.includes && key?.includes('fontSize')) {
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

    if (key?.includes && key?.includes('fontWeight')) {
      return (
        <FontWeight fontWeight={value}>
          <span>{value}</span>
        </FontWeight>
      )
    }

    return value
  }

  const getValues = (obj: any) => {
    return Object.keys(obj).map((key) => {
      const value = obj[key]
      const isIterable = isArray(value) || isObject(value)

      // counter.current += 1
      // const counterValue = counter.current
      // if (!isIterable) {
      //   counter.current = 0
      // }
      // console.log('counter.current -> ', counter.current)

      return (
        <Container
          key={key}
          data-testid={key}
          style={!isIterable ? { display: 'flex', alignItems: 'center' } : {}}
        >
          {key && <div style={{ fontWeight: 'bold' }}>{key}</div>}
          {!isIterable && (
            <div style={{ fontWeight: 'bold', marginRight: '5px' }}>
              :&nbsp;
            </div>
          )}
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
    margin-right: 10px;
    background-color: ${(props) => props.color};
  }
`

const BoxShadow = styled.div<{ boxShadow: string }>`
  display: flex;
  align-items: center;
  margin: 10px 0;
  box-shadow: ${(props) => props.boxShadow};
`

const BorderRadius = styled.div<{ borderRadius: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
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
