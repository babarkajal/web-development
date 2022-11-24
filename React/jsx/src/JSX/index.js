import ComponentName from "./Component";

/**
 * If we create any component which starts with small letter. React.createComponent consider it as built in one not custom
 ** Always define custom component with Capitalize name
function component() {
  return <div>This is component</div>;
}
 *
 */

//DOT Notation and JSX
const dotNotation = {
  button: function first() {
    return <button>Click me</button>;
  },
};
function ReactJSX() {
  return (
    <div className="App">
      <ComponentName />
      <dotNotation.button />
    </div>
  );
}

export default ReactJSX;
