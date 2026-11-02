import { fireEvent, render, screen } from '@testing-library/react-native';

import { Colors } from '@/shared/constants/theme';

import { Button } from './Button';

describe('Button', () => {
  it('renders its label', async () => {
    await render(<Button label="Make take" onPress={() => {}} />);
    expect(screen.getByText('Make take')).toBeTruthy();
  });

  it('calls onPress when pressed', async () => {
    const onPress = jest.fn();
    await render(<Button label="Make take" onPress={onPress} />);
    await fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', async () => {
    const onPress = jest.fn();
    await render(<Button label="Locked" onPress={onPress} disabled />);
    await fireEvent.press(screen.getByRole('button'));
    expect(onPress).not.toHaveBeenCalled();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('uses the accent color for primary', async () => {
    await render(<Button label="Go" onPress={() => {}} />);
    expect(screen.getByRole('button')).toHaveStyle({ backgroundColor: Colors.light.accent });
  });
});
