import Header from "./Header";
import TODOList from "./TODOList";
import withUsername from "./withUsername";

const HeaderWithUsername = withUsername(Header);
const TODOWithUserName = withUsername(TODOList);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Higher Order Component</h1>
        <HeaderWithUsername />
        <TODOWithUserName
          list={["Training", "Self Study", "Job", "Trip to south, north india"]}
        />
      </header>
    </div>
  );
}

export default App;
