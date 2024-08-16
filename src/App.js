import React, { useReducer, useState } from "react";
import InputArea from "./Components/InputArea";
import TaskList from "./Components/TaskList";
import { INITIAL_TODOS, reducer } from "./reducers";

import "./style.css";
import * as S from "./App.styles";

const App = () => {
  const [todos, dispatch] = useReducer(reducer, INITIAL_TODOS);
  const [inputValue, setInputValue] = useState("");

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  const handleAdd = (text) => {
    dispatch({ type: "ADD", title: text });
    setInputValue("");
  };

  return (
    <S.AppContainer>
      <span
        style={{
          marginBottom: "3rem",
        }}
      >
        MinimalList
      </span>

      <InputArea
        setInputValue={setInputValue}
        inputValue={inputValue}
        handleAdd={handleAdd}
      />

      <TaskList todos={todos} handleComplete={handleComplete} />
    </S.AppContainer>
  );
};

export default App;
