import "./App.css";
import UserProfile from "./Component/UserProfile";

function App() {
  const name = "Kajal";
  return (
    <div className="App">
      <h1>Props children in React</h1>
      <UserProfile title="Info">
        <div>Hello, {name}. I hope you are doing good.</div>
        <p>This is paragraph </p>
        Plain text
      </UserProfile>
    </div>
  );
}

export default App;
