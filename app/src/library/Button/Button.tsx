import { Pressable, StyleSheet } from 'react-native';

import { Spacing } from '@/shared/constants/theme';
import { useTheme } from '@/shared/hooks/use-theme';

import { ThemedText } from '../ThemedText/ThemedText';
import { type ButtonProps } from './types';

/** Tappable button; primary uses the accent color. */
export function Button({ label, onPress, variant = 'primary', disabled = false }: ButtonProps) {
  const theme = useTheme();
  const primary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: primary ? theme.accent : theme.backgroundElement },
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}>
      <ThemedText type="smallBold" style={primary && styles.primaryLabel}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.four,
    borderRadius: Spacing.three,
  },
  primaryLabel: {
    color: '#ffffff',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.4,
  },
});
