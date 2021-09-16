import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Text } from 'rebass'
import { Button } from './index'
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
      </Flex>

      <Text
        sx={{
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Text
      </Text>
      <Flex
        mb={10}
        alignItems="center"
        sx={{
          gap: 10,
        }}
      >
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
      </Flex>
    </>
  )
}

// export const Default = Template.bind({})
// Default.args = {
//   color: CommonColors.default,
//   children: 'Default',
// }

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
  color: CommonColors.disabled,
  disabled: true,
  children: 'Disabled',
}
