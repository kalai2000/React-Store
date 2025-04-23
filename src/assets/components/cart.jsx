import "./index.css";
import CartItem from "./cartitem.jsx";  
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "../../store/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = Math.ceil(
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 😢</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              onRemove={() => dispatch(removeFromCart(item.id))}    // dispatching actions
              onIncrease={() => dispatch(increaseQuantity(item.id))}
              onDecrease={() => {
                if (item.quantity > 1) {
                  dispatch(decreaseQuantity(item.id));
                } else {
                  dispatch(removeFromCart(item.id));
                }
              }}
            />
          ))}

          <div className="cart-total">
            <h3>Total: ₹{totalAmount}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
