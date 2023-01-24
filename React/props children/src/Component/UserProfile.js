import React from "react";

function Data(props) {
  console.log(props.children);
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Data;
