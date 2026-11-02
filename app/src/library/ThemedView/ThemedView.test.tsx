import { render, screen } from '@testing-library/react-native';

import { Colors } from '@/shared/constants/theme';

import { ThemedView } from './ThemedView';

describe('ThemedView', () => {
  it('uses the default background', async () => {
    await render(<ThemedView testID="view" />);
    expect(screen.getByTestId('view')).toHaveStyle({ backgroundColor: Colors.light.background });
  });

  it('uses the requested background', async () => {
    await render(<ThemedView testID="view" type="backgroundElement" />);
    expect(screen.getByTestId('view')).toHaveStyle({
      backgroundColor: Colors.light.backgroundElement,
    });
  });
});
