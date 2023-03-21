import { render, screen } from '@testing-library/react';
import ScoreDisplay from './ScoreDisplay';

test('renders heading', () => {
  render(<ScoreDisplay />);
  const linkElement = screen.getByText(/score/i);
  expect(linkElement).toBeInTheDocument();
});