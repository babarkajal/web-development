import React, { Component } from "react";
import ComponentF from "./ComponentF";

class ComponentE extends Component {
  render() {
    return (
      <div>
        This is component E which renders F component
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;
