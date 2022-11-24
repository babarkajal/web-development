import React, { Component } from "react";

class DemoComponent extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.users[1].name = "Ganesh manjare";
  }
  render() {
    return (
      <div>
        {" "}
        This is demo component which changes the props value
        <ul>
          {this.props.users?.map((val) => (
            <li>
              {val.id}-{val.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DemoComponent;
