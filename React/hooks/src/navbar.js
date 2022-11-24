import React from "react";

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <span class="navbar-brand mb-0 h1" onClick={() => props.setTabName(0)}>
        HOOKS
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <span
              class="navbar-brand mb-0 h1"
              onClick={() => props.setTabName(1)}
            >
              useState and useEffect
            </span>
          </li>
          <li class="nav-item active">
            <span
              class="navbar-brand mb-0 h1"
              onClick={() => props.setTabName(2)}
            >
              Custom Hook
            </span>
          </li>
          <li class="nav-item">
            <span
              class="navbar-brand mb-0 h1"
              onClick={() => props.setTabName(3)}
            >
              useContext
            </span>
          </li>
          <li class="nav-item">
            <span
              class="navbar-brand mb-0 h1"
              onClick={() => props.setTabName(4)}
            >
              useReducer
            </span>
          </li>
          <li class="nav-item">
            <span
              class="navbar-brand mb-0 h1"
              onClick={() => props.setTabName(5)}
            >
              useRef
            </span>
          </li>
          <li class="nav-item">
            <span
              class="navbar-brand mb-0 h1"
              onClick={() => props.setTabName(6)}
            >
              UseMemo
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
