import { connect } from "react-redux";
import Products from "./Products";
import TODO from "./TODO";

const mapStateToProps = () => {
  return {
    todos: [
      { title: "Homework", complete: true },
      { title: "Exercise", complete: false },
      { title: "Watch TV", complete: false },
      { title: "Play football", complete: true },
    ],
  };
};

const withConnect = connect(mapStateToProps);

const TODOWithConnect = withConnect(TODO);

function App(props) {
  return (
    <div className="App">
      <h1>Connect Function</h1>
      <Products />
      <TODOWithConnect />
    </div>
  );
}

export default App;
