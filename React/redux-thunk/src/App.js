import { connect } from "react-redux";
import store from "./createStore";

function App(props) {
  function onAddNew() {
    console.log("BEFORE ADD DISPATCH");
    store.dispatch({
      type: "todo/add",
      payload: {
        id: 1,
        text: "newly added todo",
        completed: false,
      },
    });
    console.log("AFTER ADD DISPATCH");
  }
  function onDeleteTODO() {
    store.dispatch({
      type: "todo/delete",
      payload: props.todos.length - 1,
    });
  }
  return (
    <div className="entry">
      <h1>TODO List</h1>
      <ul>
        {props.todos?.map((val) => (
          <li key={val.id}>{val.text}</li>
        ))}
      </ul>

      <button className="btn btn-primary" onClick={onAddNew}>
        Add new Todo
      </button>
      <button className="btn btn-primary" onClick={onDeleteTODO}>
        Delete Todo
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};
export default connect(mapStateToProps)(App);

// export default App;
