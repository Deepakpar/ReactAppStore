import React, { useEffect, useState } from 'react';
import {ProductCard} from './ProductCard';

export default function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
   <div className="product-grid">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      onAddToCart={onAddToCart}
    />
  ))}
</div>

  );
}

export {ProductList};