import type { Meta, StoryObj } from '@storybook/react-native';

import { ThemedText } from '../ThemedText/ThemedText';
import { Screen } from './Screen';

const meta = {
  title: 'Library/Screen',
  component: Screen,
  args: { title: 'Home' },
  render: (args) => (
    <Screen {...args}>
      <ThemedText themeColor="textSecondary">Screen content</ThemedText>
    </Screen>
  ),
} satisfies Meta<typeof Screen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
