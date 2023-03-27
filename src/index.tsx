import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./routes/ErrorPage";

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/", //nav bar here, with rest as children
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
     /* {
        path: "/holder",
        element: <Holder/>,
      },*/
    ],
  },
]);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
