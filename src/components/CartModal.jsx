import React from 'react';
import { Link } from 'react-router-dom';


export default function CartModal({ isOpen, onClose, cartItems, onRemoveFromCart }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={onClose} className="modal-close">&times;</button>
        <h2 className="modal-title">Cart Items</h2>

        {cartItems.length === 0 ? (
          <p className="modal-empty">Your cart is empty.</p>
        ) : (
          <ul className="modal-list">
            {cartItems.map(item => (
              <li key={item.id} className="modal-item">
                <div className="modal-item-info">
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                </div>
                <div className="modal-item-action">
                  <span>${item.price}</span>
                  <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}

         <Link to="/cart">
          <button onClick={onClose} className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Go to Cart Page
          </button>
        </Link>
      </div>
    </div>
  );
}
export {CartModal};
