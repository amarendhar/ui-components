import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex } from 'rebass'
import { Theme } from './index'
import lightTheme from '../../themes/lightTheme'
import darkTheme from '../../themes/darkTheme'
import defaultTheme from 'themes/defaultTheme'

export default {
  title: 'Themes',
  component: Theme,
  argTypes: {},
} as ComponentMeta<typeof Theme>

const Template: ComponentStory<typeof Theme> = (args) => {
  return (
    <>
      <Flex
        mb={10}
        alignItems="center"
        sx={{
          gap: 10,
        }}
      >
        <Theme {...args} />
      </Flex>
    </>
  )
}

export const Light = Template.bind({})
Light.args = {
  theme: lightTheme,
}

export const Dark = Template.bind({})
Dark.args = {
  theme: darkTheme,
}

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {
  theme: defaultTheme,
}
