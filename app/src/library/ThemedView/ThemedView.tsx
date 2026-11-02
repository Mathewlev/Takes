import { View } from 'react-native';

import { useTheme } from '@/shared/hooks/use-theme';

import { type ThemedViewProps } from './types';

/** View with a theme background color. */
export function ThemedView({ style, type, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();

  return <View style={[{ backgroundColor: theme[type ?? 'background'] }, style]} {...otherProps} />;
}
