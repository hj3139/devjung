import Button from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['default', 'primary'],
      defaultValue: 'default',
      control: { type: 'select' }
    },
    width: {
      defaultValue: '100px',
      control: { type: 'text' }
    },
    height: {
      defaultValue: '50px',
      control: { type: 'text' }
    },
    children: {
      defaultValue: 'KimHoJung',
      control: { type: 'text' }
    },
    style: {
      defaultValue: {},
      control: { type: 'object' }
    }
  }
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({
  type,
  children,
  style,
  ...rest
}) => {
  return (
    <Button type={type} style={style} {...rest}>
      {children}
    </Button>
  );
};
