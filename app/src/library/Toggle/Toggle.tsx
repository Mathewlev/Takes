import { Pressable, StyleSheet } from 'react-native';

import { Spacing } from '@/shared/constants/theme';
import { useTheme } from '@/shared/hooks/use-theme';

import { ThemedText } from '../ThemedText/ThemedText';
import { ThemedView } from '../ThemedView/ThemedView';
import { type ToggleProps } from './types';

/** Segmented control; the selected segment uses the accent color. */
export function Toggle<T extends string>({ options, value, onChange }: ToggleProps<T>) {
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.container} accessibilityRole="tablist">
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            onPress={() => onChange(option.value)}
            style={[styles.segment, selected && { backgroundColor: theme.accent }]}>
            <ThemedText
              type="smallBold"
              themeColor={selected ? undefined : 'textSecondary'}
              style={selected && styles.selectedLabel}>
              {option.label}
            </ThemedText>
          </Pressable>
        );
      })}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Spacing.one,
    borderRadius: Spacing.three,
  },
  segment: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.two,
    borderRadius: Spacing.three - Spacing.one,
  },
  selectedLabel: {
    color: '#ffffff',
  },
});
