import { useEffect } from "react";
import { useRef } from "react";

export function UseRefDemo() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  useEffect(() => {
    console.log(nameRef, ageRef);
    nameRef.current.style.backgroundColor = "blue";

    ageRef.current.value = 24;
    ageRef.current.style.color = "black";
  });
  return (
    <div className="container">
      <p>UseRefDemo Hook</p>
      <h1>Colors and values are applied using reference</h1>
      <input type="text" name="" id="" ref={nameRef} />
      <input type="number" ref={ageRef} value="100" />
    </div>
  );
}
