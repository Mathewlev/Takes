import { render, screen } from '@testing-library/react-native';

import { Colors } from '@/shared/constants/theme';

import { ThemedText } from './ThemedText';

describe('ThemedText', () => {
  it('renders its children', async () => {
    await render(<ThemedText>Hello</ThemedText>);
    expect(screen.getByText('Hello')).toBeTruthy();
  });

  it('applies the requested theme color', async () => {
    await render(<ThemedText themeColor="textSecondary">Muted</ThemedText>);
    expect(screen.getByText('Muted')).toHaveStyle({ color: Colors.light.textSecondary });
  });
});
