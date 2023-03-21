import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders heading', () => {
  render(<Game />);
  const linkElement = screen.getByText(/Gin Scorekeeper/i);
  expect(linkElement).toBeInTheDocument();
});
