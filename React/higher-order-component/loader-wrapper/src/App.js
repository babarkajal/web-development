import "./App.css";
import { Component } from "react";
import withLoader from "./withLoader";
import ShowData from "./ShowData";

const ShowDataWithLoading = withLoader(ShowData);
class App extends Component {
  state = {
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          data: json,
          isLoading: false,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <ShowDataWithLoading
          isLoading={this.state.isLoading}
          list={this.state.data}
        />
      </div>
    );
  }
}
export default App;
