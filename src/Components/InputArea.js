import React from "react";

const InputArea = ({ setInputValue, inputValue, handleAdd }) => {
  return (
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
  );
};

export default InputArea;
