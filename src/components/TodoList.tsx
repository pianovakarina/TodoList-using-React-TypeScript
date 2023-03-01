import React from "react";
import { ITodo } from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toogleTodo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = ({
  items,
  removeTodo,
  toogleTodo,
}) => {
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toogleTodo={toogleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
