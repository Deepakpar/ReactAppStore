import React, { useState } from 'react';
import {Navbar} from './components/Navbar';

import {CartModal} from './components/CartModal';
import ProductList from './components/ProductList';


export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      alert('Item already added to the cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsModalOpen(true)} />
      <ProductList onAddToCart={handleAddToCart} />
      {isModalOpen && (
        <CartModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          cartItems={cartItems} 
          onRemoveFromCart={handleRemoveFromCart} 
        />
      )}
    </div>
  );
}
