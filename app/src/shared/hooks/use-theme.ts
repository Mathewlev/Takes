/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/shared/constants/theme';
import { useColorScheme } from '@/shared/hooks/use-color-scheme';

/** Current light or dark color palette. */
export function useTheme() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? 'dark' : 'light';

  return Colors[theme];
}
