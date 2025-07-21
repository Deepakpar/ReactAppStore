import React from 'react';

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold text-gray-800">New App Store</h1>
      <button
        onClick={onCartClick}
        className="relative bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors"
      >
        Items Added to Cart

        
      </button>

      <span className="ml-1">
          {cartCount}
        </span>
    </nav>
  );
}

export {Navbar};