import { render, screen } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemedText } from '../ThemedText/ThemedText';
import { Screen } from './Screen';

const metrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe('Screen', () => {
  it('renders the title and children', async () => {
    await render(
      <SafeAreaProvider initialMetrics={metrics}>
        <Screen title="Home">
          <ThemedText>Body</ThemedText>
        </Screen>
      </SafeAreaProvider>,
    );
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Body')).toBeTruthy();
  });
});
