import React, { useState, useEffect } from "react";
import "../css/cart.css";
import { storeProducts } from "./data";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const [quantityValue, setquantityValue] = useState(0);
  const [totalCost, settotalCost] = useState(0);

  const renderEmpty = () => {
    return <EmptyCart />;
  };
  useEffect(() => {
    settotalCost(quantityValue * listOfProductsInCart.price);
    console.log("hellp");
  }, [quantityValue]);

  var listOfProductsInCart = storeProducts[0];
  if (listOfProductsInCart.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <div>
        <h1 className="cart-header">
          Your<span> Cart</span>
        </h1>
        <table className="cart-display">
          <tr className="table-header">
            <td>PRODUCTS</td>
            <td>NAME OF PRODUCT</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>REMOVE</td>
            <td>TOTAL</td>
          </tr>
          <tr>
            <td className="image-data">
              <img
                src={listOfProductsInCart.img}
                alt={listOfProductsInCart.title}
                className="image"
              />
            </td>
            <td>{listOfProductsInCart.title}</td>
            <td>{listOfProductsInCart.price}</td>
            <td className="quantity-buttons">
              <button
                onClick={() =>
                  quantityValue === 0
                    ? renderEmpty()
                    : setquantityValue(quantityValue - 1)
                }
              >
                -
              </button>
              <button>{quantityValue}</button>
              <button onClick={() => setquantityValue(quantityValue + 1)}>
                +
              </button>
            </td>
            <td>
              <i class="fas fa-trash"></i>
            </td>
            <td>
              <b>Item Total: ₹{totalCost}</b>
            </td>
          </tr>
        </table>
        <div className="total-bill">
          <button className="clear-cart-button">Clear Cart</button>
          <div>
            <span className="property">SUBTOTAL: </span>
            <span className="values">₹ {totalCost}</span>
          </div>
          <div>
            <span className="property"> TAX: </span>
            <span className="values"> ₹ {totalCost * 0.1}</span>
          </div>
          <div>
            <span className="property"> TOTAL: </span>
            <span className="values">₹ {totalCost + totalCost * 0.1}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
