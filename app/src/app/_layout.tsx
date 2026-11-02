import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import StorybookUIRoot from '@/../.rnstorybook';
import AppTabs from '@/ui/navigation/AppTabs';
import { AnimatedSplashOverlay } from '@/ui/splash/AnimatedSplashOverlay';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

if (!storybookEnabled) SplashScreen.preventAutoHideAsync();

/** Root layout: Storybook when enabled, otherwise the app tabs. */
export default function RootLayout() {
  const colorScheme = useColorScheme();

  if (storybookEnabled) return <StorybookUIRoot />;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
