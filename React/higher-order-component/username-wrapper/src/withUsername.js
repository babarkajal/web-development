import React from "react";

/**
 * *Higher Order Component which wraps component with username
 * @param {*} Component
 * @returns Component
 */
function withUsername(Component) {
  const username = "kajal";
  function withUsernameComponent(props) {
    return <Component username={username} {...props} />;
  }
  return withUsernameComponent;
}

export default withUsername;
