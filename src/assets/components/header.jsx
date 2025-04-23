import "./index.css";
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Add this import
import { Link } from 'react-router-dom';

function Header({ setSearchTerm, onCartClick }) {
  const navigate = useNavigate(); // Initialize useNavigate
  

  return (
    <>
      <div className="navbar">
        <ol>
        <li><Link to="/">Home</Link></li>
        </ol>
           
      

        <div className="searchbar">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchsymbol">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <button
          onClick={() => {
            console.log("Navigating to cart...");
            navigate('/cart'); // Use navigate() here to go to the cart page
          }}
          className="shopping-icon"
        >
          <FaShoppingCart />
        </button>
      </div>
    </>
  );
}

export default Header;
