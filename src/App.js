import React, { useEffect, useReducer, useState } from "react";
import CompletedTasks from "./Components/CompletedTasks";
import InputArea from "./Components/InputArea";
import TaskList from "./Components/TaskList";

import "./style.css";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "INPUT":
      return state;
    case "ADD":
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
          complete: false,
        },
      ];
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [inputValue, setInputValue] = useState("");

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  const handleAdd = (text) => {
    dispatch({ type: "ADD", title: text });
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="inputArea">
        <span>MinimalList</span>
        <input
          onChange={({ target: { value } }) => setInputValue(value)}
          type="text"
          placeholder="Add a task"
          value={inputValue}
        />

        <button onClick={() => handleAdd(inputValue)}>Add</button>
      </div>

      <div className="taskList">
        {todos &&
          todos.map((todo) => (
            <label key={todo.id}>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          ))}
      </div>
    </div>
  );
};

export default App;
