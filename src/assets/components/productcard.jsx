import './index.css';  

function ProductCard({ item, onAddToCart, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>
      <button onClick={(e) => { 
        e.stopPropagation(); 
        onAddToCart(item); 
      }}>
        Add to Cart
      </button>
    </div>
  );
}



export default ProductCard;
