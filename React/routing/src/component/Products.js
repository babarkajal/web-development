import React, { Component, useEffect, useState } from "react";
import { GetProducts } from "../actions/productActions";
import ProductStore from "../stores/ProductStore";

function Products() {
  const [products, setProducts] = useState(ProductStore.getProducts());

  useEffect(() => {
    ProductStore.on("change", setData);
  }, []);

  const setData = () => {
    setProducts(ProductStore.getProducts());
  };

  const onFetchData = () => {
    GetProducts();
  };

  return (
    <div className="container">
      <h1>Products List</h1>
      <button onClick={onFetchData}>Fetch products</button>
      <div>
        {products.map((val) => (
          <div>
            <img
              src={val.image}
              alt="image"
              style={{ width: "100px", height: "100px" }}
            />
            <figcaption>{val.title}</figcaption>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
