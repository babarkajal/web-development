import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Manual":
      return { mode: "Manual", count: state.count + 1 };
    case "auto":
      return { mode: "Auto", count: state.count - 1 };
    default:
      return { ...state };
  }
};
export function UserReducerDemo() {
  const [modeOfMotor, disptach] = useReducer(reducer, {
    count: 0,
    mode: "OFF",
  });

  return (
    <div className="container">
      <div className="container">
        Mode of operation is: {modeOfMotor.mode} and operating number{" "}
        {modeOfMotor.count}
      </div>
      <button
        className="btn btn-success"
        onClick={() => disptach({ type: "auto" })}
      >
        Auto
      </button>
      <button
        className="btn btn-primary"
        onClick={() => disptach({ type: "Manual" })}
      >
        Manual
      </button>
    </div>
  );
}
