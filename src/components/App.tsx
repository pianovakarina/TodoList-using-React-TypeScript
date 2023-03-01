import React, { ChangeEvent, ReactEventHandler } from "react";
import { useState, useEffect, useRef } from "react";
import { ITodo } from "../types/data";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  const addTodo = () => {
    if (value) {
      setTodo([
        ...todo,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };
  const removeTodo = (id: number): void => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  const toogleTodo = (id: number): void => {
    setTodo(
      todo.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <div>
        <input
          value={value}
          onChange={handleValue}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todo} removeTodo={removeTodo} toogleTodo={toogleTodo} />
    </div>
  );
};

export default App;
