//* useMemo hook: returns memoized version of value so it will be faster to execute

import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseMemoDemo(props) {
  const [number, setNumber] = useState(0);
  const [buttonColor, setButtonColor] = useState(0);

  //**WITH MEMO : Runs only when the number value changes */
  const double = useMemo(() => calculateExpensiveResults(number), [number]);

  //**WITHOUT MEMO : This function will run every time when the component re-renders */
  //   const double = calculateExpensiveResults(number);

  //IF DEPENDENCY IS NOT GIVEN GET CALLED ONLY AT MOUNTING TIME
  const theme = useMemo(() => {
    return buttonColor === 0 ? { color: "#000" } : { color: "#0fff" };
  }, [buttonColor]);
  
  useEffect(() => {
    console.log("RUNS WHEN THEME CHANG");
  }, [theme]);

  return (
    <div className="container">
      <h1>
        useMemo: returns memoized value
        <p>
          {" "}
          Whenever there is any time taking function or execution, we can use
          this hook
        </p>
      </h1>
      <div className="usememo-content">
        <div className="col">
          <h3>With useMemo</h3>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter any number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className="">Doubled number {double}</div>
          <div
            className="change-color"
            style={{ background: theme.color }}
            onClick={() => setButtonColor(buttonColor === 0 ? 1 : 0)}
          >
            Change color
          </div>
        </div>
        {/* 
        <div className="col">
          <h3>With useMemo</h3>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter any number"
            onChange={(e) => setNumber2(e.target.value)}
          />
          <div className="">Doubled number {double2}</div>
          <div className="change-color" style={{ background: theme }}>
            Change color
          </div>
        </div> */}
      </div>
    </div>
  );
}

const calculateExpensiveResults = (number) => {
  for (let i = 0; i <= 1000000000; i++) {}
  return number * number;
};
export default UseMemoDemo;
