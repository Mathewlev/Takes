import type { Meta, StoryObj } from '@storybook/react-native';

import { ThemedText } from '../ThemedText/ThemedText';
import { ThemedView } from './ThemedView';

const meta = {
  title: 'Library/ThemedView',
  component: ThemedView,
  args: { style: { padding: 16, borderRadius: 16 } },
  render: (args) => (
    <ThemedView {...args}>
      <ThemedText>Content</ThemedText>
    </ThemedView>
  ),
} satisfies Meta<typeof ThemedView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Background: Story = {};

export const Element: Story = { args: { type: 'backgroundElement' } };
