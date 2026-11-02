import { type ViewProps } from 'react-native';

import { ThemeColor } from '@/shared/constants/theme';

export type ThemedViewProps = ViewProps & {
  type?: ThemeColor;
};
