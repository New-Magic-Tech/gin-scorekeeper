import { render, screen } from '@testing-library/react';
import ScoreInput from './ScoreInput';

test('renders heading', () => {
  render(<ScoreInput />);
  const linkElement = screen.getByText(/hand score/i);
  expect(linkElement).toBeInTheDocument();
});