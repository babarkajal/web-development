import React, { Component } from "react";
import TodoStore from "../stores/TodoStore";

import { useEffect, useState } from "react";
import { createTodo, deleteTodo, fetchTODO } from "../actions/todoActions";

class TodoList extends Component {
  state = {
    todos: TodoStore.getAll(),
  };

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }
  getTodos = () => {
    this.setState({ todos: TodoStore.getAll() });
  };

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  onAddNew = () => {
    createTodo({
      id: Date.now(),
      title: "Todo, " + new Date().toLocaleDateString(),
      complete: false,
    });
  };

  onDeleteTODO = (index) => {
    deleteTodo(3);
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>TODO List</h2>
        <ul>
          {todos.length &&
            todos?.map((val) => (
              <li
                key={val.id}
                className={val.complete ? "complete" : "not-complete"}
              >
                {val.title}
              </li>
            ))}
        </ul>
        <button className="btn btn-primary" onClick={this.onAddNew}>
          Add new Todo
        </button>
        <button className="btn btn-primary" onClick={this.onDeleteTODO}>
          Delete Todo
        </button>
        <button className="btn btn-primary" onClick={fetchTODO}>
          Reload Todos from server
        </button>
      </div>
    );
  }
}

export default TodoList;
