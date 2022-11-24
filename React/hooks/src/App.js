import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import RemovableComponent from "./RemovableComponent";
import Timer from "./timer";
import { ShowList } from "./CustomHook/ShowList";
import { UseContextDemo } from "./useContext/contextDemo";
import { Provider } from "./useContext/context";
import { UserReducerDemo } from "./UserReducerDemo/UseReducerDemo";
import { UseRefDemo } from "./UseRefDemo/UseRefDemo";
function App() {
  /**
   * *Use state is one hook which returns array which contain
   * *initial value at 0th index and function to update that state at 1st index
   */
  const [counter, incrementCount] = useState(0);
  /*   const count = useState(0);
  const counter = count[0];
  const incrementCount = count[1]; */

  /**
   **UseEffect is a hook which adds functionality like componentDidMount, componentDidUpdate and componentWillUnmount
   * When we return any function from effect it is treated as as cleanup function
   */
  useEffect(() => {
    //FUNCTION UPDATE FORM OF SETSTATE
    /*   const id = setInterval(() => {
      incrementCount((counter) => counter + 1);
    }, 1000);
    return () => 
      clearInterval(id);
     */
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hook is React</p>
        <p>Timer using Hooks</p>
        <div className="timer">
          <Timer />
        </div>

        <hr />
        <div
          className="btn btn-primary"
          onClick={() => incrementCount(counter + 1)}
        >
          Increase count
        </div>
        <div className="text-bold">Count: {counter}</div>
        {counter < 5 && <RemovableComponent />}

        {/* Custom hook */}
        <div className="section">
          <hr />
          <p>Custom hooks in React</p>
          <ShowList />
        </div>

        {/* useContext hook */}
        <div className="section">
          <hr />
          <p>useContext Hook</p>
          <Provider value="blue">
            <UseContextDemo />
          </Provider>
        </div>

        {/* useReducer hook */}
        <div className="section">
          <hr />
          <p>useReducer Hook</p>
          <UserReducerDemo />
        </div>

        {/* UseRefDemo hook */}
        <div className="section">
          <hr />
          <p>UseRefDemo Hook</p>
          <UseRefDemo />
        </div>
      </header>
    </div>
  );
}

export default App;
