import React, { Component } from "react";
import { UserContext } from "./Context";

/**
 * This will consume the context using contentType
 */
class ComponentC extends Component {
  render() {
    return (
      <div>
        This is component C and the developer name is <b>{this.context}</b>
      </div>
    );
  }
}

ComponentC.contextType = UserContext;

export default ComponentC;
