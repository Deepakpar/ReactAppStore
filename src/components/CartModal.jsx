import React from 'react';

export default function CartModal({ isOpen, onClose, cartItems, onRemoveFromCart }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 list-none">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                  <span className="font-medium">{item.title}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>${item.price}</span>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export {CartModal};
