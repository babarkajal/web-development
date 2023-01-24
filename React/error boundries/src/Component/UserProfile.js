import React from "react";

function UserDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>Name of the user {props.userDetails.name}</h3>
      {props.children}
    </div>
  );
}

export default UserDetails;
