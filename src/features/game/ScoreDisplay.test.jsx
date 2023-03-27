import { render, screen } from '@testing-library/react';
import ScoreDisplay from './ScoreDisplay';
import "jest-canvas-mock";
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('renders heading', () => {
  render(
  <Provider store={store}>
  <ScoreDisplay />
  </Provider>);
  const textElement = screen.getByText(/Blue Player Score:/i);
  expect(textElement).toBeInTheDocument();
});