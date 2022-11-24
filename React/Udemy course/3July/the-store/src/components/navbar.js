import { Link } from "react-router-dom";
import "./../css/navbar.css";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="left-container">
        <Link to="/home">
          {" "}
          <img src="/logo.png" alt="store" className="navbar-logo" />
        </Link>

        <Link to="/home" className="home">
          Home
        </Link>
        <Link to="/" className="product">
          Products
        </Link>
      </div>

      <div className="right-container">
	  <Link to="/cart" className="navbar-link">
		<button className="navbar-button">
          <i className="fa fa-cart-plus temp-class" />
          <Link to="/cart" className="navbar-link">
            My Cart
          </Link>
        </button>
		</Link>
      </div>
    </div>
  );
};

export default navbar;
