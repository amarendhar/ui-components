import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './index'
import { FlexContainer } from 'stories/storyStyles'
import { CommonColors, CommonSizes, CommonVariant } from 'types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    // disabled: { control: 'boolean' },
    // color: {
    //   control: { variant: 'radio' },
    //   options: Object.keys(CommonColors),
    // }
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <FlexContainer label="Contained">
        <Button {...args} size={CommonSizes.small} />
        <Button {...args} size={CommonSizes.medium} />
        <Button {...args} size={CommonSizes.large} />
      </FlexContainer>

      <FlexContainer label="Outlined">
        <Button
          {...args}
          size={CommonSizes.small}
          variant={CommonVariant.outlined}
        />
        <Button
          {...args}
          size={CommonSizes.medium}
          variant={CommonVariant.outlined}
        />
        <Button
          {...args}
          size={CommonSizes.large}
          variant={CommonVariant.outlined}
        />
      </FlexContainer>

      <FlexContainer label="Text">
        <Button
          {...args}
          size={CommonSizes.small}
          variant={CommonVariant.text}
        />
        <Button
          {...args}
          size={CommonSizes.medium}
          variant={CommonVariant.text}
        />
        <Button
          {...args}
          size={CommonSizes.large}
          variant={CommonVariant.text}
        />
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
