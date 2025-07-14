import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
      <img 
        src={product.image} 
        alt={product.title +"1"} 
        className="h-48 w-full md:w-1/2 object-contain" 
      />
      <h2 className="font-semibold text-lg mb-3">{product.title}</h2>
      <p className="text-gray-700 mb-3">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-white text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}
export {ProductCard}