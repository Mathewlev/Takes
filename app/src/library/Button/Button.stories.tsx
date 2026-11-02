import type { Meta, StoryObj } from '@storybook/react-native';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Library/Button',
  component: Button,
  args: { label: 'Make take', onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = { args: { label: 'Follow', variant: 'secondary' } };

export const Disabled: Story = { args: { label: 'Locked', disabled: true } };
