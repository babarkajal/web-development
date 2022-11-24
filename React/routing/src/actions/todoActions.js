import dispatcher from "../Dispatch/dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({ type: "add-todo", payload: text });
}

export function deleteTodo(id) {
  dispatcher.dispatch({ type: "delete-todo", payload: id });
}

export function fetchTODO() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatcher.dispatch({
        type: "fetch-todo",
        payload: data.slice(0, 10),
      });
    });
  /*
  * Another way using async-await
  const data = await response.json();
  dispatcher.dispatch({
    type: "fetch-todo",
    payload: data.slice(0, 10),
  }); */
}
