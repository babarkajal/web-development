import React, { Component } from "react";
import UserProfile from "./UserProfile";
class ErrorBoundary extends Component {
  state = {
    isError: false,
  };

  //based on error set the error flag true
  static getDerivedStateFromError(error) {
    return { isError: true };
  }
  componentDidCatch(error) {
    console.log("COMPONENT DID CATCH", error);
  }
  render() {
    //RENDER FALLBACK UI WHEN THERE IS ANY JAVASCRIPT ERROR IN CHILD COMPONENTS
    if (this.state.isError) {
      return <h2>Something wrong happened</h2>;
    }
    return (
      <div>
        <UserProfile userDetails={null} title="User Details">
          {this.props.children}
        </UserProfile>
      </div>
    );
  }
}

export default ErrorBoundary;
