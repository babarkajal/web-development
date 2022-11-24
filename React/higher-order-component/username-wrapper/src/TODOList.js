import React, { Component } from "react";

class TODOList extends Component {
  render() {
    return (
      <div>
        <h2>TODOList for {this.props.username}</h2>
        <ul>
          {this.props.list.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TODOList;
