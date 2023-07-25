import React from "react";
import * as S from "./Components.styles";

const InputArea = ({ setInputValue, inputValue, handleAdd }) => {
  return (
    <S.InputContainer>
      <input
        onChange={({ target: { value } }) => setInputValue(value)}
        type="text"
        placeholder="Add a task"
        value={inputValue}
      />

      <button onClick={() => handleAdd(inputValue)}>Add</button>
    </S.InputContainer>
  );
};

export default InputArea;
