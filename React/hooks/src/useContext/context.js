import React from "react";

export const ThemeContext = React.createContext("green");

export const Provider = ThemeContext.Provider;
export const Consumer = ThemeContext.Consumer;
