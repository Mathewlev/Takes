import { Pressable, StyleSheet } from 'react-native';

import { Spacing } from '@/shared/constants/theme';
import { useTheme } from '@/shared/hooks/use-theme';

import { ThemedText } from '../ThemedText/ThemedText';
import { type ChipProps } from './types';

/** Pill-shaped filter option; accent color when selected. */
export function Chip({ label, selected = false, onPress }: ChipProps) {
  const theme = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        { backgroundColor: selected ? theme.accent : theme.backgroundElement },
        pressed && styles.pressed,
      ]}>
      <ThemedText
        type="smallBold"
        themeColor={selected ? undefined : 'textSecondary'}
        style={selected && styles.selectedLabel}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    paddingVertical: Spacing.one + Spacing.half,
    paddingHorizontal: Spacing.three,
    borderRadius: 999,
  },
  selectedLabel: {
    color: '#ffffff',
  },
  pressed: {
    opacity: 0.7,
  },
});
