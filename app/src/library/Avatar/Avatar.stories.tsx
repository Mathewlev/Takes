import type { Meta, StoryObj } from '@storybook/react-native';

import { Avatar } from './Avatar';

const meta = {
  title: 'Library/Avatar',
  component: Avatar,
  args: { fallback: 'MJ', size: 48 },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const Large: Story = { args: { size: 96 } };

export const WithImage: Story = {
  args: { source: require('@/assets/images/icon.png') },
};
