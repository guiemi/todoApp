import React from "react";

const InputArea = ({
  handleChange,
  newItem,
  handleClick,
  updateInput,
}) => (
  <div className="inputArea">
    <span className="title">Minimal List</span>
    <input
      type="text"
      placeholder="Add a task"
      value={updateInput}
      onChange={handleChange}
    />
    <button onClick={handleClick}>Add</button>
  </div>
);

export default InputArea;
