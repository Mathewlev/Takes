import type { Meta, StoryObj } from '@storybook/react-native';
import { fn } from 'storybook/test';

import { Toggle } from './Toggle';

const meta = {
  title: 'Library/Toggle',
  component: Toggle,
  args: {
    options: [
      { label: 'Following', value: 'following' },
      { label: 'Most recent', value: 'recent' },
    ],
    value: 'following',
    onChange: fn(),
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FeedFilter: Story = {};

export const OpenClosed: Story = {
  args: {
    options: [
      { label: 'Open', value: 'open' },
      { label: 'Closed', value: 'closed' },
    ],
    value: 'closed',
  },
};
