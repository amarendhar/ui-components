import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Text } from 'rebass'
import { SwitchBox } from './index'
import { CommonVariants, CommonSizes } from 'types'

export default {
  title: 'Components/SwitchBox',
  component: SwitchBox,
} as ComponentMeta<typeof SwitchBox>

const Template: ComponentStory<typeof SwitchBox> = (args) => {
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
          gap: 50,
        }}
      >
        <SwitchBox {...args} size={CommonSizes.small} />
        <SwitchBox {...args} size={CommonSizes.medium} />
        <SwitchBox {...args} size={CommonSizes.large} />
      </Flex>
      <Flex
        mb={10}
        alignItems="center"
        sx={{
          gap: 50,
        }}
      >
        <SwitchBox {...args} size={CommonSizes.small} value />
        <SwitchBox {...args} size={CommonSizes.medium} value />
        <SwitchBox {...args} size={CommonSizes.large} value />
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
