import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ThemedText } from '../ThemedText/ThemedText';
import { ThemedView } from '../ThemedView/ThemedView';
import { type AvatarProps } from './types';

/** Circular profile pic, or initials when there is no image. */
export function Avatar({ fallback, source, size = 48 }: AvatarProps) {
  const shape = { width: size, height: size, borderRadius: size / 2 };

  if (source) {
    return <Image source={source} style={shape} accessibilityLabel={fallback} />;
  }

  return (
    <ThemedView type="backgroundSelected" style={[styles.fallback, shape]}>
      <ThemedText type="smallBold" style={{ fontSize: size * 0.4, lineHeight: size * 0.5 }}>
        {fallback.slice(0, 2).toUpperCase()}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
