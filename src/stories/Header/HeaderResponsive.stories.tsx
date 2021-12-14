import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useHistory } from 'react-router-dom'
import { FlexContainer } from 'stories/storyStyles'
import Header from './index'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'
import colorCodes from 'mocks/colorCodes'

export default {
  title: 'Components/Header/Responsive',
  component: Header,
  args: {
    variant: CommonVariants.contained,
  },
} as ComponentMeta<typeof Header>

const useHeader = () => {
  const history = useHistory()

  useEffect(() => {
    history.push('/')
  }, [history])
}

const Template: ComponentStory<typeof Header> = (args) => {
  useHeader()

  return (
    <FlexContainer
      style={{ flexDirection: 'column', alignItems: 'start', gridGap: '30px' }}
    >
      <Header {...args} size={CommonSizes.sm} logoTitle="small" />
      <Header {...args} size={CommonSizes.md} logoTitle="medium" />
      <Header {...args} size={CommonSizes.lg} logoTitle="large" />
    </FlexContainer>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: CommonColors.default,
}

export const Primary = Template.bind({})
Primary.args = {
  color: CommonColors.primary,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: CommonColors.secondary,
}

export const Success = Template.bind({})
Success.args = {
  color: CommonColors.success,
}

export const Warning = Template.bind({})
Warning.args = {
  color: CommonColors.warning,
}

export const Error = Template.bind({})
Error.args = {
  color: CommonColors.error,
}

export const Info = Template.bind({})
Info.args = {
  color: CommonColors.info,
}

export const ColorPicker = Template.bind({})
ColorPicker.args = {
  color: colorCodes[120],
}
ColorPicker.parameters = {
  controls: {
    // https://storybook.js.org/docs/react/essentials/controls
    matchers: {
      color: /(color)$/i,
    },
  },
}

// All color-variants
const loadOffset = 10

const TemplateOnScroll: ComponentStory<typeof Header> = (args) => {
  useHeader()
  const containerEle = useRef<HTMLElement | null>(null)
  const [colors, setColors] = useState(colorCodes.slice(0, loadOffset))

  const onScroll = useCallback(
    (e: any) => {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50

      if (bottom && colors.length < colorCodes.length) {
        const codes = [
          ...colors,
          ...colorCodes.slice(colors.length, colors.length + loadOffset),
        ]

        setColors(codes)
      }
    },
    [colors, setColors]
  )

  /**
   * Triggers onScroll-event on initial-mount, when containerEle-height is not enough to scroll to trigger onScroll-event.
   */
  useEffect(() => {
    if (containerEle.current) {
      onScroll({ target: containerEle.current })
    }
  }, [containerEle, onScroll])

  return (
    <div
      ref={(ele) => (containerEle.current = ele)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gridGap: '30px',
        height: '100vh',
        overflowY: 'auto',
      }}
      onScroll={onScroll}
    >
      {colors.map((color) => (
        <div key={color}>
          <Header {...args} color={color} logoTitle={color} />
        </div>
      ))}
      <div
        style={{
          paddingBottom: '30px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '30px',
        }}
      >
        Loading...
      </div>
    </div>
  )
}

export const LoadOnScroll = TemplateOnScroll.bind({})
LoadOnScroll.args = {
  size: CommonSizes.md,
}
