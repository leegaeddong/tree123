import React from "react";
import TodoItem from "./TodoItem";

function TodoMain(props) {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}

export default TodoMain;
