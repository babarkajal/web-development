import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div> This is header and user is {this.props.username}</div>;
  }
}

export default Header;
