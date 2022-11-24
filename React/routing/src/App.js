/**
 * Router version 6
 * ! Switch is now Routes
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import TodoList from "./component/TodoList";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />}> */}
          <Route path="TODO-list" element={<TodoList />} />
          <Route path="product-list" element={<Products />} />
          <Route path="*" element={<div>Not found URL</div>} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
