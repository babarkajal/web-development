/**
 * *useCallback: returns memoized version of function
 */
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

function UseCallbackDemo(props) {
  const [number, setNumber] = useState(0);
  const [buttonColor, setButtonColor] = useState(0);

  const theme = useMemo(() => {
    return buttonColor === 0
      ? { color: "#000" }
      : { color: "rgb(123 102 255)" };
  }, [buttonColor]);

  //*Using Callback: it recreate function only when the number changes
  const getDoubledArray = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  //*Without callback: recreates function for every time
  //   const getDoubledArray = () => {
  //     console.log("DOUBLE ARRAY ");
  //     return [number, number + 1, number + 2];
  //   };

  useEffect(() => {
    console.log("getDoubledArray reference Changed when number value changed");
  }, [getDoubledArray]);

  return (
    <div className="container">
      <h1>useCallback: returns memoized function</h1>
      <div className="usememo-content">
        <div className="col">
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter any number"
            onChange={(e) => setNumber(Number(e.target.value))}
          />

          <div className="change-color">
            <button
              className="btn btn-primary"
              onClick={() => setButtonColor(buttonColor === 0 ? 1 : 0)}
            >
              Change color
            </button>
            <div className="">Doubled numbers list </div>
            <ul style={{ background: theme.color }}>
              {getDoubledArray().map((val) => (
                <li>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseCallbackDemo;
