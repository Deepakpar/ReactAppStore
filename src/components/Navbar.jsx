import React from 'react';

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">New App Store</h1>
      <button
        onClick={onCartClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
      >
        Items Added to Cart

        
      </button>
      <span className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
          {cartCount}
        </span>
    </nav>
  );
}

export {Navbar};