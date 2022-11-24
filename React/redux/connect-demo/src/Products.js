import { useEffect } from "react";
import { connect } from "react-redux";
import { addProduct, fetchProducts } from "./actions";

function Products(props) {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const onAddProduct = () => {
    props.addProduct();
  };

  return (
    <div className="products">
      <div className="products-wrapper">
        {props.products.map((val) => (
          <div key={val.id} className="product">
            <img src={val.image} alt={val.title} />
            <div className="info">
              <div className="title">
                <div className="name">{val.title}</div> <span>{val.price}</span>
              </div>
              <div className="desc">{val.description}</div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={onAddProduct}>Add Product</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, { fetchProducts, addProduct })(
  Products
);
