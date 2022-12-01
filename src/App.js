import React, { useState } from "react";
import "./App.css";
import TodoMain from "./component/TodoMain";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, inputValue]);
  };
  return (
    <div className="title-style">
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button onClick={addTodo}>추가하기</button>

      <TodoMain todoList={todoList} />
    </div>
  );
}

export default App;
