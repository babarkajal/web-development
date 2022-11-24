import React, { Component } from "react";

class ShowData extends Component {
  render() {
    console.log(this.props.list);
    return (
      <div>
        <ul>
          {this.props.list.map((val) => (
            <div>
              {val.userId} - {val.title}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShowData;
