import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Hamburger from './index'
import { FlexContainer } from 'stories/storyStyles'
import { CommonColors, CommonSizes, CommonVariants } from 'themes/themTypes'

export default {
  title: 'Components/Hamburger',
  component: Hamburger,
} as ComponentMeta<typeof Hamburger>

const Template: ComponentStory<typeof Hamburger> = (args) => {
  return (
    <>
      <FlexContainer label="Contained Default">
        <Hamburger {...args} size={CommonSizes.sm} />
        <Hamburger {...args} size={CommonSizes.md} />
        <Hamburger {...args} size={CommonSizes.lg} />
      </FlexContainer>
      <FlexContainer label="Contained Open">
        <Hamburger {...args} size={CommonSizes.sm} defaultValue />
        <Hamburger {...args} size={CommonSizes.md} defaultValue />
        <Hamburger {...args} size={CommonSizes.lg} defaultValue />
      </FlexContainer>
      <FlexContainer label="Outlined Default">
        <Hamburger
          {...args}
          size={CommonSizes.sm}
          variant={CommonVariants.outlined}
        />
        <Hamburger
          {...args}
          size={CommonSizes.md}
          variant={CommonVariants.outlined}
        />
        <Hamburger
          {...args}
          size={CommonSizes.lg}
          variant={CommonVariants.outlined}
        />
      </FlexContainer>
      <FlexContainer label="Outlined Open">
        <Hamburger
          {...args}
          size={CommonSizes.sm}
          variant={CommonVariants.outlined}
          defaultValue
        />
        <Hamburger
          {...args}
          size={CommonSizes.md}
          variant={CommonVariants.outlined}
          defaultValue
        />
        <Hamburger
          {...args}
          size={CommonSizes.lg}
          variant={CommonVariants.outlined}
          defaultValue
        />
      </FlexContainer>
      <FlexContainer label="Text Default">
        <Hamburger
          {...args}
          size={CommonSizes.sm}
          variant={CommonVariants.text}
        />
        <Hamburger
          {...args}
          size={CommonSizes.md}
          variant={CommonVariants.text}
        />
        <Hamburger
          {...args}
          size={CommonSizes.lg}
          variant={CommonVariants.text}
        />
      </FlexContainer>
      <FlexContainer label="Text Open">
        <Hamburger
          {...args}
          size={CommonSizes.sm}
          variant={CommonVariants.text}
          defaultValue
        />
        <Hamburger
          {...args}
          size={CommonSizes.md}
          variant={CommonVariants.text}
          defaultValue
        />
        <Hamburger
          {...args}
          size={CommonSizes.lg}
          variant={CommonVariants.text}
          defaultValue
        />
      </FlexContainer>
    </>
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

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
