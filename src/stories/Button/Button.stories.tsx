import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonStatus } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Button {...args}>Button</Button>
  )
};

export const Default = Template.bind({});
Default.args = {
  status: ButtonStatus.default,
};

export const Primary = Template.bind({});
Primary.args = {
  status: ButtonStatus.primary,
};

export const Success = Template.bind({});
Success.args = {
  status: ButtonStatus.success,
};

export const Warning = Template.bind({});
Warning.args = {
  status: ButtonStatus.warning,
};

export const Danger = Template.bind({});
Danger.args = {
  status: ButtonStatus.danger,
};
