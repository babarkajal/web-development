import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>
      <span data-testid="counter">{counter}</span>
      <button disabled data-testid="decrement" onClick={decrementCounter}>
        -
      </button>
    </>
  );
};

export default Counter;
