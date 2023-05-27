import React from 'react';
import { createRoot } from 'react-dom/client';

import Games from './routes/Games'
import Game from './routes/Game'
import Options from './routes/Options'
import Root from './routes/Root';
import NavBar from './features/nav/NavBar';
import reportWebVitals from './reportWebVitals';
import './index.css';


import { Provider } from "react-redux";
import { store } from './app/store';

import { useAppSelector } from "./app/hooks";
import { debounce } from 'debounce';
import { saveState } from './app/browserStorage';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ErrorPage from "./routes/ErrorPage";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
)


const container = document.getElementById('root')!;
const root = createRoot(container);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Game/>,
  },
      {
        path: '/games', 
        element: <Games/>,
      },
      {
        path: '/options',
        element: <Options/>
      }
    ],
  }
]);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
