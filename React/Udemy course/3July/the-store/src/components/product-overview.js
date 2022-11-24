import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/product-overview.css";
import { storeProducts } from "./data";
import Popup from "./popup";

const DisplayProduct = (props) => {
  const [isCardButtonClicked, setIsCardButtonClicked] = useState(false);
 const [addedProductsId, setAddedProductsId] = useState([]);
 
  console.log(props);
  let product;
  if (!props.location.aboutProps) {
    product = storeProducts[0];
  } else {
    product = props.location.aboutProps.prod;
  }
  console.log("props recieved, ", product);
  return (
    <div className="product-display">
      <h2 className="product-title">{product.title}</h2>

      <div className="container">
        <div className="left-container">
          <img src={product.img} alt={product.title} />
        </div>

        <div className="right-container">
          <div className="product-name">Product name : {product.title}</div>
          <div className="company-name">Made BY : {product.company}</div>
          <div className="price">Price: ${product.price}</div>
          <div className="info">
            <p className="title">some info about product:</p>
            <p className="para">{product.info}</p>
          </div>
          <Link to="/" className="products-button">
            Back to Products
          </Link>
          <button
            className="cart-button"
            onClick={() => {
              setIsCardButtonClicked(!isCardButtonClicked);
              setAddedProductsId(product.id);
            }}
          >
            {isCardButtonClicked ? "In Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
      <div className="pop-up-product">
        {isCardButtonClicked && (
          <Popup product={product} setTrigger={setIsCardButtonClicked} />
        )}
      </div>
    </div>
  );
};

export default DisplayProduct;
