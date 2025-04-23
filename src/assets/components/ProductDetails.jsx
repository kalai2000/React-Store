 
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./index.css";

function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((item) => item.id === parseInt(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Availabitlity Status: {product.availabilityStatus}</p>
      <p>Brand: {product.brand}</p>
      <p>Categoty: {product.category}</p>
     
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default ProductDetails;
