// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { CartModal } from './CartModal';

export default function Layout() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsModalOpen(true)} />
      
      {/* This provides cart context to all child routes */}
      <Outlet context={{ cartItems, setCartItems }} />
      
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
