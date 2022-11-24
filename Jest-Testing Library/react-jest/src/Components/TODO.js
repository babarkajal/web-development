//FUNCTIONAL COMPONENT FOR todo

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function TODO() {
  const [todoList, setList] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setList(data.data);
    })();
  }, []);
  return todoList ? (
    <ul>
      {todoList.map((val, index) => {
        return (
          <li key={index} data-testid="todo">
            {val.title}
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Loading....</p>
  );
}

export default TODO;
