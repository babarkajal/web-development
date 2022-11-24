import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">
          Routing in React <span className="sr-only">(current)</span>
        </Link>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="TODO-list" className="nav-link">
              Todo List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="product-list" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
