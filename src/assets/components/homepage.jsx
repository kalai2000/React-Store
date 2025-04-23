// // HomePage.jsx
// import Header from './header.jsx';
// import ProductList from './productlist.jsx';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, removeFromCart } from "../../store/cartSlice";


// function HomePage() {
//   const [filtered, setFiltered] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedItem, setSelectedItem] = useState(null);

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);

//   const handleAddToCart = (item) => dispatch(addToCart(item));
//   const handleCardClick = (item) => setSelectedItem(item);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then((data) => setFiltered(data.products));
//   }, []);

//   return (
//     <>
//       <Header setSearchTerm={setSearchTerm} />
//       <ProductList
//         booklist={filtered.filter((item) =>
//           item.title.toLowerCase().includes(searchTerm.toLowerCase())
//         )}
//         onAddToCart={handleAddToCart}
//         onCardClick={handleCardClick}
//       />

//       {selectedItem && (
//         <div className="product-detail">
//           <h2>{selectedItem.title}</h2>
//           <img src={selectedItem.images?.[0]} alt={selectedItem.title} />
//           <p><strong>Brand:</strong> {selectedItem.brand}</p>
//           <p><strong>Price:</strong> ₹{selectedItem.price}</p>
//           <p><strong>Description:</strong> {selectedItem.description}</p>
//           <button onClick={() => handleAddToCart(selectedItem)}>Add to Cart</button>
//           <button onClick={() => setSelectedItem(null)}>&times;</button>
//         </div>
//       )}
//     </>
//   );
// }

// export default HomePage;





import Header from './header.jsx';
import ProductList from './productlist.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../store/cartSlice";
import { setProducts } from "../../store/productSlice"; // Import setProducts

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products); // Get products from Redux

  const handleAddToCart = (item) => dispatch(addToCart(item));

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.products));
        console.log(data);// Save to Redux
      });
  }, [dispatch]);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <ProductList
        booklist={filteredProducts}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}

export default HomePage;

