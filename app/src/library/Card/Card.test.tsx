import { render, screen } from '@testing-library/react-native';

import { Colors } from '@/shared/constants/theme';

import { ThemedText } from '../ThemedText/ThemedText';
import { Card } from './Card';

describe('Card', () => {
  it('renders its children', async () => {
    await render(
      <Card>
        <ThemedText>Inside</ThemedText>
      </Card>,
    );
    expect(screen.getByText('Inside')).toBeTruthy();
  });

  it('uses the element background and merges custom styles', async () => {
    await render(
      <Card style={{ marginTop: 10 }} testID="card">
        <ThemedText>Inside</ThemedText>
      </Card>,
    );
    expect(screen.getByTestId('card')).toHaveStyle({ backgroundColor: Colors.light.backgroundElement, marginTop: 10 });
  });
});
