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
      <h1>Products list</h1>
      <ul>
        {products.map((val) => (
          <li key={val.id}>
            {val.title} -{val.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
