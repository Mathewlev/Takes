import { render, screen } from '@testing-library/react-native';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('shows uppercase initials when there is no image', async () => {
    await render(<Avatar fallback="mj" />);
    expect(screen.getByText('MJ')).toBeTruthy();
  });

  it('caps initials at two characters', async () => {
    await render(<Avatar fallback="abc" />);
    expect(screen.getByText('AB')).toBeTruthy();
  });

  it('renders the image instead of initials when given a source', async () => {
    await render(<Avatar fallback="mj" source={{ uri: 'https://example.com/a.png' }} />);
    expect(screen.queryByText('MJ')).toBeNull();
  });
});
