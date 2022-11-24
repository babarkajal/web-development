import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  //create constructor
  constructor(props) {
    super(props);
    //One way: initilizae the state object
    this.state = { lat: null, errorMessage: "" };
  }

  //another way to initlize the state property is direct intilization without constructor
  // state = {lat: null, errorMessage: ''};

  //when our JSX is first time render into the browser this lifecycle method will be called
  componentDidMount() {
    console.log("my compnent is loaded in to the browser");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //call setSate to initilize the state
        this.setState({ lat: position.coords.latitude });
      },
      //if there is an error then update the state property errorMessage
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //if there is any chnage in the component or state then this method will be called
  componentDidUpdate() {
    console.log("my component is rendered or updated");
  }

  //function to render the body
  renderBody() {
	if (!this.state.lat && this.state.errorMessage) {
		return <div> Error: {this.state.errorMessage} </div>;
	  }
	  if (this.state.lat && !this.state.errorMessage) {
		//now render the season
		return <SeasonDisplay lat={this.state.lat} />;
	  }
  
	  if (!this.state.lat && !this.state.errorMessage) {
		return <Spinner  msg = "Please accept location request"/>
	  }
  }

  render() {
	return (
    <div className='border red'>
			{this.renderBody()}
	</div>
	)
  }
}
ReactDom.render(<App />, document.getElementById("root"));
