export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
  <img src={product.image} alt={product.title} />
  <h2>{product.title}</h2>
  <p>${product.price}</p>
  <button onClick={() => onAddToCart(product)}>Add to Cart</button>
</div>


  );
}
export {ProductCard}