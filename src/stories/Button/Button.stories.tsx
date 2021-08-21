import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonVariants, ButtonSizes } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    // disabled: { control: 'boolean' },
    // variant: {
    //   control: { type: 'radio' },
    //   options: Object.keys(ButtonVariants),
    // }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <div>
        <Button {...args} size={ButtonSizes.small} />
        <Button {...args} size={ButtonSizes.medium} />
        <Button {...args} size={ButtonSizes.large} />
      </div>
      <div>
        <Button {...args} size={ButtonSizes.small} outlined />
        <Button {...args} size={ButtonSizes.medium} outlined />
        <Button {...args} size={ButtonSizes.large} outlined />
      </div>
    </>
  )
};

export const Default = Template.bind({});
Default.args = {
  variant: ButtonVariants.default,
  children: 'Default'
};

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariants.primary,
  children: 'Primary'
};

export const Success = Template.bind({});
Success.args = {
  variant: ButtonVariants.success,
  children: 'Success'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: ButtonVariants.warning,
  children: 'Warning'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: ButtonVariants.danger,
  children: 'Danger'
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: ButtonVariants.danger,
  disabled: true,
  children: 'Disabled'
};
