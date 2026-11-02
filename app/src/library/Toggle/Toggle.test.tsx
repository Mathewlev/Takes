import { fireEvent, render, screen } from '@testing-library/react-native';

import { Colors } from '@/shared/constants/theme';

import { Toggle } from './Toggle';

const options = [
  { label: 'Following', value: 'following' },
  { label: 'Most recent', value: 'recent' },
];

describe('Toggle', () => {
  it('renders every option', async () => {
    await render(<Toggle options={options} value="following" onChange={() => {}} />);
    expect(screen.getByText('Following')).toBeTruthy();
    expect(screen.getByText('Most recent')).toBeTruthy();
  });

  it('marks the current value as selected', async () => {
    await render(<Toggle options={options} value="following" onChange={() => {}} />);
    const selected = screen.getByRole('tab', { selected: true });
    expect(selected).toHaveStyle({ backgroundColor: Colors.light.accent });
    expect(screen.getByRole('tab', { name: 'Following' })).toBeSelected();
  });

  it('calls onChange with the pressed value', async () => {
    const onChange = jest.fn();
    await render(<Toggle options={options} value="following" onChange={onChange} />);
    await fireEvent.press(screen.getByText('Most recent'));
    expect(onChange).toHaveBeenCalledWith('recent');
  });
});
