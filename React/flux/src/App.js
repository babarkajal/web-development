import "./App.css";
import Products from "./component/Products";
import TodoList from "./component/TodoList";
function App() {
  return (
    <div className="entry">
      <h1>Flux with React</h1>
      <TodoList />
      <Products />
    </div>
  );
}

export default App;
