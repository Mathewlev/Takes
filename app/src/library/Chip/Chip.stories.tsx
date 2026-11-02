import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { fn } from 'storybook/test';

import { Chip } from './Chip';

const meta = {
  title: 'Library/Chip',
  component: Chip,
  args: { label: 'NBA', onPress: fn() },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unselected: Story = {};

export const Selected: Story = { args: { selected: true } };

/** Placeholder sports until real ones come from the backend. */
const placeholderSports = ['NFL', 'NBA', 'MLB', 'NHL'];

/** Row of chips acting as a single-select sport filter. */
function SportFilterRow() {
  const [selected, setSelected] = useState(placeholderSports[0]);

  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      {placeholderSports.map((sport) => (
        <Chip
          key={sport}
          label={sport}
          selected={sport === selected}
          onPress={() => setSelected(sport)}
        />
      ))}
    </View>
  );
}

export const SportFilter: Story = { render: () => <SportFilterRow /> };
