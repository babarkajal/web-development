import React, { Component } from "react";
import { UserConsumer } from "./Context";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return (
            <div>
              This is component F and the name is <b>{username}</b>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
