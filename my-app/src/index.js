import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import Location from './Pages/Location';
import About from './Pages/About';
import Error from './Pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/location/:id",
    element: <Location />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: <Error />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
