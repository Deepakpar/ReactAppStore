import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function CartPage() {
  const outletContext = useOutletContext() || {};
  const cartItems = outletContext.cartItems || [];
  const setCartItems = outletContext.setCartItems || (() => {});

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max((item.quantity || 1) + delta, 1) } : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
  );
  const discountedTotal = (total * 0.9).toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-left">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>${item.price} x {item.quantity || 1}</p>
                </div>
              </div>
              <div className="cart-actions">
                <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2">-</button>
                <span>{item.quantity || 1}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2">+</button>
                <button onClick={() => handleRemove(item.id)} className="text-red-500 ml-4">Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <p className="total">Total: ${total.toFixed(2)}</p>
            <p className="discounted">After 10% Discount: ${discountedTotal}</p>
          </div>
        </div>
      )}
    </div>
  );
}
