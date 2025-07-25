import React, { useState } from 'react';
import {Navbar} from './components/Navbar';
import {CartModal} from './components/CartModal'

import ProductList from './components/ProductList';
import { createBrowserRouter, Outlet, RouterProvider, useOutletContext } from 'react-router-dom';



export default function App() {
  
  const { cartItems, setCartItems } = useOutletContext();

  const handleAddToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      alert('Item already added to the cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  return (

    
    <div className="p-4">
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}
