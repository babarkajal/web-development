
import {Link } from "react-router-dom";
const showProduct = ({ product }) => {
  return (
      <div className={`item ${product.id}`}>
        <div className="image-flex-item">
          <Link to ={{
			  pathname: "./details",
			  aboutProps: {
				prod: product
				}
		  }}>
            <img src={product.img} alt={product.title} />
          </Link>
        </div>
        <div className="inner-flex-container">
          <div className="title">{product.title}</div>
          <div className="price">₹ {product.price}</div>
        </div>
      </div>

  );
};

export default showProduct;
