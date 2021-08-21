import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Text } from 'rebass'
import { Button } from './index'
import { CommonVariants, CommonSizes } from 'types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    // disabled: { control: 'boolean' },
    // variant: {
    //   control: { type: 'radio' },
    //   options: Object.keys(CommonVariants),
    // }
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Text
        sx={{
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Contained
      </Text>
      <Flex
        mb={10}
        alignItems="center"
        sx={{
          gap: 10,
        }}
      >
        <Button {...args} size={CommonSizes.small} />
        <Button {...args} size={CommonSizes.medium} />
        <Button {...args} size={CommonSizes.large} />
      </Flex>

      <Text
        sx={{
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Outlined
      </Text>
      <Flex
        mb={10}
        alignItems="center"
        sx={{
          gap: 10,
        }}
      >
        <Button {...args} size={CommonSizes.small} outlined />
        <Button {...args} size={CommonSizes.medium} outlined />
        <Button {...args} size={CommonSizes.large} outlined />
      </Flex>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  variant: CommonVariants.default,
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  variant: CommonVariants.primary,
  children: 'Primary',
}

export const Success = Template.bind({})
Success.args = {
  variant: CommonVariants.success,
  children: 'Success',
}

export const Warning = Template.bind({})
Warning.args = {
  variant: CommonVariants.warning,
  children: 'Warning',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: CommonVariants.danger,
  children: 'Danger',
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: CommonVariants.danger,
  disabled: true,
  children: 'Disabled',
}
