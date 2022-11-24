import "./App.css";
import DemoComponent from "./DemoComponent";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "kajal" },
        { id: 2, name: "Ganesh" },
        { id: 3, name: "Pooja" },
      ],
    };
  }
  componentDidMount() {
    this.setState({ val: 1 });
  }
  render() {
    //     console.log(this.state.users[1]);
    return (
      <div className="App">
        <header className="App-header">
          <DemoComponent users={this.state.users} />
        </header>
      </div>
    );
  }
}

export default App;
