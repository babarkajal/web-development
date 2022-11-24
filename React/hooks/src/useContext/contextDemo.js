import { useContext } from "react";
import { ThemeContext } from "./context";

export function UseContextDemo() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ background: context }}>
      This component uses useContext hooks to take the theme value as {context}
    </div>
  );
}
