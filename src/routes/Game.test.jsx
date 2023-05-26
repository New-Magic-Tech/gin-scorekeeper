import "jest-canvas-mock";
import { render, screen } from '@testing-library/react';
import Game from './Game';
import { Provider } from "react-redux";
import { store } from "../app/store";

test('renders heading', () => {
  render(
    <Provider store={store}> 
      <Game />
    </Provider>
  );
  const headerElement = screen.getByText(/Gin Scorekeeper/i);
  expect(headerElement).toBeInTheDocument(); 
});


