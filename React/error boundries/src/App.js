import "./App.css";
import ErrorBoundary from "./Component/ErrorBoundry";

function App() {
  const userDetails = null;
  return (
    <div className="App">
      <h1>Error Boundaries in React</h1>
      <ErrorBoundary />

      {/* THIS CANNOT BE HANDLED BY ERROR BOUNDARY */}
      {console.log(userDetails.name)}
    </div>
  );
}

export default App;
