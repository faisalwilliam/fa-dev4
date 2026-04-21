import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

// Importing the page components
import Humburger from './Pages/Humburger';
import Kitchen from './Pages/Kitchen';
import Fishes from './Pages/Fishes';
import Drinks from './Pages/Drinks';
import Desserts from './Pages/Desserts';
import Salads from './Pages/Salads';



// Define the routes for the application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Humburger />,

  },
  {
    path: "/Kitchen",
    element: <Kitchen />,

  },
  {
    path: "/Fishes",
    element: <Fishes />,

  },
  {
    path: "/Drinks",
    element: <Drinks />,

  },
  {
    path: "/Desserts",
    element: <Desserts />,

  },
  {
    path: "/Salads",
    element: <Salads />,

  },

]);

// Render the application






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);


