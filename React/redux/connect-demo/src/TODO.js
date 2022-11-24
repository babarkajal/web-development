import React, { Component } from "react";

class TODO extends Component {
  render() {
    return (
      <div>
        <h2>Class component: Todo list wrapped inside connect function</h2>
        <ul>
          {this.props.todos.map((val) => {
            return (
              <li key={val.title}>
                {val.title} - {val.complete ? "Yes" : "No"}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TODO;
