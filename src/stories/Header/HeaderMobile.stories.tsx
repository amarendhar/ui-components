import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useHistory } from 'react-router-dom'
import { FlexContainer } from 'stories/storyStyles'
import Header from './index'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'
import colorCodes from 'mocks/colorCodes'

/**
 * mobile1 -> `Small mobile`
 * mobile2 -> `Large mobile`
 * tablet -> `Tablet`
 */
export default {
  title: 'Components/Header/Mobile',
  component: Header,
  args: {
    variant: CommonVariants.contained,
  },
  parameters: {
    // https://storybook.js.org/docs/react/essentials/viewport
    viewport: {
      defaultViewport: 'mobile2',
    },
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
      <Header {...args} />
    </FlexContainer>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: CommonColors.default,
  size: CommonSizes.lg,
  logoTitle: 'large',
}

export const Primary = Template.bind({})
Primary.args = {
  color: CommonColors.primary,
  size: CommonSizes.md,
  logoTitle: 'medium',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: CommonColors.secondary,
  size: CommonSizes.sm,
  logoTitle: 'small',
}

export const Success = Template.bind({})
Success.args = {
  color: CommonColors.success,
  size: CommonSizes.lg,
  logoTitle: 'large',
}

export const Warning = Template.bind({})
Warning.args = {
  color: CommonColors.warning,
  size: CommonSizes.md,
  logoTitle: 'medium',
}

export const Error = Template.bind({})
Error.args = {
  color: CommonColors.error,
  size: CommonSizes.sm,
  logoTitle: 'small',
}

export const Info = Template.bind({})
Info.args = {
  color: CommonColors.info,
  size: CommonSizes.lg,
  logoTitle: 'large',
}

export const ColorPicker = Template.bind({})
ColorPicker.args = {
  color: colorCodes[120],
  size: CommonSizes.md,
  logoTitle: 'medium',
}
ColorPicker.parameters = {
  controls: {
    // https://storybook.js.org/docs/react/essentials/controls
    matchers: {
      color: /(color)$/i,
    },
  },
}
