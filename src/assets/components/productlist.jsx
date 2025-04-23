//  import Productitem from "./productitem"
//  import ProductCard from './productcard.jsx';
//  import "./index.css"


// function ProductList({ booklist , onAddToCart , onCardClick  }) {



//    const handleCardClick = (data) => {
//       console.log(data); // Logging the clicked item
//       onCardClick(data); // Calling the onCardClick function
//     };
//     return (
//        <>
        


// <div  className="booklist-container"    >{booklist.map((data,index)=>{
//          return   <Productitem
//          key={index}
//          bookdetails={data}
//          onAddToCart={onAddToCart}
//          onClick={() => handleCardClick(data)} />
//     })}</div>
//        </>
       
       
//     );
//   }
  
//   export default ProductList;










import Productitem from "./productitem";
import "./index.css";

function ProductList({ booklist, onAddToCart, onCardClick }) {
  const handleCardClick = (data) => {
    console.log("Card clicked in ProductList:", data); // Check if the correct item is passed
    onCardClick(data); // Call the onCardClick function passed from App.js
  };

  return (
    <div className="booklist-container">
      {booklist.map((data, index) => (
        <Productitem
          key={index}
          bookdetails={data}
          onAddToCart={onAddToCart}
          onClick={() => handleCardClick(data)} // Ensure the correct item is passed
        />
      ))}
    </div>
  );
}

export default ProductList;
