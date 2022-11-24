import React from "react";
const UserContext = React.createContext();

//create consumer and provides using context
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export { UserContext };

const ThemeContext = React.createContext("lightblue");
export { ThemeContext };
