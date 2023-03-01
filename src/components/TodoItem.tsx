import React from "react";
import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toogleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toogleTodo } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toogleTodo(id)}
      />
      <span style={{ margin: "0 10px", display: "inline-block" }}>{title}</span>
      <button
        onClick={() => removeTodo(id)}
        style={{
          background: "transparent",
          border: "none",
          color: "red",
          outline: "none",
        }}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
