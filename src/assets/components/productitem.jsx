import "./index.css";
import { useNavigate } from 'react-router-dom';

function ProductItem({ bookdetails, onAddToCart}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${bookdetails.id}`);
  };
  return (
    <div className="product-card" onClick={handleClick}>
      <img src={bookdetails.images[0]} alt={bookdetails.title} />
      <h2>{bookdetails.title}</h2>
      <p>Price: ₹{bookdetails.price}</p>
      <button onClick={(e) =>{e.stopPropagation();
        onAddToCart(bookdetails);}}>Add to cart</button>
    </div>
  );
}

export default ProductItem;  

