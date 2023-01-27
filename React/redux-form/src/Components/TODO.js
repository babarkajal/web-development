import React, { Component } from "react";

class TODO extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h2>Todo list</h2>
        <ul>
          {this.props.todoList?.map((val) => {
            val.status = Number(val.status);
            return (
              <li key={val.todoName}>
                {val.todoName} -{" "}
                {val.status === 0
                  ? "Pending"
                  : val.status === 1
                  ? "Completed"
                  : "In progress"}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TODO;
