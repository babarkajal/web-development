import "./App.css";
import React from "react";
import { ThemeContext, UserProvider } from "./Context";
import ComponentB from "./ComponentB";
import ComponentE from "./ComponentE";
import MultipleContext from "./MultipleContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Kajal">
        <ComponentB />
        <ComponentE />

        <ThemeContext.Provider value="Yellow">
          <MultipleContext />
        </ThemeContext.Provider>
      </UserProvider>
    </div>
  );
}

export default App;
