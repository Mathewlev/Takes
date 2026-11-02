import { StyleSheet } from 'react-native';

import { Spacing } from '@/shared/constants/theme';

import { ThemedView } from '../ThemedView/ThemedView';
import { type CardProps } from './types';

/** Rounded, padded container on the element background. */
export function Card({ children, style, testID }: CardProps) {
  return (
    <ThemedView type="backgroundElement" style={[styles.card, style]} testID={testID}>
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.two,
  },
});
