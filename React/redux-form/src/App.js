import { useState } from "react";
import Form from "./Components/Form";
import TODO from "./Components/TODO";

function App(props) {
  const [todoList, setTodoList] = useState([]);
  const submitHandler = (e) => {
    console.log(e);
    setTodoList([...todoList, e]);
  };

  return (
    <div className="App">
      <h1>Redux Form</h1>
      <Form onSubmit={submitHandler} />
      <TODO todoList={todoList} />
    </div>
  );
}

export default App;
