import { connect } from "react-redux";
import { toggle } from "./action";

// app to render the application 
const App = (props) => {
 console.log(props.value)
  return (
    <div>
      <button
        className="ui button"
        style={{ margin: "10px" }}
		onClick={()=>props.toggle(props.value)}
      >
        {props.value ? "ON" : "OFF"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state in app=",state);
  return { value: state.toggleButton};
};

export default connect(mapStateToProps,{toggle})(App);
