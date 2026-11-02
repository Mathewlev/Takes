import { fireEvent, render, screen } from '@testing-library/react-native';

import { Colors } from '@/shared/constants/theme';

import { Chip } from './Chip';

describe('Chip', () => {
  it('renders its label', async () => {
    await render(<Chip label="NBA" onPress={() => {}} />);
    expect(screen.getByText('NBA')).toBeTruthy();
  });

  it('calls onPress when pressed', async () => {
    const onPress = jest.fn();
    await render(<Chip label="NBA" onPress={onPress} />);
    await fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('uses the accent color when selected', async () => {
    await render(<Chip label="NBA" selected onPress={() => {}} />);
    expect(screen.getByRole('button')).toBeSelected();
    expect(screen.getByRole('button')).toHaveStyle({ backgroundColor: Colors.light.accent });
  });
});
