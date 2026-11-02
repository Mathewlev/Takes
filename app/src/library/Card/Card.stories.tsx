import type { Meta, StoryObj } from '@storybook/react-native';

import { ThemedText } from '../ThemedText/ThemedText';
import { Card } from './Card';

const meta = {
  title: 'Library/Card',
  component: Card,
  render: (args) => (
    <Card {...args}>
      <ThemedText type="smallBold">How many games will the Oklahoma City Thunder win this year?</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        Locks in 3 days
      </ThemedText>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
