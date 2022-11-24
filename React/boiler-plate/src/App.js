import "./App.css";
import { connect } from "react-redux";
import { action } from "./action-reducer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.props.action();
          }}
        >
          Click me
        </button>
        <p>{this.props.count}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps, { action })(App);
