import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import RemovableComponent from "./RemovableComponent";
import Timer from "./timer";
import { ShowList } from "./CustomHook/ShowList";
import { UseContextDemo } from "./useContext/contextDemo";
import { Provider } from "./useContext/context";
import { UserReducerDemo } from "./UserReducerDemo/UseReducerDemo";
import { UseRefDemo } from "./UseRefDemo/UseRefDemo";
import Navbar from "./navbar";
import UseMemoDemo from "./useMemoDemo/useMemoDemo";
import UseCallbackDemo from "./useCallback/useCallbackDemo";
function App() {
  /**
   * *Use state is one hook which returns array which contain
   * *initial value at 0th index and function to update that state at 1st index
   */
  const [counter, incrementCount] = useState(0);
  const [tabName, setTabName] = useState(0);
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
        {/* NAVBAR */}
        <div className="tabs">
          <Navbar setTabName={setTabName} />
        </div>

        {tabName === 0 && <h1>Hooks in Functional Component</h1>}
        {/* TIMER USING REACT */}
        {tabName === 1 && (
          <div className="timer">
            <Timer />
          </div>
        )}

        {tabName === 1 && (
          <React.Fragment>
            <div
              className="btn btn-primary"
              onClick={() => incrementCount(counter + 1)}
            >
              Increase count
            </div>
            <div className="text-bold">Count: {counter}</div>
            {counter < 5 && <RemovableComponent />}
          </React.Fragment>
        )}

        {/* Custom hook */}
        {tabName === 2 && (
          <div className="section">
            <hr />
            <p>Custom hooks in React</p>
            <ShowList />
          </div>
        )}
        {/* useContext hook */}
        {tabName === 3 && (
          <div className="section">
            <hr />
            <p>useContext Hook</p>
            <Provider value="blue">
              <UseContextDemo />
            </Provider>
          </div>
        )}

        {/* useReducer hook */}
        {tabName === 4 && (
          <div className="section">
            <hr />
            <p>useReducer Hook</p>
            <UserReducerDemo />
          </div>
        )}

        {/* UseRefDemo hook */}
        {tabName === 5 && (
          <div className="section">
            <hr />
            <p>UseRefDemo Hook</p>
            <UseRefDemo />
          </div>
        )}

        {/* UseMemo hook */}
        {tabName === 6 && (
          <div className="section">
            <p>UseMemo Hook</p>
            <UseMemoDemo />
          </div>
        )}

        {/* UseMemo hook */}
        {tabName === 7 && (
          <div className="section">
            <hr />
            <UseCallbackDemo />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
