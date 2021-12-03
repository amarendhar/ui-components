import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SwitchBox from './index'
import { FlexContainer } from 'stories/storyStyles'
import { CommonColors, CommonSizes } from 'themes/themTypes'

export default {
  title: 'Components/SwitchBox',
  component: SwitchBox,
} as ComponentMeta<typeof SwitchBox>

const Template: ComponentStory<typeof SwitchBox> = (args) => {
  return (
    <>
      <FlexContainer label="OFF">
        <SwitchBox {...args} size={CommonSizes.sm} />
        <SwitchBox {...args} size={CommonSizes.md} />
        <SwitchBox {...args} size={CommonSizes.lg} />
      </FlexContainer>
      <FlexContainer label="ON">
        <SwitchBox {...args} size={CommonSizes.sm} defaultValue />
        <SwitchBox {...args} size={CommonSizes.md} defaultValue />
        <SwitchBox {...args} size={CommonSizes.lg} defaultValue />
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
