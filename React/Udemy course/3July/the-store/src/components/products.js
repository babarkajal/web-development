import React from "react";
import { storeProducts } from "./data";
import ShowProduct from "./showProduct";
import "../css/product.css";

const Products = () => {
  const renderProducts = () => {
    return storeProducts.map((product) => {
      return <ShowProduct product={product} key={product.id} />;
    });
  };

  return (
    <div className="main-container">
      <div className="heading">
        <h2 className="no-bold">Our{' '}
        <strong className="heading product-heading">Products</strong>
		</h2>
      </div>
      <div className="product-flex-container">{renderProducts()}</div>
    </div>
  );
};

export default Products;
