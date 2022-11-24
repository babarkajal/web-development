import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./actions";

function Products(props) {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products">
      <header>Redux Thunk middleware</header>
      <h1>Products list</h1>
      <div className="products-wrapper">
        {products.map((val) => (
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
    </div>
  );
}

export default Products;
