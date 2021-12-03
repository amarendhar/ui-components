import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CheckBox from './index'
import { FlexContainer } from 'stories/storyStyles'
import { CommonColors, CommonSizes } from 'themes/themTypes'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => {
  return (
    <>
      <FlexContainer label="Checked">
        <CheckBox {...args} size={CommonSizes.sm} />
        <CheckBox {...args} size={CommonSizes.md} />
        <CheckBox {...args} size={CommonSizes.lg} />
      </FlexContainer>
      <FlexContainer label="Not Checked">
        <CheckBox {...args} size={CommonSizes.sm} defaultValue />
        <CheckBox {...args} size={CommonSizes.md} defaultValue />
        <CheckBox {...args} size={CommonSizes.lg} defaultValue />
      </FlexContainer>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: CommonColors.default,
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  color: CommonColors.primary,
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: CommonColors.secondary,
  children: 'Secondary',
}

export const Success = Template.bind({})
Success.args = {
  color: CommonColors.success,
  children: 'Success',
}

export const Warning = Template.bind({})
Warning.args = {
  color: CommonColors.warning,
  children: 'Warning',
}

export const Error = Template.bind({})
Error.args = {
  color: CommonColors.error,
  children: 'Error',
}

export const Info = Template.bind({})
Info.args = {
  color: CommonColors.info,
  children: 'Info',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Disabled',
}
