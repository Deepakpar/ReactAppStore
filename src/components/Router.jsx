import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import CartPage from '../Pages/CartPage';
import Layout from './Layout';

  
   const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'cart',
        element: <CartPage />
      }
    ]
  }
]);
export default router;


