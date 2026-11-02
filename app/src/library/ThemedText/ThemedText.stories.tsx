import type { Meta, StoryObj } from '@storybook/react-native';

import { ThemedText } from './ThemedText';

const meta = {
  title: 'Library/ThemedText',
  component: ThemedText,
  args: { children: 'Will the Thunder win 60?' },
} satisfies Meta<typeof ThemedText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Subtitle: Story = { args: { type: 'subtitle' } };

export const Secondary: Story = { args: { themeColor: 'textSecondary' } };
