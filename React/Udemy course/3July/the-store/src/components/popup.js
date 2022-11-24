import { Link } from "react-router-dom";
import React,{useState} from "react";
import '../css/popup.css';

const Popup = ({ product,setTrigger }) => {
  console.log("clicked", product.img);
  const [isOpen, setIsOpen]=useState(false);
  return (
    <>
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={()=>setTrigger(false)}>X</button>
          <div>
            <div className="title">Item Added To The Cart</div>
            <img src={product.img} alt={product.title} />
            <div className="product-name">{product.title}</div>
            <div className="price">Price: ${product.price}</div>
            <div className="footer">
              <Link to="/" 	className="continue-shopping-button">Continue Shopping</Link>
              <Link to="/cart" className="go-to-cart-button">Go To Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
