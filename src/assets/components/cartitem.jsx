
import "./index.css";
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../store/cartSlice'; // Adjust path as needed

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.images?.[0]} alt={item.title} className="cart-img" />
      <div className="cart-details">
        <h3>{item.title}</h3>
        <p>Price: ₹{item.price}</p>
        <div className="quantity-control">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
