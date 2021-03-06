import React from 'react'
import styled, { CSSObject } from 'styled-components'

type ContainerProps = {
  label?: string
  style?: CSSObject
  children: React.ReactNode
}

export const FlexContainer = ({
  label = '',
  style = {},
  children,
}: ContainerProps) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Content style={style}>{children}</Content>
    </>
  )
}

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  margin-bottom: 20px;
`
